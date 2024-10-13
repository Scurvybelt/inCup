import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassResetBasicComponent } from './pass-reset-basic.component';

describe('PassResetBasicComponent', () => {
  let component: PassResetBasicComponent;
  let fixture: ComponentFixture<PassResetBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassResetBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassResetBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
