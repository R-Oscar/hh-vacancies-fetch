import React from 'react';

import DumbApp from '../presentational/App';

import data from '../../tempdata';

export default function App() {
  return (
    <>
      <DumbApp data={data} />
    </>
  );
}
