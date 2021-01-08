import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveData } from './leave-data';

@Injectable({
  providedIn: 'root'
})
export class LeaveDataService {

  private _url: string = "/assets/data/leave.json";
  
  constructor( private http:HttpClient) { }

  getLeaveData():Observable<LeaveData[]>{
    return this.http.get<LeaveData[]>(this._url)
  
  }
}
