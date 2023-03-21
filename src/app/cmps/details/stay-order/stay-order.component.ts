import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { StatReviews, Stay } from 'src/app/models/stay.model';
import { faStar, faCircleMinus, faCirclePlus, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { CalendarOptions } from 'ngx-airbnb-calendar';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'stay-order',
  templateUrl: './stay-order.component.html',
  styleUrls: ['./stay-order.component.scss']
})
export class StayOrderComponent implements OnInit {
  constructor() { }

  @Input() stay !: Stay
  @Input() order !: Order
  @Output() addOrder = new EventEmitter()

  faCirclePlus = faCirclePlus
  faCircleMinus = faCircleMinus
  faChevronDown = faChevronDown
  faChevronUp = faChevronUp
  faStar = faStar

  date: string | null = null
  totalDays!: any
  children: number = 0
  showGuestModal: boolean = false

  options: CalendarOptions = {
    format: "yyyy/LL/dd",
    formatDays: "eeeeee",
    firstCalendarDay: 1,
    closeOnSelected: true,
  }

  ngOnInit() {
    if (!this.order.startDate.getTime()) this.order.startDate = new Date()
    if (!this.order.endDate.getTime()) this.order.endDate = new Date(Date.now() + (3600 * 1000 * 72))
    this.date = this.dateFromOrder
  }

  onAddOrder() {
    this.addOrder.emit()
  }

  public toggleGuestModal() {
    this.showGuestModal = !this.showGuestModal
  }

  get GetTotalDays() {
    return this.getCheckOut().getDate() - this.getCheckIn().getDate()
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

  get dateFromOrder() {
    if (!this.order.startDate.getMilliseconds() || !this.order.endDate.getMilliseconds()) return ''
    return this.order.startDate.toDateString() + '-' + this.order.endDate.toDateString()
  }

  get RateAvg() {
    let rate = 0
    let key: keyof StatReviews
    for (key in this.stay.statReviews) {
      rate += this.stay.statReviews[key]
    }

    return (rate / 6).toFixed(2)
  }

  getGuests() {
    let str = this.order.guests.adults + this.order.guests.children > 0 ? (this.order.guests.adults + this.order.guests.children) + ' guests ' : ''
    str += this.order.guests.infants > 0 ? ' ,' + this.order.guests.infants + ' infants ' : ''
    str += this.order.guests.pets > 0 ? ' ,' + this.order.guests.pets + ' pets ' : ''
    return str
  }

  getCheckIn() {
    if (this.date) {
      const dates = this.date?.split('-')
      if (dates.length >= 1) {
        this.order.startDate = new Date(dates[0])
        return new Date(dates[0])
      }
    }
    return this.order.startDate
  }

  getCheckOut() {
    if (this.date) {
      const dates = this.date?.split('-')
      if (dates.length === 2) {
        this.order.endDate = new Date(dates[1])
        return new Date(dates[1])
      }
    }
    return this.order.endDate
  }
}
