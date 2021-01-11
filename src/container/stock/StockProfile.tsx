import React from 'react';
import { Redirect } from 'react-router-dom';
import MAIN_MARKET_STOCK_INFO from '../../utils/Main_Market.json';


const StockProfile: React.FC<{ code: string }> = ({ code }) => {
  const selectedStock = MAIN_MARKET_STOCK_INFO.find(stock => stock.code == code);

  if (selectedStock) {
    return (
      <>
        <p>Stock Info</p>
        <p>Stock Code: {selectedStock.code}</p>
        <p>Stock Ticker: {selectedStock.name}</p>
        <p>Stock Name: {selectedStock.long_name}</p>
        <p>Category: {selectedStock.category} {selectedStock.shariah ? 'V' : 'X'}</p>
        <p>Visit <a href={selectedStock.href}>here</a> for more info</p>
      </>
    )
  } else {
    return <Redirect to="/" />;
  }
};

export default StockProfile;
