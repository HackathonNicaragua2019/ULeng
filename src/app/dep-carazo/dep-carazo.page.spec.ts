import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepCarazoPage } from './dep-carazo.page';

describe('DepCarazoPage', () => {
  let component: DepCarazoPage;
  let fixture: ComponentFixture<DepCarazoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepCarazoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepCarazoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
