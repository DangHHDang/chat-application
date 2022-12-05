import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ELEMENT_DATA } from 'src/app/shared/constants/user.constant';
import { DATA_MODEL, User } from 'src/app/shared/models/user.model';
import { ConfirmDialog } from 'src/commons/dialog/confirm.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['id','avatar', 'name', 'email','actions'];
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private _router: Router,public dialog: MatDialog){}

  ngOnInit(): void {
  }

  create():void {
    this._router.navigate(['users','create']);
  }

  delete(_user:User): void{
    const data: DATA_MODEL = {
      id: _user.id,
      type: "User",
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
    this._router.navigate(['users','edit',user.id]);
  }

}
