import { Component } from '@angular/core'
import { faGlobe, faBars } from '@fortawesome/free-solid-svg-icons'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent {

  constructor(private userService: UserService) {}

  faGlobe = faGlobe
  faBars = faBars
  isShowHeaderMenuModal = false
  isHeaderFilterActive = false

  onToggleHeaderMenuModal() {
    this.isShowHeaderMenuModal = !this.isShowHeaderMenuModal
    console.log(this.isShowHeaderMenuModal)
  }

  toggleHeaderFilter() {
    this.isHeaderFilterActive = !this.isHeaderFilterActive
  }

  getUserImg() {
    const user = this.userService.getUser()
    if (user?.imgUrl) return user.imgUrl
    return 'assets/img/user/guest.png'
  }
}
