import { Component, Input } from '@angular/core';
import { Stay } from 'src/app/models/stay.model';

@Component({
  selector: 'special-perks',
  templateUrl: './special-perks.component.html',
  styleUrls: ['./special-perks.component.scss']
})
export class SpecialPerksComponent {
  @Input() stay!: Stay
}
