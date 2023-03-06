import { Component } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'stay-filter',
  templateUrl: './stay-filter.component.html',
  styleUrls: ['./stay-filter.component.scss']
})
export class StayFilterComponent {
  faChevronRight = faChevronRight
  faChevronLeft = faChevronLeft

  index = 0
  itemsToShow = 3
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      "(max-width:460px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.itemsToShow = 3
      }
    })
    this.breakpointObserver.observe([
      "(min-width:600px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.itemsToShow = 5
      }
    })
    this.breakpointObserver.observe([
      "(min-width:800px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.itemsToShow = 8
      }
    })
    this.breakpointObserver.observe([
      "(min-width:1050px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.itemsToShow = 9
      }
    })
    this.breakpointObserver.observe([
      "(min-width:1400px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.itemsToShow = 14
      }
    })
  }

  onClickArrow(diff: number) {
    this.index += diff * 3
  }

  checkRightArrow() {
    return this.filters.length - 1 >= this.index + 3 && this.itemsToShow + this.index + 3 <= this.filters.length
  }

  checkLeftArrow() {
    return this.index - 3 >= 0
  }

  getFilters() {
    return this.filters.slice(this.index, this.index + this.itemsToShow)
  }

  getRightPos() {
    if(this.itemsToShow > 8) return '116px'
    return 0
  }

  filters = [
    { txt: 'OMG!', img: 'assets/img/filter-imgs/omg.jpg' },
    { txt: 'Amazing views', img: 'assets/img/filter-imgs/amazing-views.jpg' },
    { txt: 'Trending', img: 'assets/img/filter-imgs/trending.jpg' },
    { txt: 'Golfing', img: 'assets/img/filter-imgs/golfing.jpg' },
    { txt: 'Surfing', img: 'assets/img/filter-imgs/surfing.jpg' },
    { txt: 'Mansions', img: 'assets/img/filter-imgs/mansions.jpg' },
    { txt: 'Luxe', img: 'assets/img/filter-imgs/luxe.jpg' },
    { txt: 'Private rooms', img: 'assets/img/filter-imgs/private-rooms.jpg' },
    { txt: 'Lakefront', img: 'assets/img/filter-imgs/lake-front.jpg' },
    { txt: 'Castles', img: 'assets/img/filter-imgs/castles.jpg' },
    { txt: 'Tiny homes', img: 'assets/img/filter-imgs/tiny-homes.jpg' },
    { txt: 'Islands', img: 'assets/img/filter-imgs/islands.jpg' },
    { txt: 'Boats', img: 'assets/img/filter-imgs/boats.jpg' },
    { txt: 'Creative spaces', img: 'assets/img/filter-imgs/creative-spaces.jpg' },
    { txt: 'Beach', img: 'assets/img/filter-imgs/beach.jpg' },
    { txt: 'Design', img: 'assets/img/filter-imgs/design.jpg' },
  ]
}
