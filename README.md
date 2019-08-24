# Simply

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![peerDependencies Status](https://img.shields.io/david/peer/alexandonie/simply.svg)](https://david-dm.org/alexandonie/simply?type=peer)
[![devDependency Status](https://img.shields.io/david/dev/alexandonie/simply.svg)](https://david-dm.org/alexandonie/simply?type=dev)

Simply is a simple, 2 page portfolio template.

__It's not production ready__, things might break. It has been built for those moments when you want to learn or to test something quickly (animations, accessibility stuff, naming conventions or new things like css grid, etc) but you don't have a project to do it on. It's released under [MIT](LICENSE) though so you can do whatever you want with it.

![Website Preview](https://stupefied-euler-a72577.netlify.com/b023g1y3adydb3.jpg "Simply portfolio")

---

<p align="center"><b><u>Warning:</u></b> Experimental project built to learn and/or test new things.<p>

---

## Installation

Before anything else, make sure nodejs and npm are installed on your machine. If not, follow [these instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and then proceed with the next steps:

```bash
git clone https://github.com/alexandonie/simply
```

```bash
cd simply
```

```bash
npm run install
```

## Running

The project is now on your machine and all the dependencies should be installed. All that's left to do is to fire up the project. You can do that my running the command:

```bash
npm run dev
```

This will run the project in development mode. It will start a local dev server, it will generate source maps and everything that's required for a modern front-end development environment.

If you want to get the project production ready, then all you have to do is to run:

```bash
npm run build
```

This will bundle up and optimize all of your code, it will rename all of your assets for cache busting (among other things) and will place everything in a `dist` directory at the root level of the project.

## File structure

```
simply
├── dist
├── node_modules
├── src
│   ├── images
│   ├── scripts
│   ├── styles
│   ├── article.html
│   ├── index.html
│   └── index.js
├── .browserslistrc
├── .eslintrc.json
├── .gitignore
├── .postcssrc
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

## Author

Designed and coded by me 😁

-   Website: <https://alexandonie.com/>
-   Github: <https://github.com/alexandonie/>

## License

The code is available under the [MIT license](LICENSE).
