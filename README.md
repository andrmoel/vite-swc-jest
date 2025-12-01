## How to reproduce the bug

1. run `yarn install`
2. run `yarn test`

The following errors occurs:

```
 FAIL  src/App.test.tsx
  ● Test suite failed to run

    plugin

      × failed to invoke plugin on 'Some("/home/amoeller/Projekte/vite-swc-jest/src/App.test.tsx")'

      at Compiler.transformSync (node_modules/@swc/core/index.js:249:29)
```

## Using version 1.13.5 works

Install swc and swc-plugin-import-meta-env version 1.13.5

1. run `yarn add @swc/core@1.13.5 -D`
2. run `yarn add swc-plugin-import-meta-env@1.13.5 -D`
3. run `yarn test`

```
 PASS  src/App.test.tsx
  ✓ tests (30 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.341 s
Ran all test suites matching ./src.
```
