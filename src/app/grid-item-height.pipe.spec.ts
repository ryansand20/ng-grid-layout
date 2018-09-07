import { GridItemHeightPipe } from './grid-item-height.pipe';

describe('GridItemHeightPipe', () => {
  let pipe: GridItemHeightPipe;

  beforeEach(() => {
    pipe = new GridItemHeightPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('calculates widths properly', () => {
    expect(pipe.transform(5, 100)).toBe('500px');
    expect(pipe.transform(1, 3)).toBe('3px');
    expect(pipe.transform(3, 1)).toBe('3px');
    expect(pipe.transform(0, 0)).toBe('0px');
    expect(pipe.transform(5, -5)).toBe('0px');
    expect(pipe.transform(-5, 5)).toBe('0px');
    expect(pipe.transform(undefined, undefined)).toBe('0px');
  });
});
