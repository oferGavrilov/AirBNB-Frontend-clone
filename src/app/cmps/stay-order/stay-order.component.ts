import { Component, Input } from '@angular/core';
import { Guests, Stay } from 'src/app/models/stay.model';
import { User } from 'src/app/models/user.model';
import { faStar, faCircleMinus, faCirclePlus, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { CalendarOptions } from 'ngx-airbnb-calendar';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'stay-order',
  templateUrl: './stay-order.component.html',
  styleUrls: ['./stay-order.component.scss']
})
export class StayOrderComponent {
  constructor(private orderService: OrderService, private userService: UserService) { }
  @Input() stay !: Stay
  @Input() guests !: Guests[]

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

  checkMinusBtn(guestType: string) {
    if (guestType === 'Adults') return this.guests[0].amount > 1
    if (guestType === 'Children') return this.guests[1].amount > 0
    if (guestType === 'Infants') return this.guests[2].amount > 0
    if (guestType === 'Pets') return this.guests[3].amount > 0
    return false
  }

  checkPlusBtn(guestType: string) {
    if (guestType === 'Adults' || guestType === 'Children') {
      return this.guests[0].amount + this.guests[1].amount < this.stay.capacity
    }
    if (guestType === 'Infants') return this.guests[2].amount < 5
    if (guestType === 'Pets') return this.stay.amenities.includes('Pets allowed') && this.guests[3].amount < 3
    return false
  }

  getGuests() {
    let str = this.guests[0].amount + this.guests[1].amount > 0 ? (this.guests[0].amount + this.guests[1].amount) + ' guests, ' : ''
    str += this.guests[2].amount > 0 ? this.guests[2].amount + ' infants, ' : ''
    str += this.guests[3].amount > 0 ? this.guests[3].amount + ' pets, ' : ''
    return str
  }

  onAddGuests(guestType: string, diff: number) {
    const guest = this.guests.find(guest => guest.type === guestType) as Guests
    guest.amount += diff
  }

  getCheckIn() {
    if (this.date) {
      const dates = this.date?.split('-')
      if (dates.length >= 1) return new Date(dates[0])
    }
    return new Date()
  }

  getCheckOut() {
    if (this.date) {
      const dates = this.date?.split('-')
      if (dates.length === 2) return new Date(dates[1])

    }
    return new Date(Date.now() + (3600 * 1000 * 72))
  }

  onAddOrder() {
    const user = this.userService.getUser()
    if (!user) return
    const order = this.getOrderDetails(user)
    this.orderService.save(order)
  }

  private getOrderDetails(user: User) {
    return {
      _id: '',
      hostId: this.stay.host._id,
      buyer: {
        _id: user._id,
        fullname: user.fullname
      },
      totalPrice: this.TotalPrice,
      startDate: this.getCheckIn(),
      endDate: this.getCheckOut(),
      guests: {
        adults: this.guests[0].amount,
        children: this.guests[1].amount,
        infants: this.guests[2].amount,
        pets: this.guests[3].amount,
      },
      stay: {
        _id: this.stay._id,
        name: this.stay.name,
        price: this.stay.price
      },
      status: 'pending'
    }
  }
}
