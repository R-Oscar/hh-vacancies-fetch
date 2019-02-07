import React from 'react';

import DumbApp from '../presentational/App';

import data from '../../tempdata';
import { stripHtmlTags } from '../../utils';

export default function App() {
  const processedData = data.map(({ id, name, salary, requirement }) => ({
    id,
    name,
    salary: salary || 'Не указан',
    requirement: stripHtmlTags(requirement)
  }));

  return (
    <>
      <DumbApp data={processedData} />
    </>
  );
}
