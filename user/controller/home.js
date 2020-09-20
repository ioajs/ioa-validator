'use strict';

module.exports = class {
   index(ctx) {
      ctx.body = ctx.params;
   }
}
   ;