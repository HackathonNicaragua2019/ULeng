import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Num17Page } from './num17.page';

describe('Num17Page', () => {
  let component: Num17Page;
  let fixture: ComponentFixture<Num17Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Num17Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Num17Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
