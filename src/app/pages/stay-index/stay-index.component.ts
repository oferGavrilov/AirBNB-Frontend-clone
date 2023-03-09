import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stay } from 'src/app/models/stay.model';
import { StayService } from 'src/app/services/stay.service';

@Component({
  selector: 'stay-index',
  templateUrl: './stay-index.component.html',
  styleUrls: ['./stay-index.component.scss']
})
export class StayIndexComponent implements OnInit{
  constructor(
    private stayService: StayService) {}

  stays$ !: Observable<Stay[]>

  ngOnInit() {
    this.stayService.loadStays()
    this.stays$ = this.stayService.stays$;
  }
}
