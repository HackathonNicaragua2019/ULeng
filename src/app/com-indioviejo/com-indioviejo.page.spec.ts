import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComIndioviejoPage } from './com-indioviejo.page';

describe('ComIndioviejoPage', () => {
  let component: ComIndioviejoPage;
  let fixture: ComponentFixture<ComIndioviejoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComIndioviejoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComIndioviejoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
