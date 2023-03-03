import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StayDetailsComponent } from './pages/stay-details/stay-details.component';
import { StayIndexComponent } from './pages/stay-index/stay-index.component';
import { StayResolver } from './services/stay.resolver';

const routes: Routes = [
  { path: ':stayId',
    component: StayDetailsComponent,
    resolve: { stay: StayResolver }},
  { path: '', component: StayIndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment?.production })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
