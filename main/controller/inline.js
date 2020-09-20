'use strict';

const { router, middleware } = require('@app');

const { validator } = middleware;

router.get('/inline', validator('query'), async ctx => {

  ctx.body = {};

})
