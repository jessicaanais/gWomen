import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterjobs'
})
export class FilterjobsPipe implements PipeTransform {

  transform(jobs: any, term: any): any {
      if(term === undefined) return jobs;
      return jobs.filter(function(job){
        return job.position.toLowerCase().includes(term.toLowerCase())
      })
    }

}
