import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyLeaveComponent } from './component/apply-leave/apply-leave.component';
import { ApprovalsComponent } from './component/approvals/approvals.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { FavoriteComponent } from './component/favorite/favorite.component';
import { HeaderComponent } from './component/header/header.component';
import { HolidayCalenderComponent } from './component/holiday-calender/holiday-calender.component';
import { NotificationComponent } from './component/notification/notification.component';
import { RegularizeAttendanceComponent } from './component/regularize-attendance/regularize-attendance.component';
import { SearchComponent } from './component/search/search.component';
import { ShareComponent } from './component/share/share.component';
import { TabComponent } from './component/tab/tab.component';
import { TeamComponent } from './component/team/team.component';


const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'carosel',component:CarouselComponent},
  {path:'tab', component:TabComponent},
  {path:'favorite', component:FavoriteComponent},
  {path:'holidayDate', component:HolidayCalenderComponent},
  {path:'applyLeave', component:ApplyLeaveComponent},
  {path:'regularizeAtd', component:RegularizeAttendanceComponent},
  {path:'team',component:TeamComponent},
  {path:'approvals',component:ApprovalsComponent},
  {path:'notification',component:NotificationComponent},
  {path:'share',component:ShareComponent},
  {path:'search',component:SearchComponent,}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
