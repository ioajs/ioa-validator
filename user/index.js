import ioa from 'ioa';

const { app } = ioa;

app.component("@ioa/koa");

app.import({
   "middleware": false,
});