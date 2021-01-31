export type StockInfoT = {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export type StockInfoResT = Array<StockInfoT>;