import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { StatReviews, Stay } from 'src/app/models/stay.model';
import { User } from 'src/app/models/user.model';
import { StayService } from 'src/app/services/stay.service';
import { UserService } from 'src/app/services/user.service';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'user-stays',
  templateUrl: './user-stays.component.html',
  styleUrls: ['./user-stays.component.scss']
})
export class UserStaysComponent {

  user!: User
  userStays!: Stay[]
  faStar = faStar

  constructor(private userService: UserService,
    private stayService: StayService,
    public loader: LoaderService) { }

  async ngOnInit() {
    const user = this.userService.getUser();
    const stayFilter = this.stayService.getEmptyFilter()
    stayFilter.hostId = user._id
    this.loader.setLoading(true)
    this.userStays = await lastValueFrom(this.stayService.query(stayFilter))
    this.userStays = this.userStays.filter(stay => stay.host._id === user._id)
    this.loader.setLoading(false)
  }

  getRateAvg(stay: Stay): number {
    let rate = 0
    let key: keyof StatReviews
    for (key in stay.statReviews) {
      rate += stay.statReviews[key]
    }
    return +(rate / 6).toFixed(2)
  }
}
