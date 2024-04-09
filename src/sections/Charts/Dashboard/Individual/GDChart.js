import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList, Legend, ResponsiveContainer } from 'recharts';

const GDChart = (props) => {
  const { data, labels } = props;
  const [selectedBarData, setSelectedBarData] = useState(null);
  const [company, setCompany] = useState('');
  const [number, setNumber] = useState('');
  const handleBarClick = (data, index) => {
    setSelectedBarData(data);
    console.log(index);
  };
  useEffect(() => {
    if (selectedBarData) {
      setCompany(selectedBarData.value);
      setNumber(selectedBarData.np);
    }
  }, [selectedBarData]);

  const legendPayload =
    labels && labels.length >= 2
      ? [
          { value: `${labels[0]} ${company}`, type: 'square', id: 'value', color: '#008080' },
          { value: `${number} of ${labels[1]}`, type: 'square', id: 'name', color: '#74CDFF' }
        ]
      : [];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={400} height={300} data={data} layout="vertical" margin={{ top: 30, right: 30, left: 30 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" tick={null} />
        <YAxis dataKey="name" type="category" orientation="left" />
        {/* <Tooltip /> */}
        <Legend payload={legendPayload} />
        <Bar
          dataKey="value"
          fill="#008080"
          radius={[0, 15, 15, 0]}
          barSize={30}
          label={{ position: 'insideRight', fill: 'white' }}
          onClick={handleBarClick}
        >
          {/* <LabelList dataKey="name" position="insideLeft" /> */}
          <LabelList dataKey="np" position="right" fill="#74CDFF" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

GDChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.number,
      np: PropTypes.number
    })
  ).isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default GDChart;
