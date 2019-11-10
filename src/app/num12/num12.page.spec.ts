import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Num12Page } from './num12.page';

describe('Num12Page', () => {
  let component: Num12Page;
  let fixture: ComponentFixture<Num12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Num12Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Num12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
