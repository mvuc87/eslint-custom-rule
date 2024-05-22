import { RuleTester } from "eslint";
import noUnderscoreInVar from "./no-underscore-in-var.js";

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2015 }
});

ruleTester.run("no-underscore-in-var", noUnderscoreInVar, {
  valid: [{
    code: "const a = 1;",
  }, {
    code: "const aB = 1;",
  }],
  invalid: [{
    code: "const a_b = 1;",
    errors: 1,
  }],
});
