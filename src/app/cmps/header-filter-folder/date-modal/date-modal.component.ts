import { Component, Input } from '@angular/core';
import { CalendarOptions } from 'ngx-airbnb-calendar';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'date-modal',
  templateUrl: './date-modal.component.html',
  styleUrls: ['./date-modal.component.scss']
})
export class DateModalComponent {
  constructor(private orderService: OrderService) { }
  @Input() order !: Order
  date: string | null = null

  options: CalendarOptions = {
    format: "yyyy/LL/dd",
    formatDays: "eeeeee",
    firstCalendarDay: 1,
    closeOnSelected: true,
  }

  setCheckIn() {
    if (this.date) {
      const dates = this.date?.split('-')
      if (dates.length >= 1) {
        this.order.startDate = new Date(dates[0])
        this.orderService.setOrder(this.order)
      }
    }
  }

  setCheckOut() {
    if (this.date) {
      const dates = this.date?.split('-')
      if (dates.length === 2) {
        this.order.endDate = new Date(dates[1])
        this.orderService.setOrder(this.order)
      }
    }
  }
}
