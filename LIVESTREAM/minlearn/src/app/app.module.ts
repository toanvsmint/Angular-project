import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HocsinhComponent } from './Components/Hocsinh/hocsinh.component'
import { KhoahocComponent } from './Components/Khoahoc/khoahoc.component';
import { CasiComponent } from './casi/casi.component'
@NgModule({
  declarations: [
    AppComponent, HocsinhComponent,KhoahocComponent, CasiComponent
  ],
  imports: [
    BrowserModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
