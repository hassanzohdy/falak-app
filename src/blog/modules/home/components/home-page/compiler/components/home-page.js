const Component = require(COMPONENT_CLASS_PATH);

class HomePageComponent extends Component {}

module.exports = {
    selector: 'home-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: HomePageComponent,
    isUnique: true,
    component: 'HomePage',
    htmlFile: __dirname + '/../../home-page.component.html',
};