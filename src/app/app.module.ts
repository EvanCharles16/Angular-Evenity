import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { CategoryComponent } from './pages/category/category.component';
import { EventComponent } from './pages/event/event.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    CategoryComponent,
    EventComponent,
    CreateEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule, //Carousel
    RouterModule, //Carousel
    BrowserAnimationsModule, //Carousel
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
