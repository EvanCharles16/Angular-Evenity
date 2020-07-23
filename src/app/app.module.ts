import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { CategoryComponent } from './pages/category/category.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { AdminComponent } from './pages/admin/admin.component';
import { EditComponent } from './pages/admin/edit/edit.component';
import { DeleteComponent } from './pages/admin/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    CategoryComponent,
    CreateEventComponent,
    AdminComponent,
    EditComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CarouselModule, //Carousel
    RouterModule, //Carousel
    BrowserAnimationsModule, //Carousel
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
