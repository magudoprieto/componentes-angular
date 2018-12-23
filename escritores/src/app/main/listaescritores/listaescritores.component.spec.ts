import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaescritoresComponent } from './listaescritores.component';

describe('ListaescritoresComponent', () => {
  let component: ListaescritoresComponent;
  let fixture: ComponentFixture<ListaescritoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaescritoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaescritoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
