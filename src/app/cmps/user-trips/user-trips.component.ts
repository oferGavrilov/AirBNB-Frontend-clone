import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ngxCsv } from 'ngx-csv';
import { FilterOrder, Order } from 'src/app/models/order.model';
import { User } from 'src/app/models/user.model';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { faCheck, faCircle } from '@fortawesome/free-solid-svg-icons';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'user-trips',
  templateUrl: './user-trips.component.html',
  styleUrls: ['./user-trips.component.scss']
})
export class UserTripsComponent implements OnInit, OnDestroy {
  constructor(
    private orderService: OrderService,
    private userService: UserService,
    public loader: LoaderService
  ) { }

  faCheck = faCheck
  faCircle = faCircle
  start: boolean = false
  stringInterpolation: string = "Angular 4 Typing Animation Directive (string interpolation)"

  subscription!: Subscription
  orders !: Order[]
  user!: User
  orderFilter!: FilterOrder
  isShowFilterModal: boolean = false
  ordersToShow!: Order[]
  isSearchActive: boolean = false

  ngOnInit(): void {
    this.loader.setLoading(true)
    setTimeout(() => this.start = true, 1000)
    this.user = this.userService.getUser()
    this.deleteUserMsg()
    this.orderFilter = this.orderService.getEmptyFilter()
    this.orderFilter.buyerId = this.user._id
    this.orderService.setFilter(this.orderFilter)
    this.subscription = this.orderService.orders$.subscribe(orders => {
      this.orders = orders
      this.ordersToShow = [...orders]
    })
    this.loader.setLoading(false)
  }

  async deleteUserMsg() {
    this.user.userMsg = 0
    this.user = await this.userService.update(this.user) as User
  }

  onSetFilter() {
    this.orderService.setFilter(this.orderFilter)
  }

  onClearSearch() {
    this.onSetFilter()
    this.isSearchActive = false
  }

  setOrdersToShow(orders: Order[]) {
    this.ordersToShow = orders
  }

  getOrderStatusAmount(type: string) {
    return this.orders.filter(order => order.status === type).length
  }

  toggleFilterModal() {
    this.isShowFilterModal = !this.isShowFilterModal
  }

  onDownloadCSV() {
    new ngxCsv(this.getData(), "orders", this.getOptions())
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
          "Host name": order.host.fullname,
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
