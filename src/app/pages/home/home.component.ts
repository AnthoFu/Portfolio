import { Component } from '@angular/core';
import { SwipeableDirective } from '../../directives/swipeable.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SwipeableDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
