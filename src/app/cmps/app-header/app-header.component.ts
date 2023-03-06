import { Component } from '@angular/core'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {

  constructor(private userService: UserService) { }

  faMagnifyingGlass = faMagnifyingGlass
  faGlobe = faGlobe
  faBars = faBars
  isShowHeaderMenuModal = false

  onToggleHeaderMenuModal() {
    this.isShowHeaderMenuModal = !this.isShowHeaderMenuModal
    console.log(this.isShowHeaderMenuModal)
  }

  getUserImg() {
    const user = this.userService.getUser()
    if (user?.imgUrl) return user.imgUrl
    return 'assets/img/guest.png'
  }
}
