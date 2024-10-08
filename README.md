# JS/TS Boilerplate for HackerRank (or similar coding tests)

[![Build Status](https://img.shields.io/github/actions/workflow/status/deskoh/hackerrankjs_boilerplate/nodejs.yaml?branch=main)](https://github.com/deskoh/hackerrankjs_boilerplate/actions?query=workflow%3ANode+CI)

## QuickStart

```sh
# Install dependencies
npm i
```

## TypeScript Development

Running TypeSccript compiler will only perform typechecking and no `.js` will be produced (`noEmit` flag in `tsconfig.json`)

```sh
# Run typechecking.
tsc -p .

# Start TypeScript compiler in 'watch' mode
npm run dev
```

## Running Code

Inputs can be created as text files to be piped as `stdin`.

```sh
# TypeScript
npx tsx _template_ts/index.ts < _template_ts\in.txt

# JavaScript
node  _template_js/index.cjs < _template_js\in.txt

# To pipe output to a file (note that the out.txt will be created in current directory)
npx tsx _template_ts/index.ts < _template_ts\in.txt > out.txt
```

> To diff both files, use VS Code file compare feature by selecting both files and choose `Compare Selected` in the context menu.

## Debugging

The profiles `Debug TS` and `Debug JS` are defined in `.vscode/launch.json` for debugging TypeScript and JavaScript source respectively. Open the source file before starting the debug session. The content of `in.txt` will be piped in as `stdin`. Input needs to be piped to `stdin` in the debug session.

## Unit Tests

The project is setup with [Mocha](https://mochajs.org/) test framework for unit testing. Tests should be suffix with `.test.js` or `.test.ts`, See `.mocharc.json`.

```sh
# Run all tests (TypeScript will be compiled first)
npm test

# Run all tests in watch mode
npm run test:watch
```

## ESLint

```sh
npm run lint
```

ESLint is configured with recommended ruleset. See `.eslintrc.js` for details.
