import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatInstrumentosPage } from './cat-instrumentos.page';

describe('CatInstrumentosPage', () => {
  let component: CatInstrumentosPage;
  let fixture: ComponentFixture<CatInstrumentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatInstrumentosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatInstrumentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
