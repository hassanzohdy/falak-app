class UserModal extends AdminModal {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(usersService, usersGroupsService) {
        super(usersService);
        this.usersGroupsService = usersGroupsService;
        this.defaultData = {
            name: '',
            email: '',
            group: {
                id: null,
            },
        };
    }
}