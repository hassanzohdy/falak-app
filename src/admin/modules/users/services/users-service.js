class UsersService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/users');
    }
}

DI.register({
    class: UsersService,
    alias: 'usersService',
});