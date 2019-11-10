import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Num5Page } from './num5.page';

describe('Num5Page', () => {
  let component: Num5Page;
  let fixture: ComponentFixture<Num5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Num5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Num5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
