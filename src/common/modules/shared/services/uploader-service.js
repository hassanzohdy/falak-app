class UploaderService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
    }

    upload(file, progressCallback) {

        return this.endpoint.post('/upload', this.getFormData(file), {
            progress: progressCallback,
        });
    }

    getFormData(file) {
        
        let formData = new FormData;

        let data = {};

        if (! Is.plainObject(file)) {
            data = {
                file,
            };
        } else {
            data = file;
        }

        for (let key in data) {
            formData.append(key, data[key]);
        }

        return formData;
    }
}

DI.register({
    class: UploaderService,
    alias: 'uploaderService',
});