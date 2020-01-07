class TagsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/tags');
    }
}

DI.register({
    class: TagsService,
    alias: 'tagsService',
});