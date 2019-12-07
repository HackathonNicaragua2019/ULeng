import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalComoestasPage } from './sal-comoestas.page';

describe('SalComoestasPage', () => {
  let component: SalComoestasPage;
  let fixture: ComponentFixture<SalComoestasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalComoestasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalComoestasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
