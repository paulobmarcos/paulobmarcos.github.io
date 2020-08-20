import clamp from 'lodash/clamp';

const getRangePercentage = (current, min, max, options = {}) => {
  const progress = (current - min) / (max - min);

  if (options.clamp) {
    return clamp(progress, 0, 1);
  }

  return progress;
};

const getRangeValue = (percentage, min, max) => {
  const progress = ((max - min) * percentage) + min;

  return progress;
};

export {
  getRangePercentage,
  getRangeValue,
};
