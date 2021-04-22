import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GMapModule } from 'primeng/gmap';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GMapModule,
    ToastModule,
    DialogModule,
    BrowserAnimationsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
