import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraLlPage } from './letra-ll.page';

describe('LetraLlPage', () => {
  let component: LetraLlPage;
  let fixture: ComponentFixture<LetraLlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraLlPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraLlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
