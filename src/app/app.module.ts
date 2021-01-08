import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { TabComponent } from './component/tab/tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FavoriteComponent } from './component/favorite/favorite.component';
import { TeamComponent } from './component/team/team.component';
import { ApprovalsComponent } from './component/approvals/approvals.component';
import { NotificationComponent } from './component/notification/notification.component';
import { ShareComponent } from './component/share/share.component';
import { SearchComponent } from './component/search/search.component';
import { ApplyLeaveComponent } from './component/apply-leave/apply-leave.component';
import { HolidayCalenderComponent } from './component/holiday-calender/holiday-calender.component';
import { RegularizeAttendanceComponent } from './component/regularize-attendance/regularize-attendance.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    TabComponent,
    FavoriteComponent,
    TeamComponent,
    ApprovalsComponent,
    NotificationComponent,
    ShareComponent,
    SearchComponent,
    ApplyLeaveComponent,
    HolidayCalenderComponent,
    RegularizeAttendanceComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatMenuModule,MatTabsModule,
    HttpClientModule,MatDividerModule,MatCardModule,MatDialogModule,MatButtonModule,MatIconModule,MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
