import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  const Data = {
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut'
      },
      title: {
        text: 'Industry Distribution',
        align: 'left'
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ]
    }
  };

  return (
    <div>
      <ReactApexChart options={Data.options} series={Data.series} type="donut" />
    </div>
  );
};
export default PieChart;
