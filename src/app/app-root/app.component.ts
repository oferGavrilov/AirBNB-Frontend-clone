import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StayService } from '../services/stay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private stayService: StayService,
    private translate: TranslateService) {
    translate.setDefaultLang('en')
    translate.use('en')
  }

  title = 'airbnb';
}
