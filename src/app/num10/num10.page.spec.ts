import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Num10Page } from './num10.page';

describe('Num10Page', () => {
  let component: Num10Page;
  let fixture: ComponentFixture<Num10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Num10Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Num10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
