class HomePage {
    /**
     * Constructor
     */
    constructor(user) {
        this.name = 'home';
        this.title = trans('site-name');
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() { 
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {
    }

    sub(form) {
        DI.resolve('uploaderService').create(form)

    }
}