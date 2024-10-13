import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListLeftComponent } from './product-list-left.component';

describe('ProductListLeftComponent', () => {
  let component: ProductListLeftComponent;
  let fixture: ComponentFixture<ProductListLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
