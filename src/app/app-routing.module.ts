import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StayDetailsComponent } from './pages/stay-details/stay-details.component';
import { StayResolver } from './services/stay.resolver';
import { HomeComponent } from './pages/home/home.component';
import { StayIndexComponent } from './pages/stay-index/stay-index.component';

const routes: Routes = [
  { path: ':stayId',
    component: StayDetailsComponent,
    resolve: { stay: StayResolver }},
  { path: '', component: StayIndexComponent},
  { path: 'home', component: HomeComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment?.production })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
