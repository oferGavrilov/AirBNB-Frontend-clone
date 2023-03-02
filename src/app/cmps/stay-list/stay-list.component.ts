import { Component, Input } from '@angular/core';
import { Stay } from 'src/app/models/stay.model';
import { StayService } from 'src/app/services/stay.service';

@Component({
  selector: 'stay-list',
  templateUrl: './stay-list.component.html',
  styleUrls: ['./stay-list.component.scss']
})
export class StayListComponent {
  constructor(private stayService: StayService) { }
  @Input() stays!: Stay[] | null;
}
