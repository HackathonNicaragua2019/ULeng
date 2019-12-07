import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColBlancoPage } from './col-blanco.page';

describe('ColBlancoPage', () => {
  let component: ColBlancoPage;
  let fixture: ComponentFixture<ColBlancoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColBlancoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColBlancoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
