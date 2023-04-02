import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { StayService } from 'src/app/services/stay.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private stayService: StayService,
    private activatedRoute: ActivatedRoute
  ) { }

  isTopZero: boolean = false

  onScroll() {
    this.isTopZero = window.pageYOffset !== 0
  }

  onClickPlace(place: string) {
    const stayFilter = this.stayService.getEmptyFilter()
    stayFilter.place = place
    this.stayService.setFilter(stayFilter)
    this.router.navigate(
      ['/'],
      {
        relativeTo: this.activatedRoute,
        queryParams: stayFilter,
        queryParamsHandling: 'merge'
      }
    )
  }

  onNavigateToHost() {
    if (!this.userService.getUser()) this.snackBar.open('Please login first', 'Close', { duration: 3000 })
    else this.router.navigate(['/user/edit'])
  }
}
