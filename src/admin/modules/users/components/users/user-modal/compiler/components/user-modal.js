const Component = require(COMPONENT_CLASS_PATH);

class UserModalComponent extends Component {}

module.exports = {
    selector: 'user-modal',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: UserModalComponent,
    isUnique: false,
    component: 'UserModal',
    htmlFile: __dirname + '/../../user-modal.component.html',
};