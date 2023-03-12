import { Component, Input } from '@angular/core';
import { Stay } from 'src/app/models/stay.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'user-stays',
  templateUrl: './user-stays.component.html',
  styleUrls: ['./user-stays.component.scss']
})
export class UserStaysComponent {
  @Input() stays!: Stay[]
  @Input() user!: User
  userStays!: Stay[]

  constructor() { }
  
  ngOnInit(): void {
    this.userStays = this.stays.filter(stay => stay.host._id === this.user._id)
  }
}
