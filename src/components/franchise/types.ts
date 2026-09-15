// Shared props for the franchise (Pick yer verse) card variants.
// One verse object drives all four styles - preview maps the array,
// so copy (kickers, titles, descs) stays in a single place.
export type FranchiseVerse = {
  imageSrc: string;
  imageAlt: string;
  kicker: string;
  title: string;
  desc: string;
  live: boolean;
  // Stamp text over the art (e.g. LIVE / SOON / WANTED). Defaults per live.
  label?: string;
  // one piece = "Wanted", naruto ... if not published then "Soon"
  lable: string;
  // Whole-card link. Omit to render a plain <div> (e.g. poster styles
  // where only the button links, or non-clickable previews).
  href?: string;
  tiltClass?: string;
  buttonText: string;
};
