import { Component, HostListener, Inject, PLATFORM_ID, inject, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { EasterEggComponent } from './components/easter-egg/easter-egg.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive, 
    CommonModule, 
    FooterComponent, 
    EasterEggComponent,
    TranslatePipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private router = inject(Router);
  
  @ViewChild('logoImg') logoImgRef?: ElementRef<HTMLImageElement>;
  @ViewChild('easterEggGame') easterEggGame?: EasterEggComponent;

  isMenuOpen = false;
  isScrolled = false;
  isVisible = true;
  isLanguageSelectionPage = false;
  private lastScrollTop = 0;

  // Estado de activación del Easter Egg
  logoClicks = 0;
  shakeLevel = 0;
  isFoxFallen = false;
  foxStartPos: { x: number; y: number } = { x: 0, y: 0 };
  private clickTimer: any = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects || event.url;
      this.isLanguageSelectionPage = url === '/' || url === '/language';
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const currentScroll = window.scrollY;
      this.isScrolled = currentScroll > 50;

      // Mantener visible el encabezado mientras el easter egg esté activo
      if (this.isFoxFallen) {
        this.isVisible = true;
      } else if (currentScroll > this.lastScrollTop && currentScroll > 100) {
        this.isVisible = false;
      } else {
        this.isVisible = true;
      }
      
      this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  // --- Manejadores de activación del Easter Egg ---

  onLogoClick() {
    if (this.isFoxFallen) return;

    if (this.clickTimer) {
      clearTimeout(this.clickTimer);
    }

    this.logoClicks++;

    if (this.logoClicks < 5) {
      this.shakeLevel = this.logoClicks;
      this.clickTimer = setTimeout(() => {
        this.logoClicks = 0;
        this.shakeLevel = 0;
      }, 850);
      return;
    }

    // 5to clic -> Activar el minijuego Easter Egg
    this.shakeLevel = 0;
    this.logoClicks = 0;

    let startX = 60;
    let startY = 20;
    if (isPlatformBrowser(this.platformId) && this.logoImgRef?.nativeElement) {
      const rect = this.logoImgRef.nativeElement.getBoundingClientRect();
      startX = rect.left;
      startY = rect.top;
    }

    this.foxStartPos = { x: startX, y: startY };
    this.isFoxFallen = true;
  }

  restoreFoxFromHeader(event?: MouseEvent) {
    if (event) event.stopPropagation();
    if (this.easterEggGame) {
      this.easterEggGame.returnToHeader();
    } else {
      this.onFoxGameClosed();
    }
  }

  onFoxGameClosed() {
    this.isFoxFallen = false;
    this.logoClicks = 0;
    this.shakeLevel = 0;
  }
}
