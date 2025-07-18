import DescriptionSection from './components/DescriptionSection';
import GoDemodayButton from './components/GoDemodayButton';
import ImageSection from './components/ImageSection';
import IntroduceSection from './components/IntroduceSection';

export default function HomePage() {
  return (
    <main>
      <ImageSection />

      <DescriptionSection />

      <GoDemodayButton />

      <div className="h-[0.05rem] bg-white" />

      <IntroduceSection />
    </main>
  );
}
