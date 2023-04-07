import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, filter: string, propName: string):any {
    if (value.length == 0 || filter == ''){
        return value
    };
    
    const resultArray = [];
    for(const item of value){
  
      if(item[propName] === filter){
        resultArray.push(item)
      }
    }

    console.log(resultArray)
    return resultArray;
  }
}

