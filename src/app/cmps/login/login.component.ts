import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  form !: FormGroup
  user!: User
  subscription!: Subscription

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder) {
    this.form = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
    this.form.patchValue(this.userService.getEmptyUser())
  }

  onSubmit(): void {
    
    // try {
    //   const contact = { ...this.contact, ...this.form.value }
    //   this.contactService.saveContact(contact)
    //   this.onBack()
    // } catch (err) {
    //   console.error(err)
    // }
  }

  onBack(): void {
    this.router.navigateByUrl('/contact')
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
