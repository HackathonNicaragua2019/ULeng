import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Num8Page } from './num8.page';

describe('Num8Page', () => {
  let component: Num8Page;
  let fixture: ComponentFixture<Num8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Num8Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Num8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
