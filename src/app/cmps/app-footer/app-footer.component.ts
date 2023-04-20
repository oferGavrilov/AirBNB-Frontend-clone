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
  isOpenLanguageModal: boolean = false

  onToggleLanguageModal() {
    this.isOpenLanguageModal = !this.isOpenLanguageModal
  }

  onToggleHeaderMenuModal() {
    this.isShowHeaderMenuModal = !this.isShowHeaderMenuModal
  }
  getUserImg() {
    const user = this.userService.getUser()
    if (user?.imgUrl) return user.imgUrl
    return 'https://res.cloudinary.com/du63kkxhl/image/upload/v1681630492/user-stay/guest_upcxtq.png'
  }


}
