import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BTableComponent } from './b-table.component';

describe('BTableComponent', () => {
  let component: BTableComponent;
  let fixture: ComponentFixture<BTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
