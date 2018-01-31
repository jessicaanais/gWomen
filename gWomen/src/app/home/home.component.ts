import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private apiURL = 'http://localhost:8000/users';
  private adminURL = 'http://localhost:8000/admin';
  data: any = [{}];
  admin: any =[{}];

  constructor(private http: Http, private router:Router){
    this.getUsers();
    this.getAdmin();
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

  getAdminData(){
    return this.http.get(this.adminURL)
    .map((res: Response) => res.json())
  }

  getAdmin(){
    this.getAdminData().subscribe(admin => {
      this.admin = admin
      console.log("admin", admin)
    })
  }

  loginUser(e, data, admin){
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    console.log("this is the password", this.data[0].username, this.data[0].password )

    if( username == this.data[0].username && password == this.data[0].password){
      this.router.navigate(['/join/users'])
  }

   if( username == this.admin[0].username && this.admin[0].password){
     this.router.navigate(['/admin/dashboard'])
   } else {
     console.log('something went wrong')
   }
    console.log(username, password);
  }


}
