import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepChontalesPage } from './dep-chontales.page';

describe('DepChontalesPage', () => {
  let component: DepChontalesPage;
  let fixture: ComponentFixture<DepChontalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepChontalesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepChontalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
