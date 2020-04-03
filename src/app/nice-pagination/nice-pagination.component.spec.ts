import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NicePaginationComponent } from './nice-pagination.component';

describe('NicePaginationComponent', () => {
  let component: NicePaginationComponent;
  let fixture: ComponentFixture<NicePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NicePaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NicePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
