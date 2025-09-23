export function HeroPollingIllustration() {
  return (
    <svg
      width="400"
      height="300"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-md mx-auto"
    >
      {/* Background circle */}
      <circle cx="200" cy="150" r="140" fill="hsl(var(--accent))" opacity="0.3" />
      
      {/* Main chart bars */}
      <rect x="120" y="80" width="40" height="120" rx="4" fill="hsl(var(--primary))" />
      <rect x="180" y="60" width="40" height="140" rx="4" fill="hsl(var(--primary))" opacity="0.8" />
      <rect x="240" y="100" width="40" height="100" rx="4" fill="hsl(var(--primary))" opacity="0.6" />
      
      {/* Chart labels */}
      <text x="140" y="220" textAnchor="middle" className="text-xs fill-muted-foreground" fontFamily="system-ui">
        Option A
      </text>
      <text x="200" y="220" textAnchor="middle" className="text-xs fill-muted-foreground" fontFamily="system-ui">
        Option B
      </text>
      <text x="260" y="220" textAnchor="middle" className="text-xs fill-muted-foreground" fontFamily="system-ui">
        Option C
      </text>
      
      {/* Floating elements */}
      <circle cx="80" cy="60" r="12" fill="hsl(var(--primary))" opacity="0.4" />
      <circle cx="320" cy="80" r="8" fill="hsl(var(--primary))" opacity="0.3" />
      <circle cx="60" cy="220" r="6" fill="hsl(var(--primary))" opacity="0.5" />
      
      {/* Vote indicators */}
      <path
        d="M70 180 L100 150 L130 180"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <path
        d="M330 160 L360 130 L390 160"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      
      {/* People icons (simple) */}
      <circle cx="50" cy="120" r="8" fill="hsl(var(--primary))" opacity="0.6" />
      <rect x="46" y="128" width="8" height="12" rx="2" fill="hsl(var(--primary))" opacity="0.6" />
      
      <circle cx="350" cy="140" r="8" fill="hsl(var(--primary))" opacity="0.6" />
      <rect x="346" y="148" width="8" height="12" rx="2" fill="hsl(var(--primary))" opacity="0.6" />
    </svg>
  );
}

export default HeroPollingIllustration;
