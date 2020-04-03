import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nice-pagination',
  templateUrl: './nice-pagination.component.html',
  styleUrls: ['./nice-pagination.component.scss']
})
export class NicePaginationComponent implements OnInit {
  currentPage = 1;
  pagesQuantity = 10;
  startBounds = 3;
  endBounds = 3;

  constructor() {}

  ngOnInit(): void {}

  handlePageChange($event) {
    console.log($event);
    this.currentPage = $event;
  }
}
