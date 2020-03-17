import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkitaStorePaginationComponent } from './akita-store-pagination.component';

describe('AkitaStorePaginationComponent', () => {
  let component: AkitaStorePaginationComponent;
  let fixture: ComponentFixture<AkitaStorePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkitaStorePaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkitaStorePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
