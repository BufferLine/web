import { Header, Footer } from "@/components/shared";
import {
  BrandHero,
  StackOverview,
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
        <InteractiveDemo />
        <DeckLinks />
      </main>
      <Footer />
    </>
  );
}
