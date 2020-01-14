ADMIN.set(() => {
    return {
        sidebarLinks: [
            {
                group: {
                    route: '/users',
                    icon: 'user-secret',
                    text: 'users',
                },
                items: [{
                    route: '/users',
                    icon: 'user-secret',
                    text: 'users',
                    permissionsKey: 'users.list',
                }, {
                    route: '/users/groups',
                    icon: 'users',
                    text: 'usersGroups',
                    permissionsKey: 'usersGroups.list',
                }],
            }],
        permissions: {
            users: {
                crud: 'user',
            },
            usersGroups: {
                crud: 'group',
            },
        },
    }
});
