'use strict';

const app = require('@app');
const typea = require('typea');

app.emit('loads', {
  "validator": {
    "level": 25,
    module(model) {

      return typea(model);;

    },
    directory(validators) {

      app.emit('middleware', {
        validator(name, mode = 'verify') {

          const validator = validators[name];

          if (!validator) {
            throw new Error(`未找到“${name}”验证器`);
          }

          return async function (ctx, next) {

            const { query, params, request } = ctx;

            const { error, data } = validator[mode]({
              query,
              params,
              body: request.body
            });

            if (error) {

              return ctx.body = {
                code: 1000,
                error
              };

            } else {

              const { query, params, body } = data;

              ctx.query = query;
              ctx.params = params;
              ctx.request.body = body;

            }

            await next();

          }

        }
      });

      return validators;

    }
  }
});