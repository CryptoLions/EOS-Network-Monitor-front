import 'moment';
import Chart from 'chart.js';

class CustomChart {
  constructor(element, data = {}, options = {}) {
    this.chart = new Chart(element, {
      type: 'line',
      data,
      options,
    });
  }

  update = ({ datasets }) => {
    this.chart.data.datasets = datasets;

    this.chart.update();
  };
}

export default CustomChart;
