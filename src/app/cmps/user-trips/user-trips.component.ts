import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/models/order.model';
import { User } from 'src/app/models/user.model';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';

import { faHourglass } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'user-trips',
  templateUrl: './user-trips.component.html',
  styleUrls: ['./user-trips.component.scss']
})
export class UserTripsComponent implements OnInit, OnDestroy {
  constructor(private orderService: OrderService
    , private userService: UserService) { }

  faHourglass = faHourglass
  faCheck = faCheck
  faCircle = faCircle

  subscription!: Subscription
  orders !: Order[]
  user!: User


  ngOnInit(): void {
    const filter = this.orderService.getEmptyFilter()
    this.orderService.setFilter(filter)
    this.subscription = this.orderService.orders$.subscribe(orders => {
      this.orders = orders
    })
    this.user = this.userService.getUser()
  }

  getOrderStatusAmount(type: string) {
    return this.orders.filter(order => order.status === type).length
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}