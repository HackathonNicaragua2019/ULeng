import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Num4Page } from './num4.page';

describe('Num4Page', () => {
  let component: Num4Page;
  let fixture: ComponentFixture<Num4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Num4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Num4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
