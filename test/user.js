import test from 'jtm';
import axios from 'axios';

test('get /user/:name', async t => {

   const { data } = await axios.get("/user/666");

   t.deepEqual(data, { name: "666" });

});
