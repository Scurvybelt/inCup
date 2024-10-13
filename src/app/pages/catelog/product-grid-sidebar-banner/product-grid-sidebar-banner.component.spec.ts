import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGridSidebarBannerComponent } from './product-grid-sidebar-banner.component';

describe('ProductGridSidebarBannerComponent', () => {
  let component: ProductGridSidebarBannerComponent;
  let fixture: ComponentFixture<ProductGridSidebarBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGridSidebarBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductGridSidebarBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
