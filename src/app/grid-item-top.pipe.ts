import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gridItemTop'
})
export class GridItemTopPipe implements PipeTransform {

  transform(rowPosition: number, gridRowHeightPixels: number): string {
    let gridItemTop = 0;

    if (rowPosition > 0 && gridRowHeightPixels > 0) {
      gridItemTop = rowPosition * gridRowHeightPixels;
    }

    return `${gridItemTop}px`;
  }

}
