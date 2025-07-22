'use client';

import ProductSection from '@/app/service/components/ProductSection';
import FadeIn from '@/components/common/FadeIn';
import FadeInTransition from '@/components/common/FadeInTransition';
import Tab from '@/components/tab/Tab';
import { TABS } from '@/constants/tab';
import { useTab } from '@/hooks/useTab';
import {
  APPJAM_PRODUCTS,
  SOPTERM_PRODUCTS,
  MAKERS_PRODUCT,
} from '@/mocks/products';

export default function ServicePage() {
  const { activeTab, setActiveTab } = useTab();

  const renderContent = () => {
    switch (activeTab) {
      case TABS.APPJAM:
        return (
          <ProductSection
            key={TABS.APPJAM}
            products={APPJAM_PRODUCTS}
            shuffleProducts
          />
        );
      case TABS.SOPTERM:
        return (
          <ProductSection
            key={TABS.SOPTERM}
            products={SOPTERM_PRODUCTS}
            shuffleProducts
          />
        );
      case TABS.MAKERS:
        return <ProductSection key={TABS.MAKERS} products={[MAKERS_PRODUCT]} />;
      default:
        return (
          <ProductSection
            key="appjam"
            products={APPJAM_PRODUCTS}
            shuffleProducts
          />
        );
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
