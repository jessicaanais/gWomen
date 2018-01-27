import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(events: any, term: any): any {
      if(term === undefined) return events;
      return events.filter(function(event){
        return event.state.toLowerCase().includes(term.toLowerCase())
      })
    }
}
