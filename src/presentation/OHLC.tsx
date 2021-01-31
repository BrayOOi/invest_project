import React from 'react';
import HighChartStock from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { StockInfoResT } from '../constants/types';

const groupingUnits = [[
  'week',                         // unit name
  [1]                             // allowed multiples
], [
  'month',
  [1, 2, 3, 4, 6]
]];

const OHLChart: React.FC<{ stockData: StockInfoResT }> = ({ stockData = [] }) => {
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
      data: stockData.map(data => [
        +new Date(data.date),
        data.open,
        data.high,
        data.low,
        data.close
      ]),
      dataGrouping: {
          units: groupingUnits
      }
    }, {
        type: 'column',
        name: 'Volume',
        data: stockData.map(data => [+new Date(data.date), data.volume]),
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
  
  return (
    <HighchartsReact highcharts={HighChartStock} constructorType={'stockChart'} options={stockOptions} />
  );
};

export default OHLChart;
