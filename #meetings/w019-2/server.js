const http              = require('http');
const dispatcherManager = require('./util/request.js');
const authApi           = require('./api/auth.api.js');
const productApi        = require('./api/product.api.js');
const utilApi           = require('./api/_util.api.js');

const server    = http.createServer((request, response) => {

    const dispatcher = dispatcherManager.Dispatch(request, response);

    dispatcher.action('auth', () => authApi.serve(dispatcher));

    // PUBLIC API
    dispatcher.action('products',   () => productApi.serve(dispatcher));
    // dispatcher.serve(               () => utilApi.serve(dispatcher));
});

server.listen(1234, () => {
    console.log('Server started');
});