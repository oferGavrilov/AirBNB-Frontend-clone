import { Component, Input, Output, EventEmitter } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Order, FilterOrder } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'order-filter-modal',
  templateUrl: './order-filter-modal.component.html',
  styleUrls: ['./order-filter-modal.component.scss']
})
export class OrderFilterModalComponent {

  constructor(private orderService: OrderService) { }

  @Input() ordersToShow !: Order[]
  @Input() orders !: Order[]
  @Input() filter !: FilterOrder
  @Output() toggleFilterModal = new EventEmitter()
  @Output() setOrdersToShow = new EventEmitter<Order[]>()

  async onSetFilter($ev: any) {
    let option = $ev.target.options[$ev.target.options.selectedIndex].value
    const type = $ev.target.name as keyof FilterOrder
    if (type === 'totalPrice') this.filter.totalPrice = +option
    if (type !== 'totalPrice') this.filter[type] = option
    this.filter.stayName = this.filter.stayName.replace(/&/g, 'amp;')
    this.ordersToShow = await lastValueFrom(this.orderService.query(this.filter))
    this.setOrdersToShow.emit(this.ordersToShow)
  }

  onToggleFilterModal() {
    this.toggleFilterModal.emit()
  }
}
