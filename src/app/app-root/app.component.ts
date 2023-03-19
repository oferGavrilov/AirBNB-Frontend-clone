import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SocketService } from '../services/socket.service';
import { StayService } from '../services/stay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private stayService: StayService,
    private translate: TranslateService,
    private socketService: SocketService) {
    translate.setDefaultLang('en')
    translate.use('he')

  }

  ngOnInit(): void {
    this.stayService.loadStays()
    this.socketService.listen('test').subscribe((data) => {
      console.log(data)
    })
  }
  title = 'airbnb';
}
