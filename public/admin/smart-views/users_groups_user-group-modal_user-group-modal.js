_Component({
                selector: 'user-group-modal',
                c: 'UserGroupModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','heading','itemName','submit','data','isCheckedPermission','checkPermission','isSending','modal'],
                children: {c0qxVdXrz:'flk-mdb-checkbox',czFZ_Vd2K:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('czFZ_Vd2K', {parent:component,events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let eleosam = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eleosam.formHandler) {
                    window.cfrmdlr = eleosam.formHandler = new FormHandler(eleosam, component);
                } else {
                    window.cfrmdlr = eleosam.formHandler;
                }
            let el1oGCv = eo('div',null,null,`class`,`form-group`);
el1oGCv.cls = {'group-error': !!eleosam.formHandler.getError(`name`) };

            for (let className in el1oGCv.cls) {
                el1oGCv.classList.toggle(className, el1oGCv.cls[className]);
            }  
            let elc1G6h = eo('label',null,null,`for`,`name`);
text(trans('name'));
let elLtVIE = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elIPHxE = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eleosam.formHandler.addError(`name`, 'required', trans('validation.required'));}return eleosam.formHandler.removeError(`name`);}]},`value`,`${fval(component.data.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elIPHxE.value = fval(component.data.name);
let cndP3U0 = eleosam.formHandler.getError(`name`);
this.setState('stsfnIu', cndP3U0);
if (cndP3U0) { 
let elBwGKk = eo('div','Wy8f',null,`class`,`error-msg`);
text(eleosam.formHandler.getError(`name`));
ec('div');
}ec('div');
let eluLZcD = eo('h3');
text(trans('permissions'));
ec('h3');
let elThQMS = ev('hr');
let elnQIF1 = eo('div',null,null,`class`,`row`);
for (let permission in ADMIN.PERMISSIONS_LIST) {
let permissionsList = ADMIN.PERMISSIONS_LIST[permission]; 
 let iigFb3 = 'VURGKZy' + permission;
let elFjLu4 = eo('div','OK7KaMZIbPxg' + permission+iigFb3,null,`class`,`col-sm-6 col-md-4 col-lg-3 `);
let elk7jJx = eo('h6','JMXff'+iigFb3,null,`class`,`bold`);
text( trans('canAccess', trans(permission)) );
ec('h6');
for (let permissionValue in permissionsList) {
let permissionText = permissionsList[permissionValue]; 
 let iic9rM = 'C2qLrVr' + permissionValue;
let cmpQvW5 = this._lc('c0qxVdXrz', {parent:component,parentTop:flkModal,props:{name:'permissions.' + permission + '.' + permissionValue,value:1,checked:component.isCheckedPermission(permission, permissionValue),label:permissionText},events:{onchange:function(e) {let $el = this; component.checkPermission(permission, permissionValue, $el.checked)}},boolAttrs:{checked:component.isCheckedPermission(permission, permissionValue)},attrs:{name:`${('permissions.' + permission + '.' + permissionValue).toInputName()}`},insideLoop:true,index:"" +iigFb3+iic9rM});
}
let elDtmOh = ev('hr','AOYff'+iigFb3,null,`class`,`m-t-2 d-block`);
ec('div');
}
ec('div');
let elFq5LN = eo('div',null,null,`class`,`form-buttons`);
let el6jW8A = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn save-btn btn-success waves-effect waves-light`);
let cndPT5N = ! component.isSending;
this.setState('stwgUbP', cndPT5N);
let cndjg03 = !(cndPT5N);
this.setState('stfR9d1', cndjg03);
if (cndPT5N) { 
let el12ay3 = eo('span','xVuf');
text(trans('save'));
ec('span');
}else { 
let eljCHmY = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin icon'}`);
ec('i');
}ec('button');
let elhMgxr = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.modal.close()}]}, boolAttrs, {disabled:component.isSending},`type`,`button`,`class`,`btn save-btn btn-danger waves-effect waves-light`);
text(trans('cancel'));
ec('button');
ec('div');
ec('form');
},attrs:{size:'medium',heading:`${ trans(component.heading, trans(component.itemName)) }`}});

                    this.isReadyToGo();
                }
        });