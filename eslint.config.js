"use strict";

import jsNamingConventionPlugin from "./js-naming-convention/index.js";

export default [{
  files: ["src/**/*.js"],
  plugins: {
    "js-naming-convention-plugin": jsNamingConventionPlugin,
  },
  rules: {
    "js-naming-convention-plugin/no-underscore-in-var-name": "error",
  },
}];
