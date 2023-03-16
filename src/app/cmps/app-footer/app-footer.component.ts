import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { faBars } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent {
  constructor(
    private userService: UserService) { }

  faBars = faBars
  isShowHeaderMenuModal = false

  onToggleHeaderMenuModal() {
    this.isShowHeaderMenuModal = !this.isShowHeaderMenuModal
  }
  getUserImg() {
    const user = this.userService.getUser()
    if (user?.imgUrl) return user.imgUrl
    return 'assets/img/user/guest.png'
  }
}
