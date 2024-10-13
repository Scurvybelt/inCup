import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernFashionComponent } from './modern-fashion.component';

describe('ModernFashionComponent', () => {
  let component: ModernFashionComponent;
  let fixture: ComponentFixture<ModernFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModernFashionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModernFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
