import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ApprovalsComponent } from '../approvals/approvals.component';
import { FavoriteComponent } from '../favorite/favorite.component';
import { NotificationComponent } from '../notification/notification.component';
import { SearchComponent } from '../search/search.component';
import { ShareComponent } from '../share/share.component';
import { TeamComponent } from '../team/team.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  durationInSeconds = 1;

  constructor(public dialog: MatDialog,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    
  }

  // openFavorite(): void {
  //   const dialogRef = this.dialog.open(FavoriteComponent, {
  //     width: '250px',
      
  //   });

    openFavorite() {
      this._snackBar.openFromComponent(FavoriteComponent, {
        duration: this.durationInSeconds * 1000,
      });
    }
    openTeam() {
      this._snackBar.openFromComponent(TeamComponent, {
        duration: this.durationInSeconds * 1000,
      });
    }
    openApprovals() {
      this._snackBar.openFromComponent(ApprovalsComponent, {
        duration: this.durationInSeconds * 1000,
      });
    }
    openNotification() {
      this._snackBar.openFromComponent(NotificationComponent, {
        duration: this.durationInSeconds * 1000,
      });
    }
    openShare() {
      this._snackBar.openFromComponent(ShareComponent, {
        duration: this.durationInSeconds * 1000,
      });
    }
    openSearch() {
      this._snackBar.openFromComponent(SearchComponent, {
        duration: this.durationInSeconds * 1000,
      });
    }


    
  

}
