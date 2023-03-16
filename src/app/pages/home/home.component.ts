import { Component } from '@angular/core';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  isTopZero: boolean = false

  onScroll() {
    this.isTopZero = window.pageYOffset !== 0  
  }
}




