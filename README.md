# How To Use
Install dependencies:
```
npm install
```
Run ESLint tests with:
```
npm test
```
# Custom ESLint Rule
The code provides a custom ESLint rule which inspects a varialbe name and reports an error if it follows C-style naming convention, which includes underscores. For example, the custom ESLint rule should report an error if the following variable declaration is encountered:
```javascript
var name_of_city = 'Belgrade';
```
The custom rule also provides two suggestions, to either fix `name_of_city` by:
- converting it into camel-case: `nameOfCity`, or
- removing underscores: `nameofcity`

The implementation is not production-ready! It should be used as a playground and a boilerplate for learing. Enjoy!