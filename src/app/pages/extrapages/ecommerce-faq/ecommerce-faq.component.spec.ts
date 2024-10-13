import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceFaqComponent } from './ecommerce-faq.component';

describe('EcommerceFaqComponent', () => {
  let component: EcommerceFaqComponent;
  let fixture: ComponentFixture<EcommerceFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerceFaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
