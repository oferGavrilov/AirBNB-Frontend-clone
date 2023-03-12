import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StayDetailsComponent } from './pages/stay-details/stay-details.component';
import { StayResolver } from './services/stay.resolver';
import { HomeComponent } from './pages/home/home.component';
import { StayIndexComponent } from './pages/stay-index/stay-index.component';
import { LoginComponent } from './cmps/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { AuthGuard } from './guards/auth.guard';
import { EditStayComponent } from './cmps/edit-stay/edit-stay.component';
import { UserTripsComponent } from './cmps/user-trips/user-trips.component';
import { UserOrderComponent } from './cmps/user-order/user-order.component';
import { UserStaysComponent } from './cmps/user-stays/user-stays.component';
import { UserWishlistComponent } from './cmps/user-wishlist/user-wishlist.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] , children:[
    {path:'edit/:id', component: EditStayComponent},
    {path:'edit', component: EditStayComponent},
    {path:'trips', component: UserTripsComponent},
    {path:'orders', component: UserOrderComponent},
    {path:'stays', component: UserStaysComponent},
    {path:'wishlist', component: UserWishlistComponent},
  ] },
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
