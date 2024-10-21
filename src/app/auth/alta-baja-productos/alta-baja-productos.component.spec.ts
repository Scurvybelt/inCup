import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaBajaProductosComponent } from './alta-baja-productos.component';

describe('AltaBajaProductosComponent', () => {
  let component: AltaBajaProductosComponent;
  let fixture: ComponentFixture<AltaBajaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaBajaProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltaBajaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
