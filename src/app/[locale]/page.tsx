import { Header, Footer } from "@/components/shared";
import {
  BrandHero,
  StackOverview,
  VideoSection,
  InteractiveDemo,
  DeckLinks,
} from "@/components/landing";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <BrandHero />
        <StackOverview />
        <VideoSection />
        <InteractiveDemo />
        <DeckLinks />
      </main>
      <Footer />
    </>
  );
}
