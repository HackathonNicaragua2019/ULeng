import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Num11Page } from './num11.page';

describe('Num11Page', () => {
  let component: Num11Page;
  let fixture: ComponentFixture<Num11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Num11Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Num11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
