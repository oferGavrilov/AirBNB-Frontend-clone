import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'header-filter-modal',
  templateUrl: './header-filter-modal.component.html',
  styleUrls: ['./header-filter-modal.component.scss']
})
export class HeaderFilterModalComponent {
  @Input() modalNav!: string
  @Output() setModalNav = new EventEmitter()
}
