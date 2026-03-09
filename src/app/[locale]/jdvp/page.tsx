import { Header, Footer } from "@/components/shared";
import { JdvpPage } from "@/components/landing";

export default function JdvpRoute() {
  return (
    <>
      <Header />
      <main>
        <JdvpPage />
      </main>
      <Footer />
    </>
  );
}
