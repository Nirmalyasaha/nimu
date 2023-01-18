import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(item:any[],searchT:string): any[] {
    if(!item){
      return []
    }
    if(!searchT){
      return item
    }
    return item.filter((res:any)=>{
      return res.name1.toLowerCase().includes(searchT.toLowerCase())
    })
  }

}
