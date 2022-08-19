import clamp from 'lodash-es/clamp';

const getRangePercentage = (current: number, min: number, max: number, options: { clamp?: boolean } = {}) => {
  const progress = (current - min) / (max - min);

  if (options.clamp) {
    return clamp(progress, 0, 1);
  }

  return progress;
};

const getRangeValue = (percentage: number, min: number, max: number, options: { clamp?: boolean } = {}) => {
  const progress = (max - min) * percentage + min;

  if (options.clamp) {
    return clamp(progress, min, max);
  }

  return progress;
};

export { getRangePercentage, getRangeValue };
