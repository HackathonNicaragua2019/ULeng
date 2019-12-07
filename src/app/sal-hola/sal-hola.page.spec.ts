import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalHolaPage } from './sal-hola.page';

describe('SalHolaPage', () => {
  let component: SalHolaPage;
  let fixture: ComponentFixture<SalHolaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalHolaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalHolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
