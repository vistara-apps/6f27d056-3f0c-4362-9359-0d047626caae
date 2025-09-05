'use client';

import { useState, useEffect } from 'react';
import { FrameHeader } from '@/components/FrameHeader';
import { ConnectWalletButton } from '@/components/ConnectWalletButton';
import { SearchBar } from '@/components/SearchBar';
import { AssetCard } from '@/components/AssetCard';
import { PortfolioSummary } from '@/components/PortfolioSummary';
import { SimpleChart } from '@/components/SimpleChart';
import { mockAssets, mockPortfolioSummary, mockChartData } from '@/lib/mockData';
import { Asset } from '@/lib/types';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredAssets, setFilteredAssets] = useState<Asset[]>(mockAssets);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  useEffect(() => {
    if (searchQuery.length === 0) {
      setFilteredAssets(mockAssets);
    } else {
      const filtered = mockAssets.filter(asset =>
        asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        asset.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        asset.contractAddress.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredAssets(filtered);
    }
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleAssetSelect = (asset: Asset) => {
    setSelectedAsset(asset);
  };

  return (
    <div className="min-h-screen p-4 max-w-4xl mx-auto">
      <FrameHeader variant="WithTitleAndLogo" />
      
      <ConnectWalletButton />

      <div className="space-y-6">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Asset <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Mesh</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your entire crypto portfolio, everywhere, in one place. 
            Aggregates fragmented crypto liquidity across multiple platforms.
          </p>
        </div>

        {/* Portfolio Summary */}
        <PortfolioSummary summary={mockPortfolioSummary} />

        {/* Chart */}
        <SimpleChart data={mockChartData} />

        {/* Search Bar */}
        <SearchBar
          variant="withResults"
          assets={mockAssets}
          onSearch={handleSearch}
          onAssetSelect={handleAssetSelect}
        />

        {/* Selected Asset Highlight */}
        {selectedAsset && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold text-white mb-4">Selected Asset</h3>
            <AssetCard asset={selectedAsset} />
          </div>
        )}

        {/* Assets Grid */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Your Assets</h2>
            <p className="text-gray-300">
              {filteredAssets.length} of {mockAssets.length} assets
            </p>
          </div>
          
          {filteredAssets.length === 0 ? (
            <div className="glass-card p-8 text-center">
              <p className="text-gray-300 text-lg">
                No assets found matching "{searchQuery}"
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Try searching by token name, symbol, or contract address
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredAssets.map((asset, index) => (
                <AssetCard
                  key={`${asset.contractAddress}-${index}`}
                  asset={asset}
                  variant={asset.type === 'nft' ? 'nft' : 'default'}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="glass-card p-6 text-center mt-8">
          <p className="text-gray-300 mb-2">
            Powered by Base Network & OnchainKit
          </p>
          <p className="text-sm text-gray-400">
            Real-time portfolio tracking across multiple chains and platforms
          </p>
        </div>
      </div>
    </div>
  );
}
