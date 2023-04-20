import { Component, OnInit, OnDestroy } from '@angular/core';
import { Stay } from 'src/app/models/stay.model';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { StayService } from 'src/app/services/stay.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  user !: User
  stays !: Stay[]
  subscription!: Subscription
  routerSubscription!: Subscription
  pageNav: string = 'user-stays'

  constructor(
    private userService: UserService,
    private stayService: StayService,
  ) { }

  ngOnInit() {
    this.user = this.userService.getUser()
    this.subscription = this.stayService.stays$.subscribe(stays => this.stays = stays)
    const url = window.location.href.split('/')
    this.pageNav = 'user-' + url[url.length - 1]
  }

  ngOnDestroy() {
    const filter = this.stayService.getEmptyFilter()
    this.stayService.setFilter(filter)
    this.subscription.unsubscribe()
  }
}
