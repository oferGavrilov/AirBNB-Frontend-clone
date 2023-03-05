import { Component, Input } from '@angular/core';
import { Stay } from 'src/app/models/stay.model';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'stay-order',
  templateUrl: './stay-order.component.html',
  styleUrls: ['./stay-order.component.scss']
})
export class StayOrderComponent {
  constructor() { }

  faChevronDown = faChevronDown
  @Input() stays !: Stay[] | null
  faStar = faStar
  stay !: Stay

  date: string | null = null;
  checkIn: Date = new Date()
  checkOut: Date = new Date(Date.now() + (3600 * 1000 * 72))
  totalDays!: any
  children: number = 0

  ngOnInit() {
    if (this.stays) this.stay = this.stays[0]
  }

  get GetTotalDays() {
    return this.checkOut.getDate() - this.checkIn.getDate()
  }

  get Price() {
    return this.stay.price * this.GetTotalDays
  }

  get CleanTax() {
    return (this.Price * 0.10).toFixed()
  }

  get ServiceFee() {
    return (this.Price * 0.17).toFixed()
  }

  get TotalPrice() {
    return (+this.Price + +this.CleanTax + +this.ServiceFee)
  }

  onSetDate() {
    if (this.date) {
      const dates = this.date?.split('-')
      this.checkIn = new Date(dates[0])
      this.checkOut = new Date(dates[1])
    }
  }
}
