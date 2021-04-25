import ioa from 'ioa';

const { validator } = ioa.app;

export default async function (ctx) {

  const { data } = validator.query.verify(ctx);

  ctx.body = data;
  
}