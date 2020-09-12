'use strict';

const { router, validator } = require('@app');

router.get('/', validator.home, 'home');

router.get('/sms/:name/:sub', validator.sms, 'sms');

router.post('/login', validator.login, 'login');
