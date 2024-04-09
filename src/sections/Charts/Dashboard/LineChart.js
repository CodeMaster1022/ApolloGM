import { useEffect, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

export const LineChart = ({ width, height, data, data2 }) => {
  //bounds = area inside the graph axis = calculated by substracting
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;
  // Y axis
  // eslint-disable-next-line no-unused-vars
  const [min, max] = d3.extent(data, (d) => d.y);
  const yScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, max || 0])
      .range([boundsHeight, 0]);
  }, [boundsHeight, max]);
  //X axios
  // eslint-disable-next-line no-unused-vars
  const [xMin, xMax] = d3.extent(data, (d) => d.x);
  const xScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, xMax || 0])
      .range([0, boundsWidth]);
  }, [boundsWidth, xMax]);
  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll('*').remove();
    const xAxisGenerator = d3.axisBottom(xScale);
    svgElement
      .append('g')
      .attr('transform', 'translate(0,' + boundsHeight + ')')
      .call(xAxisGenerator);

    const yAxisGenerator = d3.axisLeft(yScale);
    svgElement.append('g').call(yAxisGenerator);
  }, [xScale, yScale, boundsHeight]);
  // Build the line
  const lineBuilder = d3
    .line()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y));
  const linePath = lineBuilder(data);
  const linePath1 = lineBuilder(data2);
  if (!linePath) {
    return null;
  }
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
        <g transform={`translate(${MARGIN.left},${MARGIN.top})`}>
          <path d={linePath} opacity={1} stroke="#9a6fb0" fill="none" strokeWidth={2} />
          <path d={linePath1} opacity={1} stroke="#9a6fb0" fill="none" strokeWidth={2} />
        </g>
        <g ref={axesRef} transform={`translate(${MARGIN.left},${MARGIN.top})`} />
      </svg>
    </div>
  );
};
LineChart.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    })
  ).isRequired,
  data2: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    })
  ).isRequired
};
