import ioa from 'ioa';

const { app } = ioa;

app.use("@ioa/koa");

app.loader({
   "config": false,
   "middleware": false,
});