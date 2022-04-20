import ioa from 'ioa';
import types from 'typea';

const app = ioa.app();

app.export({
  '$import': {
    "validator": {
      level: 25,
      module(model) {

        return types(model);;

      },
      directory(validators) {

        app.export({
          middleware: {
            validator(name) {

              const validator = validators[name];

              if (validator === undefined) {
                throw new Error(`未找到“${name}”验证器`);
              }

              return async function (ctx, next) {

                const { query, params, request } = ctx;

                const { error, data } = validator.verify({
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
          }
        });

        return validators;

      }
    }
  }
});