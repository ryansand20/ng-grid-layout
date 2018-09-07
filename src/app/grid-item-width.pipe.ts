import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gridItemWidth'
})
export class GridItemWidthPipe implements PipeTransform {

  transform(columnSpan: number, gridWidth: number): string {
    let percentageOfGridWidth = 0;

    if (columnSpan > 0 && gridWidth > 0) {
      percentageOfGridWidth = (columnSpan / gridWidth) * 100
    }

    return `${Math.round(percentageOfGridWidth)}%`;
  }
}
