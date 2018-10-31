export const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  legend: {
    display: false,
  },
  hover: {
    mode: 'nearest',
    intersect: true,
    animationDuration: 0,
  },
  scales: {
    xAxes: [
      {
        type: 'time',
        time: {
          unit: 'second',
        },
      },
    ],
    yAxes: [
      {
        type: 'linear',
        ticks: {
          beginAtZero: true,
          stepSize: 10,
        },
      },
    ],
  },
  tooltips: {
    mode: 'x-axis',
    position: 'nearest',
    intersect: 'false',
  },
  scaleOverride: true,
  scaleStartValue: 0,
  animation: {
    duration: 0,
  },
  responsiveAnimationDuration: 0,
};

export const datasetDefaults = {
  fill: false,
  borderWidth: 2,
};
