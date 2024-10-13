import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninBasicComponent } from './signin-basic.component';

describe('SigninBasicComponent', () => {
  let component: SigninBasicComponent;
  let fixture: ComponentFixture<SigninBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
