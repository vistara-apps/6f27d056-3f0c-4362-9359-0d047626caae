'use client';

import { Asset } from '@/lib/types';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface AssetCardProps {
  asset: Asset;
  variant?: 'default' | 'nft';
}

export function AssetCard({ asset, variant = 'default' }: AssetCardProps) {
  const isPositive = asset.last24hChange >= 0;

  if (variant === 'nft') {
    return (
      <div className="metric-card animate-slide-up">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">NFT</span>
            </div>
            <div>
              <h3 className="font-semibold text-white">{asset.name}</h3>
              <p className="text-sm text-gray-300">#{asset.tokenId}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-2xl font-bold text-white">
              ${asset.holdingsValue.toLocaleString()}
            </p>
            <p className="text-sm text-gray-300">Floor Price</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="metric-card animate-slide-up">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">
              {asset.symbol.slice(0, 3)}
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-white">{asset.name}</h3>
            <p className="text-sm text-gray-300">{asset.symbol}</p>
          </div>
        </div>
        <div className={`flex items-center space-x-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          <span className="text-sm font-medium">
            {isPositive ? '+' : ''}{asset.last24hChange.toFixed(2)}%
          </span>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <div>
          <p className="text-2xl font-bold text-white">
            ${asset.holdingsValue.toLocaleString()}
          </p>
          <p className="text-sm text-gray-300">
            {asset.quantity.toLocaleString()} {asset.symbol}
          </p>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-white">
            ${asset.currentPrice.toLocaleString()}
          </p>
          <p className="text-sm text-gray-300">per token</p>
        </div>
      </div>
    </div>
  );
}
