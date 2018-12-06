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
}

export default CustomChart;
