const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const xValues = [50,60,70,80,90,100,110,120,130,140,150];
const yValues = [7,8,8,9,9,9,10,11,14,14,15];

var options = {
    chart: {
      height: 280,
      type: "area"
    },
    colors:['#8A74F9', '#8A74F9', '#8A74F9'],
    dataLabels: {
      enabled: false
    },
    series: [
      {
        name: "أستخدام",
        data: [50, 53, 250, 200, 250, 200, 150,300,200,130,200,300]
      }
    ],
    fill: {
      type: "gradient",
      colors: ['#8A74F9', '#8A74F9', '#8A74F9'],
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      }
    },
    xaxis: {
      categories: [
        "يناير",
        "فبراير",
        "مارس",
        "ابريل",
        "مايو",
        "يونيو",
        "يوليو",
        "اغسطس",
        "سبتمبر",
        "اكتوبر",
        "نوفمبر",
        "ديسمبر"
      ]
    }
  };
  
  var chart = new ApexCharts(document.querySelector("#myChart"), options);
  
  chart.render();
  