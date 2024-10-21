import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCreacionEdicionComponent } from './formulario-creacion-edicion.component';

describe('FormularioCreacionEdicionComponent', () => {
  let component: FormularioCreacionEdicionComponent;
  let fixture: ComponentFixture<FormularioCreacionEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCreacionEdicionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioCreacionEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
