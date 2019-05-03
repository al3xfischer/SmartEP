import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicdetailsComponent } from './picdetails.component';

describe('PicdetailsComponent', () => {
  let component: PicdetailsComponent;
  let fixture: ComponentFixture<PicdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
