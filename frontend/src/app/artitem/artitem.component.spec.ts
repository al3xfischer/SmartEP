import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtitemComponent } from './artitem.component';

describe('ArtitemComponent', () => {
  let component: ArtitemComponent;
  let fixture: ComponentFixture<ArtitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
