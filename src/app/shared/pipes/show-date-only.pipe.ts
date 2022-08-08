import { Pipe, PipeTransform } from "@angular/core";
import * as dayjs from "dayjs";

@Pipe({
  name: 'showDateOnly'
})
export class ShowDateOnlyPipe implements PipeTransform {
  transform(value: string): string {

    if(dayjs(value).isValid()){

      return dayjs(value).format('MMM DD,YYYY');
    }
    return '';
  }

}

