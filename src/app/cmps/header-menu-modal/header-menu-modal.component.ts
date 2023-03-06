import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-menu-modal',
  templateUrl: './header-menu-modal.component.html',
  styleUrls: ['./header-menu-modal.component.scss']
})
export class HeaderMenuModalComponent {
  constructor(private router: Router) { }

}
