class LoginPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(authService, user, router, cache) {
        this.name = 'login';
        this.title = trans('login');
        this.user = user;
        this.cache = cache;
        this.router = router;
        this.authService = authService;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.errors = {
            email: null,
            password: null,
        };
        this.errorMsg = null;
        this.isValidForm = true;
        this.isLoggingIn = false;
    }

    login(form) {
        this.errorMsg = null;
        this.isLoggingIn = true;
        this.authService.login(form).then(response => {
            this.user.login(response.user);
            this.router.navigateBack();
        }).catch(response => {
            this.isLoggingIn = false;
            if (response.errors) {
                form.formHandler.setErrors(response.errors);
            } else if (response.error) {
                this.errorMsg = trans('invalidData');
            }
        });
    }
}