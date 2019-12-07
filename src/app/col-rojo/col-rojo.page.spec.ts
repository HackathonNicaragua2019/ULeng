import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColRojoPage } from './col-rojo.page';

describe('ColRojoPage', () => {
  let component: ColRojoPage;
  let fixture: ComponentFixture<ColRojoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColRojoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColRojoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
