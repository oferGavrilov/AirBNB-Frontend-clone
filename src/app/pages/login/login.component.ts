import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UploadImgService } from 'src/app/services/upload-img.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{
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
    const user = { ...coords, imgUrl: this.imgData.imgUrl }
    try {
      if (this.isSignup) await this.userService.signup(user)
      else await this.userService.login(coords)
      this.router.navigateByUrl('')
    } catch (err) {
      this.snackBar.open('Username or password wrong', 'Close', { duration: 3000 })
      console.log(err)
    }
  }

  async uploadImg(ev: Event) {
    const { secure_url, height, width } = await this.uploadImgService.uploadImg(ev)
    this.imgData = { imgUrl: secure_url, width, height }
  }

  onSignupPage() {
    this.isSignup = true
    this.container.nativeElement.classList.add("right-panel-active");
  }
  onSigninPage() {
    this.isSignup = false
    this.container.nativeElement.classList.remove("right-panel-active");
  }
}
