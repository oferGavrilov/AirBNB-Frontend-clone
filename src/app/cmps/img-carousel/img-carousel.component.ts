import { Component, Input, OnInit } from '@angular/core';
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
    private router: Router ) {}

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
    console.log('this.router.url:', this.router.url)
    console.log('this.router.url.includes("user"):', this.router.url.includes("user"))
    return this.router.url.includes('user')
  }

  isLikeActive() {
    const user = this.userService.getUser()
    if(!user) this.isLikeByUser = false
    else this.isLikeByUser = this.stay.likedByUsers.includes(user._id)
  }

  onClickLike(ev: Event) {
    ev.stopPropagation()
    try {
      const user = this.userService.getUser()
      if(!user) return
      if(this.isLikeByUser) this.stay.likedByUsers = this.stay.likedByUsers.filter(userId => userId !== user._id)
      else this.stay.likedByUsers.push(user._id)
      this.stayService.save(this.stay)
      this.isLikeByUser = !this.isLikeByUser
      if(this.isUserPage()) this.stayService.loadStays()
    } catch (err) {
      console.log('err:', err)
    }
  }
}
