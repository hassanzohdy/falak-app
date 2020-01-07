// Users module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/users',
        middleware: ['guardian'],
    }, routerGroup => {
        // routes list
        // Users page
        routerGroup.add('/', UsersPage);
        // Users groups page
        routerGroup.add('/groups', UsersGroupsPage);
		// end of routes
    });

    router.add('/login', LoginPage);
});
