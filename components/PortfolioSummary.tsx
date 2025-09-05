'use client';

import { PortfolioSummary as PortfolioSummaryType } from '@/lib/types';
import { TrendingUp, TrendingDown, Wallet, BarChart3 } from 'lucide-react';

interface PortfolioSummaryProps {
  summary: PortfolioSummaryType;
  variant?: 'default';
}

export function PortfolioSummary({ summary, variant = 'default' }: PortfolioSummaryProps) {
  const isDailyPositive = summary.dailyChange >= 0;
  const isWeeklyPositive = summary.weeklyChange >= 0;
  const isMonthlyPositive = summary.monthlyChange >= 0;

  return (
    <div className="space-y-4 mb-6">
      {/* Total Portfolio Value */}
      <div className="glass-card p-6 text-center animate-fade-in">
        <h2 className="text-lg font-medium text-gray-300 mb-2">Total Portfolio Value</h2>
        <p className="text-4xl font-bold text-white mb-4">
          ${summary.totalValue.toLocaleString()}
        </p>
        <div className="flex justify-center items-center space-x-4">
          <div className={`flex items-center space-x-1 ${isDailyPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isDailyPositive ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            <span className="font-medium">
              {isDailyPositive ? '+' : ''}{summary.dailyChange.toFixed(2)}% (24h)
            </span>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="metric-card text-center">
          <div className={`flex items-center justify-center space-x-1 mb-2 ${isDailyPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isDailyPositive ? (
              <TrendingUp className="w-5 h-5" />
            ) : (
              <TrendingDown className="w-5 h-5" />
            )}
            <span className="font-bold text-lg">
              {isDailyPositive ? '+' : ''}{summary.dailyChange.toFixed(2)}%
            </span>
          </div>
          <p className="text-sm text-gray-300">Daily Change</p>
        </div>

        <div className="metric-card text-center">
          <div className={`flex items-center justify-center space-x-1 mb-2 ${isWeeklyPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isWeeklyPositive ? (
              <TrendingUp className="w-5 h-5" />
            ) : (
              <TrendingDown className="w-5 h-5" />
            )}
            <span className="font-bold text-lg">
              {isWeeklyPositive ? '+' : ''}{summary.weeklyChange.toFixed(2)}%
            </span>
          </div>
          <p className="text-sm text-gray-300">Weekly Change</p>
        </div>

        <div className="metric-card text-center">
          <div className={`flex items-center justify-center space-x-1 mb-2 ${isMonthlyPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isMonthlyPositive ? (
              <TrendingUp className="w-5 h-5" />
            ) : (
              <TrendingDown className="w-5 h-5" />
            )}
            <span className="font-bold text-lg">
              {isMonthlyPositive ? '+' : ''}{summary.monthlyChange.toFixed(2)}%
            </span>
          </div>
          <p className="text-sm text-gray-300">Monthly Change</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="metric-card">
          <div className="flex items-center space-x-3">
            <Wallet className="w-8 h-8 text-blue-400" />
            <div>
              <p className="text-2xl font-bold text-white">{summary.assetCount}</p>
              <p className="text-sm text-gray-300">Assets</p>
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center space-x-3">
            <BarChart3 className="w-8 h-8 text-purple-400" />
            <div>
              <p className="text-2xl font-bold text-white">5</p>
              <p className="text-sm text-gray-300">Chains</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
