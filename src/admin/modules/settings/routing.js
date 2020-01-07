// Settings module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/settings',
        middleware: [],
    }, routerGroup => {
        // routes list
        // Settings page
        routerGroup.add('/', SettingsPage);
		// end of routes
    });
});