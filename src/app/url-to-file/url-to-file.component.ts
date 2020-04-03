import { Component, OnInit } from '@angular/core';
import { urlToBlob, blobToFile, fileToBase64 } from './helpers/url';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-url-to-file',
  templateUrl: './url-to-file.component.html',
  styleUrls: ['./url-to-file.component.scss']
})
export class UrlToFileComponent implements OnInit {
  url: string;
  file: File;
  filePreviewUrl: string;
  error: string;

  constructor(public domSanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  async convert() {
    try {
      const urlAsBlob = await urlToBlob(this.url);
      this.file = blobToFile(urlAsBlob, 'profile-photo');
      this.filePreviewUrl = await fileToBase64(this.file);
      this.error = null;
    } catch (err) {
      console.log(err);
      this.error = err.message;
      this.filePreviewUrl = null;
      this.file = null;
    }
  }
}
