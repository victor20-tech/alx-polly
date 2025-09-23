export function EmptyPollsIllustration() {
  return (
    <svg
      width="200"
      height="160"
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-4"
    >
      {/* Background circle */}
      <circle cx="100" cy="80" r="60" fill="hsl(var(--muted))" opacity="0.5" />
      
      {/* Empty chart area */}
      <rect x="70" y="50" width="8" height="60" rx="2" fill="hsl(var(--muted-foreground))" opacity="0.2" />
      <rect x="85" y="60" width="8" height="50" rx="2" fill="hsl(var(--muted-foreground))" opacity="0.2" />
      <rect x="100" y="70" width="8" height="40" rx="2" fill="hsl(var(--muted-foreground))" opacity="0.2" />
      <rect x="115" y="80" width="8" height="30" rx="2" fill="hsl(var(--muted-foreground))" opacity="0.2" />
      <rect x="130" y="90" width="8" height="20" rx="2" fill="hsl(var(--muted-foreground))" opacity="0.2" />
      
      {/* Question mark */}
      <circle cx="100" cy="40" r="12" fill="hsl(var(--primary))" opacity="0.3" />
      <text x="100" y="46" textAnchor="middle" className="text-white text-sm font-bold" fontFamily="system-ui">?</text>
      
      {/* Floating elements */}
      <circle cx="40" cy="30" r="4" fill="hsl(var(--primary))" opacity="0.4" />
      <circle cx="160" cy="40" r="3" fill="hsl(var(--primary))" opacity="0.3" />
      <circle cx="30" cy="120" r="5" fill="hsl(var(--primary))" opacity="0.5" />
      
      {/* Dashed lines suggesting "no data" */}
      <path
        d="M50 140 L150 140"
        stroke="hsl(var(--muted-foreground))"
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.4"
      />
    </svg>
  );
}

export function NotFoundIllustration() {
  return (
    <svg
      width="200"
      height="160"
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-4"
    >
      {/* Background */}
      <circle cx="100" cy="80" r="60" fill="hsl(var(--muted))" opacity="0.3" />
      
      {/* 404 text */}
      <text x="100" y="90" textAnchor="middle" className="text-4xl font-bold fill-muted-foreground" fontFamily="system-ui" opacity="0.6">404</text>
      
      {/* Search icon with question mark */}
      <circle cx="100" cy="40" r="15" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" opacity="0.6" />
      <circle cx="100" cy="40" r="8" fill="hsl(var(--primary))" opacity="0.3" />
      <path d="M85 55 L75 65" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      
      {/* Floating question marks */}
      <text x="60" y="30" textAnchor="middle" className="text-xl fill-primary" fontFamily="system-ui" opacity="0.4">?</text>
      <text x="140" y="35" textAnchor="middle" className="text-lg fill-primary" fontFamily="system-ui" opacity="0.3">?</text>
      <text x="40" y="120" textAnchor="middle" className="text-lg fill-primary" fontFamily="system-ui" opacity="0.5">?</text>
      
      {/* Broken link representation */}
      <path
        d="M50 130 L80 130 M90 130 L120 130 M130 130 L160 130"
        stroke="hsl(var(--muted-foreground))"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

export function ErrorIllustration() {
  return (
    <svg
      width="200"
      height="160"
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-4"
    >
      {/* Background */}
      <circle cx="100" cy="80" r="60" fill="hsl(var(--destructive))" opacity="0.1" />
      
      {/* Warning triangle */}
      <path
        d="M100 30 L130 100 L70 100 Z"
        stroke="hsl(var(--destructive))"
        strokeWidth="2"
        fill="hsl(var(--destructive))"
        opacity="0.2"
      />
      <path
        d="M100 40 L120 90 L80 90 Z"
        fill="hsl(var(--destructive))"
        opacity="0.3"
      />
      
      {/* Exclamation mark */}
      <text x="100" y="75" textAnchor="middle" className="text-white text-2xl font-bold" fontFamily="system-ui">!</text>
      
      {/* Error fragments */}
      <circle cx="60" cy="50" r="3" fill="hsl(var(--destructive))" opacity="0.4" />
      <circle cx="140" cy="60" r="4" fill="hsl(var(--destructive))" opacity="0.3" />
      <circle cx="50" cy="120" r="2" fill="hsl(var(--destructive))" opacity="0.5" />
      <circle cx="150" cy="110" r="3" fill="hsl(var(--destructive))" opacity="0.4" />
      
      {/* Zigzag lines */}
      <path
        d="M40 140 L50 130 L60 140 L70 130 L80 140"
        stroke="hsl(var(--destructive))"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}
