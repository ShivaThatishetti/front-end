import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(mobiles: any[], searchItem:string): any[]
  {
    if(!mobiles || !searchItem)
    {
      return mobiles
    }
    else
    {
      return mobiles.filter(mobilesObj=>mobilesObj.Model.toLowerCase().indexOf(searchItem.toLowerCase())!=-1)
    }
  }

}
