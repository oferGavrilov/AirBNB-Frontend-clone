import { Component, Input } from '@angular/core';
import { Stay } from 'src/app/models/stay.model';

@Component({
  selector: 'amenities-list',
  templateUrl: './amenities-list.component.html',
  styleUrls: ['./amenities-list.component.scss']
})
export class AmenitiesListComponent {
  @Input() stay!: Stay
}
