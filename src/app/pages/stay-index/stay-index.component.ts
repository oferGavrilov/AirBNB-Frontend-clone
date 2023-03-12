import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stay } from 'src/app/models/stay.model';
import { StayService } from 'src/app/services/stay.service';

@Component({
  selector: 'stay-index',
  templateUrl: './stay-index.component.html',
  styleUrls: ['./stay-index.component.scss']
})
export class StayIndexComponent implements OnInit, OnDestroy {
  constructor(
    private stayService: StayService) { }

  stays$ !: Observable<Stay[]>
  isShowScroller: boolean = false;

  ngOnInit() {
    this.stayService.loadStays()
    this.stays$ = this.stayService.stays$;

    window.addEventListener('scroll',  () => this.onScroll())
  }
  
  onScroll() {
    if (window.scrollY >= 150) {
      this.isShowScroller = true
    } else {
      this.isShowScroller = false
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll' ,() => this.onScroll())
  }
}
