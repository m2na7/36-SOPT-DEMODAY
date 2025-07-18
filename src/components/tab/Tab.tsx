import { motion } from 'motion/react';

import { TABS } from '@/constants/tab';

interface Props {
  activeTab: TABS;
  onTabChange: (tab: TABS) => void;
}

export default function Tab({ activeTab, onTabChange }: Props) {
  const tabs: TABS[] = [TABS.APPJAM, TABS.SOPTERM, TABS.MAKERS];

  return (
    <div className="relative flex h-[4rem] gap-[1.2rem] bg-black px-[2rem]">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`title1_sb_18 relative cursor-pointer transition-all duration-200 ${
            activeTab === tab
              ? 'text-white'
              : 'text-white-70 hover:text-white-90'
          }`}
        >
          {tab}
          {activeTab === tab && (
            <motion.div
              className="absolute right-0 bottom-0 left-0 h-[2px] bg-white"
              layoutId="activeTabIndicator"
              initial={false}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 30,
              }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
