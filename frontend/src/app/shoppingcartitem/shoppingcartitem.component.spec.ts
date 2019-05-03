import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartitemComponent } from './shoppingcartitem.component';

describe('ShoppingcartitemComponent', () => {
  let component: ShoppingcartitemComponent;
  let fixture: ComponentFixture<ShoppingcartitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingcartitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingcartitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
