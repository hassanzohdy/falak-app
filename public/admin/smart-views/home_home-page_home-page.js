_Component({
                selector: 'home-page',
                c: 'HomePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {c7P5Ockql:'layout'},
                render: function (component) {
                    let cmpcaOU = this._lc('c7P5Ockql', {parent:component,content:(layout) => {let elcWdJE = eo('h1');
text(trans('dashboard'));
ec('h1');
}});

                    this.isReadyToGo();
                }
        });