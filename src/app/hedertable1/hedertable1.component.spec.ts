import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hedertable1Component } from './hedertable1.component';

describe('Hedertable1Component', () => {
  let component: Hedertable1Component;
  let fixture: ComponentFixture<Hedertable1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hedertable1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hedertable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
