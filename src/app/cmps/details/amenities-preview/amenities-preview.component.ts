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
        return 'pool'
      case 'Kitchen':
        return 'kitchen'
      case '32" HDTV with Disney+, standard cable':
        return 'tv'
      case 'Private BBQ grill: charcoal':
        return 'grill'
      case 'Mountain view':
        return 'view'
      case 'Free parking on premises':
        return 'parking'
      case 'Cooking basics':
        return 'kitchen'
      case 'AC - split type ductless system':
        return 'ac'
      case 'Indoor fireplace: wood-burning':
        return 'fire-place'
      case 'Garden view':
        return 'garden'
      case 'Wifi':
        return 'wifi'
      case 'Cleaning products':
        return 'cleaning-products'
      case 'Shampoo':
        return 'shampoo'
      case 'Hair dryer':
        return 'hair-dryer'
      case 'Hot water':
        return 'hot-water'
      case 'Heating - split type ductless system':
        return 'heating'
      case 'Pets allowed':
        return 'pet'
      case 'Backyard':
        return 'garden'
      default:
        return
    }
  }
}
