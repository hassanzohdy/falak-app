_Component({
                selector: 'user-modal',
                c: 'UserModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','heading','submit','data','usersGroupsService','isSending','modal'],
                children: {cust0_MET:'flk-dropdown-list',ccgwWEV4M:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('ccgwWEV4M', {parent:component,events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let elfEjix = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elfEjix.formHandler) {
                    window.cfrmdlr = elfEjix.formHandler = new FormHandler(elfEjix, component);
                } else {
                    window.cfrmdlr = elfEjix.formHandler;
                }
            let elg50m3 = eo('div',null,null,`class`,`form-group`);
elg50m3.cls = {'group-error': !!elfEjix.formHandler.getError(`name`) };

            for (let className in elg50m3.cls) {
                elg50m3.classList.toggle(className, elg50m3.cls[className]);
            }  
            let elz7G_H = eo('label',null,null,`for`,`name`);
text(trans('name'));
let elrSDni = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elUve64 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfEjix.formHandler.addError(`name`, 'required', trans('validation.required'));}return elfEjix.formHandler.removeError(`name`);}]},`value`,`${fval(component.data.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elUve64.value = fval(component.data.name);
let cndXwQN = elfEjix.formHandler.getError(`name`);
this.setState('stNiO01', cndXwQN);
if (cndXwQN) { 
let elMKdpi = eo('div','GIGf',null,`class`,`error-msg`);
text(elfEjix.formHandler.getError(`name`));
ec('div');
}ec('div');
let elAMca4 = eo('div',null,null,`class`,`form-group`);
elAMca4.cls = {'group-error': !!elfEjix.formHandler.getError(`email`) };

            for (let className in elAMca4.cls) {
                elAMca4.classList.toggle(className, elAMca4.cls[className]);
            }  
            let elxvKP2 = eo('label',null,null,`for`,`email`);
text(trans('email'));
let elnK643 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elCJnff = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfEjix.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elfEjix.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elfEjix.formHandler.removeError(`email`);}]},`value`,`${fval(component.data.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elCJnff.value = fval(component.data.email);
let cndnOU4 = elfEjix.formHandler.getError(`email`);
this.setState('st1bcN6', cndnOU4);
if (cndnOU4) { 
let elzAGJ8 = eo('div','1Wpf',null,`class`,`error-msg`);
text(elfEjix.formHandler.getError(`email`));
ec('div');
}ec('div');
let elCg2Za = eo('div',null,null,`class`,`form-group`);
elCg2Za.cls = {'group-error': !!elfEjix.formHandler.getError(`password`) };

            for (let className in elCg2Za.cls) {
                elCg2Za.classList.toggle(className, elCg2Za.cls[className]);
            }  
            let ellQphX = eo('label',null,null,`for`,`password`);
text(trans('password'));
let cnd8Q2h = ! component.data.id;
this.setState('stvg5pO', cnd8Q2h);
if (cnd8Q2h) { 
let el9cvC4 = eo('span','4kNf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elNRnJP = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (! component.data.id && Is.empty(value)) {return elfEjix.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elfEjix.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elfEjix.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cndvzUl = elfEjix.formHandler.getError(`password`);
this.setState('stN2Cd5', cndvzUl);
if (cndvzUl) { 
let elVwtLM = eo('div','Qkaf',null,`class`,`error-msg`);
text(elfEjix.formHandler.getError(`password`));
ec('div');
}ec('div');
let el8wc5M = eo('div',null,null,`class`,`form-group`);
el8wc5M.cls = {'group-error': !!elfEjix.formHandler.getError(`confirmPassword`) };

            for (let className in el8wc5M.cls) {
                el8wc5M.classList.toggle(className, el8wc5M.cls[className]);
            }  
            let elzrPRE = eo('label',null,null,`for`,`confirmPassword`);
text(trans('confirmPassword'));
let cnd_Byr = ! component.data.id;
this.setState('stWJK6K', cnd_Byr);
if (cnd_Byr) { 
let elVvmCQ = eo('span','y2Tf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let el68ndX = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (! component.data.id && Is.empty(value)) {return elfEjix.formHandler.addError(`confirmPassword`, 'required', trans('validation.required'));}else if (value !== elfEjix.formHandler.value('password')) {return elfEjix.formHandler.addError(`confirmPassword`, 'match', trans('validation.match', trans('password')));}return elfEjix.formHandler.removeError(`confirmPassword`);}]},`name`,`${(`confirmPassword`).toInputName()}`,`placeholder`,`${trans(`confirmPassword`)}`,`type`,`password`,`class`,`form-control`,`id`,`confirmPassword`);
let cnduM3Y = elfEjix.formHandler.getError(`confirmPassword`);
this.setState('stblZ_g', cnduM3Y);
if (cnduM3Y) { 
let elcAMM5 = eo('div','KiLf',null,`class`,`error-msg`);
text(elfEjix.formHandler.getError(`confirmPassword`));
ec('div');
}ec('div');
let cmpS5qF = this._lc('cust0_MET', {parent:component,parentTop:flkModal,props:{lazyLoading:true,service:component.usersGroupsService,value:component.data.group.id},attrs:{name:`${(`groupId`).toInputName()}`,label:'group'}});
let elR_8vE = eo('div',null,null,`class`,`form-buttons`);
let el_510h = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn save-btn btn-success waves-effect waves-light`);
let cndRpDT = ! component.isSending;
this.setState('stJATfv', cndRpDT);
let cnd9zRC = !(cndRpDT);
this.setState('sto02jr', cnd9zRC);
if (cndRpDT) { 
let elYwurD = eo('span','nsIf');
text(trans('save'));
ec('span');
}else { 
let eltz6qi = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin icon'}`);
ec('i');
}ec('button');
let elJrG9F = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.modal.close()}]}, boolAttrs, {disabled:component.isSending},`type`,`button`,`class`,`btn save-btn btn-danger waves-effect waves-light`);
text(trans('cancel'));
ec('button');
ec('div');
ec('form');
},attrs:{heading:`${ trans(component.heading, trans('user')) }`}});

                    this.isReadyToGo();
                }
        });