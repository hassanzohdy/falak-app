_Component({
                selector: 'users-page',
                c: 'UsersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['options','isLoading','records','addModal','editModal','currentRecord','updateRecord'],
                children: {crGfPyFR5:'admin-table',czSEIpBeR:'user-modal',c23jnbiEG:'user-modal'},
                render: function (component) {
                    let cmp9XcH = this._lc('crGfPyFR5', {parent:component,props:{options:component.options,isLoading:component.isLoading,records:component.records}});
let cndkDSx = component.addModal;
this.setState('stFmeob', cndkDSx);
if (cndkDSx) { 
let cmp83UH = this._lc('czSEIpBeR', {parent:component,events:{onsave:function(e) {let $el = this; component.records.push(e)},onclose:function(e) {let $el = this; component.addModal = false}},state:'stFmeob'});
}let cndBEWZ = component.editModal;
this.setState('stBGPXw', cndBEWZ);
if (cndBEWZ) { 
let cmp5vIc = this._lc('c23jnbiEG', {parent:component,props:{record:component.currentRecord},events:{onsave:function(e) {let $el = this; component.updateRecord(e)},onclose:function(e) {let $el = this; component.editModal = false}},state:'stBGPXw'});
}
                    this.isReadyToGo();
                }
        });