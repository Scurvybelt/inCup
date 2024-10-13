import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutBasicComponent } from './logout-basic.component';

describe('LogoutBasicComponent', () => {
  let component: LogoutBasicComponent;
  let fixture: ComponentFixture<LogoutBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
