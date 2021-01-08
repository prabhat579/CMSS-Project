import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attendance } from './attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private _url: string = "/assets/data/attendance.json";

  constructor(private http:HttpClient) { }

  getAttendance():Observable<Attendance[]>{
    return this.http.get<Attendance[]>(this._url)
  
  }
}
