class SettingsHandler {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(type, permissionsPage) {
        this.type = type;
        this.permissionsPage = permissionsPage;
        this.user = DI.resolve('user');
        this.router = DI.resolve('router');
        this.settingsService = DI.resolve('settingsService');
    }

    /**
     * Check if current user can access this settings page
     */
    canAccess(page) {
        return this.user.group.permissions.settings && this.user.group.permissions.settings[page];
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {    
        if (! this.canAccess(this.permissionsPage)) {
            return this.router.navigateTo('/access-denied');
        }

        this.isValidForm = true;

        this.isUpdating = false;

        this.isLoading = true;

        if (SettingsHandler.settingsList[this.type]) {
            this.isLoading = false;
            this.settings = SettingsHandler.settingsList[this.type];

            this.onLoad();
        }

        let { record } = await this.settingsService.get(this.type);

        this.settings = record ? record.settings : {};

        this.onLoad();

        SettingsHandler.settingsList[this.type] = this.settings;

        this.isLoading = false;
    }

    onLoad() { }

    openWidgetModal() {
        this.newWidget = {};
        this.widgetModalIsOpened = true;
    }

    closeWidgetModal() {
        this.newWidget = null;
        this.widgetModalIsOpened = false;
    }

    activePanel(key) {
        return {
            active: this.activeTab == key,
            show: this.activeTab == key,
        };
    }

    async submit(form) {
        this.isUpdating = true;
        await this.settingsService.update(form);
        this.isUpdating = false;

        this.successSave = true;
    }

    saveWidgetModal() {
        if (!Is.empty(this.newWidget.value)) {
            this.widgets.push(this.newWidget);
        }

        this.widgetModal.close();
    }

    filterCampaigns(campaign, position) {
        if (campaign.status !== 'active') return false;
        let ads = [];
        for (let ad of campaign.ads) {
            ads.push({
                value: ad.id,
                text: `${campaign.name} >> ${ad.name}`,
            });
        }

        return ads;
    }

    filterCampaignsWithManyAds(campaign, position) {
        if (campaign.status !== 'active') return false;
        
        let items = [];
        
        if (Is.string(position)) {
            position = [position];
        }

        for (let ad of campaign.ads) {
            items.push({
                value: ad.id,
                text: `${campaign.name} >> ${ad.name}`,
            });
        }

        return items;
    }


    draggableWidgets(widgetsContainer) {
        if (widgetsContainer.draggable) return;

        widgetsContainer.draggable = true;

        Sortable.create(widgetsContainer, {
            sort: true,
            onEnd: e => {
                let items = Array.from(widgetsContainer.querySelectorAll('.item'));

                for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
                    let item = items[itemIndex];
                    let itemId = item.id;
                    for (let widgetIndex = 0; widgetIndex < this.widgets.length; widgetIndex++) {
                        let widget = this.widgets[widgetIndex];

                        if (widget.id == itemId) {
                            let tempWidget = this.widgets[itemIndex];
                            this.widgets[itemIndex] = widget
                            this.widgets[widgetIndex] = tempWidget;
                        }
                    }
                }
            },
        });
    }
}

SettingsHandler.settingsList = {};