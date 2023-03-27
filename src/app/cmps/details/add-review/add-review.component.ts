import { Component, Input } from '@angular/core';
import { Review, StatReviews, Stay } from 'src/app/models/stay.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { StayService } from 'src/app/services/stay.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent {
  @Input() stay!: Stay
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private stayService: StayService,
    private snackBar: MatSnackBar){
    this.form = this.fb.group({
      cleanliness: [5, Validators.required],
      communication: [5, Validators.required],
      checkIn: [5, Validators.required],
      accuracy: [5, Validators.required],
      location: [5, Validators.required],
      value: [5, Validators.required],
      text: ['', Validators.required]
    })
  }

  makeReview(text: string, user: any): Review {
    const newReview = this.stayService.getEmptyReview()
    delete user.username
    newReview.txt = text
    newReview.by = user
    return newReview as Review
  }

  makeStarRate(statReviews: StatReviews): StatReviews{
    let key: keyof StatReviews
    const length = this.stay.reviews.length
    for(key in statReviews) {
      const rate = (this.stay.statReviews[key] * length + statReviews[key]) / (length + 1)
      statReviews[key] = +rate.toFixed(2)
    }
    return statReviews
  }

  async onAddReview() {
    const user = this.userService.getUser()
    const review = this.form.value
    if (!user) this.snackBar.open('Please login first', 'Close', { duration: 3000 })
    else if(!review.text) this.snackBar.open('Please add review text', 'Close', { duration: 3000 })
    else {
      this.stay.reviews.unshift(this.makeReview(review.text, user))
      delete review.text
      this.stay.statReviews = this.makeStarRate(review)
      this.stay = await this.stayService.save(this.stay) as Stay
      this.snackBar.open('Review added successfully', 'Close', { duration: 3000 })
    }
  }
}
