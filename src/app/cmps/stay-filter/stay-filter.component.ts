import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { StayFilter } from 'src/app/models/stay.model';
import { StayService } from 'src/app/services/stay.service';
import filters from '../../../data/filters.json'

@Component({
  selector: 'stay-filter',
  templateUrl: './stay-filter.component.html',
  styleUrls: ['./stay-filter.component.scss']
})

export class StayFilterComponent implements OnInit, OnDestroy {
  @ViewChild('elFilter') elFilter: any

  constructor(
    private stayService: StayService) { }

  filters = filters
  faChevronRight = faChevronRight
  faChevronLeft = faChevronLeft
  isFullyScrolledRight: boolean = false
  isFullyScrolledLeft: boolean = false
  stayFilter !: StayFilter
  subscription!: Subscription

  ngOnInit(): void {
    this.subscription = this.stayService.stayFilter$.subscribe(stayFilter => {
      this.stayFilter = stayFilter
    })
  }

  onScroll(direction: number): void {
    if (this.elFilter.nativeElement) {
      this.elFilter.nativeElement.scrollLeft += 500 * direction
      setTimeout(() => {
        this.calcIsFullyScrolled()
      }, 600)
    }
  }

  calcIsFullyScrolled() {
    const calc = Math.ceil(this.elFilter.nativeElement?.scrollLeft) - Math.ceil(this.elFilter.nativeElement?.scrollWidth - this.elFilter.nativeElement?.clientWidth)
    if (this.elFilter.nativeElement) {
      this.isFullyScrolledRight = Math.abs(calc) <= 1
      this.isFullyScrolledLeft = this.elFilter.nativeElement?.scrollLeft === 0
    }
  }

  onClickLabel(label: string): void {
    this.stayFilter.label = label
    this.stayService.setFilter({ ...this.stayFilter })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
