const Component = require(COMPONENT_CLASS_PATH);

class UsersGroupsPageComponent extends Component {}

module.exports = {
    selector: 'users-groups-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: UsersGroupsPageComponent,
    isUnique: true,
    component: 'UsersGroupsPage',
    htmlFile: __dirname + '/../../users-groups-page.component.html',
};