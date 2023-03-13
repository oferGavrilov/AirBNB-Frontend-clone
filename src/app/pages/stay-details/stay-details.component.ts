import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { StatReviews, Stay } from 'src/app/models/stay.model';
import { faArrowUpFromBracket, faHeart, faStar, faCircle } from '@fortawesome/free-solid-svg-icons'
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { StayService } from 'src/app/services/stay.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'stay-details',
  templateUrl: './stay-details.component.html',
  styleUrls: ['./stay-details.component.scss']
})
export class StayDetailsComponent implements OnInit, OnDestroy {
  @ViewChild('element') element: any;

  constructor(
    private renderer2: Renderer2,
    private route: ActivatedRoute,
    private userService: UserService,
    private stayService: StayService,
    private snackBar: MatSnackBar) { }

  unlistener !: () => void
  user!: User
  stay!: Stay
  subscription!: Subscription
  shareIcon = faArrowUpFromBracket
  heartIcon = faHeart
  starIcon = faStar
  point = faCircle
  isShowHeader: boolean = false
  isShowHeaderOrder: boolean = false
  isReserveClick: boolean = false
  isLikeByUser: boolean = false

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(data => {
      this.stay = data['stay']
    })
    this.user = this.userService.getUser()
    this.isLikeActive()
  }

  setIsReserveClick(val: boolean) {
    this.isReserveClick = val
  }

  ngAfterViewInit(): void {
    this.unlistener = this.renderer2.listen('window', 'scroll', () => this.onScroll(this.element))
  }

  onScroll(element: ElementRef) {
    if (window.scrollY >= element.nativeElement.offsetTop) this.isShowHeader = true
    else this.isShowHeader = false
    if (window.scrollY >= 1378) this.isShowHeaderOrder = true
    else this.isShowHeaderOrder = false
  }

  getRateAvg() {
    let rate = 0
    let key: keyof StatReviews
    for (key in this.stay.statReviews) {
      rate += this.stay.statReviews[key]
    }

    return (rate / 6).toFixed(2)
  }

  isLikeActive() {
    if (!this.user) this.isLikeByUser = false
    else this.isLikeByUser = this.stay.likedByUsers.includes(this.user._id)
  }

  onClickLike(ev: Event) {
    ev.stopPropagation()
    try {
      if (!this.user) this.snackBar.open('Please login first', 'Close', { duration: 3000 })
      else {
        if (this.isLikeByUser) this.stay.likedByUsers = this.stay.likedByUsers.filter(userId => userId !== this.user._id)
        else this.stay.likedByUsers.push(this.user._id)
        this.stayService.save(this.stay)
        this.isLikeByUser = !this.isLikeByUser
        const msg = this.isLikeByUser ? 'Stay added to wishlist' : 'Stay removed from wishlist'
        this.snackBar.open(msg, 'Close', { duration: 3000 })
      }
    } catch (err) {
      console.log('err:', err)
    }
  }

  onClickShare() {
    navigator.clipboard.writeText(window.location.href)
    this.snackBar.open('copy to clipboard', 'Close', { duration: 3000 })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    this.unlistener()
  }
}
