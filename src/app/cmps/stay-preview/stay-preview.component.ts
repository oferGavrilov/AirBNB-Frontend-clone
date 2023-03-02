import { Component, Input } from '@angular/core';
import { Stay } from 'src/app/models/stay.model';

@Component({
  selector: 'stay-preview',
  templateUrl: './stay-preview.component.html',
  styleUrls: ['./stay-preview.component.scss']
})
export class StayPreviewComponent {
  @Input() stay !: Stay
}
