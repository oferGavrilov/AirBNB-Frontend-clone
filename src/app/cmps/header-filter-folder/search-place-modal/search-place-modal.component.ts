import { Component, Input, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Stay, StayFilter } from 'src/app/models/stay.model';
import { StayService } from 'src/app/services/stay.service';

@Component({
  selector: 'search-place-modal',
  templateUrl: './search-place-modal.component.html',
  styleUrls: ['./search-place-modal.component.scss']
})
export class SearchPlaceModalComponent implements OnInit {
  constructor(private stayService: StayService) {}
  @Input() stayFilter!: StayFilter
  @Input() placeNameFilter!: string
  @Output() setIsPlacesEmpty = new EventEmitter<boolean>()
  @Output() setSearchFilter = new EventEmitter()
  stays!: Stay[]
  places: string[] = []

  async ngOnInit() {
    this.stays =  await lastValueFrom(this.stayService.query(this.stayService.getEmptyFilter()))
    this.makePlaces()
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.stays) this.makePlaces()
  }

  makePlaces() {
    this.places = this.stays.reduce((acc: string[], stay) => {
      if(!acc.includes(stay.loc.address)) acc.push(stay.loc.address)
      return acc
    }, [])

    const regex = new RegExp(this.placeNameFilter, 'i')
    this.places = this.places.filter(place => regex.test(place))
    if(this.places.length) this.onSetIsPlacesEmpty(false)
    else this.onSetIsPlacesEmpty(true)
  }

  setFilter(place: string) {
    this.setSearchFilter.emit(place)
    this.stayFilter.place = place
  }

  // Expression has changed after it was checked
  onSetIsPlacesEmpty(value: boolean) {
    setTimeout(() => {
      this.setIsPlacesEmpty.emit(value)
    }, 0)
  }
}
