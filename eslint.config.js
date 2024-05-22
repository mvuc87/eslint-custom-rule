"use strict";

import noCStylePlugin from "./no-c-style/plugin.js";

export default [{
  files: ["**/*.js"],
  plugins: {
    "no-c-style": noCStylePlugin,
  },
  rules: {
    "no-c-style/no-underscore-in-var": "error",
  },
}];
