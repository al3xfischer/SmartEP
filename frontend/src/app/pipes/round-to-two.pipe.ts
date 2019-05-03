import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundToTwo'
})
export class RoundToTwoPipe implements PipeTransform {

  transform(value: number): number {
    return parseFloat(value.toFixed(2));
  }

}
