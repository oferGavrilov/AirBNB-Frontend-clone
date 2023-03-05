import { Component, Input } from '@angular/core';
import { StatReviews, Stay } from 'src/app/models/stay.model';
import { faStar, faCircle } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent {
  @Input() stay!: Stay
  faStar = faStar
  point = faCircle

  getRateAvg() {
    let rate = 0
    let key: keyof StatReviews
    for(key in this.stay.statReviews) {
      rate += this.stay.statReviews[key]
    }

    return (rate / 6).toFixed(2)
  }

  getRateArr() {
    const rateArr = []
    let key: keyof StatReviews
    for(key in this.stay.statReviews) {
      const rateObj = {rateName: key, rate: this.stay.statReviews[key]}
      rateArr.push(rateObj)
    }

    return rateArr
  }

  getRatePercent(rate: number) {
    return (rate / 5) * 100 + '%'
  }

  getReviews() {
    return this.stay.reviews.slice(0, 6)
  }
}
