import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComVigoronPage } from './com-vigoron.page';

describe('ComVigoronPage', () => {
  let component: ComVigoronPage;
  let fixture: ComponentFixture<ComVigoronPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComVigoronPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComVigoronPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
