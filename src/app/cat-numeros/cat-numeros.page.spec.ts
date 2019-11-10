import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatNumerosPage } from './cat-numeros.page';

describe('CatNumerosPage', () => {
  let component: CatNumerosPage;
  let fixture: ComponentFixture<CatNumerosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatNumerosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatNumerosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
