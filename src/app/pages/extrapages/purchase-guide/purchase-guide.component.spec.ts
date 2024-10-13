import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseGuideComponent } from './purchase-guide.component';

describe('PurchaseGuideComponent', () => {
  let component: PurchaseGuideComponent;
  let fixture: ComponentFixture<PurchaseGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
