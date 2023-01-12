import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allShoes: [], searchKey:string, propName:string): any [] {
    const result:any = []
    if(!allShoes || searchKey=="" || propName =="") {
      return allShoes
    }
    allShoes.forEach((shoe:any)=>{
      if (shoe[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
        result.push(shoe)
      }
    })
    return result;
  }

}
