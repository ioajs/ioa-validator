'use strict';

const app = require('@app');
const typea = require('typea');

app.emit('loads', {
   "validator": {
      "level": 25,
      module(model) {

         const validator = typea(model);

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