var datajson = new Array();
var datajson2 = new Array();
var datajsonraw = new Array();
var ctx = document.getElementById('myChart1').getContext('2d');
var ctx2 = document.getElementById('myChart2').getContext('2d');
var ctx3 = document.getElementById('myChart3').getContext('2d');
var ctx4 = document.getElementById('myChart4').getContext('2d');
var gradient1 = ctx.createLinearGradient(0,0, 0,400);
    gradient1.addColorStop(0, '#5CB270');
    gradient1.addColorStop(1, '#82C26E');
var gradient2 = ctx.createLinearGradient(0,0, 0,400);
    gradient2.addColorStop(0, '#e85d04');
    gradient2.addColorStop(1, '#f48c06');
var gradient3 = ctx.createLinearGradient(0,0, 0,400);
    gradient3.addColorStop(0, '#0077b6');
    gradient3.addColorStop(1, '#00b4d8');
//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------
const labels = [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8'
  ];
//-----------------------------------------------
//-----------------------------------------------
if (window.Promise) {
    console.log('Promise found');
  
    var promise = new Promise(function(resolve, reject) {
      var request = new XMLHttpRequest();
  
      request.open('GET', 'Data_MWh.json');
      request.onload = function() {
        if (request.status == 200) {
          resolve(request.response); // we got data here, so resolve the Promise
        } else {
          reject(Error(request.statusText)); // status is not 200 OK, so reject
        }
      };
  
      request.onerror = function() {
        reject(Error('Error fetching data.')); // error occurred, reject the  Promise
      };
  
      request.send(); //send the request
    });
  
    console.log('Asynchronous request made.');
  
    promise.then(function(data) {
      console.log('Got data! Promise fulfilled.');
      datajsonraw = JSON.parse(data);
      datajson = datajsonraw.nam2021;
      datajson2 = datajsonraw.nam2020;
      var myChart = new Chart(ctx,{
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Điện mặt trời',
                data: datajson,
                backgroundColor: gradient2,
                parsing: {
                    yAxisKey: 'dmt'
                }
            }, {
                label: 'Điện gió',
                data: datajson,
                backgroundColor: gradient1,
                parsing: {
                    yAxisKey: 'dg'
                }
            }, {
                label: 'Thủy điện',
                data: datajson,
                backgroundColor: gradient3,
                parsing: {
                    yAxisKey: 'td'
                }
            }]
        },
        options: {
            events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
            plugins: {
              tooltip: {
                // Tooltip will only receive click events
                events: ['mousemove']
              }
            }
          }
      });

//-----------------------------------------
//-----------------------------------------
var myChart2 = new Chart(ctx2,{
  type: 'line',
  data: {
      labels,
      datasets: [{
          label: 'Điện mặt trời',
          data: datajson2,
          fill: true,
          backgroundColor: 'rgba(232, 93, 4, 0.2)',
          borderColor: 'rgb(232, 93, 4)',
          tension: 0.15,
          parsing: {
              yAxisKey: 'dmt'
          }
      }, {
          label: 'Điện gió',
          data: datajson2,
          fill: true,
          backgroundColor: 'rgba(92, 178, 112, 0.2)',
          borderColor: 'rgb(92, 178, 112)',
          tension: 0.15,
          parsing: {
              yAxisKey: 'dg'
          }
      }, {
          label: 'Thủy điện',
          data: datajson2,
          fill: true,
          backgroundColor: 'rgba(0, 119, 182, 0.2)',
          borderColor: 'rgb(0, 119, 182)',
          tension: 0.15,
          parsing: {
              yAxisKey: 'td'
          }
      }]
  },
  options: {
      events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
      plugins: {
        tooltip: {
          // Tooltip will only receive click events
          events: ['mousemove']
        }
      }
    }
});


    }, function(error) {
      console.log('Promise rejected.');
      console.log(error.message);
    });
  } else {
    console.log('Promise not available');
  }

//-----------------------------------------------
 //-----------------------------------------------
const datavalue1 = [25,25,50];
const datavalue2 = [40,15,45];
const data3 = {
  labels: [
    'Điện mặt trời',
    'Điện gió',
    'Thủy điện'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: datavalue2,
    boderRadius:0,
    radius: '100%',
    backgroundColor: [
      'rgb(232, 93, 4)',
      'rgb(92, 178, 112)',
      'rgb(0, 119, 182)'
    ],
    hoverOffset: 4
  }]
};
const config3 = {
  type: 'doughnut',
  data: data3,
};
var myChart3 = new Chart(ctx3,config3);
myChart3.options.plugins.legend.position = 'left';
myChart3.update();

//     type: 'bar',
//     data: {
//         labels: ['Quảng Bình', 'Quảng Trị', 'TT Huế', 'Đà Nẵng', 'Quảng Ngãi', 'Bình Đinh', 'Phú Yên', 'Kon Tum', 'Gia Lai','Đăk Lăk', 'Đăk Nông'],
//         datasets: [
//             {
//                 label: 'Kế hoạch',
//                 data: [12, 19, 3, 5, 2, 3, 14, 5, 9, 16, 20],
//                 backgroundColor: [
//                     'rgb(47, 93, 98)',
//                     'rgb(47, 93, 98)',
//                     'rgb(47, 93, 98)',
//                     'rgb(47, 93, 98)',
//                     'rgb(47, 93, 98)',
//                     'rgb(47, 93, 98)'
//                 ],
//                 borderWidth: 2,
//                 borderColor: [
//                     'rgb(47, 93, 98)',
//                     'rgb(47, 93, 98)',
//                     'rgb(47, 93, 98)',
//                     'rgb(47, 93, 98)',
//                     'rgb(47, 93, 98)',
//                     'rgb(47, 93, 98)'

//                 ],
//                 color: 'rgb(255,255,255)'    
//             }, 
//             {
//                 label: 'Thực hiện',
//                 data: [15, 15, 20, 9, 14, 30, 13, 23, 10, 8, 28],
//                 backgroundColor: [
//                     'rgb(94, 139, 126)',
//                     'rgb(94, 139, 126)',
//                     'rgb(94, 139, 126)',
//                     'rgb(94, 139, 126)',
//                     'rgb(94, 139, 126)',
//                     'rgb(94, 139, 126)'
//                 ],
//                 borderWidth: 2,
//                 borderColor: [
//                     'rgb(94, 139, 126)',
//                     'rgb(94, 139, 126)',
//                     'rgb(94, 139, 126)',
//                     'rgb(94, 139, 126)',
//                     'rgb(94, 139, 126)',
//                     'rgb(94, 139, 126)'

//                 ],
//                 color: 'rgb(255,255,255)'

//             },
//         ],
//         options: {
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             },
//             animation: {
//                 onComplete: () => {
//                 delayed = true;
//                 },
//                 delay: (context) => {
//                 let delay = 0;
//                 if (context.type === 'data' && context.mode === 'default' && !delayed) {
//                     delay = context.dataIndex * 300 + context.datasetIndex * 100;
//                 }
//                 return delay;
//                 },
//             },
//         }
// }
// }
// );
