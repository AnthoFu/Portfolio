import { Directive, ElementRef, Output, EventEmitter, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appSwipeable]',
  standalone: true
})
export class SwipeableDirective implements OnInit, OnDestroy {
  @Output() swipeLeft = new EventEmitter<void>();
  @Output() swipeRight = new EventEmitter<void>();

  private startX: number = 0;
  private currentX: number = 0;
  private currentOffset: number = 0; // Maintain the current translate position
  private isDragging: boolean = false;
  private readonly threshold: number = 50; // Minimum distance to trigger a swipe
  private isBrowser: boolean;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (!this.isBrowser) return;

    const element = this.el.nativeElement;
    element.addEventListener('touchstart', this.onStart.bind(this));
    element.addEventListener('touchmove', this.onMove.bind(this));
    element.addEventListener('touchend', this.onEnd.bind(this));

    element.addEventListener('mousedown', this.onStart.bind(this));
    window.addEventListener('mousemove', this.onMove.bind(this));
    window.addEventListener('mouseup', this.onEnd.bind(this));
  }

  ngOnDestroy() {
    if (!this.isBrowser) return;

    const element = this.el.nativeElement;
    element.removeEventListener('touchstart', this.onStart.bind(this));
    element.removeEventListener('touchmove', this.onMove.bind(this));
    element.removeEventListener('touchend', this.onEnd.bind(this));
    
    element.removeEventListener('mousedown', this.onStart.bind(this));
    window.removeEventListener('mousemove', this.onMove.bind(this));
    window.removeEventListener('mouseup', this.onEnd.bind(this));
  }

  private onStart(event: any) {
    this.startX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
    this.isDragging = true;
    this.el.nativeElement.style.transition = 'none';
  }

  private onMove(event: any) {
    if (!this.isDragging) return;
    
    this.currentX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
    const deltaX = this.currentX - this.startX;

    // Apply translation relative to the current offset
    this.el.nativeElement.style.transform = `translateX(${this.currentOffset + deltaX}px)`;
  }

  private onEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;
    
    const deltaX = this.currentX - this.startX;
    const container = this.el.nativeElement;
    const step = container.offsetWidth; // Each slide is exactly 100% of the container width

    this.el.nativeElement.style.transition = 'transform 0.3s ease-out';

    if (Math.abs(deltaX) > this.threshold) {
      if (deltaX > 0) {
        // Swipe Right (Previous)
        this.currentOffset = Math.min(0, this.currentOffset + step);
        this.swipeRight.emit();
      } else {
        // Swipe Left (Next)
        const maxOffset = -(container.scrollWidth - container.offsetWidth);
        this.currentOffset = Math.max(maxOffset, this.currentOffset - step);
        this.swipeLeft.emit();
      }
    }

    // Snap to the new offset
    this.el.nativeElement.style.transform = `translateX(${this.currentOffset}px)`;
  }
}
