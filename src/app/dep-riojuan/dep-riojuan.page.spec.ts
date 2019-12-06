import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepRiojuanPage } from './dep-riojuan.page';

describe('DepRiojuanPage', () => {
  let component: DepRiojuanPage;
  let fixture: ComponentFixture<DepRiojuanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepRiojuanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepRiojuanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
