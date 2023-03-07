import { Component, Input } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

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
