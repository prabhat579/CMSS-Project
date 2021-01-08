import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AttendanceService } from 'src/app/attendance.service';
import { LeaveDataService } from 'src/app/leave-data.service';
import { RegularizeAttendanceComponent } from '../regularize-attendance/regularize-attendance.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  durationInSeconds = 1;
public leaveData = [];
public attendance = [];

  constructor( private _leaveService: LeaveDataService,
    public dialog: MatDialog,private _attendanceService: AttendanceService,private _snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this._leaveService.getLeaveData()
    .subscribe(data => this.leaveData =data)

    this._attendanceService.getAttendance()
    .subscribe(data => this.attendance =data)

  }

  openRegulrizeAtd() {
    this._snackBar.openFromComponent(RegularizeAttendanceComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  


  deleteRow(leaveId){
    for(let i = 0; i < this.leaveData.length; ++i){
        if (this.leaveData[i].leaveId === leaveId) {
            this.leaveData.splice(i,1);
        }
    }
}
}
