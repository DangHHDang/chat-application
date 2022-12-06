import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CHANNEL_DATA } from 'src/app/shared/constants/channel.constant';
import { Channel, DATA_MODEL } from 'src/app/shared/models/channel.model';
import { User } from 'src/app/shared/models/user.model';
import { ConfirmDialog } from 'src/commons/dialog/confirm.component';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'type','actions'];
  dataSource = new MatTableDataSource<Channel>(CHANNEL_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private _router: Router,public dialog: MatDialog){}

  ngOnInit(): void {
  }

  create():void {
    this._router.navigate(['channels','create']);
  }

  delete(_user:User): void{
    const data: DATA_MODEL = {
      id: _user.id,
      type: "Channel",
      name: _user.name
    }
    const dialog = this.dialog.open(ConfirmDialog, {
      width: '400px',
      data
    })
    dialog.afterClosed().subscribe(res => {
      // Call API delete start
      console.log(res);
      // Call API delete end
    })
  }
  edit(user:User): void{
    this._router.navigate(['channels','edit',user.id]);
  }

}
