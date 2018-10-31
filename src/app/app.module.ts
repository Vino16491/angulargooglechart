import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartboardComponent } from './chartboard/chartboard.component';

/* library for google charts */
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ChartJsComponent } from './chart-js/chart-js.component';
@NgModule({
  declarations: [
    AppComponent,
    ChartboardComponent,
    ChartJsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
