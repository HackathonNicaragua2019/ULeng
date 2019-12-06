import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepLeonPage } from './dep-leon.page';

describe('DepLeonPage', () => {
  let component: DepLeonPage;
  let fixture: ComponentFixture<DepLeonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepLeonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepLeonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
