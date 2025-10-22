import { CasesSection, DisscusProject, MainSection } from "@/components";
import { Footer } from "@/widgets";

export default function CasesPage() {
  return (
    <div>
      <MainSection
        text={
          <>
            OUR
            <br />
            CASES
          </>
        }
        subBlock={false}
      />
      <CasesSection subBlock={false} />
      <DisscusProject />
      <Footer />
    </div>
  );
}
