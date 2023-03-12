import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { StatReviews, Stay } from 'src/app/models/stay.model';
import { User } from 'src/app/models/user.model';
import { OrderService } from 'src/app/services/order.service';
import { StayService } from 'src/app/services/stay.service';
import { UserService } from 'src/app/services/user.service';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';

@Component({
  selector: 'user-stays',
  templateUrl: './user-stays.component.html',
  styleUrls: ['./user-stays.component.scss']
})
export class UserStaysComponent {
  
  user!: User
  userStays!: Stay[]
  subscription!: Subscription
  faStar = faStar

  constructor(private userService: UserService,
    private stayService: StayService,) { }

  ngOnInit(): void {
    const user = this.userService.getUser();
    const stayFilter = this.stayService.getEmptyFilter()
    stayFilter.hostId = user._id
    this.stayService.setFilter(stayFilter)
    this.subscription = this.stayService.stays$.subscribe(stays => {
      this.userStays = stays
    })
    this.userStays = this.userStays.filter(stay => stay.host._id === user._id)
  }

  getRateAvg(stay: Stay): number {
    let rate = 0
    let key: keyof StatReviews
    for (key in stay.statReviews) {
      rate += stay.statReviews[key]
    }
    return +(rate / 6).toFixed(2)
  }
}
