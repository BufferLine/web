import { Header, Footer } from "@/components/shared";
import {
  Hero,
  Concept,
  HowItWorks,
  InteractiveDemo,
  DataStructure,
  DeckLinks,
  GetStarted,
} from "@/components/landing";

export default function JdvpPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Concept />
        <HowItWorks />
        <InteractiveDemo />
        <DataStructure />
        <DeckLinks />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}
