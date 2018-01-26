import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
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
    day: 0,
    city:"",
    state:"",
    host:""
  }

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

  onSubmit(){
    this.addEvents(this.event).subscribe( event => {
      this.event = event
      console.log("new event", event)
      this.data = this.data.concat(event)
    })
  }

  addEvents(event){
    return this.http.post(this.apiURL, event)
    .map((res: Response)=> res.json())
  }

  onRemove(id){
    this.removeEvent(id).subscribe(event=>{
      this.data = this.data.filter((item)=>{
        return item.id != event.id;
      })
    })
  }

  removeEvent(id){
    return this.http.delete(this.apiURL + '/' + id)
    .map((res: Response)=> res.json())
  }

  toggleTitle(){
    $('.title1').slideToggle()
  }
}
