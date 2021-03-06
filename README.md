# JS/TS Boilerplate for HackerRank (or similar coding tests)

[![Build Status](https://img.shields.io/github/workflow/status/deskoh/hackerrankjs_boilerplate/Node%20CI)](https://github.com/deskoh/hackerrankjs_boilerplate/actions?query=workflow%3ANode+CI)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/deskoh/hackerrankjs_boilerplate.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/deskoh/hackerrankjs_boilerplate/context:javascript)
[![dependencies Status](https://img.shields.io/david/deskoh/hackerrankjs_boilerplate.svg?style=flat)](https://david-dm.org/deskoh/hackerrankjs_boilerplate)
[![devDependencies Status](https://img.shields.io/david/dev/deskoh/hackerrankjs_boilerplate.svg?style=flat)](https://david-dm.org/deskoh/hackerrankjs_boilerplate?type=dev)

## QuickStart

```sh
# Install dependencies
npm i
```

## TypeScript Development

* TypeScript source files should be placed in directories with `_ts` suffix. JavaScript files in these directories will be ignored by `git` (`.gitignore`).

* JavaScript files will be ignored by TypeScript compiler (`tsconfig.json`).

* Transpiled JavaScript will be created side-by-side in `*.ts` files.

```sh
# Compile TypeScript
tsc -p .

# Start TypeScript compiler in 'watch' mode
npm run dev
```

## Running Code

Inputs can be created as text files to be piped as `stdin`.

```sh
# TypeScript (assuming source is compiled, see above)
node _template_ts < _template_ts\in.txt

# JavaScript
node _template_js < _template_js\in.txt

# To pipe output to a file (note that the out.txt will be created in current directory)
node _template_ts < _template_ts\in.txt > out.txt
```

> To diff both files, use VS Code file compare feature by selecting both files and choose `Compare Selected` in the context menu.

## Debugging

The profiles `Debug TS` and `Debug JS` are defined in `.vscode/launch.json` for debugging TypeScript and JavaScript source respectively. Open the source file before starting the debug session. The content of `in.txt` will be piped in as `stdin`.

## Unit Tests

The project is setup with [Mocha](https://mochajs.org/) test framework for unit testing. Tests should be suffix with `.test.js` or `.test.ts`, See `.mocharc.json`.

```sh
# Run all tests
npm test
```

## ESLint

```sh
npm run lint
```

ESLint is configured with recommended ruleset. See `.eslintrc.js` for details.
