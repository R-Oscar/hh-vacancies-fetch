import React, { useState, useEffect } from 'react';

import DumbApp from '../presentational/App';

// import data from '../../tempdata';
import { stripHtmlTags } from '../../utils';

export default function App() {
  const [tableData, setTableData] = useState([]);
  const [chartData, setChartData] = useState([]);

  // const processedTableData = data.map(
  //   ({ id, name, employer, salary, requirement }) => ({
  //     id,
  //     name,
  //     employer,
  //     salary: salary || 'Не указан',
  //     requirement: stripHtmlTags(requirement)
  //   })
  // );

  // const processedChartData = [
  //   {
  //     id: 'salary',
  //     data: data.map(({ employer, salary }) => ({
  //       x: employer,
  //       y: salary || 0
  //     }))
  //   }
  // ];

  async function fetchVacancies() {
    const data = await fetch(
      'https://api.hh.ru/vacancies?area=99&text=JavaScript'
    );
    const response = await data.json();

    setTableData(
      response.items.map(({ id, name, employer, salary, snippet }) => ({
        id,
        name,
        employer: employer.name,
        salary: salary ? salary.from : 'Не указан',
        requirement: stripHtmlTags(snippet.requirement)
      }))
    );

    console.log({
      id: 'salary',
      data: response.items.map(({ id, employer, salary }) => ({
        x: `${employer.name} (${id})`,
        y: salary ? salary.from : 0
      }))
    });

    setChartData([
      {
        id: 'salary',
        data: response.items.map(({ id, employer, salary }) => ({
          x: `${employer.name}
          (${id})`,
          y: salary ? salary.from || 0 : 0
        }))
      }
    ]);
  }

  useEffect(() => {
    fetchVacancies();
  }, []);

  return (
    <>
      <DumbApp tableData={tableData} chartData={chartData} />
    </>
  );
}
