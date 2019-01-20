# nextjs-with-jest-typescript

A very simple example of Next.js-based website with Jest tests, all written in TypeScript.

## install

```sh
$ yarn install
```

## test

```sh
$ yarn test
yarn run v1.12.3
$ jest
 PASS  __tests__/index.test.tsx
  With Enzyme
    √ App shows "A simple example repo" in a <p> tag (11ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        4.266s
Ran all test suites.
Done in 5.90s.
```

## code

- `jest.config.js`: use `ts-jest` to test TypeScript files; use mocks for imported CSS/LESS files; use TypeScript compiler to handle both TS/JS files
- `jest.setup.js`: use `enzyme` to test with [jQuery-like APIs](https://github.com/airbnb/enzyme#readme)
- `tsconfig.jest.json`: allow JavaScript files (e.g., `jest.setup.js`) during the test
- `next.config.js`: just an ordinary Next.js config (with TypeScript and CSS support)

## see also

https://github.com/zeit/next.js/tree/master/examples/with-jest-typescript

- uses only `@zeit/next-typescript` but `@zeit/next-css`
- uses `babel-jest` instead of `ts-jest`

---

https://github.com/arcatdmz/nextjs-with-jest-typescript
