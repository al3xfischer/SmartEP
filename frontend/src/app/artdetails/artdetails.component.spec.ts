import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtdetailsComponent } from './artdetails.component';

describe('ArtdetailsComponent', () => {
  let component: ArtdetailsComponent;
  let fixture: ComponentFixture<ArtdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
