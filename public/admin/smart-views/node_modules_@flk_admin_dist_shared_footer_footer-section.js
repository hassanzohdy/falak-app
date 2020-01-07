_Component({
                selector: 'footer-section',
                c: 'Footer', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {},
                render: function (component) {
                    
                    this.isReadyToGo();
                }
        });