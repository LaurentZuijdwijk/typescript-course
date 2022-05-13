# Lesson 4 TypeScript tooling

To run typescript applications in production, we compile it to javascript for nodejs or for browsers. For both targets the tooling is slightly different. 

For NodeJs we want to run the `tsc` command with a specific target folder, while for browser apps we want to compile all code into one or more minimized files.  

## Nodejs 

[documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

We already have an empty tsconfig.json file. Let's install a base config for node 14. 

`npm install --save-dev @tsconfig/node14`

Update the config with the following
```
{
  "extends": "@tsconfig/node14/tsconfig.json",
  "compilerOptions": {
    "preserveConstEnums": true,
    "outDir": "dist"
  },
  "include": ["**/*"],
  "exclude": ["node_modules", "**/*.test.ts"]
}
```

There is a good chance that with the updated settings we will get stricter type checking. We should correct these type errors.

Now that we have created our compiled JS files we can run them with: `node ./dist/index.js

For development we can watch files using `npx ts-node-dev`

Build and dev scripts can be added to package.json in the `scripts` object. `npm run test` will run the test command for example.

