import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsGuitarraPage } from './ins-guitarra.page';

describe('InsGuitarraPage', () => {
  let component: InsGuitarraPage;
  let fixture: ComponentFixture<InsGuitarraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsGuitarraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsGuitarraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
