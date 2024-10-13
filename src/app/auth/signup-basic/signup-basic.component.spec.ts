import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupBasicComponent } from './signup-basic.component';

describe('SignupBasicComponent', () => {
  let component: SignupBasicComponent;
  let fixture: ComponentFixture<SignupBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
