import ReactApexChart from 'react-apexcharts';
export function GDChart() {
  const Data = {
    series: [
      {
        data: [400, 430, 448, 470, 540, 580]
      }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['North America', 'Europe', 'Asia', 'South America', 'Australia', 'Africa']
      }
    }
  };

  return <ReactApexChart options={Data.options} series={Data.series} type="bar" height={450} />;
}
