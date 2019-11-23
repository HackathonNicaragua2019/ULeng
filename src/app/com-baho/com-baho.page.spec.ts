import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComBahoPage } from './com-baho.page';

describe('ComBahoPage', () => {
  let component: ComBahoPage;
  let fixture: ComponentFixture<ComBahoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComBahoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComBahoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
