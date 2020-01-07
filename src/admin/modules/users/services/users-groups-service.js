class UsersGroupsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/users/groups');
    }
}

DI.register({
    class: UsersGroupsService,
    alias: 'usersGroupsService',
});