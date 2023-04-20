import React from 'react';
import { Table } from '@mantine/core';

const feeling = [
  {  morning: 'Good', afternoon: 'Alright', evening: 'Good' },
 
  // add more elements here as needed
];

function CheckIn() {
  const rows = feeling.map((feeling) => (
    <tr key={feeling.name}>
      <td>{feeling.morning}</td>
      <td>{feeling.afternoon}</td>
      <td>{feeling.evening}</td>
    </tr>
  ));

  return (
    <Table >
      <thead >
        <tr>
          <th style={{ textAlign: 'center' }}>Morning</th>
          <th style={{ textAlign: 'center' }}>Afternoon</th>
          <th style={{ textAlign: 'center' }}>Evening</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

export default CheckIn;
