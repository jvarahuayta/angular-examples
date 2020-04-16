import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { akitaDevtools } from '@datorama/akita';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

if (!environment.production) {
  akitaDevtools();
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
