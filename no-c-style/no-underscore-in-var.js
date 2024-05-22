function title(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reportError(context, idNode) {
  context.report({
    node: idNode,
    message: "C-style variable name is not allowed.",
    suggest: [{
      desc: "Use camel-case instead.",
      fix(fixer) {
        const replacement = idNode.name.split("_").map((part, index) => index ? title(part) : part).join("");
        return fixer.replaceText(idNode, replacement);
      }  
    }, {
      desc: "Remove underscores.",
      fix(fixer) {
        return fixer.replaceText(idNode, idNode.name.split("_").join(""));
      }  
    }]
  });  
}

export default {
  meta: {
    type: "problem",
    docs: {
      description: "It is not allowed to use underscores in names of variables.",
    },
    hasSuggestions: true,
    fixable: "code"
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        if (node.id.type === "Identifier") {
          const name = node.id.name;
          if (name.includes("_")) {
            reportError(context, node.id);
          }
        }
      }
    };
  }
};
