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

export const selectOptions = [
  { value: '1', label: 'Day' },
  { value: '7', label: 'Week' },
  { value: '30', label: 'Month' },
];

export const datasetDefaults = {
  fill: false,
  borderWidth: 2,
  lineTension: 0,
  pointRadius: 0,
};
