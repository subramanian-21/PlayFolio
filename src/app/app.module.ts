import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnimateDirective } from './customDirective/animate.directive';
import { BodyComponent } from './body/body.component';
import { BodyWrapperComponent } from './body/body-wrapper/body-wrapper.component';
import { SearchResultComponent } from './search-result/search-result.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnimateDirective,
    BodyComponent,
    BodyWrapperComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
