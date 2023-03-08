import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#f5f5f5",
  "--my-black": "#0f0f0f",
  "--vapor-brand": "#9e0fdb",
  "--my-red": "#db0d0d",
  "--my-yellow": "#dbb90d",
  "--my-green": "#1e940c",
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  /* Brand colors */
  "--brand-primary": props["--vapor-brand"],

  // Default Button
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--vapor-brand"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-danger-color": props["--my-red"],
  "--default-button-warning-color": props["--my-yellow"],

  /* State */
  "--state-info-color": props["--vapor-brand"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  /* Navbar */
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--vapor-brand"],
});
