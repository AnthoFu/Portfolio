import { 
  Component, 
  OnInit, 
  OnDestroy, 
  Input, 
  Output, 
  EventEmitter, 
  HostListener, 
  Inject, 
  PLATFORM_ID 
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

export interface GDObstacle {
  id: number;
  hitTime: number; // Segundo exacto de la canción en que el obstáculo alcanza al jugador
  type: 'single' | 'double';
  passed: boolean;
  x: number;
}

@Component({
  selector: 'app-easter-egg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './easter-egg.component.html',
  styleUrl: './easter-egg.component.scss'
})
export class EasterEggComponent implements OnInit, OnDestroy {
  @Input() startPosition: { x: number; y: number } = { x: 0, y: 0 };
  @Output() closeGame = new EventEmitter<void>();

  isFalling = true;
  isOnGround = false;
  isJumping = false;
  isReturning = false;
  isCrashed = false;

  foxStyle: { [key: string]: string } = {};
  crashBurstStyle: { [key: string]: string } = {};

  visibleObstacles: GDObstacle[] = [];
  score = 0;
  highScore = 0;
  progressPercent = 0;
  isMuted = false;

  // Especificaciones musicales: Stereo Madness tiene exactamente 130 BPM
  private readonly BEAT_SEC = 60 / 130; // ~0.461538s por compás
  private readonly SONG_DURATION = 198; // Duración completa del audio (3m 18s)

  private allObstacles: GDObstacle[] = [];
  private gameLoopId: any = null;
  private jumpStartTime = 0;
  private bgAudio?: HTMLAudioElement;

  private fallTimer: any = null;
  private jumpTimer: any = null;
  private returnTimer: any = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('gd_fox_high_score');
      if (saved) {
        this.highScore = parseInt(saved, 10) || 0;
      }
      this.initBeatmap();
      this.initFallingState();
    }
  }

  ngOnDestroy() {
    this.stopMinigame();
    if (this.fallTimer) clearTimeout(this.fallTimer);
    if (this.jumpTimer) clearTimeout(this.jumpTimer);
    if (this.returnTimer) clearTimeout(this.returnTimer);
  }

  // Pre-generar el mapa rítmico para los 198 segundos completos de Stereo Madness
  private initBeatmap() {
    this.allObstacles = [];
    const beats: number[] = [8, 12];
    const totalBeats = Math.floor(this.SONG_DURATION / this.BEAT_SEC);

    let b = 16;
    while (b < totalBeats - 4) {
      beats.push(b);
      const barInPhrase = Math.floor(b / 4) % 8;
      // Ritmo sincopado durante las frases musicales más enérgicas
      if (barInPhrase === 3 || barInPhrase === 7) {
        b += 3;
      } else {
        b += 4;
      }
    }

    let id = 1;
    for (let i = 0; i < beats.length; i++) {
      const beatNum = beats[i];
      // El hitTime se calibra para que el jugador salte al compás de la música y supere el pincho
      const hitTime = beatNum * this.BEAT_SEC + 0.16;
      const isDouble = (i >= 6 && (i % 5 === 0 || i % 7 === 0));

      this.allObstacles.push({
        id: id++,
        hitTime,
        type: isDouble ? 'double' : 'single',
        passed: false,
        x: -999
      });
    }
  }

  private initFallingState() {
    const isMobile = window.innerWidth < 768;
    const targetX = isMobile ? 24 : 60;
    const targetY = window.innerHeight - 62;
    const deltaX = this.startPosition.x - targetX;
    const deltaY = this.startPosition.y - targetY;

    this.foxStyle = {
      '--delta-x': `${deltaX}px`,
      '--delta-y': `${deltaY}px`,
      'left': `${targetX}px`,
      'top': `${targetY}px`
    };

    this.isFalling = true;
    this.isOnGround = false;

    this.fallTimer = setTimeout(() => {
      this.isFalling = false;
      this.isOnGround = true;
      this.startMinigame();
    }, 1100);
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (isPlatformBrowser(this.platformId) && (this.isOnGround || this.isFalling)) {
      const isMobile = window.innerWidth < 768;
      const targetX = isMobile ? 24 : 60;
      const targetY = window.innerHeight - 62;
      this.foxStyle = {
        ...this.foxStyle,
        'left': `${targetX}px`,
        'top': `${targetY}px`
      };
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.isOnGround && (event.code === 'Space' || event.code === 'ArrowUp')) {
      event.preventDefault();
      this.triggerJump();
    }
  }

  triggerJump() {
    if (!this.isOnGround || this.isJumping || this.isReturning || this.isCrashed) {
      return;
    }

    this.isJumping = true;
    this.jumpStartTime = performance.now();

    if (this.jumpTimer) {
      clearTimeout(this.jumpTimer);
    }

    // La rotación del salto en Geometry Dash dura 550ms
    this.jumpTimer = setTimeout(() => {
      this.isJumping = false;
    }, 550);
  }

  onGroundFoxClick(event?: MouseEvent) {
    if (event) event.stopPropagation();
    this.triggerJump();
  }

  onJumpZonePointerDown(event: PointerEvent) {
    if (event.pointerType === 'touch') {
      event.preventDefault();
      event.stopPropagation();
      this.triggerJump();
    }
  }

  onJumpZoneClick(event?: MouseEvent) {
    if (event) event.stopPropagation();
    this.triggerJump();
  }

  private startMinigame() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.startMusic();
    if (this.gameLoopId) {
      cancelAnimationFrame(this.gameLoopId);
    }
    this.gameLoopId = requestAnimationFrame(() => this.runGameLoop());
  }

  private stopMinigame() {
    if (this.gameLoopId) {
      cancelAnimationFrame(this.gameLoopId);
      this.gameLoopId = null;
    }
    this.stopMusic();
    this.visibleObstacles = [];
  }

  private startMusic() {
    if (!isPlatformBrowser(this.platformId)) return;
    if (!this.bgAudio) {
      this.bgAudio = new Audio('audio/stereo-madness.mp3');
      this.bgAudio.loop = true;
      this.bgAudio.volume = 0.35;
    }
    if (!this.isMuted) {
      this.bgAudio.currentTime = 0;
      this.bgAudio.play().catch(() => {});
    }
  }

  private stopMusic() {
    if (this.bgAudio) {
      this.bgAudio.pause();
      this.bgAudio.currentTime = 0;
    }
  }

  toggleMute(event?: MouseEvent) {
    if (event) event.stopPropagation();
    this.isMuted = !this.isMuted;
    if (this.bgAudio) {
      if (this.isMuted) {
        this.bgAudio.pause();
      } else {
        this.bgAudio.play().catch(() => {});
      }
    }
  }

  // Bucle de juego sincronizado por ritmo:
  // Las posiciones X de los obstáculos se calculan directamente desde bgAudio.currentTime
  private runGameLoop() {
    if (!this.isOnGround) return;

    if (!this.isCrashed && this.bgAudio) {
      const currentTime = this.bgAudio.currentTime;
      this.progressPercent = Math.min(Math.floor((currentTime / this.SONG_DURATION) * 100), 100);

      const isMobile = window.innerWidth < 768;
      const targetX = isMobile ? 24 : 60;
      const speed = isMobile ? 380 : 480; // píxeles por segundo

      const foxLeft = targetX + 5;
      const foxRight = targetX + 28;
      const foxY = this.getFoxY();
      const screenWidth = window.innerWidth;

      const visible: GDObstacle[] = [];

      for (const obs of this.allObstacles) {
        // Sincronización matemática: obs.x llega a targetX exactamente en hitTime
        obs.x = targetX + (obs.hitTime - currentTime) * speed;
        const obsWidth = obs.type === 'double' ? 54 : 28;

        // Renderizar únicamente si se encuentra dentro del área visible de la pantalla
        if (obs.x >= -80 && obs.x <= screenWidth + 80) {
          visible.push(obs);

          // Detección de colisiones
          const obsLeft = obs.x + 4;
          const obsRight = obs.x + obsWidth - 4;

          if (obsRight > foxLeft && obsLeft < foxRight) {
            if (foxY < 24) {
              this.handleCrash(targetX);
              break;
            }
          }

          // Obstáculo superado / Registro de puntuación
          if (obsRight < foxLeft && !obs.passed) {
            obs.passed = true;
            this.score++;
            if (this.score > this.highScore) {
              this.highScore = this.score;
              if (isPlatformBrowser(this.platformId)) {
                localStorage.setItem('gd_fox_high_score', String(this.highScore));
              }
            }
          }
        }
      }

      this.visibleObstacles = visible;
    }

    this.gameLoopId = requestAnimationFrame(() => this.runGameLoop());
  }

  getFoxY(): number {
    if (!this.isJumping) return 0;
    const elapsed = performance.now() - this.jumpStartTime;
    const progress = Math.min(elapsed / 550, 1);
    // Curva parabólica suave de salto alcanzando pico de 85px
    return Math.sin(progress * Math.PI) * 85;
  }

  private handleCrash(targetX: number) {
    this.isCrashed = true;
    this.isJumping = false;

    const targetY = window.innerHeight - 62;
    this.crashBurstStyle = {
      left: `${targetX + 18}px`,
      top: `${targetY + 18}px`
    };

    if (this.bgAudio) {
      this.bgAudio.pause();
    }

    setTimeout(() => {
      // Reiniciar intento y obstáculos
      for (const obs of this.allObstacles) {
        obs.passed = false;
      }
      this.visibleObstacles = [];
      this.score = 0;
      this.isCrashed = false;

      if (this.bgAudio && !this.isMuted) {
        this.bgAudio.currentTime = 0;
        this.bgAudio.play().catch(() => {});
      }
    }, 950);
  }

  trackObstacleById(index: number, obs: GDObstacle): number {
    return obs.id;
  }

  requestClose(event?: MouseEvent) {
    if (event) event.stopPropagation();
    this.returnToHeader();
  }

  returnToHeader() {
    if (this.isReturning) return;

    this.stopMinigame();

    this.isFalling = false;
    this.isOnGround = false;
    this.isJumping = false;
    this.isReturning = true;

    if (this.returnTimer) {
      clearTimeout(this.returnTimer);
    }

    this.returnTimer = setTimeout(() => {
      this.closeGame.emit();
    }, 600);
  }
}
