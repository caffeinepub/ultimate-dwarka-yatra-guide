import { Camera } from 'lucide-react';
import { ReactNode } from 'react';

interface BadgeProps {
  color: 'orange';
  position: 'top-right';
  icon: 'camera';
  children: ReactNode;
}

export function Badge({ color, position, icon, children }: BadgeProps) {
  const colorClasses = {
    orange: 'bg-saffron text-white',
  };

  const positionClasses = {
    'top-right': 'absolute top-3 right-3 z-10',
  };

  const iconComponents = {
    camera: Camera,
  };

  const IconComponent = iconComponents[icon];

  return (
    <div className={`${positionClasses[position]} ${colorClasses[color]} px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 text-xs font-semibold`}>
      <IconComponent className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}
