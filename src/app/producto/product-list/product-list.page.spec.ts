//product-list.page.spect.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { HttpClientModule } from '@angular/common/http';
import { PolySynth, Transport } from 'tone';
import {IonicStorageModule} from '@ionic/storage-angular'
import { ReactiveFormsModule } from '@angular/forms';
import { ProductServiceService } from '../product-service.service'; 



@NgModule({
 declarations: [AppComponent],
 imports: [BrowserModule, 
  BrowserModule,
  IonicModule.forRoot(),
  AppRoutingModule,
  HttpClientModule,
  IonicStorageModule.forRoot(),  // Asegúrate de tener esta línea
  ReactiveFormsModule,
    
 ],
 providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
 bootstrap: [AppComponent],
 
})
export class AppModule {}



