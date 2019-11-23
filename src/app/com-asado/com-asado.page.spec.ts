import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComAsadoPage } from './com-asado.page';

describe('ComAsadoPage', () => {
  let component: ComAsadoPage;
  let fixture: ComponentFixture<ComAsadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComAsadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComAsadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
