'use strict';

const { router, middleware } = require('@app');

const { validator } = middleware;

router.get('/', validator('home', 'strictVerify'), 'home');

router.get('/test', 'test');

router.get('/sms/:name/:sub', validator('sms'), 'sms');

router.post('/login', validator('login'), 'login');
