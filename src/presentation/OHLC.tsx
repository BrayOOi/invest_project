import React from 'react';
import HighChartStock from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import stock_sample from '../utils/3A_0012.json';

const groupingUnits = [[
  'week',                         // unit name
  [1]                             // allowed multiples
], [
  'month',
  [1, 2, 3, 4, 6]
]];

const stockOptions = {
  title: {
    text: '3A stockchart'
  },
  rangeSelector: {
    selected: 1,
  },
  yAxis: [{
    labels: {
        align: 'right',
        x: -3
    },
    title: {
        text: 'OHLC'
    },
    height: '60%',
    lineWidth: 2,
    resize: {
        enabled: true
    }
  }, {
    labels: {
        align: 'right',
        x: -3
    },
    title: {
        text: 'Volume'
    },
    top: '65%',
    height: '35%',
    offset: 0,
    lineWidth: 2
  }],
  series: [{
    type: 'candlestick',
    name: '3A',
    data: stock_sample.map(data => [
      +new Date(data["Date"]),
      data["Open"],
      data["High"],
      data["Low"],
      data["Close"]
    ]),
    dataGrouping: {
        units: groupingUnits
    }
  }, {
      type: 'column',
      name: 'Volume',
      data: stock_sample.map(data => [+new Date(data["Date"]), data.Volume]),
      yAxis: 1,
      dataGrouping: {
          units: groupingUnits
      }
  }],
  tooltip: {
    split: true,
    valueDecimals: 3
  }
};

const OHLChart: React.FC<{}> = () => (
  <HighchartsReact highcharts={HighChartStock} constructorType={'stockChart'} options={stockOptions} />
);

export default OHLChart;
