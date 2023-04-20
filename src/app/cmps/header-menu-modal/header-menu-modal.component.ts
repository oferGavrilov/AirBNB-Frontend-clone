import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'header-menu-modal',
  templateUrl: './header-menu-modal.component.html',
  styleUrls: ['./header-menu-modal.component.scss']
})
export class HeaderMenuModalComponent {

  @Output() onToggleHeaderMenuModal = new EventEmitter()
  @Output() toggleLanguageModal = new EventEmitter()
  @Input() isOpenLanguageModal!: boolean
  @Input() isOpenFooter!: boolean

  constructor(private router: Router,
    private userService: UserService) { }

  onToggleLanguageModal() {
    this.toggleLanguageModal.emit()
    this.toggleMenuModal()
  }

  isLoggedInUser() {
    return this.userService.getUser() !== null
  }

  toggleMenuModal() {
    this.onToggleHeaderMenuModal.emit()
  }

  onLogout() {
    this.userService.logout()
    this.toggleMenuModal()
  }
}
