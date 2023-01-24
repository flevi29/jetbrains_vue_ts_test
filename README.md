Note that after modules have been installed and everything indexed, in
`index.ts` `PhpStorm 2022.3.1 Build #PS-223.8214.64` complains of the import:

> TS2307: Cannot find module 'oai_pmh_v2' or its corresponding type
> declarations.

However, if we compile and run app with `npm run test` there are no issues
found.

If we browse to `oai_pmh_v2` directory in `node_modules` and within
`package.json` delete the `"exports"` property and restart the TypeScript
Service, it's no longer err -ing. Also note that if we remove `vue` as a
dependency, the error disappears again. Also note that this error does not occur
under `Visual Studio Code`.

[`oai_pmh_v2`](https://github.com/flevi29/oai_pmh_v2) was transpiled by
[dnt](https://github.com/denoland/dnt) with `deno`.

In conclusion there is some bug within the Vue TypeScript service, or perhaps
within something else related to PhpStorm.
