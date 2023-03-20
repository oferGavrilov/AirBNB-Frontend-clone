import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule , HttpClient } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { StayIndexComponent } from './pages/stay-index/stay-index.component';
import { StayFilterComponent } from './cmps/stay-filter/stay-filter.component';
import { StayListComponent } from './cmps/stay-list/stay-list.component';
import { StayPreviewComponent } from './cmps/stay-preview/stay-preview.component';
import { ImgCarouselComponent } from './cmps/img-carousel/img-carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeHeaderComponent } from './cmps/home-header/home-header.component';
import { StayDetailsComponent } from './pages/stay-details/stay-details.component';
import { GoogleMapComponent } from './cmps/google-map/google-map.component';
import { StayOrderComponent } from './cmps/details/stay-order/stay-order.component';
import { AmenitiesListComponent } from './cmps/details/amenities-list/amenities-list.component';
import { AmenitiesPreviewComponent } from './cmps/details/amenities-preview/amenities-preview.component';
import { SpecialPerksComponent } from './cmps/details/special-perks/special-perks.component';
import { ReviewListComponent } from './cmps/details/review-list/review-list.component';
import { ReviewPreviewComponent } from './cmps/details/review-preview/review-preview.component';
import { HostInfoComponent } from './cmps/details/host-info/host-info.component';
import { AirbnbCalendarModule } from 'ngx-airbnb-calendar';
import { HeaderMenuModalComponent } from './cmps/header-menu-modal/header-menu-modal.component';
import { LoginComponent } from './pages/login/login.component';
import { AppFooterComponent } from './cmps/app-footer/app-footer.component';
import { UserComponent } from './pages/user/user.component';
import { UserOrderComponent } from './cmps/user-order/user-order.component';
import { UserTripsComponent } from './cmps/user-trips/user-trips.component';
import { UserStaysComponent } from './cmps/user-stays/user-stays.component';
import { EditStayComponent } from './cmps/edit-stay/edit-stay.component';
import { HeaderFilterComponent } from './cmps/header-filter-folder/header-filter/header-filter.component';
import { HeaderFilterModalComponent } from './cmps/header-filter-folder/header-filter-modal/header-filter-modal.component';
import { RegionModalComponent } from './cmps/header-filter-folder/region-modal/region-modal.component';
import { SearchPlaceModalComponent } from './cmps/header-filter-folder/search-place-modal/search-place-modal.component';
import { OrderFilterModalComponent } from './cmps/order-filter-modal/order-filter-modal.component';
import { GuestModalComponent } from './cmps/guest-modal/guest-modal.component';
import { HeaderFilterGuestModalComponent } from './cmps/header-filter-folder/header-filter-guest-modal/header-filter-guest-modal.component';
import { PurchaseIndicationComponent } from './cmps/details/purchase-indication/purchase-indication.component';
import { UserWishlistComponent } from './cmps/user-wishlist/user-wishlist.component'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoaderComponent } from './cmps/loader/loader.component';
import { AboutComponent } from './pages/about/about.component';
import { AddReviewComponent } from './cmps/details/add-review/add-review.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from '@abacritt/angularx-social-login';import { LagnuageModalComponent } from './cmps/lagnuage-modal/lagnuage-modal.component';
import { MatBadgeModule } from '@angular/material/badge'
import { MatIconModule } from '@angular/material/icon'

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
    HeaderFilterComponent,
    HeaderFilterModalComponent,
    SearchPlaceModalComponent,
    RegionModalComponent,
    OrderFilterModalComponent,
    GuestModalComponent,
    HeaderFilterGuestModalComponent,
    PurchaseIndicationComponent,
    UserWishlistComponent,
    LoaderComponent,
    AboutComponent,
    AddReviewComponent,
    LagnuageModalComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgMultiSelectDropDownModule,
    GoogleMapsModule,
    AirbnbCalendarModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    NgxStarRatingModule,
    MatBadgeModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory ,
        deps:[HttpClient]
      }
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('975546587762-nh443v7hguglfkc781c8ejgbp6ocpe5s.apps.googleusercontent.com')
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('975546587762-nh443v7hguglfkc781c8ejgbp6ocpe5s.apps.googleusercontent.com')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private translate:TranslateService){
    translate.setDefaultLang('en')
    translate.use('en')
  }
}

export function HttpLoaderFactory(http:HttpClient):TranslateHttpLoader {
  return new TranslateHttpLoader(http)
}

