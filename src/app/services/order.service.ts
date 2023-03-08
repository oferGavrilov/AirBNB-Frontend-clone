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

  private _order$ = new BehaviorSubject<Order>(this.getEmptyOrder() as Order)
  public order$ = this._order$.asObservable()

  private _orderFilter$ = new BehaviorSubject<FilterOrder>(this.getEmptyFilter());
  public orderFilter$ = this._orderFilter$.asObservable()

  public getEmptyOrder() {
    return {
      hostId: '',
      buyer: {
        _id: '',
        fullname: ''
      },
      totalPrice: 0,
      startDate: new Date(),
      endDate: new Date(),
      guests: {
        adults: 1,
        children: 0,
        infants: 0,
        pets: 0,
      },
      stay: {
        _id: '',
        name: '',
        price: 0
      },
      status: 'pending'
    }
  }

  public loadOrders() {
    const filterBy = this._orderFilter$.value
    let orders = this.utilService.loadFromStorage(this.ORDER_STORAGE_KEY) || []
    if (filterBy) {
      orders = this._filter(orders, filterBy)
    }
    this._orders$.next(orders)
  }

  public query(filter: FilterOrder) {
    let orders = this.utilService.loadFromStorage(this.ORDER_STORAGE_KEY) || []
    if (filter) {
      orders = this._filter(orders, filter)
    }
    return orders
  }

  public save(order: Order) {
    let orders = this.utilService.loadFromStorage(this.ORDER_STORAGE_KEY) || []
    if (order._id) orders = orders.map((currOrder: Order) => currOrder._id === order._id ? order : currOrder)
    else {
      console.log('new')
      order._id = this.utilService.makeId()
      orders.push(order)
    }
    this.utilService.saveToStorage(this.ORDER_STORAGE_KEY, orders)
    this.loadOrders()
    return order
  }

  public getEmptyFilter() {
    return {
      stayName: '',
      hostName: '',
      checkIn: new Date(),
      checkOut: new Date(),
      totalPrice: 0,
      status: '',
      hostId: '',
      buyerId: '',
    }
  }

  public setFilter(filter: FilterOrder) {
    this._orderFilter$.next(filter)
    this.loadOrders()
  }

  public setOrder(order: Order) {
    this._order$.next(order)
  }

  private _filter(orders: Order[], filterBy: FilterOrder) {
    console.log(filterBy)
    if (filterBy.hostId) orders = orders.filter(order => order.hostId === filterBy.hostId)
    if (filterBy.buyerId) orders = orders.filter(order => order.buyer._id === filterBy.buyerId)
    if (filterBy.status) orders = orders.filter(order => order.status === filterBy.status)
    if (filterBy.stayName) orders = orders.filter(order => order.stay.name === filterBy.stayName)
    if (filterBy.hostName) orders = orders.filter(order => order.hostName === filterBy.hostName)
    if (filterBy.totalPrice) orders = orders.filter(order => order.totalPrice === filterBy.totalPrice)
    return orders
  }
}

