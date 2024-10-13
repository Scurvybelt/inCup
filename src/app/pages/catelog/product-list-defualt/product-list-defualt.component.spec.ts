import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListDefualtComponent } from './product-list-defualt.component';

describe('ProductListDefualtComponent', () => {
  let component: ProductListDefualtComponent;
  let fixture: ComponentFixture<ProductListDefualtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListDefualtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListDefualtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
