import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepMatagalpaPage } from './dep-matagalpa.page';

describe('DepMatagalpaPage', () => {
  let component: DepMatagalpaPage;
  let fixture: ComponentFixture<DepMatagalpaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepMatagalpaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepMatagalpaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
