import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassChangeBasicComponent } from './pass-change-basic.component';

describe('PassChangeBasicComponent', () => {
  let component: PassChangeBasicComponent;
  let fixture: ComponentFixture<PassChangeBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassChangeBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassChangeBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
