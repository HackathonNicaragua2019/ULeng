import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBebidasPage } from './cat-bebidas.page';

describe('CatBebidasPage', () => {
  let component: CatBebidasPage;
  let fixture: ComponentFixture<CatBebidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatBebidasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatBebidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
