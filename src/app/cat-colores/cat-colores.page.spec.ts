import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatColoresPage } from './cat-colores.page';

describe('CatColoresPage', () => {
  let component: CatColoresPage;
  let fixture: ComponentFixture<CatColoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatColoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatColoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
