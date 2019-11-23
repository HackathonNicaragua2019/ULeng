import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BebCacaoPage } from './beb-cacao.page';

describe('BebCacaoPage', () => {
  let component: BebCacaoPage;
  let fixture: ComponentFixture<BebCacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BebCacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BebCacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
