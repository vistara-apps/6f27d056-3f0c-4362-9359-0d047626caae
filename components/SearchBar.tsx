'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Asset } from '@/lib/types';

interface SearchBarProps {
  variant?: 'default' | 'withResults';
  assets: Asset[];
  onSearch: (query: string) => void;
  onAssetSelect?: (asset: Asset) => void;
}

export function SearchBar({ 
  variant = 'default', 
  assets, 
  onSearch,
  onAssetSelect 
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const filteredAssets = query.length > 0 
    ? assets.filter(asset => 
        asset.name.toLowerCase().includes(query.toLowerCase()) ||
        asset.symbol.toLowerCase().includes(query.toLowerCase()) ||
        asset.contractAddress.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleInputChange = (value: string) => {
    setQuery(value);
    onSearch(value);
    setShowResults(value.length > 0);
  };

  const handleAssetClick = (asset: Asset) => {
    setQuery(`${asset.name} (${asset.symbol})`);
    setShowResults(false);
    onAssetSelect?.(asset);
  };

  return (
    <div className="relative mb-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search assets by name, symbol, or contract address..."
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          className="search-input pr-12"
        />
        <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>

      {showResults && filteredAssets.length > 0 && variant === 'withResults' && (
        <div className="absolute top-full left-0 right-0 mt-2 glass-card max-h-60 overflow-y-auto z-10 animate-fade-in">
          {filteredAssets.map((asset, index) => (
            <div
              key={`${asset.contractAddress}-${index}`}
              onClick={() => handleAssetClick(asset)}
              className="p-3 hover:bg-white hover:bg-opacity-10 cursor-pointer border-b border-white border-opacity-10 last:border-b-0 transition-all duration-200"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-white">{asset.name}</p>
                  <p className="text-sm text-gray-300">{asset.symbol}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-white">
                    ${asset.holdingsValue.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-300">
                    {asset.quantity.toLocaleString()} {asset.symbol}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showResults && filteredAssets.length === 0 && query.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 glass-card p-4 z-10 animate-fade-in">
          <p className="text-gray-300 text-center">No assets found matching "{query}"</p>
        </div>
      )}
    </div>
  );
}
