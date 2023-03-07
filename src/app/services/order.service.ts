import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterOrder, Order } from '../models/order.model';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private utilService: UtilService) { }
  ORDER_STORAGE_KEY = 'orders'

  private _orders$ = new BehaviorSubject<Order[]>([])
  public orders$ = this._orders$.asObservable()

  private _contactFilter$ = new BehaviorSubject<FilterOrder>(this.getEmptyFilter());
  public contactFilter$ = this._contactFilter$.asObservable()

  public loadOrders() {
    const filterBy = this._contactFilter$.value
    let orders = this.utilService.loadFromStorage(this.ORDER_STORAGE_KEY) || []
    if (filterBy) {
      orders = this._filter(orders, filterBy)
    }
    this._orders$.next(orders)
  }

  public save(order: Order) {
    let orders = this.utilService.loadFromStorage(this.ORDER_STORAGE_KEY) || []
    if (order._id) orders = orders.map((currOrder: Order) => currOrder._id === order._id ? order : currOrder)
    else {
      order._id = this.utilService.makeId()
      orders.push(order)
    }
    this.utilService.saveToStorage(this.ORDER_STORAGE_KEY, orders)
    this.loadOrders()
    return order
  }

  public getEmptyFilter() {
    return {
      hostId: '',
      buyerId: '',
      status: '',
    }
  }

  private _filter(orders: Order[], filterBy: FilterOrder) {
    if(filterBy.hostId) orders = orders.filter(order => order.hostId === filterBy.hostId)
    if(filterBy.buyerId) orders = orders.filter(order => order.buyer._id === filterBy.buyerId)
    if(filterBy.status) orders = orders.filter(order => order.status === filterBy.status)
    return orders
  }
}

