import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { StatReviews, Stay } from 'src/app/models/stay.model';
import { faArrowUpFromBracket, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'stay-details',
  templateUrl: './stay-details.component.html',
  styleUrls: ['./stay-details.component.scss']
})
export class StayDetailsComponent implements OnInit, OnDestroy {
  @ViewChild('element') element: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  stay!: Stay
  subscription!: Subscription
  shareIcon = faArrowUpFromBracket
  heartIcon = faHeart
  starIcon = faStar
  isShowHeader: boolean = false
  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      // console.log('scroll',window.scrollY)
      if (window.scrollY >= this.element.nativeElement.offsetTop) this.isShowHeader = true
      else this.isShowHeader = false
    })
    this.subscription = this.route.data.subscribe(data => {
      this.stay = data['stay']
    })
  }

  ngAfterViewInit(): void {
    // console.log('element',this.element.nativeElement.offsetTop)
  }

  getRateAvg() {
    let rate = 0
    let key: keyof StatReviews
    for (key in this.stay.statReviews) {
      rate += this.stay.statReviews[key]
    }

    return (rate / 6).toFixed(2)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}

// 585