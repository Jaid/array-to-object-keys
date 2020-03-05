# array-to-object-keys


<a href="https://raw.githubusercontent.com/jaid/array-to-object-keys/master/license.txt"><img src="https://img.shields.io/github/license/jaid/array-to-object-keys?style=flat-square" alt="License"/></a> <a href="https://github.com/sponsors/jaid"><img src="https://img.shields.io/badge/<3-Sponsor-FF45F1?style=flat-square" alt="Sponsor array-to-object-keys"/></a>  
<a href="https://actions-badge.atrox.dev/jaid/array-to-object-keys/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2Fjaid%2Farray-to-object-keys%2Fbadge" alt="Build status"/></a> <a href="https://github.com/jaid/array-to-object-keys/commits"><img src="https://img.shields.io/github/commits-since/jaid/array-to-object-keys/v1.3.7?style=flat-square&logo=github" alt="Commits since v1.3.7"/></a> <a href="https://github.com/jaid/array-to-object-keys/commits"><img src="https://img.shields.io/github/last-commit/jaid/array-to-object-keys?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/jaid/array-to-object-keys/issues"><img src="https://img.shields.io/github/issues/jaid/array-to-object-keys?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/array-to-object-keys"><img src="https://img.shields.io/npm/v/array-to-object-keys?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/jaid/array-to-object-keys/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/array-to-object-keys?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/array-to-object-keys"><img src="https://img.shields.io/npm/dm/array-to-object-keys?style=flat-square&logo=npm" alt="Downloads"/></a>

**Converts an array to an object where the keys are the array entries and the values are customizable in a function.**





## Installation

<a href="https://npmjs.com/package/array-to-object-keys"><img src="https://img.shields.io/badge/npm-array--to--object--keys-C23039?style=flat-square&logo=npm" alt="array-to-object-keys on npm"/></a>

```bash
npm install --save array-to-object-keys@^1.3.7
```

<a href="https://yarnpkg.com/package/array-to-object-keys"><img src="https://img.shields.io/badge/Yarn-array--to--object--keys-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="array-to-object-keys on Yarn"/></a>

```bash
yarn add array-to-object-keys@^1.3.7
```

<a href="https://github.com/jaid/array-to-object-keys/packages"><img src="https://img.shields.io/badge/GitHub Packages-@jaid/array--to--object--keys-24282e?style=flat-square&logo=github" alt="@jaid/array-to-object-keys on GitHub Packages"/></a>  
(if [configured properly](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages))

```bash
npm install --save @jaid/array-to-object-keys@^1.3.7
```



## Example


```javascript
import arrayToObjectKeys from "array-to-object-keys"

const array = ["a", "b"]
const result = arrayToObjectKeys(array, (key, index) => {
  return `#${index} - ${key}`
})
```

Variable `result` will be:

```javascript
{
  a: "#0 - a",
  b: "#1 - b",
}
```













## Development



Setting up:
```bash
git clone git@github.com:jaid/array-to-object-keys.git
cd array-to-object-keys
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
[MIT License](https://raw.githubusercontent.com/jaid/array-to-object-keys/master/license.txt)  
Copyright © 2020, Jaid <jaid.jsx@gmail.com> (github.com/jaid)
