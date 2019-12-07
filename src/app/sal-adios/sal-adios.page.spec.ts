import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalAdiosPage } from './sal-adios.page';

describe('SalAdiosPage', () => {
  let component: SalAdiosPage;
  let fixture: ComponentFixture<SalAdiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalAdiosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalAdiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
