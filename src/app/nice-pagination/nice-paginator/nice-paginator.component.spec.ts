import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NicePaginatorComponent } from './nice-paginator.component';

describe('NicePaginatorComponent', () => {
  let component: NicePaginatorComponent;
  let fixture: ComponentFixture<NicePaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NicePaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NicePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
