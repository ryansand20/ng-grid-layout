import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gridItemLeft'
})
export class GridItemLeftPipe implements PipeTransform {

  transform(columnPosition: number, gridWidth: number): string {
    let percentageOfGridWidth = 0;

    if (columnPosition > 0 && gridWidth > 0) {
      percentageOfGridWidth = (columnPosition / gridWidth) * 100
    }

    return `${Math.round(percentageOfGridWidth)}%`;
  }

}
