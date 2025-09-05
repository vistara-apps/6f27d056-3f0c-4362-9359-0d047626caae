export interface User {
  userId: string;
  connectedWallets: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Wallet {
  walletAddress: string;
  network: string;
  userId: string;
  assets: Asset[];
}

export interface Asset {
  contractAddress: string;
  tokenId?: string;
  chain: string;
  symbol: string;
  name: string;
  quantity: number;
  currentPrice: number;
  holdingsValue: number;
  last24hChange: number;
  logo?: string;
  type: 'token' | 'nft';
}

export interface PortfolioSummary {
  totalValue: number;
  dailyChange: number;
  weeklyChange: number;
  monthlyChange: number;
  assetCount: number;
}
