import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Stay, StayFilter } from 'src/app/models/stay.model';
import { LoaderService } from 'src/app/services/loader.service';
import { StayService } from 'src/app/services/stay.service';

@Component({
  selector: 'stay-index',
  templateUrl: './stay-index.component.html',
  styleUrls: ['./stay-index.component.scss']
})
export class StayIndexComponent implements OnInit, OnDestroy {
  constructor(
    private stayService: StayService,
    public loader: LoaderService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  stays$ !: Observable<Stay[]> | null
  isShowScroller: boolean = false
  subscription!: Subscription
  isShowClearBtn: boolean = false

  async ngOnInit() {
    this.loader.setLoading(true)
    await this.setFilterFromParams()
    this.loader.setLoading(false)
    this.stays$ = this.stayService.stays$

    window.addEventListener('scroll', () => this.onScroll())
    this.subscription = this.stayService.stayFilter$.subscribe(stayFilter => {
      this.isShowClearBtn = this.checkIfClearFilter(stayFilter)
    })
  }

  async setFilterFromParams() {
    const stayFilter = {
      ...this.stayService.getEmptyFilter(),
      ...this.activatedRoute.snapshot.queryParams as StayFilter
    }
    await this.stayService.setFilterAsync(stayFilter)
  }

  onPageUp() {
    window.scrollTo(0, 0)
  }

  onScroll() {
    if (window.scrollY >= 150) {
      this.isShowScroller = true
    } else {
      this.isShowScroller = false
    }
  }

  onClearFilter() {
    const filter = this.stayService.getEmptyFilter()
    this.stayService.setFilter(filter)
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: filter,
        queryParamsHandling: 'merge'
      }
    )
  }

  checkIfClearFilter(stayFilter: StayFilter): boolean {
    if (stayFilter.place || stayFilter.label || stayFilter.isPetAllowed === 'true') return true
    return false
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', () => this.onScroll())
  }
}
