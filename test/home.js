import test from 'jtm';
import axios from 'axios';

test('home /', async t => {

   const { data, error } = await axios.get("/?page=2");

   t.deepEqual(data, 'hello ioa', error);

});