import { ReactNode } from 'react';

interface CardProps {
  image?: string;
  title: string;
  subtitle: string;
  description: string;
  children?: ReactNode;
}

export function Card({ image, title, subtitle, description, children }: CardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border-2 border-saffron bg-gradient-to-br from-saffron/5 to-ocean/5 shadow-lg">
      {children}
      {image && (
        <div className="relative w-full h-48 overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      )}
      <div className="p-4 space-y-2">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
        <p className="text-sm text-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
