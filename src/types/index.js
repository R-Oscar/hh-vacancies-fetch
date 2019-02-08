import { arrayOf, shape, string, oneOfType, number } from 'prop-types';

export const tableType = arrayOf(
  shape({
    id: string,
    name: string,
    employer: string,
    salary: oneOfType([string, number]),
    requirement: string
  })
);

export const chartType = arrayOf(
  shape({
    employer: string,
    from: oneOfType([string, number]),
    to: oneOfType([string, number])
  })
);
