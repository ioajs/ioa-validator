import ioa from 'ioa';

const { validator } = ioa.app();

export default async function (ctx) {

  const { query } = ctx;

  const { data } = validator.query.verify({ query });

  ctx.body = data;

}