import {
  MainSection,
  PartnersSection,
  NewsSection,
  CasesSection,
  SpheresSection,
  DisscusProject,
  AboutSection,
  AdvantagesSection,
} from "@/components";
import { Footer } from "@/widgets";

export default function Home() {
  return (
    <div>
      <MainSection />
      <AboutSection />
      <CasesSection />
      <SpheresSection />
      <AdvantagesSection/>
      <NewsSection />
      <PartnersSection />
      <DisscusProject />
      <Footer />
    </div>
  );
}
