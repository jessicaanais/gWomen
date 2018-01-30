import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterstate'
})
export class FilterstatePipe implements PipeTransform {

  transform(jobs: any, term: any): any {
      if(term === undefined) return jobs;
      return jobs.filter(function(job){
        return job.location.toLowerCase().includes(term.toLowerCase())
      })
    }

}
