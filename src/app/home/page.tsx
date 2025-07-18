'use client';

import { motion, AnimatePresence } from 'motion/react';

import AppJamSection from '@/app/home/components/AppJamSection';
import MakersSection from '@/app/home/components/MakersSection';
import SoptermSection from '@/app/home/components/SoptermSection';
import Tab from '@/components/tab/Tab';
import { TABS } from '@/constants/tab';
import { useTab } from '@/hooks/useTab';

export default function Home() {
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
    <motion.div
      className="min-h-screen bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Tab activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
