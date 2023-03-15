import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stay } from 'src/app/models/stay.model';
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
    public loader: LoaderService) { }

  stays$ !: Observable<Stay[]> | null
  isShowScroller: boolean = false;

  async ngOnInit() {
    this.loader.setLoading(true)
    await this.stayService.loadStays()
    this.loader.setLoading(false)
    this.stays$ = this.stayService.stays$;

    window.addEventListener('scroll', () => this.onScroll())
  }

  onPageUp() {
    window.scrollTo(0,0)
  }

  onScroll() {
    if (window.scrollY >= 150) {
      this.isShowScroller = true
    } else {
      this.isShowScroller = false
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', () => this.onScroll())
  }
}
