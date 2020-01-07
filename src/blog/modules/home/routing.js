// Home module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/',
        middleware: [],
    }, routerGroup => {
        // Home page
		routerGroup.add('/', HomePage);
		// end of routes
    });
});