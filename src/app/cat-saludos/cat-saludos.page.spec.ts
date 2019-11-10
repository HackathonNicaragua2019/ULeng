import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatSaludosPage } from './cat-saludos.page';

describe('CatSaludosPage', () => {
  let component: CatSaludosPage;
  let fixture: ComponentFixture<CatSaludosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatSaludosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatSaludosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
