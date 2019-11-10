import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Num13Page } from './num13.page';

describe('Num13Page', () => {
  let component: Num13Page;
  let fixture: ComponentFixture<Num13Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Num13Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Num13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
