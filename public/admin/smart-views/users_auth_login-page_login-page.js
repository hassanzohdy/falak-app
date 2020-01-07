_Component({
                selector: 'login-page',
                c: 'LoginPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['login','errorMsg','isValidForm','isLoggingIn'],
                children: {},
                render: function (component) {
                    let els8hM7 = eo('div',null,null,`class`,`m-t-9`);
let elXrB2f = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.login($el)}]},`class`,`login-form m-auto`);

                if (! elXrB2f.formHandler) {
                    window.cfrmdlr = elXrB2f.formHandler = new FormHandler(elXrB2f, component);
                } else {
                    window.cfrmdlr = elXrB2f.formHandler;
                }
            let elqxU4R = eo('h1',null,null,`class`,`bold text-center m-b-4`);
text(trans('welcome'));
ec('h1');
let cndkcph = component.errorMsg;
this.setState('stlgrVl', cndkcph);
if (cndkcph) { 
let elP4nX0 = eo('div','r4Xf',null,`class`,`bold alert alert-danger`);
text(component.errorMsg);
ec('div');
}let elW3WNS = eo('div',null,null,`class`,`form-group`);
elW3WNS.cls = {'group-error': !!elXrB2f.formHandler.getError(`email`) };

            for (let className in elW3WNS.cls) {
                elW3WNS.classList.toggle(className, elW3WNS.cls[className]);
            }  
            let elAuHeG = eo('label',null,null,`for`,`email`);
text(trans('email-address'));
let elDPhLY = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el4OoME = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXrB2f.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elXrB2f.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elXrB2f.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email-address`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);

                    setTimeout(function () {
                        let $el = el4OoME;
                        
            if (true && ! el4OoME.focused) {
                
                el4OoME.focused = true;
                el4OoME.focus();
            }
        ;
                    }, 0);                
                let cndLOGF = elXrB2f.formHandler.getError(`email`);
this.setState('st2Y8Ry', cndLOGF);
if (cndLOGF) { 
let elmy2DS = eo('div','KDXf',null,`class`,`error-msg`);
text(elXrB2f.formHandler.getError(`email`));
ec('div');
}ec('div');
let elXT1uK = eo('div',null,null,`class`,`form-group`);
elXT1uK.cls = {'group-error': !!elXrB2f.formHandler.getError(`password`) };

            for (let className in elXT1uK.cls) {
                elXT1uK.classList.toggle(className, elXT1uK.cls[className]);
            }  
            let el3ecHM = eo('label',null,null,`for`,`password`);
text(trans('password'));
let elv52zv = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eli1GxE = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXrB2f.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elXrB2f.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elXrB2f.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cndqZVY = elXrB2f.formHandler.getError(`password`);
this.setState('stRQksq', cndqZVY);
if (cndqZVY) { 
let elM8_nV = eo('div','DS3f',null,`class`,`error-msg`);
text(elXrB2f.formHandler.getError(`password`));
ec('div');
}ec('div');
let elctqEn = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isLoggingIn},`class`,`btn btn-primary btn-block`);
let cndjjkf = ! component.isLoggingIn;
this.setState('stN73vR', cndjjkf);
let cndelWK = !(cndjjkf);
this.setState('st0QAyn', cndelWK);
if (cndjjkf) { 
let elWgiEj = eo('span','T05f');
text(trans('login'));
ec('span');
}else { 
let el1yqx3 = eo('div',null,null,`class`,`text-center`);
let elEZFCe = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin fa-1x icon'}`);
ec('i');
ec('div');
}ec('button');
ec('form');
ec('div');

                    this.isReadyToGo();
                }
        });