class Footer extends LayoutComponent {
    /**
     * {@inheritdoc}
     */
    init() {
        this.year = (new Date).getFullYear();
    }

    /**
     * {@inheritdoc}
     */
    ready() { }
}