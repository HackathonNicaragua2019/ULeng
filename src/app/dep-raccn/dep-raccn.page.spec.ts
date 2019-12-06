import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepRaccnPage } from './dep-raccn.page';

describe('DepRaccnPage', () => {
  let component: DepRaccnPage;
  let fixture: ComponentFixture<DepRaccnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepRaccnPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepRaccnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
