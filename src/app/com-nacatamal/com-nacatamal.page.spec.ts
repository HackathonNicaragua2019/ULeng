import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComNacatamalPage } from './com-nacatamal.page';

describe('ComNacatamalPage', () => {
  let component: ComNacatamalPage;
  let fixture: ComponentFixture<ComNacatamalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComNacatamalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComNacatamalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
