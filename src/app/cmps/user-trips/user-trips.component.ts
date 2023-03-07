import { Component } from '@angular/core';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order.model';
import { User } from 'src/app/models/user.model';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'user-trips',
  templateUrl: './user-trips.component.html',
  styleUrls: ['./user-trips.component.scss']
})
export class UserTripsComponent {
  constructor(private orderService: OrderService
              ,private userService: UserService) { }

  faHourglass = faHourglass
  faCheck = faCheck

  orders$ !: Observable<Order[]>
  user!: User

  ngOnInit() {
    this.orderService.loadOrders()
    this.orders$ = this.orderService.orders$;
    this.user = this.userService.getUser()
  }

}