DI.resolve('events').subscribe('app.ready', () => {
    // perform certain actions before the router starts to scan the routes     
});