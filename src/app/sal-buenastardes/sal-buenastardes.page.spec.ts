import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalBuenastardesPage } from './sal-buenastardes.page';

describe('SalBuenastardesPage', () => {
  let component: SalBuenastardesPage;
  let fixture: ComponentFixture<SalBuenastardesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalBuenastardesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalBuenastardesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
