class UsersGroupsPage extends Table {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(UsersGroupsService) {
        super(UsersGroupsService);
        this.name = 'users-groups';
        this.title = trans('usersGroups');

        this.options = {
            permissionsKey: 'usersGroups',
            singleName: 'group',
            table: {
                heading: 'usersGroups',
                columns: [{
                    name: 'id',
                    head: '#',
                    key: 'id',
                }, {
                    head: 'name',
                    key: 'name',
                },],
            },
        };
    }
}