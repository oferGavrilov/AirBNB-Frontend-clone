import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Order } from 'src/app/models/order.model';
import { Stay } from 'src/app/models/stay.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'purchase-indication',
  templateUrl: './purchase-indication.component.html',
  styleUrls: ['./purchase-indication.component.scss']
})

export class PurchaseIndicationComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    private router: Router) { }
  @Input() stay !: Stay
  order!: Order

 async ngOnInit() {
    this.loadOrder()
  }

  async loadOrder() {
    try {
      this.order = await lastValueFrom(this.orderService.order$)
      console.log('this.order:', this.order)
    } catch (err) {
      console.log('err:', err)
    }
  }
  get getGuests() {
    console.log('this.order:', this.order)
    let str = this.order?.guests.adults + this.order.guests.children > 0 ? (this.order.guests.adults + this.order.guests.children) + ' guests ' : ''
    str += this.order?.guests.infants > 0 ? ' ,' + this.order.guests.infants + ' infants ' : ''
    str += this.order?.guests.pets > 0 ? ' ,' + this.order.guests.pets + ' pets ' : ''
    return str
  }



}
