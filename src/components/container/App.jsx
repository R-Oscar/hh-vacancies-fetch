import React from 'react';

import DumbApp from '../presentational/App';

import data from '../../tempdata';
import { stripHtmlTags } from '../../utils';

export default function App() {
  const processedTableData = data.map(
    ({ id, name, employer, salary, requirement }) => ({
      id,
      name,
      employer,
      salary: salary || 'Не указан',
      requirement: stripHtmlTags(requirement)
    })
  );

  const processedChartData = [
    {
      id: 'salary',
      data: data.map(({ employer, salary }) => ({
        x: employer,
        y: salary || 0
      }))
    }
  ];

  return (
    <>
      <DumbApp tableData={processedTableData} chartData={processedChartData} />
    </>
  );
}
