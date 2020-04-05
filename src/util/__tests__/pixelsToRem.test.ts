import pixelsToRem from '../pixelsToRem';

describe('pixelsToRem', () => {
  it('should return 1', () => {
    expect(pixelsToRem(16)).toStrictEqual(1);
  });
});
