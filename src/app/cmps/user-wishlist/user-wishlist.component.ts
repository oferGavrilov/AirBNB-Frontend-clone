import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Stay } from 'src/app/models/stay.model';
import { StayService } from 'src/app/services/stay.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'user-wishlist',
  templateUrl: './user-wishlist.component.html',
  styleUrls: ['./user-wishlist.component.scss']
})
export class UserWishlistComponent implements OnInit, OnDestroy {
  constructor(private stayService: StayService, private userService: UserService) { }
  stays !: Stay[]
  subscription!: Subscription

  ngOnInit(): void {
    this.subscription = this.stayService.stays$.subscribe(stays => this.stays = stays)
    this.loadStays()
  }

  loadStays() {
    const user = this.userService.getUser()
    const filter = this.stayService.getEmptyFilter()
    filter.likeByUser = user._id
    this.stayService.setFilter(filter)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
