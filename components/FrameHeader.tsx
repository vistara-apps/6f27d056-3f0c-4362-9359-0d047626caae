'use client';

import { TrendingUp } from 'lucide-react';

interface FrameHeaderProps {
  variant?: 'WithTitleAndLogo';
}

export function FrameHeader({ variant = 'WithTitleAndLogo' }: FrameHeaderProps) {
  if (variant === 'WithTitleAndLogo') {
    return (
      <header className="flex items-center justify-between p-4 glass-card mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">AssetMesh</h1>
            <p className="text-sm text-gray-300">Portfolio Aggregator</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-300">Base Network</p>
          <div className="w-2 h-2 bg-green-400 rounded-full inline-block"></div>
        </div>
      </header>
    );
  }

  return null;
}
