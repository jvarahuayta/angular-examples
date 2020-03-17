import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { akitaDevtools } from '@datorama/akita';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

if (!environment.production) {
  akitaDevtools();
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
