import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isMenuOpen = false;
  isScrolled = false;
  isVisible = true;
  private lastScrollTop = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const currentScroll = window.scrollY;
      
      // Determine if background should be solid
      this.isScrolled = currentScroll > 50;

      // Determine visibility (Smart Header)
      if (currentScroll > this.lastScrollTop && currentScroll > 100) {
        // Scrolling down - hide
        this.isVisible = false;
      } else {
        // Scrolling up - show
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
}
