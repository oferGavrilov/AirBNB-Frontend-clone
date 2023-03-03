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
    HomeHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
