import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'header-filter-modal',
  templateUrl: './header-filter-modal.component.html',
  styleUrls: ['./header-filter-modal.component.scss']
})
export class HeaderFilterModalComponent {
  @Input() modalNav!: string
  @Input() order !: Order
  @Output() setModalNav = new EventEmitter()
}
