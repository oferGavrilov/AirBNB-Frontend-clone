import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Stay } from 'src/app/models/stay.model';
import { faStar, faCircleMinus, faCirclePlus, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { CalendarOptions } from 'ngx-airbnb-calendar';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { Guest, Order } from 'src/app/models/order.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'stay-order',
  templateUrl: './stay-order.component.html',
  styleUrls: ['./stay-order.component.scss']
})
export class StayOrderComponent implements OnInit, OnDestroy {
  constructor(private orderService: OrderService, private userService: UserService) { }
  @Input() stay !: Stay

  faCirclePlus = faCirclePlus
  faCircleMinus = faCircleMinus
  faChevronDown = faChevronDown
  faChevronUp = faChevronUp
  faStar = faStar

  date: string | null = null
  totalDays!: any
  children: number = 0
  showGuestModal: boolean = false
  order !: Order
  subscription!: Subscription

  options: CalendarOptions = {
    format: "yyyy/LL/dd",
    formatDays: "eeeeee",
    firstCalendarDay: 1,
    closeOnSelected: true,
  }

  ngOnInit() {
    this.subscription = this.orderService.order$.subscribe(order => this.order = order)
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

  get Guests() {
    const guests = []
    let key: keyof Guest
    for (key in this.order.guests) {
      guests.push({ type: key, amount: this.order.guests[key] })
    }
    return guests
  }

  checkMinusBtn(guestType: keyof Guest) {
    if (guestType === 'adults') return this.order.guests.adults > 1
    return this.order.guests[guestType] > 0
  }

  checkPlusBtn(guestType: string) {
    if (guestType === 'adults' || guestType === 'children') {
      return this.order.guests.adults + this.order.guests.children < this.stay.capacity
    }
    if (guestType === 'infants') return this.order.guests.infants < 5
    if (guestType === 'pets') return this.stay.amenities.includes('Pets allowed') && this.order.guests.pets < 3
    return false
  }

  getGuests() {
    let str = this.order.guests.adults + this.order.guests.children > 0 ? (this.order.guests.adults + this.order.guests.children) + ' guests, ' : ''
    str += this.order.guests.infants > 0 ? this.order.guests.infants + ' infants, ' : ''
    str += this.order.guests.pets > 0 ? this.order.guests.pets + ' pets, ' : ''
    return str
  }

  onAddGuests(guestType: keyof Guest, diff: number) {
    this.order.guests[guestType] += diff
  }

  getCheckIn() {
    if (this.date) {
      const dates = this.date?.split('-')
      if (dates.length >= 1) {
        this.order.startDate = new Date(dates[0])
        return new Date(dates[0])
      }
    }
    return new Date()
  }

  getCheckOut() {
    if (this.date) {
      const dates = this.date?.split('-')
      if (dates.length === 2) {
        this.order.endDate = new Date(dates[1])
        return new Date(dates[1])
      }
    }
    return new Date(Date.now() + (3600 * 1000 * 72))
  }

  onAddOrder() {
    const user = this.userService.getUser()
    if (!user) return
    this.order.hostId = this.stay.host._id
    this.order.buyer = { _id: user._id, fullname: user.fullname }
    this.order.totalPrice = this.TotalPrice
    this.order.stay = { _id: this.stay._id, name: this.stay.name, price: this.stay.price }
    this.orderService.save(this.order)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
