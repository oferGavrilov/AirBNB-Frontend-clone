import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';
import { Subscription } from 'rxjs';
import { CalendarOptions } from 'ngx-airbnb-calendar';
import { StayFilter } from 'src/app/models/stay.model';
import { StayService } from 'src/app/services/stay.service';

@Component({
  selector: 'header-filter',
  templateUrl: './header-filter.component.html',
  styleUrls: ['./header-filter.component.scss']
})
export class HeaderFilterComponent implements OnInit, OnDestroy {
  constructor(
    private orderService: OrderService,
    private stayService: StayService) { }
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
  }

  onToggleHeaderFilter() {
    this.toggleHeaderFilter.emit()
  }

  setModalNav(val: string) {
    this.modalNav = val
    this.isBlur = false
  }

  onSetWhereSearch(val: string) {
    console.log('val:', val)
    this.searchFilter = val
    this.setModalNav('search-place-modal')
  }

  onClickDate() {
    this.setModalNav('')
    this.isBlur = true
  }

  onClickGuests(val: string) {
    this.setModalNav(val)
  }

  onBlur() {
    if(!this.isBlur) this.onToggleHeaderFilter()
  }

  onSetFilter() {
    this.orderService.setOrder(this.order)
  }

  ngOnDestroy() {
    this.subscriptionOrder.unsubscribe()
    this.subscriptionStayFilter.unsubscribe()
  }
}
