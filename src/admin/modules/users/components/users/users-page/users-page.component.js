class UsersPage extends Table {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(usersService) {
        super(usersService);
        this.name = 'users';
        this.title = trans('users');

        this.options = {
            permissionsKey: 'users',
            singleName: 'user',
            table: {
                heading: 'users',
                columns: [{
                    name: 'id',
                    head: '#',
                    key: 'id',
                }, {
                    head: 'name',
                    key: 'name',
                }, {
                    head: 'group',
                    key: 'group.name',
                }, {
                    head: 'email',
                    key: 'email',
                    formatter: 'email',
                }],
            },
        };
    }
}