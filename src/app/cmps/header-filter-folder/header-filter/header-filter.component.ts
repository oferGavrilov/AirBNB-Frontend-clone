import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';
import { Subscription } from 'rxjs';
import { CalendarOptions } from 'ngx-airbnb-calendar';

@Component({
  selector: 'header-filter',
  templateUrl: './header-filter.component.html',
  styleUrls: ['./header-filter.component.scss']
})
export class HeaderFilterComponent implements OnInit, OnDestroy {
  constructor(private orderService: OrderService) { }
  @Input() isHeaderFilterActive!: boolean
  @Output() toggleHeaderFilter = new EventEmitter<void>()
  faMagnifyingGlass = faMagnifyingGlass
  modalNav = ''
  searchFilter = ''
  order !: Order
  subscription!: Subscription
  date: string | null = null
  isDateOpen: boolean = false

  options: CalendarOptions = {
    format: "yyyy/LL/dd",
    formatDays: "eeeeee",
    firstCalendarDay: 1,
    closeOnSelected: false,
  }


  ngOnInit() {
    this.subscription = this.orderService.order$.subscribe(order => this.order = order)
  }

  onToggleHeaderFilter() {
    this.toggleHeaderFilter.emit()
  }

  setModalNav(val: string) {
    this.modalNav = val
    this.isDateOpen = false
  }

  onWhereClick() {
    if(this.searchFilter)  this.setModalNav('search-place-modal')
    else this.setModalNav('region-modal')
  }

  onClickDate() {
    this.setModalNav('')
    this.isDateOpen = true
  }

  onClickGuests(val: string) {
    this.setModalNav(val)
  }

  onBlur() {
    if(!this.isDateOpen) this.onToggleHeaderFilter()
  }

  onSetFilter() {
    this.orderService.setOrder(this.order)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
