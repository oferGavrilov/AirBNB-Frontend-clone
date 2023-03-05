import { Component, Input } from '@angular/core';
import { Stay } from 'src/app/models/stay.model';

@Component({
  selector: 'host-info',
  templateUrl: './host-info.component.html',
  styleUrls: ['./host-info.component.scss']
})
export class HostInfoComponent {
  @Input() stay!: Stay
}
