import { Calendar, Bus, Hotel, Info } from 'lucide-react';
import { TabId } from '../App';

interface BottomTabBarProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

const tabs = [
  { id: 'yatra-plan' as TabId, label: 'यात्रा प्लान', icon: Calendar },
  { id: 'connectivity' as TabId, label: 'कैसे पहुँचें', icon: Bus },
  { id: 'stay-food' as TabId, label: 'होटल और भोजन', icon: Hotel },
  { id: 'rules-timings' as TabId, label: 'नियम और समय', icon: Info },
];

export default function BottomTabBar({ activeTab, onTabChange }: BottomTabBarProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-lg">
      <div className="container flex h-16 items-center justify-around px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all ${
                isActive
                  ? 'text-saffron bg-saffron/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'scale-110' : ''}`} />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
