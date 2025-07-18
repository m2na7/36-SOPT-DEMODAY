import { TABS } from '@/constants/tab';

interface Props {
  activeTab: TABS;
  onTabChange: (tab: TABS) => void;
}

export default function Tab({ activeTab, onTabChange }: Props) {
  const tabs: TABS[] = [TABS.APPJAM, TABS.SOPTERM, TABS.MAKERS];

  return (
    <div className="flex h-[4rem] gap-[1.2rem] bg-black px-[2rem]">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`title1_sb_18 cursor-pointer border-b-2 transition-all duration-200 ${
            activeTab === tab
              ? 'border-white text-white'
              : 'text-white-70 hover:text-white-90 border-transparent'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
