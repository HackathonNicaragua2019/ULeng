import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Num6Page } from './num6.page';

describe('Num6Page', () => {
  let component: Num6Page;
  let fixture: ComponentFixture<Num6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Num6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Num6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
