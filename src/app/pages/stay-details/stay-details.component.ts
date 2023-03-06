import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Guests, StatReviews, Stay } from 'src/app/models/stay.model';
import { faArrowUpFromBracket, faHeart, faStar, faCircle } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'stay-details',
  templateUrl: './stay-details.component.html',
  styleUrls: ['./stay-details.component.scss']
})
export class StayDetailsComponent implements OnInit, OnDestroy {
  @ViewChild('element') element: any;

  constructor(
    private router: Router,
    private renderer2: Renderer2,
    private route: ActivatedRoute) { }

  unlistener !: () => void
  stay!: Stay
  subscription!: Subscription
  shareIcon = faArrowUpFromBracket
  heartIcon = faHeart
  starIcon = faStar
  point = faCircle
  isShowHeader: boolean = false
  isShowHeaderOrder: boolean = false

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(data => {
      this.stay = data['stay']
    })
  }

  guests: Guests[] = [
    {
      type: 'Adults',
      amount: 1
    },
    {
      type: 'Children',
      amount: 0
    },
    {
      type: 'Infants',
      amount: 0
    },
    {
      type: 'Pets',
      amount: 0
    }
  ]

  ngAfterViewInit(): void {
    this.unlistener = this.renderer2.listen('window', 'scroll', () => this.onScroll(this.element))
  }

  onScroll(element: ElementRef) {
    if (window.scrollY >= element.nativeElement.offsetTop) this.isShowHeader = true
    else this.isShowHeader = false
    if (window.scrollY >= 1378) this.isShowHeaderOrder = true
    else this.isShowHeaderOrder = false
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
    this.unlistener()
  }
}
