import { Component, Input } from '@angular/core';
import { Stay } from 'src/app/models/stay.model';

@Component({
  selector: 'stay-list',
  templateUrl: './stay-list.component.html',
  styleUrls: ['./stay-list.component.scss']
})
export class StayListComponent {
  constructor() { }
  @Input() stays!: Stay[] | null;

}
