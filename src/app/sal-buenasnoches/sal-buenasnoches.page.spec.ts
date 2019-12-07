import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalBuenasnochesPage } from './sal-buenasnoches.page';

describe('SalBuenasnochesPage', () => {
  let component: SalBuenasnochesPage;
  let fixture: ComponentFixture<SalBuenasnochesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalBuenasnochesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalBuenasnochesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
