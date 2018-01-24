import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css',
]
})
export class EventsComponent {
  private apiURL = 'http://localhost:8000/events';
  data: any = [{}];
  event = {
    title:"",
    eventlink:"",
    month:"",
    day: 2,
    city:"",
    state:"",
    host:""
  }

  constructor(private http: Http){
    this.getEvents();
    this.getData();
  }

  getData(){
    return this.http.get(this.apiURL)
    .map((res: Response) => res.json())
  }

  getEvents(){
    this.getData().subscribe(data => {
      console.log("Events:",data)
      this.data = data
    })
  }

  onSubmit(){
    this.addEvents(this.event).subscribe( event => {
      this.event = event
      console.log("new event", event)
      this.data.push(event)
    })
  }

  addEvents(event){
    return this.http.post(this.apiURL, event)
    .map((res: Response)=> res.json())
  }

  toggleTitle(){
    $('.title1').slideToggle()
  }
}
