import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterOrder, Order } from 'src/app/models/order.model';
import { User } from 'src/app/models/user.model';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';

import { faHourglass } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { ngxCsv } from 'ngx-csv';

@Component({
  selector: 'user-trips',
  templateUrl: './user-trips.component.html',
  styleUrls: ['./user-trips.component.scss']
})
export class UserTripsComponent implements OnInit, OnDestroy {
  constructor(private orderService: OrderService
    , private userService: UserService) { }

  Pending = faHourglass
  faCheck = faCheck
  faCircle = faCircle

  subscription!: Subscription
  orders !: Order[]
  user!: User
  orderFilter!: FilterOrder
  isShowFilterModal: boolean = false
  ordersToShow!: Order[]
  isSearchActive: boolean = false

  // TODO:GET USER FROM GUARD
  ngOnInit(): void {
    this.user = this.userService.getUser()
    this.orderFilter = this.orderService.getEmptyFilter()
    this.orderFilter.buyerId = this.user._id
    this.orderService.setFilter(this.orderFilter)
    this.subscription = this.orderService.orders$.subscribe(orders => {
      this.orders = orders
      this.ordersToShow = [...orders]
    })
  }

  setOrdersToShow(orders: Order[]) {
    console.log(this.ordersToShow)
    this.ordersToShow = orders
  }

  getOrderStatusAmount(type: string) {
    return this.orders.filter(order => order.status === type).length
  }

  onDownloadCSV() {
    new ngxCsv(this.getData(), "orders", this.getOptions())
  }

  toggleFilterModal() {
    this.isShowFilterModal = !this.isShowFilterModal
  }

  onPrint() {
    window.print()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  // Private function for CSV files
  private getData() {
    let data = []
    for (const order of this.orders) {
      data.push(
        {
          "Stay name": order.stay.name,
          "Host name": order.hostName,
          "Check in": order.startDate,
          "Check out": order.endDate,
          "Total": '$' + order.totalPrice,
          "Order status": order.status
        }
      )
    }
    return data
  }
  private getOptions() {
    return {
      title: 'User Details',
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: false,
      noDownload: false,
      showTitle: false,
      useBom: false,
      headers: ['Stay name', 'Host name', 'Check in', 'Check out', 'Total', 'Order status']
    };
  }
}
