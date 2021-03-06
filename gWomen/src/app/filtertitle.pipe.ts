import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtertitle'
})
export class FiltertitlePipe implements PipeTransform {

  transform(events: any, term: any): any {
      if(term === undefined) return events;
      return events.filter(function(event){
        return event.title.toLowerCase().includes(term.toLowerCase())
      })
    }

}
