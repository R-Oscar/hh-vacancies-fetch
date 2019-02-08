import React, { useState, useEffect } from 'react';

import DumbApp from '../presentational/App';

import { stripHtmlTags } from '../../utils';

export default function App() {
  const [tableData, setTableData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [searchQuery, changeSearchQuery] = useState('');
  const [resultsVisible, setResultsVisible] = useState(false);

  async function fetchVacancies(text) {
    const data = await fetch(
      `https://api.hh.ru/vacancies?area=99&text=${text}`
    );
    const response = await data.json();

    setTableData(
      response.items.map(({ id, name, employer, salary, snippet }) => ({
        id,
        name,
        employer: employer.name,
        salary: salary ? salary.from || 'Не указан' : 'Не указан',
        requirement: stripHtmlTags(snippet.requirement) || 'Не указаны'
      }))
    );

    setChartData(
      response.items
        .map(({ id, employer, salary }) => ({
          employer: `${employer.name}
          (${id})`,
          from: salary ? salary.from || 0 : 0,
          to: salary && salary.to ? salary.to - salary.from || 0 : 0
        }))
        .filter(d => d.from !== 0 || d.to !== 0)
    );
  }

  function updateSearchQuery(event) {
    changeSearchQuery(event.target.value);
  }

  async function handleUpdateResultsButton(event) {
    event.preventDefault();
    await fetchVacancies(searchQuery);
    setResultsVisible(true);
  }

  useEffect(() => {
    fetchVacancies();
  }, []);

  return (
    <>
      <DumbApp
        searchQuery={searchQuery}
        updateSearchQuery={updateSearchQuery}
        tableData={tableData}
        chartData={chartData}
        handleUpdateResultsButton={handleUpdateResultsButton}
        resultsVisible={resultsVisible}
      />
    </>
  );
}
