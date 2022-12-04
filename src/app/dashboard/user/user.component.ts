import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface User {
  name: string;
  id: number;
  email: number;
  avatar: string;
}

const ELEMENT_DATA: User[] = [
  {id: 1, name: 'Hydrogen', email: 1.0079, avatar: 'https://random.imagecdn.app/500/500'},
  {id: 2, name: 'Helium', email: 4.0026, avatar: 'https://random.imagecdn.app/500/500'},
  {id: 3, name: 'Lithium', email: 6.941, avatar: 'https://random.imagecdn.app/500/500'},
  {id: 4, name: 'Beryllium', email: 9.0122, avatar: 'https://random.imagecdn.app/500/500'},
  {id: 5, name: 'Boron', email: 10.811, avatar: 'https://random.imagecdn.app/500/500'},
  {id: 6, name: 'Carbon', email: 12.0107, avatar: 'https://random.imagecdn.app/500/500'},
  {id: 7, name: 'Nitrogen', email: 14.0067, avatar: 'https://random.imagecdn.app/500/500'},
  {id: 8, name: 'Oxygen', email: 15.9994, avatar: 'https://random.imagecdn.app/500/500'},
  {id: 9, name: 'Fluorine', email: 18.9984, avatar: 'https://random.imagecdn.app/500/500'},
  {id: 10, name: 'Neon', email: 20.1797, avatar: 'https://random.imagecdn.app/500/500'},
  {id: 11, name: 'Sodium', email: 22.9897, avatar: 'https://random.imagecdn.app/500/500'},
  {id: 12, name: 'Magnesium', email: 24.305, avatar: 'https://random.imagecdn.app/500/500'},
  {id: 13, name: 'Aluminum', email: 26.9815, avatar: 'https://random.imagecdn.app/500/500'},
  {id: 14, name: 'Silicon', email: 28.0855, avatar: 'https://random.imagecdn.app/500/500'},
  {id: 15, name: 'Phosphorus', email: 30.9738, avatar: 'https://random.imagecdn.app/500/500'},
  {id: 16, name: 'Sulfur', email: 32.065, avatar: 'https://random.imagecdn.app/500/500'},
  {id: 17, name: 'Chlorine', email: 35.453, avatar: 'https://random.imagecdn.app/500/500'},
  {id: 18, name: 'Argon', email: 39.948, avatar: 'https://random.imagecdn.app/500/500'},
  {id: 19, name: 'Potassium', email: 39.0983, avatar: 'https://random.imagecdn.app/500/500'},
  {id: 20, name: 'Calcium', email: 40.078, avatar: 'https://random.imagecdn.app/500/500'},
];

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

  ngOnInit(): void {
  }

  delete(user:User): void{
    console.log(user);
  }
  edit(user:User): void{
    console.log(user);
  }
  detail(user:User): void{
    console.log(user);
  }

}
