import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { endWith } from 'rxjs';
import { CreateClientComponent } from '../create-client/create-client.component';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit {


  usrDialog() {
    const dialogRef = this.dialog.open(CreateClientComponent, {
      width: "50%",
      height: "100%",

    });
    dialogRef.afterClosed().subscribe((res) => {
      console.log("Dialog Closed", res);
    });
  }

  constructor(private dialog: MatDialog,) { }

  ngOnInit(): void {
  }

}
