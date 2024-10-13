import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListRightComponent } from './product-list-right.component';

describe('ProductListRightComponent', () => {
  let component: ProductListRightComponent;
  let fixture: ComponentFixture<ProductListRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
