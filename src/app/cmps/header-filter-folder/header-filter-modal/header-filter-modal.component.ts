import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { StayFilter } from 'src/app/models/stay.model';

@Component({
  selector: 'header-filter-modal',
  templateUrl: './header-filter-modal.component.html',
  styleUrls: ['./header-filter-modal.component.scss']
})
export class HeaderFilterModalComponent {
  @Input() modalNav!: string
  @Input() order !: Order
  @Output() setModalNav = new EventEmitter()
  @Output() setSearchFilter = new EventEmitter()
  @Input() stayFilter!: StayFilter
  @Input() placeNameFilter!: string
  isPlacesEmpty!: boolean

  setIsPlacesEmpty(value: boolean) {
    this.isPlacesEmpty = value
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setIsPlacesEmpty(false)
  }

  get className() {
    return `header-filter-modal ${this.modalNav === 'guests-modal' ? ' right' : ''}`
  }

  get isNeedToShow() {
    const isPlacesEmpty = !(this.modalNav === 'search-place-modal' && this.isPlacesEmpty)
    return isPlacesEmpty && !(this.modalNav === 'start-date' || this.modalNav === 'end-date')
  }
}
