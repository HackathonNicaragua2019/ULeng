import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColMoradoPage } from './col-morado.page';

describe('ColMoradoPage', () => {
  let component: ColMoradoPage;
  let fixture: ComponentFixture<ColMoradoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColMoradoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColMoradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
