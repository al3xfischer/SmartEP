import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolditemComponent } from './solditem.component';

describe('SolditemComponent', () => {
  let component: SolditemComponent;
  let fixture: ComponentFixture<SolditemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolditemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
