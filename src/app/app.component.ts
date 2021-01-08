import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ApplyLeaveComponent } from './component/apply-leave/apply-leave.component';
import { HolidayCalenderComponent } from './component/holiday-calender/holiday-calender.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CMSS-Project';
  durationInSeconds = 1;

  constructor(private _snackBar: MatSnackBar){

  }

  openDate() {
    this._snackBar.openFromComponent(HolidayCalenderComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  openApplyLeave() {
    this._snackBar.openFromComponent(ApplyLeaveComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
