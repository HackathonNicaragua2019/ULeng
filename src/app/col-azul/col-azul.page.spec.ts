import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColAzulPage } from './col-azul.page';

describe('ColAzulPage', () => {
  let component: ColAzulPage;
  let fixture: ComponentFixture<ColAzulPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColAzulPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColAzulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
