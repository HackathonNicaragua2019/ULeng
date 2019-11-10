import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatEmocionesPage } from './cat-emociones.page';

describe('CatEmocionesPage', () => {
  let component: CatEmocionesPage;
  let fixture: ComponentFixture<CatEmocionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatEmocionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatEmocionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
