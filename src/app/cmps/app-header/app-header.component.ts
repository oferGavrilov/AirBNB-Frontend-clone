import { Component, Input } from '@angular/core'
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
    private userService: UserService) {}

  @Input() isShowFilter!: boolean
  faGlobe = faGlobe
  faBars = faBars
  isShowHeaderMenuModal: boolean = false
  isHeaderFilterActive: boolean = false
  isOpenLanguageModal: boolean = false
  user!: User | null
  subscription!: Subscription

  ngOnInit() {
    this.subscription = this.userService.user$.subscribe(user => this.user = user)
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
    this.isOpenLanguageModal = !this.isOpenLanguageModal
  }

  getUserImg() {
    if (this.user?.imgUrl) return this.user.imgUrl
    return 'https://res.cloudinary.com/du63kkxhl/image/upload/v1681630492/user-stay/guest_upcxtq.png'
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
