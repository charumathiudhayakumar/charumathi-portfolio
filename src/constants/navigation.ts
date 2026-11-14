export const navigation = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
].map((label) => ({ label, href: `#${label.toLowerCase()}` }));
