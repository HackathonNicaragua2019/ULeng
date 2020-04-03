import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsViolinPage } from './ins-violin.page';

describe('InsViolinPage', () => {
  let component: InsViolinPage;
  let fixture: ComponentFixture<InsViolinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsViolinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsViolinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
