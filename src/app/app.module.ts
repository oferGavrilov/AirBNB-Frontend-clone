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
import { FormsModule } from '@angular/forms';


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
    HostInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    GoogleMapsModule,
    AirbnbCalendarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
