import { Component, Input } from '@angular/core';
import { Guests, Stay } from 'src/app/models/stay.model';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'stay-order',
  templateUrl: './stay-order.component.html',
  styleUrls: ['./stay-order.component.scss']
})
export class StayOrderComponent {
  constructor() { }
  @Input() stay !: Stay 

  faCirclePlus = faCirclePlus
  faCircleMinus = faCircleMinus
  faChevronDown = faChevronDown
  faChevronUp = faChevronUp
  faStar = faStar

  date: string | null = null;
  checkIn: Date = new Date()
  checkOut: Date = new Date(Date.now() + (3600 * 1000 * 72))
  totalDays!: any
  children: number = 0
  showGuestModal: boolean = false
  
  guests: Guests[] = [
    {
      type: 'Adults',
      amount: 1
    },
    {
      type: 'Children',
      amount: 0
    },
    {
      type: 'Infants',
      amount: 0
    },
    {
      type: 'Pets',
      amount: 0
    }
  ]

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

  checkMinusBtn(guestType:string) {
    if(guestType === 'Adults' ) return this.guests[0].amount > 1
    if(guestType === 'Children' ) return this.guests[1].amount > 0
    if(guestType === 'Infants' ) return this.guests[2].amount > 0
    if(guestType === 'Pets' ) return this.guests[3].amount > 0
    return false
  }
  
  checkPlusBtn(guestType:string) {
    if(guestType === 'Adults' || guestType === 'Children') {
      return this.guests[0].amount + this.guests[1].amount < this.stay.capacity
    }
    if(guestType === 'Infants') return this.guests[2].amount < 5
    if(guestType === 'Pets') return this.stay.amenities.includes('Pets allowed') && this.guests[3].amount < 3 
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

  onSetDate() {
    if (this.date) {
      const dates = this.date?.split('-')
      this.checkIn = new Date(dates[0])
      this.checkOut = new Date(dates[1])
    }
  }
}
