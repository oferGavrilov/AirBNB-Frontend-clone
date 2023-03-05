import { Component, Input } from '@angular/core';
import { Review } from 'src/app/models/stay.model';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'review-preview',
  templateUrl: './review-preview.component.html',
  styleUrls: ['./review-preview.component.scss']
})
export class ReviewPreviewComponent {
 @Input() review !: Review
 isShowAll = false
 faAngleRight = faAngleRight

 getTxt() {
    let length = 100
    if(!this.review.txt) return
    const lengthTxt = this.review.txt.length
    if(length >= lengthTxt || this.isShowAll) return this.review.txt
    else {
        while(length < lengthTxt && this.review.txt.charAt(length) !== ' ') length++
        return this.review.txt.slice(0, length) + '...'
    }
  }

  toggleIsShowAll() {
    this.isShowAll = !this.isShowAll
  }

  isShowAllBtn() {
    return this.review.txt.length > 100
  }

}
