import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDeportesPage } from './cat-deportes.page';

describe('CatDeportesPage', () => {
  let component: CatDeportesPage;
  let fixture: ComponentFixture<CatDeportesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatDeportesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatDeportesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
