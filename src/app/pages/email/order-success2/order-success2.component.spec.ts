import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSuccess2Component } from './order-success2.component';

describe('OrderSuccess2Component', () => {
  let component: OrderSuccess2Component;
  let fixture: ComponentFixture<OrderSuccess2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSuccess2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSuccess2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
