'use strict';

const test = require('jmr');
const axios = require('axios');

test('get /test', async t => {

   const { data } = await axios.get("/test?limit=10&page=2");

   t.deepEqual(data, {
      query: {
         limit: 10,
         page: 2
      }
   })

});