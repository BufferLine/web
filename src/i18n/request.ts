import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locale || !routing.locales.includes(locale as "en" | "ko")) {
    locale = routing.defaultLocale;
  }

  // Load and merge all message files
  const [
    common,
    brandHome,
    thinkprint,
    about,
    landingHero,
    landingMechanics,
    landingDemo,
    landingCta,
    deckCommon,
    deckGeneral,
    deckPersonal,
    deckInstitutional,
    deckTechnical,
    deckThinkprintOverview,
  ] = await Promise.all([
    import(`@messages/${locale}/common.json`),
    import(`@messages/${locale}/brand-home.json`),
    import(`@messages/${locale}/thinkprint.json`),
    import(`@messages/${locale}/about.json`),
    import(`@messages/${locale}/landing-hero.json`),
    import(`@messages/${locale}/landing-mechanics.json`),
    import(`@messages/${locale}/landing-demo.json`),
    import(`@messages/${locale}/landing-cta.json`),
    import(`@messages/${locale}/deck-common.json`),
    import(`@messages/${locale}/deck-general.json`),
    import(`@messages/${locale}/deck-personal.json`),
    import(`@messages/${locale}/deck-institutional.json`),
    import(`@messages/${locale}/deck-technical.json`),
    import(`@messages/${locale}/deck-thinkprint-overview.json`),
  ]);

  return {
    locale,
    messages: {
      ...common.default,
      ...brandHome.default,
      ...thinkprint.default,
      ...about.default,
      ...landingHero.default,
      ...landingMechanics.default,
      ...landingDemo.default,
      ...landingCta.default,
      ...deckCommon.default,
      deck_general: deckGeneral.default,
      deck_personal: deckPersonal.default,
      deck_institution: deckInstitutional.default,
      deck_technical: deckTechnical.default,
      deck_thinkprint_overview: deckThinkprintOverview.default,
    },
  };
});
