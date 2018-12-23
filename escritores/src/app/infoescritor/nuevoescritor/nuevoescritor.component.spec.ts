import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoescritorComponent } from './nuevoescritor.component';

describe('NuevoescritorComponent', () => {
  let component: NuevoescritorComponent;
  let fixture: ComponentFixture<NuevoescritorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoescritorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoescritorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
