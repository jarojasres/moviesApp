import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule, JsonpModule, Jsonp } from '@angular/http';
import {FormsModule } from '@angular/forms';
import { RouterModule } from '@Angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';
import { CardComponent } from './components/card/card.component';

import { ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoadingComponent,
    HomeComponent,
    SearchComponent,
    MovieComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot( ROUTES, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
