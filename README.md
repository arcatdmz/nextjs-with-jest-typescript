# nextjs-with-jest-typescript

A very simple example of Next.js-based website with Jest tests, all written in TypeScript.

## install

```sh
$ yarn install
```

## test

```sh
$ yarn test
yarn run v1.22.5
$ jest
 PASS  __tests__/index.test.tsx
  With Enzyme
    √ App shows "A simple example repo" in a <p> tag (7 ms)
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.893 s, estimated 4 s
Ran all test suites.
Done in 4.09s.
```

## code

- `package.json/jest`: use `ts-jest` to test TypeScript files; use mocks for imported CSS/LESS files; use TypeScript compiler to handle both TS/JS files
- `jest.setup.ts`: use `enzyme` to test with [jQuery-like APIs](https://github.com/airbnb/enzyme#readme)
- `tsconfig.jest.json`: handles JSX transformation by `ts-jest` during the test

## see also

https://github.com/vercel/next.js/tree/master/examples/with-typescript-eslint-jest

- does not use CSS files
- uses `babel-jest` instead of `ts-jest`

---

https://github.com/arcatdmz/nextjs-with-jest-typescript
