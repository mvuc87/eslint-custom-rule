function firstCapital(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function camelCaseReplacement(name) {
  return name
    .split("_")
    .map((part, index) => index === 0 ? part : firstCapital(part))
    .join("");
}

function createReport(context, identifier) {
  context.report({
    node: identifier, // has start/end
    message: "Underscore in a variable name is not a part of the Javascript naming convention",
    suggest: [{
      desc: "Use camelCase",
      fix(fixer) {
        return fixer.replaceText(identifier, camelCaseReplacement(identifier.name));
      }  
    }, {
      desc: "Remove underscores",
      fix(fixer) {
        return fixer.replaceText(identifier, identifier.name.split("_").join(""));
      }
    }]
  });
}

export default {
  meta: {
    type: "suggestion", // "problem" or "layout"
    hasSuggestions: true, // requires "suggest" in a report
    fixable: "code" // or "whitespace", categorization purposes
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        if (node.id.type === "Identifier") {
          const name = node.id.name;
          if (name.includes("_")) {
            createReport(context, node.id);
          }
        }
      },
    };
  }
};
