import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersProductComponent } from './orders-product.component';

describe('OrdersProductComponent', () => {
  let component: OrdersProductComponent;
  let fixture: ComponentFixture<OrdersProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
