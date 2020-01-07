const Component = require(COMPONENT_CLASS_PATH);

class LoginPageComponent extends Component {}

module.exports = {
    selector: 'login-page',
    isChild: false,
    handler: LoginPageComponent,
    isUnique: false,
    component: 'LoginPage',
    htmlFile: __dirname + '/../../login-page.component.html',
};