import React from 'react';
import PropTypes from 'prop-types';
import { ComposedChart, Line, Bar, XAxis, YAxis, Rectangle, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MultilineChart = (props) => {
  const { data } = props;
  return (
    <ResponsiveContainer width="100%" height="80%">
      <ComposedChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 25,
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
        <Bar
          dataKey="Contribution"
          fill="#CCE6E6"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
          radius={[15, 15, 0, 0]}
          barSize={40}
        />
        <Bar
          dataKey="Distribution"
          fill="#A1C2C2"
          activeBar={<Rectangle fill="pink" stroke="purple" />}
          radius={[15, 15, 0, 0]}
          barSize={40}
        />
        <Line dataKey="Gross MOIC" stroke="#004D4D" fill="#8884d8" />
        <Line type="monotone" dataKey="Net TVPI" stroke="#008080" />
        <Line type="monotone" dataKey="Net DPI" stroke="#008080" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

MultilineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.number,
      np: PropTypes.number
    })
  ).isRequired
};

export default MultilineChart;
