import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpeople'
})
export class FilterpeoplePipe implements PipeTransform {

  transform(users: any, term: any): any {
      if(term === undefined) return users;
      return users.filter(function(user){
        return user.firstname.toLowerCase().includes(term.toLowerCase())
      })
    }

}
