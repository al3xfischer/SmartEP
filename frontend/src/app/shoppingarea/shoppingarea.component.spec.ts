import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingareaComponent } from './shoppingarea.component';

describe('ShoppingareaComponent', () => {
  let component: ShoppingareaComponent;
  let fixture: ComponentFixture<ShoppingareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
