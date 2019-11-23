import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComQuesilloPage } from './com-quesillo.page';

describe('ComQuesilloPage', () => {
  let component: ComQuesilloPage;
  let fixture: ComponentFixture<ComQuesilloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComQuesilloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComQuesilloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
