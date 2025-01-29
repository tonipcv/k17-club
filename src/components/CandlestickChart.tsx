export default function CandlestickChart() {
  return (
    <div className="w-full max-w-lg mx-auto mb-8 md:mb-16">
      <svg
        viewBox="0 0 400 120"
        className="w-full h-auto opacity-50"
      >
        {/* Grid Lines */}
        <g className="stroke-zinc-800/20" strokeWidth="0.5">
          <line x1="0" y1="30" x2="400" y2="30" />
          <line x1="0" y1="60" x2="400" y2="60" />
          <line x1="0" y1="90" x2="400" y2="90" />
        </g>

        {/* Candlesticks */}
        <g className="stroke-current">
          {/* Candles */}
          <line x1="50" y1="40" x2="50" y2="80" className="stroke-green-500" strokeWidth="1" />
          <rect x="45" y="50" width="10" height="20" className="fill-green-500" />
          
          <line x1="100" y1="30" x2="100" y2="70" className="stroke-red-500" strokeWidth="1" />
          <rect x="95" y="30" width="10" height="20" className="fill-red-500" />
          
          {/* ... outros candles ... */}
        </g>

        {/* Volume Bars */}
        <g className="opacity-30">
          <rect x="45" y="100" width="10" height="10" className="fill-green-500" />
          <rect x="95" y="100" width="10" height="15" className="fill-red-500" />
          {/* ... outras barras de volume ... */}
        </g>
      </svg>
    </div>
  );
} 