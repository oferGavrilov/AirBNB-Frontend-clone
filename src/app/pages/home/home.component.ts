import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
    private router:Router
  ) { }

  isTopZero: boolean = false

  onScroll() {
    this.isTopZero = window.pageYOffset !== 0
  }

  onNavigateToHost() {
    if(!this.userService.getUser())  this.snackBar.open('Please login first', 'Close', { duration: 3000 })
    else this.router.navigate(['/user/edit'])
  }
}




