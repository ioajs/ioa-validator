export default async function (ctx) {

  const { body } = ctx.request;

  ctx.body = {
    type: 'login',
    body
  }

}