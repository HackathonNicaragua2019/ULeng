import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepEsteliPage } from './dep-esteli.page';

describe('DepEsteliPage', () => {
  let component: DepEsteliPage;
  let fixture: ComponentFixture<DepEsteliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepEsteliPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepEsteliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
