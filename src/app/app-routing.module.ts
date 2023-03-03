import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { StayIndexComponent } from './pages/stay-index/stay-index.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: StayIndexComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment?.production })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
