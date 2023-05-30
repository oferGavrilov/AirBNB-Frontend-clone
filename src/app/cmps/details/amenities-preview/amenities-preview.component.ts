import { Component, Input } from '@angular/core';

@Component({
  selector: 'amenities-preview',
  templateUrl: './amenities-preview.component.html',
  styleUrls: ['./amenities-preview.component.scss']
})
export class AmenitiesPreviewComponent {
  @Input() amenity!: String

  getAmenityImgName() {
    switch (this.amenity) {
      case 'Private outdoor pool - available all year, open 24 hours, lap pool':
        return 'https://res.cloudinary.com/du63kkxhl/image/upload/v1685447776/amenities/pool_i809mh.png'
      case 'Kitchen':
        return 'https://res.cloudinary.com/du63kkxhl/image/upload/v1685447776/amenities/kitchen_dztgii.png'
      case '32" HDTV with Disney+, standard cable':
        return 'https://res.cloudinary.com/du63kkxhl/image/upload/v1685447776/amenities/tv_vgpfep.png'
      case 'Private BBQ grill: charcoal':
        return 'https://res.cloudinary.com/du63kkxhl/image/upload/v1685447775/amenities/grill_bsumui.png'
      case 'Mountain view':
        return 'https://res.cloudinary.com/du63kkxhl/image/upload/v1685447776/amenities/view_yb42sh.png'
      case 'Free parking on premises':
        return 'https://res.cloudinary.com/du63kkxhl/image/upload/v1685447776/amenities/parking_uddcjt.png'
      case 'Cooking basics':
        return 'https://res.cloudinary.com/du63kkxhl/image/upload/v1685447776/amenities/kitchen_dztgii.png'
      case 'AC - split type ductless system':
        return 'https://res.cloudinary.com/du63kkxhl/image/upload/v1685447777/amenities/ac_rpfet6.png'
      case 'Indoor fireplace: wood-burning':
        return 'https://res.cloudinary.com/du63kkxhl/image/upload/v1685447775/amenities/fire-place_s8q4rb.png'
      case 'Garden view':
        return 'https://res.cloudinary.com/du63kkxhl/image/upload/v1685447775/amenities/garden_q28lnw.png'
      case 'Wifi':
        return 'https://res.cloudinary.com/du63kkxhl/image/upload/v1685447776/amenities/wifi_lbvtlj.png'
      case 'Cleaning products':
        return 'https://res.cloudinary.com/du63kkxhl/image/upload/v1685447777/amenities/cleaning-products_c9xrzg.png'
      case 'Shampoo':
        return 'https://res.cloudinary.com/du63kkxhl/image/upload/v1685447776/amenities/shampoo_u0imkt.png'
      case 'Hair dryer':
        return 'https://res.cloudinary.com/du63kkxhl/image/upload/v1685447775/amenities/hair-dryer_f96jh0.png'
      case 'Hot water':
        return 'https://res.cloudinary.com/du63kkxhl/image/upload/v1685447775/amenities/hot-water_g2xktc.png'
      case 'Heating - split type ductless system':
        return 'https://res.cloudinary.com/du63kkxhl/image/upload/v1685447775/amenities/heating_e5hoje.png'
      case 'Pets allowed':
        return 'https://res.cloudinary.com/du63kkxhl/image/upload/v1685447776/amenities/pet_z5fkos.png'
      case 'Backyard':
        return 'https://res.cloudinary.com/du63kkxhl/image/upload/v1685447775/amenities/garden_q28lnw.png'
      default:
        return
    }
  }
}
