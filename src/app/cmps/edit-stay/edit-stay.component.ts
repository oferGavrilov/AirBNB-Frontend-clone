import { Component, Input } from '@angular/core';
import { Stay } from 'src/app/models/stay.model';
import { User } from 'src/app/models/user.model';
import { StayService } from 'src/app/services/stay.service';
import { UploadImgService } from 'src/app/services/upload-img.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'edit-stay',
  templateUrl: './edit-stay.component.html',
  styleUrls: ['./edit-stay.component.scss']
})
export class EditStayComponent {
  constructor(private stayService: StayService,
    private uploadImgService: UploadImgService,
    private userService: UserService) { }

  @Input() user!: User
  stay = this.stayService.getEmptyStay()
  imgData = new Array(5).fill({ imgUrl: '', height: 500, width: 500 })
  selectSettings = {}
  amenities = this.Amenities
  labels = this.Labels

  ngOnInit() {
    this.selectSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All'
    }
  }

  onAddStay() {
    const user = this.userService.getUser()
    const country = this.stay.loc.country
    const city = this.stay.loc.city
    const address = this.stay.loc.address

    this.stay.host = { ...this.stay.host, _id: user._id, pictureUrl: user.imgUrl }
    this.stay.loc.address = `${address}, ${city}, ${country}`
    this.stayService.save(this.stay)
  }

  async uploadImg(ev: Event, index: number) {
    const { secure_url, height, width } = await this.uploadImgService.uploadImg(ev)
    this.imgData[index] = { imgUrl: secure_url, width, height }
    const imgUrl = this.imgData[index].imgUrl
    this.stay.imgUrls.push(imgUrl)
  }

  get Labels() {
    return [
      'OMG!',
      'Amazing views', ,
      'Trending',
      'Golfing',
      'Surfing',
      'Mansions',
      'Luxe',
      'Private rooms', ,
      'Lakefront', ,
      'Castles',
      'Tiny homes', ,
      'Islands',
      'Boats',
      'Creative spaces', ,
      'Beach',
      'Design',
    ]
  }

  get Amenities() {
    return [
      '32" HDTV with Disney+, standard cable',
      "Wifi",
      "AC - split type ductless system",
      "Private outdoor pool - available all year, open 24 hours, lap pool",
      "Kitchen",
      "Free parking on premises",
      "Hot water",
      "Heating - split type ductless system",
      "Indoor fireplace: wood-burning",
      "Shampoo",
      "Hair dryer",
      "Hot water",
      "Backyard",
      "Pets allowed"
    ]
  }
}
