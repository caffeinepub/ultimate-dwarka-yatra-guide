import { useState } from 'react';
import Layout from './components/Layout';
import YatraPlanTab from './tabs/YatraPlanTab';
import ConnectivityTab from './tabs/ConnectivityTab';
import StayFoodTab from './tabs/StayFoodTab';
import RulesTimingsTab from './tabs/RulesTimingsTab';
import BottomTabBar from './components/BottomTabBar';
import PwaInstallPromptBanner from './components/PwaInstallPromptBanner';

export type TabId = 'yatra-plan' | 'connectivity' | 'stay-food' | 'rules-timings';

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('yatra-plan');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'yatra-plan':
        return <YatraPlanTab />;
      case 'connectivity':
        return <ConnectivityTab />;
      case 'stay-food':
        return <StayFoodTab />;
      case 'rules-timings':
        return <RulesTimingsTab />;
      default:
        return <YatraPlanTab />;
    }
  };

  return (
    <Layout>
      <div className="flex-1 overflow-y-auto pb-20">
        {renderTabContent()}
      </div>
      <PwaInstallPromptBanner />
      <BottomTabBar activeTab={activeTab} onTabChange={setActiveTab} />
    </Layout>
  );
}

export default App;
