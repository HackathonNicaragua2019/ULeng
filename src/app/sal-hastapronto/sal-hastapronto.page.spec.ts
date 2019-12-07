import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalHastaprontoPage } from './sal-hastapronto.page';

describe('SalHastaprontoPage', () => {
  let component: SalHastaprontoPage;
  let fixture: ComponentFixture<SalHastaprontoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalHastaprontoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalHastaprontoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
