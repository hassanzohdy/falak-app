const Component = require(COMPONENT_CLASS_PATH);

class UsersPageComponent extends Component {}

module.exports = {
    selector: 'users-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: UsersPageComponent,
    isUnique: true,
    component: 'UsersPage',
    htmlFile: __dirname + '/../../users-page.component.html',
};