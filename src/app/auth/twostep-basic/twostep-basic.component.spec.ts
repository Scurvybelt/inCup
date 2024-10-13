import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwostepBasicComponent } from './twostep-basic.component';

describe('TwostepBasicComponent', () => {
  let component: TwostepBasicComponent;
  let fixture: ComponentFixture<TwostepBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwostepBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwostepBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
