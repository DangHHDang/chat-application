import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestApiService } from 'src/services/test-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router,private testService : TestApiService) { }

  ngOnInit() {
  }

  login(){
    this.testService.getData().subscribe(res => {
      localStorage.setItem("token",res.token)
      localStorage.setItem("user",JSON.stringify(res.user))
      this._router.navigate(['/']);
      // console.log(res);
    })
  }

}
