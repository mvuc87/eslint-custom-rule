# Overview
This is an implementation of a simple ESLint rule that suggests avoiding underscores in variable names. The implementation of the custom rule is in `js-naming-convention` directory.

The implementation is not production-ready! It should be used as a playground and a boilerplate for learning. Enjoy!

# How To Use
Install dependencies:
```
npm install
```
Open the project in Visual Studio Code and open file: `src/code.js`. ESLint should automatically detect an error and underline a variable name `name_of_city`.

Alternativelly, open terminal, navigate to the root of the project and execute:
```
> npx eslint
```
The command above should list an error in the `src/code.js` file.