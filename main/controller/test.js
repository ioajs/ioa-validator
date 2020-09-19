'use strict';

const { validator } = require('@app');

module.exports = async function (ctx) {

  const { data } = validator.test.verify(ctx);

  ctx.body = data;
  
}