import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastform',
  pure: false
})
export class PipesPipe implements PipeTransform {

  transform(value: any, array:any, index:number): boolean {
    if( value.controls[`item${index}`].value && array[index].label == 'Other' ){
      return true;
    }else{
      return false;
    }
  }

}
