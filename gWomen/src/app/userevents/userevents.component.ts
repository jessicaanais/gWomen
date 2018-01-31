import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { FilterPipe } from '../filter.pipe';
import { FiltertitlePipe } from '../filtertitle.pipe'

import 'rxjs/add/operator/map';
declare var jquery:any;
declare var $:any;


@Component({
  selector: 'app-userevents',
  templateUrl: './userevents.component.html',
  styleUrls: ['./userevents.component.css']
})
export class UsereventsComponent implements OnInit {

  private apiURL = 'http://localhost:8000/events';
  data: any = [{}];

  constructor(private http: Http){
    this.getEvents();
  }

  getData(){
    return this.http.get(this.apiURL)
    .map((res: Response) => res.json())
  }

  getEvents(){
    this.getData().subscribe(data => {
      this.data = data
    })
  }

  ngOnInit() {
  }

}
