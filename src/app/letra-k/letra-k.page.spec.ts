import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraKPage } from './letra-k.page';

describe('LetraKPage', () => {
  let component: LetraKPage;
  let fixture: ComponentFixture<LetraKPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraKPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraKPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
