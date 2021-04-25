import test from 'jtm';
import axios from 'axios';

test('home /', async t => {

   const { data } = await axios.get("/?limit=10&page=2");

   t.deepEqual(data, 'hello ioa');

});