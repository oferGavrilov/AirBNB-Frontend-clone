import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { StayService } from 'src/app/services/stay.service';
import { UploadImgService } from 'src/app/services/upload-img.service';

@Component({
  selector: 'edit-stay',
  templateUrl: './edit-stay.component.html',
  styleUrls: ['./edit-stay.component.scss']
})
export class EditStayComponent {
  constructor(private stayService: StayService, private uploadImgService: UploadImgService) { }

  @Input() user!: User
  stay = this.stayService.getEmptyStay()
  imgData = new Array(5).fill({ imgUrl: '', height: 500, width: 500 })

  ngOnInit() {
    console.log(this.imgData)
    console.log(this.stay)
  }

  onAddStay() {
    console.log(this.stay)
  }

  async uploadUserImg(ev: Event) {
    const { secure_url } = await this.uploadImgService.uploadImg(ev)
    this.user.imgUrl = secure_url
  }

  async uploadImg(ev: Event, index: number) {
    const { secure_url, height, width } = await this.uploadImgService.uploadImg(ev)
    this.imgData[index] = { imgUrl: secure_url, width, height }
    const imgUrl = this.imgData[index].imgUrl
    this.stay.imgUrls.push(imgUrl)
  }
}
