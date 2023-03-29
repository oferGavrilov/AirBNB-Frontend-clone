import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UploadImgService } from 'src/app/services/upload-img.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

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
  formSignup !: FormGroup
  formLogin !: FormGroup
  user!: User
  subscription!: Subscription
  isSignup: boolean = false
  imgData = {
    imgUrl: '',
    height: 500,
    width: 500
  }

  ngOnInit(): void {
    this.formSignup.patchValue(this.userService.getEmptyUser())
    this.formLogin.patchValue(this.userService.getEmptyUser())
  }

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
