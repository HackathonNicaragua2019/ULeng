import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamTiaPage } from './fam-tia.page';

describe('FamTiaPage', () => {
  let component: FamTiaPage;
  let fixture: ComponentFixture<FamTiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamTiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamTiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
