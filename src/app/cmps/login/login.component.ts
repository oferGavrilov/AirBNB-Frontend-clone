import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UploadImgService } from 'src/app/services/upload-img.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  @ViewChild('container') container: any
  constructor(
    private userService: UserService,
    private router: Router,
    private uploadImgService: UploadImgService,
    private fb: FormBuilder) {
    this.form = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  form !: FormGroup
  user!: User
  subscription!: Subscription
  isSignup: boolean = false
  imgData = {
    imgUrl: '',
    height: 500,
    width: 500
  }

  ngOnInit(): void {
    this.form.patchValue(this.userService.getEmptyUser())
  }

  onSubmit(): void {
    const coords = this.form.value
    const user = { ...coords, imgUrl: this.imgData.imgUrl }
    try {
      if (this.isSignup) {
        this.userService.signup(user)
      }
      else this.userService.login(coords)
      this.router.navigateByUrl('')
    } catch (err) {
      console.error(err)
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
