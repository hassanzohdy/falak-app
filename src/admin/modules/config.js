Config.extend({
    http: {
        endpoint: {
            baseRoute: '/admin', // base route that will be added at the end of the base url
        }
    },
    spinner: {
        theme: 'black',
    },
    form: {
        imagePreview: assets('images/placeholder.png'),
        datepicker: {
            format: 'd-m-Y',
            dateTimeFormat: 'd-m-Y H:i',
        },
    },
    modal: {
        size: 'small',
    },
    user: {
        loginKey: '_ua', // user admin
        accessTokenKey: '_aat', // admin access token
    },
    admin: {
        logo: 'images/logo.png'
    }
});