const Component = require(COMPONENT_CLASS_PATH);

class UserGroupModalComponent extends Component {}

module.exports = {
    selector: 'user-group-modal',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: UserGroupModalComponent,
    isUnique: false,
    component: 'UserGroupModal',
    htmlFile: __dirname + '/../../user-group-modal.component.html',
};