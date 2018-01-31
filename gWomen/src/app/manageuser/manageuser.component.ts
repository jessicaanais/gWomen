import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ManagepeoplePipe } from '../managepeople.pipe'


@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})
export class ManageuserComponent {

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
  onRemove(id){
    this.removeUser(id).subscribe(user =>{
      this.data = this.data.filter((item)=>{
        return item.id != user.id;
      })
    })
  }

  removeUser(id){
    return this.http.delete(this.apiURL + '/' + id)
    .map((res: Response)=> res.json())
  }

}
