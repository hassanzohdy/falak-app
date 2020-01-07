DI.resolve('events').on('app.ready', e => {
    const permissionsList = {
        users: {
            list: trans('itemsList', trans('users')),
            create: trans('createItem', trans('user')),
            update: trans('updateItem', trans('user')),
            delete: trans('deleteItem', trans('user')),
        },
        usersGroups: {
            list: trans('itemsList', trans('usersGroups')),
            create: trans('createItem', trans('group')),
            update: trans('updateItem', trans('group')),
            delete: trans('deleteItem', trans('group')),
        },
        settings: {
            page: trans('canAccess', trans('pageOf', trans('settings'))),
        },
    };    

    ADMIN.PERMISSIONS_LIST = permissionsList;
});
