import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepRaccsPage } from './dep-raccs.page';

describe('DepRaccsPage', () => {
  let component: DepRaccsPage;
  let fixture: ComponentFixture<DepRaccsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepRaccsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepRaccsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
