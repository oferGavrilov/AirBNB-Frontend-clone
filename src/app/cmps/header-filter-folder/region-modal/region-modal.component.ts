import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StayFilter } from 'src/app/models/stay.model';

@Component({
  selector: 'region-modal',
  templateUrl: './region-modal.component.html',
  styleUrls: ['./region-modal.component.scss']
})
export class RegionModalComponent {
  @Input() stayFilter!: StayFilter
  @Output() setSearchFilter = new EventEmitter()

  setFilter(place: string) {
    this.setSearchFilter.emit(place)
    this.stayFilter.place = place
  }
}
