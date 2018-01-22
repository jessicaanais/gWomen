import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  private apiURL = 'http://localhost:8000/jobs';
  data: any = [{}];

  constructor(private http: Http){
    this.getJobs();
    this.getData2();
  }

  getData2(){
    return this.http.get(this.apiURL)
    .map((res: Response) => res.json())
  }

  getJobs(){
    this.getData2().subscribe(data => {
      console.log("Jobs:", data)
      this.data = data
    })
  }
}
