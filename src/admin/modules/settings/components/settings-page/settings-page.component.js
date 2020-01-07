class SettingsPage extends SettingsHandler {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor() {
        super('generalSettings', 'page');
        this.name = 'settings';
        this.title = trans('settings');
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        super.init();
        this.activeTab = 'general';
    }

    activePanel(key) {
        return {
            active: this.activeTab == key,
            show: this.activeTab == key,
        };
    }
}