import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text'
})
export class TextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let data:string;
   if(data){
    data = value.toString();
    if(data.length>10)
      data = data.substr(0,10)+"...."
   }
    
    return data;
  }

}
