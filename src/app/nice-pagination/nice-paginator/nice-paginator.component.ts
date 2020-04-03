import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewEncapsulation,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-nice-paginator',
  templateUrl: './nice-paginator.component.html',
  styleUrls: ['./nice-paginator.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NicePaginatorComponent implements OnInit {
  public _startBouds = 1;
  public _endBounds = 1;
  public _pagesQuantity = 1;
  public _currentPage: number;
  public showLeftDots = false;
  public showRightDots = false;
  public showDots = false;
  public showPageBetween = false;
  public startPagesArray: number[] = [];
  public endPagesArray: number[] = [];
  @Output() pageChange = new EventEmitter();
  @Input() set currentPage(val: number) {
    this._currentPage = val;
    this.rebuildPagesArrays();
  }
  @Input() set startBounds(val: number) {
    this._startBouds = val;
    this.rebuildPagesArrays();
  }
  @Input() set endBounds(val: number) {
    this._endBounds = val;
    this.rebuildPagesArrays();
  }
  @Input() set pagesQuantity(val: number) {
    this._pagesQuantity = val;
    this.rebuildPagesArrays();
  }

  constructor() {}

  ngOnInit(): void {}

  rebuildPagesArrays() {
    const totalPagesArray = Array(this._pagesQuantity)
      .fill(1)
      .map((_, i) => i + 1);
    const boundsSum = this._startBouds + this._endBounds;
    if (boundsSum >= this._pagesQuantity) {
      this.startPagesArray = totalPagesArray;
      this.endPagesArray = [];
      this.showLeftDots = false;
      this.showRightDots = false;
      this.showDots = false;
    } else {
      const startPagesArratLastIndex = this._startBouds;
      const endPagesArrayStartIndex = this._pagesQuantity - this._endBounds;
      this.startPagesArray = totalPagesArray.slice(0, startPagesArratLastIndex);
      this.endPagesArray = totalPagesArray.slice(endPagesArrayStartIndex);
      this.showLeftDots =
        this._currentPage >
        this.startPagesArray[this.startPagesArray.length - 1] + 1;
      this.showRightDots = this._currentPage < this.endPagesArray[0] - 1;
      this.showDots = boundsSum < this._pagesQuantity;
      this.showPageBetween =
        this._currentPage >
          this.startPagesArray[this.startPagesArray.length - 1] &&
        this._currentPage < this.endPagesArray[0];
    }
  }

  handleFirstPage() {
    this.pageChange.emit(1);
  }
  handlePreviousPage() {
    this.pageChange.emit(this._currentPage - 1);
  }
  handleNextPage() {
    this.pageChange.emit(this._currentPage + 1);
  }
  handleLastPage() {
    this.pageChange.emit(this._pagesQuantity);
  }
  handlePage(page: number) {
    this.pageChange.emit(page);
  }
}
