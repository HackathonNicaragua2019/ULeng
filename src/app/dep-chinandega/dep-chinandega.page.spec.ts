import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepChinandegaPage } from './dep-chinandega.page';

describe('DepChinandegaPage', () => {
  let component: DepChinandegaPage;
  let fixture: ComponentFixture<DepChinandegaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepChinandegaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepChinandegaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
