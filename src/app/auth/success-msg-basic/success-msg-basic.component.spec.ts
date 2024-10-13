import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessMsgBasicComponent } from './success-msg-basic.component';

describe('SuccessMsgBasicComponent', () => {
  let component: SuccessMsgBasicComponent;
  let fixture: ComponentFixture<SuccessMsgBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessMsgBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessMsgBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
