import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StayDetailsComponent } from './pages/stay-details/stay-details.component';
import { StayResolver } from './services/stay.resolver';
import { HomeComponent } from './pages/home/home.component';
import { StayIndexComponent } from './pages/stay-index/stay-index.component';
import { LoginComponent } from './cmps/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: ':stayId',
    component: StayDetailsComponent,
    resolve: { stay: StayResolver }
  },
  { path: '', component: StayIndexComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment?.production, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
