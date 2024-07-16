import Head from 'next/head';
import { loadSectionFooter, loadSectionInfo, loadSectionPromo, loadSlider } from '@/pages/api/sectionsContent';
import SectionInfo from '@/components/SectionInfo';
import SectionPromo from '@/components/Promo';
import Footer from '@/components/Footer';
import SliderComponent from '@/components/SliderComponent';

export default function Home({ sectionInfo, sectionPromo, footer, sectionSlider }) {
  return (
    <>
      <Head>
        <title>RozConsult</title>
      </Head>
      <SectionPromo sectionPromo={sectionPromo} />
      <SectionInfo sectionInfo={sectionInfo} />
      <SliderComponent sectionSlider={sectionSlider} />
      <Footer footer={footer} />
    </>
  );
}

export const getServerSideProps = async () => {
  const { sectionPromo } = await loadSectionPromo();
  const { footer } = await loadSectionFooter();
  const { sectionInfo } = await loadSectionInfo();
  const { sectionSlider } = await loadSlider();

  return {
    props: {
      sectionPromo,
      sectionInfo,
      sectionSlider,
      footer,
    },
  };
};
