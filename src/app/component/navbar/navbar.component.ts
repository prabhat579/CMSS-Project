import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ApprovalsComponent } from '../approvals/approvals.component';
import { FavoriteComponent } from '../favorite/favorite.component';
import { NotificationComponent } from '../notification/notification.component';
import { TeamComponent } from '../team/team.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }
  durationInSeconds = 1;

  ngOnInit() {
  }

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

}
