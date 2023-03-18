import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { faAngleRight, faAngleLeft, faHeart, faCircle } from '@fortawesome/free-solid-svg-icons'
import { Stay } from 'src/app/models/stay.model';
import { StayService } from 'src/app/services/stay.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'img-carousel',
  templateUrl: './img-carousel.component.html',
  styleUrls: ['./img-carousel.component.scss']
})
export class ImgCarouselComponent implements OnInit {
  constructor(
    private stayService: StayService,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  @Input() stay !: Stay
  isLikeByUser: boolean = false
  faAngleRight = faAngleRight
  faAngleLeft = faAngleLeft
  faHeart = faHeart
  faCircle = faCircle
  currIdx = 0

  ngOnInit() {
    this.isLikeActive()
  }

  onClickArrow(ev: Event, diff: number) {
    ev.stopPropagation()
    this.currIdx += diff
  }

  checkRightArrow() {
    return this.currIdx < (this.stay.imgUrls.length - 1)
  }

  setCurrIdx(ev: Event, idx: number) {
    ev.stopPropagation()
    this.currIdx = idx
  }

  getClassPagination(idx: number) {
    return this.currIdx === idx ? 'active' : ''
  }

  isUserPage() {
    return this.router.url.includes('user')
  }

  isLikeActive() {
    const user = this.userService.getUser()
    if (!user) this.isLikeByUser = false
    else this.isLikeByUser = this.stay.likedByUsers.includes(user._id)
  }

 async onClickLike(ev: Event) {
    ev.stopPropagation()
    try {
      const user = this.userService.getUser()
      if (!user) this.snackBar.open('Please login first', 'Close', { duration: 3000 })
      else {
        if (this.isLikeByUser) this.stay.likedByUsers = this.stay.likedByUsers.filter(userId => userId !== user._id)
        else this.stay.likedByUsers.push(user._id)
        this.stay = await this.stayService.save(this.stay) as Stay
        this.isLikeByUser = !this.isLikeByUser
        const msg = this.isLikeByUser ? 'Stay added to wishlist' : 'Stay removed from wishlist'
        if (this.isUserPage()) this.stayService.loadStays()
        this.snackBar.open(msg, 'Close', { duration: 3000 })
      }
    } catch (err) {
      console.log('err:', err)
    }
  }
}
