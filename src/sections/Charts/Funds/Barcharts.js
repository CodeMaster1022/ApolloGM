import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: '',
    Invested: -1320,
    Profit: 0
  },
  {
    name: '',
    Invested: -3000,
    Profit: 1398
  },
  {
    name: '',
    Invested: -2000,
    Profit: 0
  },
  {
    name: '',
    Invested: -2780,
    Profit: 0
  },
  {
    name: '',
    Invested: -890,
    Profit: 800
  },
  {
    name: '',
    Invested: 0,
    Profit: 3800
  },
  {
    name: '',
    Invested: 0,
    Profit: 4300
  },
  {
    name: '',
    Invested: 0,
    Profit: 2400
  },
  {
    name: '',
    Invested: 0,
    Profit: 1398
  },
  {
    name: '',
    Invested: 0,
    Profit: 800
  },
  {
    name: '',
    Invested: 0,
    Profit: 1908
  },
  {
    name: '',
    Invested: 0,
    Profit: 800
  },
  {
    name: '',
    Invested: 0,
    Profit: 800
  },
  {
    name: '',
    Invested: 0,
    Profit: 4300
  }
];

export default function IPMixChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        stackOffset="sign"
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="Profit" fill="#008080" stackId="stack" radius={[15, 15, 0, 0]} />
        <Bar dataKey="Invested" fill="#CCE6E6" stackId="stack" radius={[15, 15, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
