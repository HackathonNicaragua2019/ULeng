import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAnimalesPage } from './cat-animales.page';

describe('CatAnimalesPage', () => {
  let component: CatAnimalesPage;
  let fixture: ComponentFixture<CatAnimalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatAnimalesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatAnimalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
