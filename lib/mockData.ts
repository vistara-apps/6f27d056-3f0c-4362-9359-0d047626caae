import { Asset, PortfolioSummary } from './types';

export const mockAssets: Asset[] = [
  {
    contractAddress: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    chain: 'base',
    symbol: 'USDC',
    name: 'USD Coin',
    quantity: 15420.50,
    currentPrice: 1.00,
    holdingsValue: 15420.50,
    last24hChange: 0.02,
    type: 'token',
  },
  {
    contractAddress: '0x4200000000000000000000000000000000000006',
    chain: 'base',
    symbol: 'WETH',
    name: 'Wrapped Ethereum',
    quantity: 8.75,
    currentPrice: 2845.30,
    holdingsValue: 24896.38,
    last24hChange: 2.45,
    type: 'token',
  },
  {
    contractAddress: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
    chain: 'base',
    symbol: 'DAI',
    name: 'Dai Stablecoin',
    quantity: 5680.25,
    currentPrice: 0.999,
    holdingsValue: 5674.57,
    last24hChange: -0.01,
    type: 'token',
  },
  {
    contractAddress: '0x940181a94A35A4569E4529A3CDfB74e38FD98631',
    chain: 'base',
    symbol: 'AERO',
    name: 'Aerodrome Finance',
    quantity: 12500,
    currentPrice: 1.24,
    holdingsValue: 15500.00,
    last24hChange: 8.75,
    type: 'token',
  },
  {
    contractAddress: '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22',
    chain: 'base',
    symbol: 'cbETH',
    name: 'Coinbase Wrapped Staked ETH',
    quantity: 3.2,
    currentPrice: 2950.80,
    holdingsValue: 9442.56,
    last24hChange: 1.85,
    type: 'token',
  },
];

export const mockPortfolioSummary: PortfolioSummary = {
  totalValue: 70933.01,
  dailyChange: 2.34,
  weeklyChange: 8.92,
  monthlyChange: 15.67,
  assetCount: mockAssets.length,
};

export const mockChartData = [
  { date: '2024-01-01', value: 65000 },
  { date: '2024-01-02', value: 66200 },
  { date: '2024-01-03', value: 64800 },
  { date: '2024-01-04', value: 67500 },
  { date: '2024-01-05', value: 69200 },
  { date: '2024-01-06', value: 68900 },
  { date: '2024-01-07', value: 70933 },
];
