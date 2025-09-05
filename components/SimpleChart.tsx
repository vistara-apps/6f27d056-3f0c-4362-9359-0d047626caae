'use client';

interface ChartDataPoint {
  date: string;
  value: number;
}

interface SimpleChartProps {
  data: ChartDataPoint[];
  className?: string;
}

export function SimpleChart({ data, className = '' }: SimpleChartProps) {
  if (!data || data.length === 0) return null;

  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const range = maxValue - minValue;

  const points = data.map((point, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((point.value - minValue) / range) * 100;
    return `${x},${y}`;
  }).join(' ');

  const isPositive = data[data.length - 1].value > data[0].value;

  return (
    <div className={`glass-card p-4 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white">Portfolio Performance</h3>
        <div className={`text-sm font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          7 Days
        </div>
      </div>
      
      <div className="relative h-32 w-full">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={isPositive ? "#10B981" : "#EF4444"} stopOpacity="0.3" />
              <stop offset="100%" stopColor={isPositive ? "#10B981" : "#EF4444"} stopOpacity="0.05" />
            </linearGradient>
          </defs>
          
          <polyline
            fill="none"
            stroke={isPositive ? "#10B981" : "#EF4444"}
            strokeWidth="2"
            points={points}
            vectorEffect="non-scaling-stroke"
          />
          
          <polygon
            fill="url(#chartGradient)"
            points={`0,100 ${points} 100,100`}
          />
        </svg>
      </div>
      
      <div className="flex justify-between items-center mt-4 text-sm text-gray-300">
        <span>{data[0]?.date}</span>
        <span className={`font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? '+' : ''}{(((data[data.length - 1]?.value - data[0]?.value) / data[0]?.value) * 100).toFixed(2)}%
        </span>
        <span>{data[data.length - 1]?.date}</span>
      </div>
    </div>
  );
}
