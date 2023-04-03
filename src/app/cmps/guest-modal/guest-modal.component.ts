import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Guest, Order } from 'src/app/models/order.model';
import { Stay } from 'src/app/models/stay.model';
import { faStar, faCircleMinus, faCirclePlus, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'guest-modal',
  templateUrl: './guest-modal.component.html',
  styleUrls: ['./guest-modal.component.scss']
})
export class GuestModalComponent {

  @Input() order !: Order
  @Input() stay !: Stay
  @Output() toggleGuestModal = new EventEmitter();

  faCirclePlus = faCirclePlus
  faCircleMinus = faCircleMinus
  faChevronDown = faChevronDown
  faChevronUp = faChevronUp
  faStar = faStar

  get Guests() {
    const guests = []
    let key: keyof Guest
    for (key in this.order.guests) {
      guests.push({ type: key, amount: this.order.guests[key] })
    }
    return guests
  }

  GuestTypeSubTitle(guestType: keyof Guest) {
    if(guestType === 'adults') return 'Ages 13 or above'
    if(guestType === 'children') return 'Ages 2–12'
    if(guestType === 'infants') return 'Under 2'
    return 'Bringing a service animal?'
  }

  onToggleGuestModal() {
    this.toggleGuestModal.emit()
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
}
