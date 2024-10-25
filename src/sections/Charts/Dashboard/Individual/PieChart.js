import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  const Data = {
    series: [22.8, 40.8, 25, 10],
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
              width: 300
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ],
      legend: {
        position: 'bottom'
      },
      labels: ['Technology', 'Healthcare', 'Pharmaceutical', 'Biotech']
    }
  };

  return (
    <div>
      <ReactApexChart options={Data.options} series={Data.series} type="donut" height={390} />
    </div>
  );
};
export default PieChart;
