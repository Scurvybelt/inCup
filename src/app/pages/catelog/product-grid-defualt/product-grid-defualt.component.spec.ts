import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGridDefualtComponent } from './product-grid-defualt.component';

describe('ProductGridDefualtComponent', () => {
  let component: ProductGridDefualtComponent;
  let fixture: ComponentFixture<ProductGridDefualtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGridDefualtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductGridDefualtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
