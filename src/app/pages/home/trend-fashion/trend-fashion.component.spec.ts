import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendFashionComponent } from './trend-fashion.component';

describe('TrendFashionComponent', () => {
  let component: TrendFashionComponent;
  let fixture: ComponentFixture<TrendFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendFashionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
