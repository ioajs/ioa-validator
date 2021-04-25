import test from 'jtm';
import axios from 'axios';

test('get /inline', async t => {

   const { data } = await axios.get("/inline?limit=10&page=2");

   t.deepEqual(data, {});

});