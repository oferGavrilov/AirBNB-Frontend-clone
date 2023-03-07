import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  constructor(private userService: UserService) { }
  user !: User

  ngOnInit() {
    this.user = this.userService.getUser()
  }
  // @Input() pageNav: string = 'home'

  pageNav: string = 'user-order'

  onSwitchPageNav() {
    return 'home'
    // switch (this.pageNav) {
    //   case 'home':
    //     return 'home'
    // }
  }

}
