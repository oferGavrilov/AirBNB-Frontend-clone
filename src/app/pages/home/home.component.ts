import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Stay } from 'src/app/models/stay.model';
import { StayService } from 'src/app/services/stay.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private stayService: StayService) { }
  amount: number = 1250

  stays$ !: Observable<Stay[]>

  ngOnInit() {
    this.stayService.loadStays()
    this.stays$ = this.stayService.stays$;
  }

  onChangeAmount(event: Event) {
    this.amount = Number((event.target as HTMLInputElement).value)
  }

  getSumOfNights() {
    return (this.amount / 193).toFixed(0)
  }
}



