import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ROOM_DATA } from 'src/app/shared/constants/room.constant';
import { Room } from 'src/app/shared/models/room.model';
import { User, DATA_MODEL } from 'src/app/shared/models/user.model';
import { ConfirmDialog } from 'src/commons/dialog/confirm.component';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  displayedColumns: string[] = ['id','thumbnail', 'name', 'type','status','actions'];
  dataSource = new MatTableDataSource<Room>(ROOM_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private _router: Router,public dialog: MatDialog){}

  ngOnInit(): void {
  }

  create():void {
    this._router.navigate(['rooms','create']);
  }

  delete(_user:User): void{
    const data: DATA_MODEL = {
      id: _user.id,
      type: "Room",
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
    this._router.navigate(['rooms','edit',user.id]);
  }

}
