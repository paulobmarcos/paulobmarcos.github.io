const clamp = (number: number, min: number, max: number) => Math.min(Math.max(number, min), max);

const getProgressPercentage = (current: number, min: number, max: number, options?: { clamp?: boolean }) => {
  const { clamp: shouldClamp = false } = options ?? {};

  const progress = (current - min) / (max - min);

  if (shouldClamp) {
    return clamp(progress, 0, 1);
  }

  return progress;
};

const getProgressAbsolute = (percentage: number, min: number, max: number) => {
  const progress = (max - min) * percentage + min;

  return progress;
};

export { getProgressPercentage, getProgressAbsolute };
