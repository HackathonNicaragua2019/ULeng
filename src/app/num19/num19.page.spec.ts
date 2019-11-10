import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Num19Page } from './num19.page';

describe('Num19Page', () => {
  let component: Num19Page;
  let fixture: ComponentFixture<Num19Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Num19Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Num19Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
