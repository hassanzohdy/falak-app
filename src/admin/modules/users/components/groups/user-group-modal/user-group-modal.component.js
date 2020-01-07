class UserGroupModal extends AdminModal {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(usersGroupsService) {
        super(usersGroupsService);

        this.itemName = 'group';

        this.defaultData = {
            name: '',
            permissions: [],
        };
    }

    isCheckedPermission(parentPermission, permissionValue) {
        return this.data.permissions[parentPermission] ? this.data.permissions[parentPermission][permissionValue] : null;
    }

    checkPermission(parentPermission, permissionValue, isChecked) {
        if (! isChecked) {
            delete this.data.permissions[parentPermission][permissionValue];
        } else {
            this.data.permissions[parentPermission] = {};
            this.data.permissions[parentPermission][permissionValue] = true;
        }
    } 
}