import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';
import { Subscription } from 'rxjs';
import { CalendarOptions } from 'ngx-airbnb-calendar';
import { StayFilter } from 'src/app/models/stay.model';
import { StayService } from 'src/app/services/stay.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'header-filter',
  templateUrl: './header-filter.component.html',
  styleUrls: ['./header-filter.component.scss']
})
export class HeaderFilterComponent implements OnInit, OnDestroy {
  constructor(
    private orderService: OrderService,
    private stayService: StayService,
    private utilService: UtilService) {
     }
  @Input() isHeaderFilterActive!: boolean
  @Output() toggleHeaderFilter = new EventEmitter<void>()
  faMagnifyingGlass = faMagnifyingGlass
  modalNav = ''
  searchFilter = ''
  order !: Order
  subscriptionOrder!: Subscription
  subscriptionStayFilter!: Subscription
  date: string | null = null
  isBlur: boolean = false
  stayFilter!: StayFilter

  options: CalendarOptions = {
    format: "yyyy/LL/dd",
    formatDays: "eeeeee",
    firstCalendarDay: 1,
    closeOnSelected: false,
  }

  ngOnInit() {
    this.subscriptionOrder = this.orderService.order$.subscribe(order => this.order = order)
    this.subscriptionStayFilter =  this.stayService.stayFilter$.subscribe(stayFilter => this.stayFilter = stayFilter)
    this.date = this.dateFromOrder
  }

  get Anywhere() {
    return this.stayFilter.place ? this.stayFilter.place : 'Anywhere'
  }

  get AnyWeek() {
    if(!this.order.startDate || !this.order.endDate || !this.date) return 'Any week'
    if(this.order.startDate.getMonth() === this.order.endDate.getMonth()){
      const monthName = this.utilService.getMonthName(this.order.endDate.getMilliseconds())
      return `${monthName} ${this.order.startDate.getDate()} - ${this.order.endDate.getDate()}`
    }
    const month1 = this.utilService.getMonthName(this.order.endDate.getMilliseconds())
    const month2 = this.utilService.getMonthName(this.order.endDate.getMilliseconds())
    return `${month1} ${this.order.startDate.getDate()} - ${month2} ${this.order.endDate.getDate()}  `
  }

  get addGuest() {
    const guests = this.order.guests
    if(guests.adults === 1 && guests.children === 0 && guests.infants === 0 && guests.pets === 0) return 'Add guests'
    return this.getGuests()
  }

  onToggleHeaderFilter() {
    this.toggleHeaderFilter.emit()
  }

  setModalNav(val: string) {
    this.modalNav = val
    this.isBlur = true
  }

  onSetWhereSearch(val: string) {
    this.searchFilter = val
    if(val) this.setModalNav('search-place-modal')
    else this.setModalNav('region-modal')
  }

  onClickDate(val: string) {
    this.modalNav = val
    this.isBlur = true
  }

  onClickGuests(val: string) {
    this.setModalNav(val)
  }

  onBlur() {
    if(!this.isBlur) this.onToggleHeaderFilter()
  }

  onClickSearch() {
    this.orderService.setOrder(this.order)
    this.stayService.setFilter(this.stayFilter)
    this.onToggleHeaderFilter()
  }

  get dateFromOrder() {
    if(!this.order.startDate.getMilliseconds() || !this.order.endDate.getMilliseconds()) return ''
    return this.order.startDate.toDateString() + '-' + this.order.endDate.toDateString()
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
    return
  }

  getCheckOut() {
    if (this.date) {
      const dates = this.date?.split('-')
      if (dates.length === 2) {
        this.order.endDate = new Date(dates[1])
        return new Date(dates[1])
      }
    }
    return
  }

  ngOnDestroy() {
    this.subscriptionOrder.unsubscribe()
    this.subscriptionStayFilter.unsubscribe()
  }

  setSearchFilter(place: string) {
    this.searchFilter = place
  }
}
