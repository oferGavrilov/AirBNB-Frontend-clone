import { Component, Input , Output , EventEmitter} from '@angular/core';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'order-filter-modal',
  templateUrl: './order-filter-modal.component.html',
  styleUrls: ['./order-filter-modal.component.scss']
})
export class OrderFilterModalComponent {

  @Input() orders !: Order[]
  @Output() toggleFilterModal = new EventEmitter()

  ngOnInit() {
    console.log(this.orders)
  }

  onToggleFilterModal() {
    this.toggleFilterModal.emit()
  }
}
