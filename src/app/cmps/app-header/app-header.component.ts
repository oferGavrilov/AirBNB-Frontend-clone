import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { faGlobe, faBars } from '@fortawesome/free-solid-svg-icons'
import { Subscription } from 'rxjs'
import { User } from 'src/app/models/user.model'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent {
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  faGlobe = faGlobe
  faBars = faBars
  isShowHeaderMenuModal: boolean = false
  isHeaderFilterActive: boolean = false
  isOpenLanguageModal: boolean = false
  user!: User | null
  subscription!: Subscription
  isShowFilter: boolean = false

  ngOnInit() {
    this.subscription = this.userService.user$.subscribe(user => this.user = user)
    this.isShowFilter = this.activatedRoute?.component?.name === 'StayIndexComponent'
  }

  get UserNotification() {
    if (!this.user) return 0
    return this.user.hostMsg + this.user.userMsg
  }

  onToggleHeaderMenuModal() {
    this.isShowHeaderMenuModal = !this.isShowHeaderMenuModal
  }

  toggleHeaderFilter() {
    this.isHeaderFilterActive = !this.isHeaderFilterActive
  }

  onToggleLanguageModal() {
    console.log("Toggle language")
    this.isOpenLanguageModal = !this.isOpenLanguageModal
  }

  getUserImg() {
    if (this.user?.imgUrl) return this.user.imgUrl
    return 'assets/img/user/guest.png'
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
