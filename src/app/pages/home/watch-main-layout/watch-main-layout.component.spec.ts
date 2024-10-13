import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchMainLayoutComponent } from './watch-main-layout.component';

describe('WatchMainLayoutComponent', () => {
  let component: WatchMainLayoutComponent;
  let fixture: ComponentFixture<WatchMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchMainLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
