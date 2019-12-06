import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepMadrizPage } from './dep-madriz.page';

describe('DepMadrizPage', () => {
  let component: DepMadrizPage;
  let fixture: ComponentFixture<DepMadrizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepMadrizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepMadrizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
