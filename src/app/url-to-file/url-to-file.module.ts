import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UrlToFileRoutingModule } from './url-to-file-routing.module';
import { UrlToFileComponent } from './url-to-file.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UrlToFileComponent],
  imports: [CommonModule, FormsModule, UrlToFileRoutingModule]
})
export class UrlToFileModule {}
