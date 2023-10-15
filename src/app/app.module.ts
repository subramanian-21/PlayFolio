import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnimateDirective } from './customDirective/animate.directive';
import { BodyComponent } from './body/body.component';
import { BodyWrapperComponent } from './body/body-wrapper/body-wrapper.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { BowWrapComponent } from './body/bow-wrap/bow-wrap.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnimateDirective,
    BodyComponent,
    BodyWrapperComponent,
    SearchResultComponent,
    BowWrapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
