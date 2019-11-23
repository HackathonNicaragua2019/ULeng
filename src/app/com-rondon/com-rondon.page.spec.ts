import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComRondonPage } from './com-rondon.page';

describe('ComRondonPage', () => {
  let component: ComRondonPage;
  let fixture: ComponentFixture<ComRondonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComRondonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComRondonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
