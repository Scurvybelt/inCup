import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGridRightComponent } from './product-grid-right.component';

describe('ProductGridRightComponent', () => {
  let component: ProductGridRightComponent;
  let fixture: ComponentFixture<ProductGridRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGridRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductGridRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
