const Component = require(COMPONENT_CLASS_PATH);

class SettingsPageComponent extends Component {}

module.exports = {
    selector: 'settings-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: SettingsPageComponent,
    isUnique: true,
    component: 'SettingsPage',
    htmlFile: __dirname + '/../../settings-page.component.html',
};