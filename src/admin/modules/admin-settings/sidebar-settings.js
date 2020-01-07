const ADMIN_SIDEBAR_SETTINGS = {
    customRoutes: {
        // alias routes
        // i.e
        // '/products/{:id}/view': '/products'
        // this will highlight the `/products` route in sidebar
    },
    links: [{
        route: '/',
        icon: 'home',
        text: 'dashboard',
    },
    {
        group: {
            route: '/users',
            icon: 'user-secret',
            text: 'users',
        },
        items: [{
            route: '/users',
            icon: 'user-secret',
            text: 'users',
            permissionsKey: 'users.list',
        }, {
            route: '/users/groups',
            icon: 'users',
            text: 'usersGroups',
            permissionsKey: 'usersGroups.list',
        }],
    }],
};

ADMIN.SIDEBAR_SETTINGS = ADMIN_SIDEBAR_SETTINGS;