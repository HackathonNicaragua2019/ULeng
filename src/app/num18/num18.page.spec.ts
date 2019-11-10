import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Num18Page } from './num18.page';

describe('Num18Page', () => {
  let component: Num18Page;
  let fixture: ComponentFixture<Num18Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Num18Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Num18Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
