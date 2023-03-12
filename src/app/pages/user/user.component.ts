import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Stay } from 'src/app/models/stay.model';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { StayService } from 'src/app/services/stay.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  constructor(
    private userService: UserService,
    private stayService: StayService,
    private route: ActivatedRoute,
  ) { }

  user !: User
  stays !: Stay[]
  subscription!: Subscription
  pageNav: string = 'user-stays'

  ngOnInit() {
    this.user = this.userService.getUser()
    this.subscription = this.stayService.stays$.subscribe(stays => this.stays = stays)
    const urlArr = window.location.href.split('/')
    console.log(urlArr[urlArr.length - 1])
  }
  // @Input() pageNav: string = 'home'


  onClickWishList() {
    const filter = this.stayService.getEmptyFilter()
    filter.likeByUser = this.user._id
    this.stayService.setFilter(filter)
    this.pageNav = 'wishlist'
  }

  ngOnDestroy() {
    const filter = this.stayService.getEmptyFilter()
    this.stayService.setFilter(filter)
    this.subscription.unsubscribe()
  }

}
