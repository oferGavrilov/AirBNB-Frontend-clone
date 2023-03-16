import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { faGlobe, faBars } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent {

  @Input() isTopZero!: boolean
  constructor(private userService: UserService) { }
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
