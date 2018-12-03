import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaihatComponent } from './Components/Baihat/baihat.component';
import { Bai1Component } from './Components/Bai1/bai1.component';

@NgModule({
  declarations: [
    AppComponent,
    BaihatComponent,
    Bai1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
