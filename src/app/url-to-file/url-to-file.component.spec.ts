import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlToFileComponent } from './url-to-file.component';

describe('UrlToFileComponent', () => {
  let component: UrlToFileComponent;
  let fixture: ComponentFixture<UrlToFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlToFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlToFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
