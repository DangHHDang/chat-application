import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LOGIN } from "src/app/shared/models/login.model";

@Injectable({
  providedIn: "root"
})
export class TestApiService {
  requestOptions = {}
  constructor(private http: HttpClient){
  }
  // headers.append('Authorization', this.token); 
  // headers = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Authorization': `Bearer ${this.token}`
  // });

  baseURL = 'http://localhost:3200'
  url: string = `${this.baseURL}/api/auth/login`
  getData(): Observable<LOGIN>{
    return this.http.post<LOGIN>(this.url,
      {email: 'admin1@gmail.com', 
      password : "123456"
      })
    // admin1@gmail.com, 123456
  }


  getList(): Observable<any>{
    return this.http.get(`${this.baseURL}/api/user/all`)
  }
}