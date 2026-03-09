export default {
  ignores: ["dist/**", "node_modules/**", "coverage/**"],

  extends: ["stylelint-config-standard", "stylelint-config-standard-scss"],

  plugins: ["stylelint-order"],

  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },
  ],

  rules: {
    "order/properties-alphabetical-order": true,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "selector-class-pattern": null,
    "block-no-empty": true,
    "selector-pseudo-class-no-unknown": true,
  },
};
