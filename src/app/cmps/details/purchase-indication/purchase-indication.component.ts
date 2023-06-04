import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { Stay } from 'src/app/models/stay.model';
import { OrderService } from 'src/app/services/order.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'purchase-indication',
  templateUrl: './purchase-indication.component.html',
  styleUrls: ['./purchase-indication.component.scss']
})

export class PurchaseIndicationComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    private router: Router,
    private snackBar: MatSnackBar,
    private utilService: UtilService) { }
  @Input() stay !: Stay
  @Output() setIsReserveClick = new EventEmitter()
  order!: Order
  isAfterConfirm: boolean = false

  async ngOnInit () {
    this.order = await this.orderService.getCurrOrder()
  }

  get GetTotalDays (): number {
    return this.utilService.getDaysBetweenDates(this.order.endDate, this.order.startDate)
  }

  get Price () {
    return this.stay.price * this.GetTotalDays
  }

  get ServiceFee () {
    return (this.Price * 0.17).toFixed()
  }

  get getGuests () {
    let str = this.order?.guests.adults + this.order.guests.children > 0 ? (this.order.guests.adults + this.order.guests.children) + ' guests ' : ''
    str += this.order?.guests.infants > 0 ? ' ,' + this.order.guests.infants + ' infants ' : ''
    str += this.order?.guests.pets > 0 ? ' ,' + this.order.guests.pets + ' pets ' : ''
    return str
  }

  onClickBack () {
    this.setIsReserveClick.emit(false)
  }

  async onClickConfirm () {
    this.isAfterConfirm = true
    try {
      await this.orderService.save(this.order)
      this.orderService.setOrder(this.orderService.getEmptyOrder() as Order)
      this.snackBar.open('Your order sent successfully', 'Close', { duration: 3000 })
    } catch (err) {
      console.log(err)
    }
  }

  onClickClose () {
    this.router.navigate(['/'])
  }
}
