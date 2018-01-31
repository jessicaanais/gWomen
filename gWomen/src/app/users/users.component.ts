import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{
  private apiURL = 'http://localhost:8000/users';
  data: any = [{}];

  constructor(private http: Http){
    this.getUsers();
  }
  getData(){
    return this.http.get(this.apiURL)
    .map((res: Response) => res.json())
  }

  getUsers(){
    this.getData().subscribe(data => {
      this.data = data
      console.log("users", data)
    })
  }

}
