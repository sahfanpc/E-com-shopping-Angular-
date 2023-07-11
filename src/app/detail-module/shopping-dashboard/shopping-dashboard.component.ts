import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UserdataComponent } from '../userdata/userdata.component';

@Component({
  selector: 'app-shopping-dashboard',
  templateUrl: './shopping-dashboard.component.html',
  styleUrls: ['./shopping-dashboard.component.scss']
})
export class ShoppingDashboardComponent {

  constructor(public dialog: MatDialog){}

  openDialog(){
    const dialogRef = this.dialog.open(UserdataComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
