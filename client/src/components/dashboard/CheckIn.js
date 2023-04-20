import React from 'react';
import { Table } from '@mantine/core';

const feeling = [
  { morning: "I'm feeling good today", afternoon: "I'm feeling alright", evening: "I'm feeling a bit lonely" },
  // add more elements here as needed
];

function CheckIn() {
  const rows = feeling.map((feeling, index) => (
    <tr key={index}>
      <td style={{ textAlign: 'center', fontSize: '20px' }}>{feeling.morning}</td>
      <td style={{ textAlign: 'center', fontSize: '20px' }}>{feeling.afternoon}</td>
      <td style={{ textAlign: 'center', fontSize: '20px' }}>{feeling.evening}</td>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th style={{ textAlign: 'center', fontSize: '24px' }}>Morning</th>
          <th style={{ textAlign: 'center', fontSize: '24px' }}>Afternoon</th>
          <th style={{ textAlign: 'center', fontSize: '24px' }}>Evening</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

export default CheckIn;
