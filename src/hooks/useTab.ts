import { useState } from 'react';

import { TABS } from '@/constants/tab';

export function useTab(initialTab: TABS = TABS.APPJAM) {
  const [activeTab, setActiveTab] = useState<TABS>(initialTab);

  const handleTabChange = (tab: TABS) => {
    setActiveTab(tab);
  };

  return {
    activeTab,
    setActiveTab: handleTabChange,
  };
}
