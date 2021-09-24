import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavFormComponent } from './sidenav-form.component';

describe('SidenavFormComponent', () => {
  let component: SidenavFormComponent;
  let fixture: ComponentFixture<SidenavFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
