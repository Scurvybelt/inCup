import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackFridayComponent } from './black-friday.component';

describe('BlackFridayComponent', () => {
  let component: BlackFridayComponent;
  let fixture: ComponentFixture<BlackFridayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackFridayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackFridayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
