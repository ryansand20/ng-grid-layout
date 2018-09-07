import { GridItemLeftPipe } from './grid-item-left.pipe';

describe('GridItemLeftPipe', () => {
  let pipe: GridItemLeftPipe;

  beforeEach(() => {
    pipe = new GridItemLeftPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('calculates lefts properly', () => {
    expect(pipe.transform(5, 10)).toBe('50%');
    expect(pipe.transform(1, 3)).toBe('33%');
    expect(pipe.transform(1, 100)).toBe('1%');
    expect(pipe.transform(0, 50)).toBe('0%');
    expect(pipe.transform(50, 0)).toBe('0%');
    expect(pipe.transform(5, -5)).toBe('0%');
    expect(pipe.transform(-5, 5)).toBe('0%');
    expect(pipe.transform(undefined, undefined)).toBe('0%');
  });

});
