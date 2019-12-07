import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamPrimosPage } from './fam-primos.page';

describe('FamPrimosPage', () => {
  let component: FamPrimosPage;
  let fixture: ComponentFixture<FamPrimosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamPrimosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamPrimosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
