'use client';

import { useTab } from '@/hooks/useTab';
import Tab from '@/components/tab/Tab';
import { TABS } from '@/constants/tab';
import AppJamSection from '@/app/(home)/components/AppJamSection';
import SoptermSection from '@/app/(home)/components/SoptermSection';
import MakersSection from '@/app/(home)/components/MakersSection';

export default function Home() {
  const { activeTab, setActiveTab } = useTab();

  const renderContent = () => {
    switch (activeTab) {
      case TABS.APPJAM:
        return <AppJamSection />;
      case TABS.SOPTERM:
        return <SoptermSection />;
      case TABS.MAKERS:
        return <MakersSection />;
      default:
        return <AppJamSection />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Tab activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="bg-white">{renderContent()}</div>
    </div>
  );
}
