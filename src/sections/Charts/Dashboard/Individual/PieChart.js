import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const DonutChart = () => {
  const donutData = [
    { name: '<5', value: 19 },
    { name: '5-9', value: 20 },
    { name: '10-14', value: 19 },
    { name: '15-19', value: 24 },
    { name: '20-24', value: 22 },
    { name: '25-29', value: 29 },
    { name: '30-34', value: 22 },
    { name: '35-39', value: 18 },
    { name: '40-44', value: 23 },
    { name: '45-49', value: 19 },
    { name: '50-54', value: 16 },
    { name: '55-59', value: 19 },
    { name: '60-64', value: 28 },
    { name: '65-69', value: 17 },
    { name: '70-74', value: 20 },
    { name: '75-79', value: 17 },
    { name: '80-84', value: 18 },
    { name: '≥85', value: 21 }
  ];
  const colors = [
    '#8ce8ad',
    '#57e188',
    '#34c768',
    '#2db757',
    '#27acaa',
    '#42c9c2',
    '#60e6e1',
    '#93f0e6',
    '#87d3f2',
    '#4ebeeb',
    '#35a4e8',
    '#188ce5',
    '#542ea5',
    '#724bc3',
    '#9c82d4',
    '#c981b2',
    '#b14891',
    '#ff6d00',
    '#ff810a',
    '#ff9831',
    '#ffb46a',
    '#ff9a91',
    '#ff736a',
    '#f95d54',
    '#ff4136',
    '#c4c4cd'
  ];
  const chRef = useRef();

  useEffect(() => {
    const drawChart = () => {
      const data = donutData;
      const svgContainer = d3.select(chRef.current).node();
      const width = svgContainer.getBoundingClientRect().width;
      const height = width;
      const margin = 15;
      let radius = Math.min(width, height) / 2 - margin;

      const svg = d3
        .select(chRef.current)
        .append('svg')
        .attr('width', '90%')
        .attr('height', '90%')
        .attr('viewBox', '0 0 ' + width + ' ' + width)
        .append('g')
        .attr('transform', 'translate(' + Math.min(width, height) / 2 + ',' + Math.min(width, height) / 2 + ')');

      let pie = d3.pie().value((d) => d.value);
      let data_ready = pie(data);

      svg
        .selectAll('whatever')
        .data(data_ready)
        .enter()
        .append('path')
        .attr(
          'd',
          d3
            .arc()
            .innerRadius(radius / 1.75)
            .outerRadius(radius)
        )
        .attr('fill', (d) => colors[d.index])
        .attr('stroke', '#fff')
        .style('stroke-width', '2')
        .style('opacity', '0.8');

      let legendPosition = d3
        .arc()
        .innerRadius(radius / 1.75)
        .outerRadius(radius);

      svg
        .selectAll('mySlices')
        .data(data_ready)
        .enter()
        .append('g')
        .attr('transform', (d) => `translate(${legendPosition.centroid(d)})`)
        .attr('class', 'legend-g')
        .style('user-select', 'none')
        .append('text')
        .text((d) => d.data.name)
        .style('text-anchor', 'middle')
        .style('font-weight', 700)
        .style('fill', '#222')
        .style('font-size', 14);

      svg
        .selectAll('.legend-g')
        .append('text')
        .text((d) => {
          return d.data.value;
        })
        .style('fill', '#444')
        .style('font-size', 12)
        .style('text-anchor', 'middle')
        .attr('y', 16);
    };

    drawChart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={chRef}></div>;
};

export default DonutChart;
