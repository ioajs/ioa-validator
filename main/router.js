import ioa from 'ioa';

const { router, middleware } = ioa.app;

const { validator } = middleware;

router.get('/', validator('home', true), 'home');

router.get('/test', 'test');

router.get('/sms/:name/:sub', validator('sms'), 'sms');

router.post('/login', validator('login'), 'login');
