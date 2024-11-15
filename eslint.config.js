"use strict";

import jsNamingConvention from "./js-naming-convention/index.js";

export default [{
  files: ["src/**/*.js"],
  plugins: {
    "js-naming-convention": jsNamingConvention,
  },
  rules: {
    "js-naming-convention/no-underscore-in-var-name": "error",
  },
}];
