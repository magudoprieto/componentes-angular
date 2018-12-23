import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleescritoresComponent } from './detalleescritores.component';

describe('DetalleescritoresComponent', () => {
  let component: DetalleescritoresComponent;
  let fixture: ComponentFixture<DetalleescritoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleescritoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleescritoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
