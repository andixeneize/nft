import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WhatisComponent } from './components/whatis/whatis.component';
import { ClassificationComponent } from './components/classification/classification.component';
import { TotaltokensComponent } from './components/totaltokens/totaltokens.component';
import { WhoComponent } from './components/who/who.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WhatisComponent,
    ClassificationComponent,
    TotaltokensComponent,
    WhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
