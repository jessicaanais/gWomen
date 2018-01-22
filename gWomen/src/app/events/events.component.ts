import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css',
]
})
export class EventsComponent {
  private apiURL = 'http://localhost:8000/events';
  data: any = [{}];

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
}
