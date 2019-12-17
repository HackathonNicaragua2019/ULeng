import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecPage } from './tec.page';

describe('TecPage', () => {
  let component: TecPage;
  let fixture: ComponentFixture<TecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
