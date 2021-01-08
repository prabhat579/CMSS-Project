import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularizeAttendanceComponent } from './regularize-attendance.component';

describe('RegularizeAttendanceComponent', () => {
  let component: RegularizeAttendanceComponent;
  let fixture: ComponentFixture<RegularizeAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularizeAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularizeAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
