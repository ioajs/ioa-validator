import ioa from 'ioa';
import typea from 'typea';

const app = ioa.app();

app.export({
  'loads': {
    "validator": {
      level: 25,
      module(model) {

        return typea(model);;

      },
      directory(validators) {

        app.export({
          'middleware': {
            validator(name, mode) {

              const validator = validators[name];

              if (!validator) {
                throw new Error(`未找到“${name}”验证器`);
              }

              if (mode === undefined) {
                mode = `verify`;
              } else if (mode === true) {
                mode = `strictVerify`;
              } else if (mode === false) {
                mode = 'looseVerify';
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
          }
        });

        return validators;

      }
    }
  }
});