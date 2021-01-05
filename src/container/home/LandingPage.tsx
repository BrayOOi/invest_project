import React from 'react';
import SearchBar from '../../presentation/SearchBar';

import Highcharts from 'highcharts';
import HighChartStock from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { Typography } from '@material-ui/core';
import MAIN_MARKET_STOCK_INFO from '../../utils/Main_Market.json';

const options = {
  chart: {
    type: 'spline'
  },
  title: {
    text: 'My chart'
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6]
    }
  ]
};
const stockOptions = {
  title: {
    text: 'My stock chart'
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
    }
  ]
};

const LandingPage: React.FC<{}> = () => {


  return (
    <>
      {/* HERO */}
      <SearchBar
        options={MAIN_MARKET_STOCK_INFO}
        getOptionLabel={(option) => option.name}
        label="Search by stock ticker"
      />
      <Typography variant="h6">Welcome to Rogue One!</Typography>
      {/* <HighchartsReact highcharts={Highcharts} options={options} />
      <HighchartsReact highcharts={HighChartStock} constructorType={'stockChart'} options={stockOptions} /> */}
    </>
  );
};

export default LandingPage;
