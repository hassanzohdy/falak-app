Config.extend({
    http: {
        endpoint: {
            baseRoute: '/', // base route that will be added at the end of the base url            
        }
    },
    meta: {
        appendAppName: true,
        appNameSeparator: ' | ',
    },
    user: {
        loginKey: '_u',
        accessTokenKey: '_at',
    }
});