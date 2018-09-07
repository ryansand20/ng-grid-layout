import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gridItemHeight'
})
export class GridItemHeightPipe implements PipeTransform {

  transform(rowSpan: number, gridRowHeightPixels: number): string {
    let gridItemHeight = 0;

    if (rowSpan > 0 && gridRowHeightPixels > 0) {
      gridItemHeight = rowSpan * gridRowHeightPixels;
    }

    return `${gridItemHeight}px`;
  }

}
