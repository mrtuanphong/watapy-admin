// https://www.chartjs.org/

//chart 1:
var chart1 = document.getElementById('chart-1').getContext('2d');
var myChart = new Chart(chart1, {
  type: 'bar',
  data: {
    labels: [
      'Red',
      'Blue',
      'Yellow',
      'Green',
      'Purple',
      'Orange'
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [
          12,
          19,
          3,
          5,
          2,
          3
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});

//chart 2:
var chart2 = document.getElementById('chart-2').getContext('2d');
var chart = new Chart(chart2, {
  // The type of chart we want to create
  type: 'line',
  //fillColor: undefined,

  // The data for our dataset
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
      fill: false
    }]
  },

  // Configuration options go here
  options: {}
});