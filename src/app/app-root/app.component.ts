import { Component } from '@angular/core';
import { StayService } from '../services/stay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private stayService: StayService) { }

  ngOnInit(): void {
    this.stayService.loadStays()
  }
  title = 'airbnb';
}
