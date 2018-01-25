import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  private apiURL = 'http://localhost:8000/jobs';
  data: any = [{}];
  job = {
    position:"",
    description:"",
    link:"",
    contact:""
  }

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

  onSubmit(){
    this.addJobs(this.job).subscribe(job => {
      this.job = job
      console.log('new job', job)
      this.data = this.data.concat(job)
    })
  }
  addJobs(job){
    return this.http.post(this.apiURL, job)
     .map((res: Response) => res.json())
  }

  toggleTitle(){
    $('.title1').slideToggle()
  }
}
