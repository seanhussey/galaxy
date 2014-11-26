[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/Magmoz/galaxy/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

# Table of Contents
- [Getting started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Getting Started

## Installation

### Galaxy CDN
The quickest way to use Galaxy is by adding the CDN link inside your project's head tag. Galaxy.css is enough for basic Css layouts. However, any interactions involving states (dropdowns, responsive nav) will require galaxy.js (it's only 1kb minified).

#### Galaxy Base (Stylesheet)
`<link rel="stylesheet" href="//cdn.rawgit.com/Magmoz/galaxy/master/galaxy.css">`

#### Galaxy State-toggle (Javascript)
`<script src="//cdn.rawgit.com/Magmoz/galaxy/master/galaxy.js"></script>`

This will always link to the latest version of Galaxy.

### Clone with Git

```
git submodule add https://github.com/Magmoz/galaxy.git
```

## Usage
Galaxy uses HTML and their attributes rather than classes for styling elements. In doing so, each attribute effectively declares a separate namespace for encapsulating style information, resulting in more readable and maintainable HTML & CSS.

Common components such as `input`s have their own default styling, which is perhaps why 


## Contributing
Galaxy is currently in Beta, so this means you might run into the ocassional bug. If this is the case, submit an issue with your markup so we can fix it asap.

### Submitting a pull request
There's probably [an open issue right now](). If you think you've found a solution, please submit a pull request and reference it in the issue. If it hasn't been reported before, just a pull request is necessary.


---

## Reporting a Bug


Galaxy was created by [Andy Fang](//twitter.com/andyfang98) and licensed under the [MIT](//tldrlegal.com/license/mit-license). Basically, you can do whatever you want with it as long as the original license stays intact.