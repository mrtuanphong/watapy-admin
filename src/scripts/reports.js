// Calendar:
// =====================================

$(function() {
  // Set default values to the last 7 days:
  var start = moment().startOf('month');
  var end = moment().endOf('month');

  // Show the content:
  function cb(start, end) {
      $('#reportrange').val(start.format('DD/MM/YYYY') + ' - ' + end.format('DD/MM/YYYY'));
  }

  // Setup for picking dates:
  $('#reportrange').daterangepicker({
      startDate: start,
      endDate: end,
      opens: 'left',
      ranges: {
        'Hôm nay': [moment(), moment()],
        'Hôm qua': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        '7 ngày trước': [moment().subtract(6, 'days'), moment()],
        '30 ngày trước': [moment().subtract(29, 'days'), moment()],
        'Tháng này': [moment().startOf('month'), moment().endOf('month')],
        'Tháng trước': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      },
      locale: {
        format: 'DD/MM/YYYY'
      }
  }, cb);

  cb(start, end);
});


// Charts: https://www.chartjs.org/
// =====================================

//chart 1:
var chart1 = document.getElementById('chart-1').getContext('2d');
var myChart = new Chart(chart1, {
  type: 'bar',
  data: {
    labels: ['14-02', '15-02', '16-02', '17-02', '18-02', '19-02', '20-02'],
    datasets: [
      {
        label: 'Cashback',
        data: [12,19,3,5,2,3,8],
        backgroundColor: [
          '#36A2EB',
          '#36A2EB',
          '#36A2EB',
          '#36A2EB',
          '#36A2EB',
          '#36A2EB',
          '#36A2EB'
        ]
      },
      {
        label: 'DT quản lý CTV',
        data: [4,9,12,6,1,4,6],
        backgroundColor: [
          '#01E0C5',
          '#01E0C5',
          '#01E0C5',
          '#01E0C5',
          '#01E0C5',
          '#01E0C5',
          '#01E0C5'
        ]
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

// Chart 2 (Doanh thu he thong):
// =====================================

var chart2 = document.getElementById('chart-2').getContext('2d');
var chart = new Chart(chart2, {
  // The type of chart we want to create
  type: 'line',
  //fillColor: undefined,

  // The data for our dataset
  data: {
    labels: ['14-02', '15-02', '16-02', '17-02', '18-02', '19-02', '20-02'],
    datasets: [
      {
        label: 'DT miền Bắc',
        backgroundColor: '#ff6384',
        borderColor: '#ff6384',
        data: [16000000, 20500000, 15080000, 24000000, 21500000, 17000000, 19000000],
        fill: false
      },
      {
        label: 'DT miền Trung',
        backgroundColor: '#4CC0C0',
        borderColor: '#4CC0C0',
        data: [4000000, 3000000, 5080000, 6000000, 3500000, 3000000, 4000000],
        fill: false
      },
      {
        label: 'DT miền Nam',
        backgroundColor: '#5A4B7B',
        borderColor: '#5A4B7B',
        data: [9000000, 23000000, 15080000, 11000000, 600000, 12000000, 8000000],
        fill: false
      }
    ]
  },

  // Configuration options go here
  options: {
    scales : {
      yAxes : [{
          ticks : {
              beginAtZero : true,
              suggestedMax: 30000000
          }   
      }]
    }
  }
});


// Chart 3 (Thanh vien moi):
// =====================================

var chart3 = document.getElementById('chart-3').getContext('2d');
var chart = new Chart(chart3, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ['14-02', '15-02', '16-02', '17-02', '18-02', '19-02', '20-02'],
    datasets: [{
      label: 'Thành viên mới',
      backgroundColor: '#ff6384',
      borderColor: '#ff6384',
      data: [3, 6, 5, 9, 12, 15, 20],
      fill: false
    }]
  },

  // Configuration options go here
  options: {
    scales : {
      yAxes : [{
          ticks : {
              beginAtZero : true,
              suggestedMax: 30
          }   
      }]
    }
  }
});


// Chart 4 (Don hang):
// =====================================

var chart4 = document.getElementById('chart-4').getContext('2d');
var chart = new Chart(chart4, {
  // The type of chart we want to create
  type: 'line',
  //fillColor: undefined,

  // The data for our dataset
  data: {
    labels: ['14-02', '15-02', '16-02', '17-02', '18-02', '19-02', '20-02'],
    datasets: [{
      label: 'Số đơn hàng',
      backgroundColor: '#4CC0C0',
      borderColor: '#4CC0C0',
      data: [2, 12, 4, 10, 2, 9, 3],
      fill: false
    }]
  },

  // Configuration options go here
  options: {
    scales : {
      yAxes : [{
          ticks : {
              beginAtZero : true,
              suggestedMax: 20
          }   
      }]
    }
  }
});