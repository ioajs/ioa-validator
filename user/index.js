'use strict';

const app = require('@app');

app.use("@ioa/koa");

app.loader({
   "config": false,
   "middleware": false,
});