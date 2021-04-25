const test = require('jmr');
const axios = require('axios');


test('get /sms/:name/:sub', async t => {

   const { data } = await axios.get("/sms/sub/1232");

   t.deepEqual(data, {
      name: "sub",
      sub: "1232"
   })

});
