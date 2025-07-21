'use client';

import AppJamSection from '@/app/service/components/AppJamSection';
import MakersSection from '@/app/service/components/MakersSection';
import SoptermSection from '@/app/service/components/SoptermSection';
import FadeIn from '@/components/common/FadeIn';
import FadeInTransition from '@/components/common/FadeInTransition';
import Tab from '@/components/tab/Tab';
import { TABS } from '@/constants/tab';
import { useTab } from '@/hooks/useTab';

export default function ServicePage() {
  const { activeTab, setActiveTab } = useTab();

  const renderContent = () => {
    switch (activeTab) {
      case TABS.APPJAM:
        return <AppJamSection key="appjam" />;
      case TABS.SOPTERM:
        return <SoptermSection key="sopterm" />;
      case TABS.MAKERS:
        return <MakersSection key="makers" />;
      default:
        return <AppJamSection key="appjam" />;
    }
  };

  return (
    <FadeIn className="min-h-screen bg-black" variant="fadeIn" duration={0.5}>
      <Tab activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="bg-black">
        <FadeInTransition animationKey={activeTab}>
          {renderContent()}
        </FadeInTransition>
      </div>
    </FadeIn>
  );
}
