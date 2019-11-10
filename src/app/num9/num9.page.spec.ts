import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Num9Page } from './num9.page';

describe('Num9Page', () => {
  let component: Num9Page;
  let fixture: ComponentFixture<Num9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Num9Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Num9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
