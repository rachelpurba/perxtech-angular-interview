import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './core/shared.module';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, BooksComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HomeComponent],
})
export class AppModule {}
