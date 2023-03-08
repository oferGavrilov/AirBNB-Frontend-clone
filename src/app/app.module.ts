import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { StayIndexComponent } from './pages/stay-index/stay-index.component';
import { StayFilterComponent } from './cmps/stay-filter/stay-filter.component';
import { StayListComponent } from './cmps/stay-list/stay-list.component';
import { StayPreviewComponent } from './cmps/stay-preview/stay-preview.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImgCarouselComponent } from './cmps/img-carousel/img-carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeHeaderComponent } from './cmps/home-header/home-header.component';
import { StayDetailsComponent } from './pages/stay-details/stay-details.component';
import { GoogleMapComponent } from './cmps/google-map/google-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { StayOrderComponent } from './cmps/stay-order/stay-order.component';

import { AmenitiesListComponent } from './cmps/details/amenities-list/amenities-list.component';
import { AmenitiesPreviewComponent } from './cmps/details/amenities-preview/amenities-preview.component';
import { SpecialPerksComponent } from './cmps/details/special-perks/special-perks.component';
import { ReviewListComponent } from './cmps/details/review-list/review-list.component';
import { ReviewPreviewComponent } from './cmps/details/review-preview/review-preview.component';
import { HostInfoComponent } from './cmps/details/host-info/host-info.component';
import { AirbnbCalendarModule } from 'ngx-airbnb-calendar';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HeaderMenuModalComponent } from './cmps/header-menu-modal/header-menu-modal.component';
import { LoginComponent } from './cmps/login/login.component';
import { AppFooterComponent } from './cmps/app-footer/app-footer.component';
import { UserComponent } from './pages/user/user.component';
import { UserOrderComponent } from './cmps/user-order/user-order.component';
import { UserTripsComponent } from './cmps/user-trips/user-trips.component';
import { UserStaysComponent } from './cmps/user-stays/user-stays.component';
import { EditStayComponent } from './cmps/edit-stay/edit-stay.component';
import { HeaderFilterComponent } from './cmps/header-filter/header-filter.component';

import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    StayIndexComponent,
    StayFilterComponent,
    StayListComponent,
    StayPreviewComponent,
    ImgCarouselComponent,
    HomeComponent,
    HomeHeaderComponent,
    StayDetailsComponent,
    GoogleMapComponent,
    StayOrderComponent,
    AmenitiesListComponent,
    AmenitiesPreviewComponent,
    SpecialPerksComponent,
    ReviewListComponent,
    ReviewPreviewComponent,
    HostInfoComponent,
    HeaderMenuModalComponent,
    LoginComponent,
    AppFooterComponent,
    UserComponent,
    UserOrderComponent,
    UserTripsComponent,
    UserStaysComponent,
    EditStayComponent,
    HeaderFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    GoogleMapsModule,
    AirbnbCalendarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

