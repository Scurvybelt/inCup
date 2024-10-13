import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountFooterComponent } from './discount-footer.component';

describe('DiscountFooterComponent', () => {
  let component: DiscountFooterComponent;
  let fixture: ComponentFixture<DiscountFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
