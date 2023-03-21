import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UploadImgService } from 'src/app/services/upload-img.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { SocialUser } from '@abacritt/angularx-social-login/public-api';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  @ViewChild('container') container: any
  constructor(
    private userService: UserService,
    private router: Router,
    private uploadImgService: UploadImgService,
    private snackBar: MatSnackBar,
    private authService: SocialAuthService,
    private httpClient: HttpClient,
    private fb: FormBuilder) {
    this.formSignup = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
    this.formLogin = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }
  faUser = faUser
  facebook = faFacebookF
  twitter = faTwitter
  google = faGoogle
  // user2!: SocialUser
  // loggedIn!: boolean
  formSignup !: FormGroup
  formLogin !: FormGroup
  user!: User
  subscription!: Subscription
  isSignup: boolean = false
  // accessToken = ''
  imgData = {
    imgUrl: '',
    height: 500,
    width: 500
  }

  ngOnInit(): void {
    this.formSignup.patchValue(this.userService.getEmptyUser())
    this.formLogin.patchValue(this.userService.getEmptyUser())
    // this.authService.authState.subscribe((user) => {
    //   this.user2 = user
    //   console.log('this.user2:', this.user2)
    //   this.loggedIn = (user != null);
    // });
  }

  // refreshToken(): void {
  //   this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  //   console.log(':', this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID))
  // }

  // getAccessToken(): void {
  //   this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => this.accessToken = accessToken);
  //   console.log('this.accessToken:', this.accessToken)
  // }

  //   getGoogleCalendarData(): void {
  //     if (!this.accessToken) return;

  //     this.httpClient
  //       .get('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
  //         headers: { Authorization: `Bearer ${this.accessToken}` },
  //       })
  //       .subscribe((events) => {
  //         alert('Look at your console');
  //         console.log('events', events);
  //       });
  //   }

  //  async signInWithFB() {
  //   const user = await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
  //   console.log('user:', user)
  //   }

  //   signOut(): void {
  //     this.authService.signOut();
  //   }

  async onSubmit(type: string) {
    const coords = type === 'signup' ? this.formSignup.value : this.formLogin.value
    const user = { ...coords, imgUrl: this.imgData.imgUrl, hostMsg: 0, userMsg: 0 }
    try {
      if (this.isSignup) await this.userService.signup(user)
      else await this.userService.login(coords)
      this.router.navigateByUrl('')
    } catch (err) {
      this.snackBar.open('Username or password wrong', 'Close', { duration: 3000 })
      console.log(err)
    }
  }
  
  async onSignDemo() {
    const demoCoords = this.userService.getEmptyUser() as User
    demoCoords.username = 'demo'
    demoCoords.password = 'demo'
    await this.userService.login(demoCoords)
    this.router.navigateByUrl('')
  }

  async uploadImg(ev: Event) {
    const { secure_url, height, width } = await this.uploadImgService.uploadImg(ev)
    this.imgData = { imgUrl: secure_url, width, height }
  }

  onToggleSign() {
    this.isSignup = !this.isSignup
  }


}
