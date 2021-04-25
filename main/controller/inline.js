import ioa from 'ioa';

const { router, middleware } = ioa.app;

const { validator } = middleware;

router.get('/inline', validator('query'), async ctx => {

  ctx.body = {};

})
