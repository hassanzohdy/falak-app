class SettingsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/settings');
    }

    update(form) {
        return this.endpoint.put(this.path(''), form);
    }
}

DI.register({
    class: SettingsService,
    alias: 'settingsService',
});