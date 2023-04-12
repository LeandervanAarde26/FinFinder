import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
      if(value.length === 0 || value.length === null || value === ''){
        console.log(value)
        return value;
      }

      console.log(value)
      const resArr = [];
      for(const item of value){
          if(item[propName].toLocaleLowerCase().includes(filterString.toLocaleLowerCase())){
              resArr.push(item);
          
          }
      }
      return resArr;
  }

}
