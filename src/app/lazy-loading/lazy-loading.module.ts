import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StayDetailsComponent } from '../pages/stay-details/stay-details.component';

const routes: Routes = [
  { path: '', component: StayDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LazyLoadingModule { }
