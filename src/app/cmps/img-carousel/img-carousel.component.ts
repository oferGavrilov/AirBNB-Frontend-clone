import { Component, Input } from '@angular/core';
import { faAngleRight, faAngleLeft, faHeart } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'img-carousel',
  templateUrl: './img-carousel.component.html',
  styleUrls: ['./img-carousel.component.scss']
})
export class ImgCarouselComponent {
  @Input() imgs !: String[]
  faAngleRight = faAngleRight
  faAngleLeft = faAngleLeft
  faHeart = faHeart
  currIdx = 0

  onClickArrow(ev: Event, diff: number) {
    ev.stopPropagation()
    this.currIdx += diff
  }

  checkRightArrow() {
    return this.currIdx < (this.imgs.length - 1)
  }
}
