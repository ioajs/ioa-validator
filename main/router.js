import { main } from 'ioa';

const { router } = main;

const { validator } = main.middleware;

router.get('/', validator('home'), 'home');

router.get('/test', 'test');

router.get('/sms/:name/:sub', validator('sms'), 'sms');

router.post('/login', validator('login'), 'login');
