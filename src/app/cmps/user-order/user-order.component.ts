import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { faCircle } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.scss']
})
export class UserOrderComponent {

  @Input() user!: User
  faCircle = faCircle
}
