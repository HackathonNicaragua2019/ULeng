import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComGallopintoPage } from './com-gallopinto.page';

describe('ComGallopintoPage', () => {
  let component: ComGallopintoPage;
  let fixture: ComponentFixture<ComGallopintoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComGallopintoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComGallopintoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
