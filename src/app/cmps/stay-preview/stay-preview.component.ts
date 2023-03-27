import { Component, Input } from '@angular/core';
import { StatReviews, Stay } from 'src/app/models/stay.model';
import { faStar } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'stay-preview',
  templateUrl: './stay-preview.component.html',
  styleUrls: ['./stay-preview.component.scss']
})
export class StayPreviewComponent {
  @Input() stay !: Stay
  faStar = faStar

  getRateAvg() {
    let rate = 0
    let key: keyof StatReviews
    for(key in this.stay.statReviews) {
      rate += this.stay.statReviews[key]
    }
    return (rate / 6).toFixed(2)
  }
}
