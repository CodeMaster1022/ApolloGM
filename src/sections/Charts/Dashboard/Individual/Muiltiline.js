import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const series = [
  {
    name: 'NAV',
    data: [
      { category: 'Year1', value: Math.random() },
      { category: 'Year2', value: Math.random() },
      { category: 'Year3', value: Math.random() },
      { category: 'Year4', value: Math.random() },
      { category: 'Year5', value: Math.random() },
      { category: 'Year6', value: Math.random() }
    ]
  },
  {
    name: 'IRR',
    data: [
      { category: 'Year1', value: Math.random() },
      { category: 'Year2', value: Math.random() },
      { category: 'Year3', value: Math.random() },
      { category: 'Year4', value: Math.random() },
      { category: 'Year5', value: Math.random() },
      { category: 'Year6', value: Math.random() }
    ]
  }
];

const Multiline = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" type="category" allowDuplicatedCategory={false} />
        <YAxis dataKey="value" />
        <Tooltip />
        <Legend />
        {series.map((s) => (
          <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Multiline;
