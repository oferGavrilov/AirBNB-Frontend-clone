import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor() { }
  amount: number = 1250

  onChangeAmount(event: Event) {
    this.amount = Number((event.target as HTMLInputElement).value)
  }

  getSumOfNights() {
    return (this.amount / 193).toFixed(0)
  }
}
