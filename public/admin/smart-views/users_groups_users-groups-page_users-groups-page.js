_Component({
                selector: 'users-groups-page',
                c: 'UsersGroupsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['options','isLoading','records','addModal','editModal','currentRecord','updateRecord'],
                children: {cVvSwHryY:'admin-table',cK2TLSuum:'user-group-modal',cpoa02F2s:'user-group-modal'},
                render: function (component) {
                    let cmpWUMv = this._lc('cVvSwHryY', {parent:component,props:{options:component.options,isLoading:component.isLoading,records:component.records}});
let cndDkbM = component.addModal;
this.setState('stZNoLR', cndDkbM);
if (cndDkbM) { 
let cmpXEpV = this._lc('cK2TLSuum', {parent:component,events:{onsave:function(e) {let $el = this; component.records.push(e)},onclose:function(e) {let $el = this; component.addModal = false}},state:'stZNoLR'});
}let cndlTIl = component.editModal;
this.setState('stXNqCW', cndlTIl);
if (cndlTIl) { 
let cmpih2m = this._lc('cpoa02F2s', {parent:component,props:{record:component.currentRecord},events:{onsave:function(e) {let $el = this; component.updateRecord(e)},onclose:function(e) {let $el = this; component.editModal = false}},state:'stXNqCW'});
}
                    this.isReadyToGo();
                }
        });