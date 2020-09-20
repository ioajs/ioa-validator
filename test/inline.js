'use strict';

const test = require('jmr');
const axios = require('axios');

test('get /inline', async t => {

   const { data } = await axios.get("/inline?limit=10&page=2");

   t.deepEqual(data, {});

});