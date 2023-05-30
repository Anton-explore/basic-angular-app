import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let pipe: DurationPipe;

  beforeEach(() => {
    pipe = new DurationPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform duration of less than an hour correctly', () => {
    const duration = 40;
    const transformed = pipe.transform(duration);
    expect(transformed).toBe('40 min');
  });

  it('should transform duration of an hour or more correctly', () => {
    const duration = 60;
    const transformed = pipe.transform(duration);
    expect(transformed).toBe('1h 00 min');
  });

  it('should pad minutes with leading zeros for durations less than an hour', () => {
    const duration = 5;
    const transformed = pipe.transform(duration);
    expect(transformed).toBe('05 min');
  });

  it('should not pad minutes with leading zeros for durations of an hour or more', () => {
    const duration = 90;
    const transformed = pipe.transform(duration);
    expect(transformed).toBe('1h 30 min');
  });
  //   it('should format the duration more than hour correctly', () => {
  //   expect(component.formattedDuration).toBe('2h 00 min');
  // });

  // it('should format the duration less than hour correctly', () => {
  //   component.course = mockedCourse1;
  //   component.ngOnInit();
  //   expect(component.formattedDuration).toBe('40 min');
  // });
});
