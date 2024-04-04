import ReactApexChart from 'react-apexcharts';
export function MultilineChart() {
  const Data = {
    series: [
      {
        name: 'IRR',
        data: [28, 29, 33, 36, 32, 32, 33]
      },
      {
        name: 'NAV',
        data: [12, 11, 14, 18, 17, 13, 13]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ['#77B6EA', '#545454'],
      dataLabels: {
        enabled: true
      },
      stroke: {
        width: [1, 1, 4]
      },
      title: {
        text: 'Historical Performance',
        align: 'left'
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: ['', 'Year1', 'Year2', 'Year3', 'Year4', 'Year5', 'Year6'],
        title: {
          text: 'Month'
        }
      },
      yaxis: {
        min: 5,
        max: 40
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    }
  };

  return <ReactApexChart options={Data.options} series={Data.series} type="line" height={450} />;
}
