import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { FilterjobsPipe } from '../filterjobs.pipe';
import { FilterstatePipe } from '../filterstate.pipe';

import 'rxjs/add/operator/map';
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-userjobs',
  templateUrl: './userjobs.component.html',
  styleUrls: ['./userjobs.component.css']
})
export class UserjobsComponent implements OnInit {

  private apiURL = 'http://localhost:8000/jobs';
  data: any = [{}];

  constructor(private http: Http){
    this.getJobs();
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

  ngOnInit() {
  }

}
