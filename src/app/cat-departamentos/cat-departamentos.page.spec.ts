import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDepartamentosPage } from './cat-departamentos.page';

describe('CatDepartamentosPage', () => {
  let component: CatDepartamentosPage;
  let fixture: ComponentFixture<CatDepartamentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatDepartamentosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatDepartamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
