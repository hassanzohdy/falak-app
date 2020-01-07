_Component({
                selector: 'settings-page',
                c: 'SettingsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','submit','isValidForm','isUpdating','activeTab','activePanel','settings','successSave'],
                children: {cLPDcecyU:'flk-spinner',c6fJ_zt7B:'flk-image-input',cBG_uCdeR:'layout',chZcAzIO2:'flk-message'},
                render: function (component) {
                    let cmpwxXn = this._lc('cBG_uCdeR', {parent:component,content:(layout) => {let cndXI_M = component.isLoading;
this.setState('stvjoQR', cndXI_M);
let cndZyGx = !(cndXI_M);
this.setState('stJGzWT', cndZyGx);
if (cndXI_M) { 
let cmpewsa = this._lc('cLPDcecyU', {parent:component,parentTop:layout,state:'stvjoQR'});
}else { 
let el3ic0p = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el3ic0p.formHandler) {
                    window.cfrmdlr = el3ic0p.formHandler = new FormHandler(el3ic0p, component);
                } else {
                    window.cfrmdlr = el3ic0p.formHandler;
                }
            let elGxTVT = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isUpdating},`title`,``,`class`,`btn btn-success bold float-left waves-effect waves-light submit-btn`);
let elkokAy = eo('i',null,null,`class`,`${fas('save') + ' icon'}`);
ec('i');
let el_Mupw = eo('span',null,null,`class`,`mr-2`);
text(trans('save'));
ec('span');
ec('button');

                    setTimeout(function () {
                        let $el = elGxTVT;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('save')}`});
        ;
                    }, 0);                
                let elaoGCp = eo('h1');
let elZp8m4 = eo('span');
text(trans('settings'));
ec('span');
let elcAvuB = eo('i',null,null,`class`,`${fas('cog') + ' fa-spin mr-1 icon'}`);
ec('i');
ec('h1');
let elTnDuK = eo('ul',null,null,`class`,`nav nav-tabs`);
let eljA7Ce = eo('li',null,null,`class`,`nav-item`);
let ellrygV = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.activeTab = 'general'}]},`type`,`button`,`class`,`nav-link`,`data-target`,`#general-panel`);
ellrygV.cls = {active: component.activeTab == 'general'};

            for (let className in ellrygV.cls) {
                ellrygV.classList.toggle(className, ellrygV.cls[className]);
            }  
            let elBoLFQ = eo('i',null,null,`class`,`${fas('home') + ' icon'}`);
ec('i');
let elPW3XO = eo('span');
text(trans('generalSettings'));
ec('span');
ec('button');
ec('li');
let el6IJyO = eo('li',null,null,`class`,`nav-item`);
let elNEmK4 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.activeTab = 'contact'}]},`class`,`nav-link`,`type`,`button`,`data-target`,`#contact-panel`);
elNEmK4.cls = {active: component.activeTab == 'contact'};

            for (let className in elNEmK4.cls) {
                elNEmK4.classList.toggle(className, elNEmK4.cls[className]);
            }  
            let el9M4Vd = eo('i',null,null,`class`,`${fas('phone') + ' icon'}`);
ec('i');
let eloaf2K = eo('span');
text(trans('contactSettings'));
ec('span');
ec('button');
ec('li');
let el37VzJ = eo('li',null,null,`class`,`nav-item`);
let elwy_g7 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.activeTab = 'social'}]},`class`,`nav-link`,`type`,`button`,`data-target`,`#social-panel`);
elwy_g7.cls = {active: component.activeTab == 'social'};

            for (let className in elwy_g7.cls) {
                elwy_g7.classList.toggle(className, elwy_g7.cls[className]);
            }  
            let elHV4w_ = eo('i',null,null,`class`,`${fas('share-alt') + ' icon'}`);
ec('i');
let ell6tM7 = eo('span');
text(trans('socialSettings'));
ec('span');
ec('button');
ec('li');
ec('ul');
let el4dtFO = eo('div',null,null,`class`,`tab-content row m-t-2`);
let elbv1Ss = eo('div',null,null,`class`,`tab-pane col-sm-9`,`id`,`general-panel`);
elbv1Ss.cls = component.activePanel('general');

            for (let className in elbv1Ss.cls) {
                elbv1Ss.classList.toggle(className, elbv1Ss.cls[className]);
            }  
            let el5xl8J = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`generalSettings`);
let elAZmv5 = eo('div',null,null,`class`,`form-group`);
elAZmv5.cls = {'group-error': !!el3ic0p.formHandler.getError(`settings.general.shortDescription`) };

            for (let className in elAZmv5.cls) {
                elAZmv5.classList.toggle(className, elAZmv5.cls[className]);
            }  
            let elyrxm3 = eo('label',null,null,`for`,`settings-general-shortDescription`);
text(trans('shortDescription'));
let elOaTsJ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elN9PIR = eo('textarea',null,null, eventListeners, {oninput:[function(e) {Object.set(component.settings, 'general.shortDescription', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el3ic0p.formHandler.addError(`settings.general.shortDescription`, 'required', trans('validation.required'));}return el3ic0p.formHandler.removeError(`settings.general.shortDescription`);}]},`value`,`${fval(Object.get(component.settings, 'general.shortDescription', ''))}`,`name`,`${(`settings.general.shortDescription`).toInputName()}`,`placeholder`,`${trans(`shortDescription`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`settings-general-shortDescription`);
elN9PIR.value = fval(Object.get(component.settings, 'general.shortDescription', ''));
ec('textarea');
let cndriT2 = el3ic0p.formHandler.getError(`settings.general.shortDescription`);
this.setState('stXoDnP', cndriT2);
if (cndriT2) { 
let elKC1V_ = eo('div','B6If',null,`class`,`error-msg`);
text(el3ic0p.formHandler.getError(`settings.general.shortDescription`));
ec('div');
}ec('div');
let elwK_cU = eo('div',null,null,`class`,`form-group`);
elwK_cU.cls = {'group-error': !!el3ic0p.formHandler.getError(`settings.general.chairman`) };

            for (let className in elwK_cU.cls) {
                elwK_cU.classList.toggle(className, elwK_cU.cls[className]);
            }  
            let elkGhDf = eo('label',null,null,`for`,`settings-general-chairman`);
text(trans('chairman'));
let elE3h24 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elgvJQb = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.settings, 'general.chairman', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el3ic0p.formHandler.addError(`settings.general.chairman`, 'required', trans('validation.required'));}return el3ic0p.formHandler.removeError(`settings.general.chairman`);}]},`value`,`${fval(Object.get(component.settings, 'general.chairman', ''))}`,`name`,`${(`settings.general.chairman`).toInputName()}`,`placeholder`,`${trans(`chairman`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-general-chairman`);
elgvJQb.value = fval(Object.get(component.settings, 'general.chairman', ''));
let cndnozG = el3ic0p.formHandler.getError(`settings.general.chairman`);
this.setState('str82aX', cndnozG);
if (cndnozG) { 
let el48RJM = eo('div','rd5f',null,`class`,`error-msg`);
text(el3ic0p.formHandler.getError(`settings.general.chairman`));
ec('div');
}ec('div');
let elV3M9H = eo('div',null,null,`class`,`form-group`);
elV3M9H.cls = {'group-error': !!el3ic0p.formHandler.getError(`settings.general.executiveEditor`) };

            for (let className in elV3M9H.cls) {
                elV3M9H.classList.toggle(className, elV3M9H.cls[className]);
            }  
            let elkDnmT = eo('label',null,null,`for`,`settings-general-executiveEditor`);
text(trans('executiveEditor'));
let el_jPDS = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elm3ttp = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.settings, 'general.executiveEditor', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el3ic0p.formHandler.addError(`settings.general.executiveEditor`, 'required', trans('validation.required'));}return el3ic0p.formHandler.removeError(`settings.general.executiveEditor`);}]},`value`,`${fval(Object.get(component.settings, 'general.executiveEditor', ''))}`,`name`,`${(`settings.general.executiveEditor`).toInputName()}`,`placeholder`,`${trans(`executiveEditor`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-general-executiveEditor`);
elm3ttp.value = fval(Object.get(component.settings, 'general.executiveEditor', ''));
let cnd3e9_ = el3ic0p.formHandler.getError(`settings.general.executiveEditor`);
this.setState('stu70s_', cnd3e9_);
if (cnd3e9_) { 
let elx8UDE = eo('div','zv5f',null,`class`,`error-msg`);
text(el3ic0p.formHandler.getError(`settings.general.executiveEditor`));
ec('div');
}ec('div');
let elcGRKR = eo('div',null,null,`class`,`form-group`);
let el48GCW = eo('label',null,null,`for`,`logo`);
text(trans('logo'));
ec('label');
let cmpIaGM = this._lc('c6fJ_zt7B', {parent:component,parentTop:layout,props:{src:Object.get(component.settings, 'general.logo', '')},attrs:{src:`${Object.get(component.settings, 'general.logo', '')}`,name:`${(`settings.general.logo`).toInputName()}`,id:'logo'}});
ec('div');
ec('div');
let el8oqhk = eo('div',null,null,`class`,`tab-pane col-sm-9`,`id`,`contact-panel`);
el8oqhk.cls = component.activePanel('contact');

            for (let className in el8oqhk.cls) {
                el8oqhk.classList.toggle(className, el8oqhk.cls[className]);
            }  
            let elf7xsC = eo('div',null,null,`class`,`form-group`);
elf7xsC.cls = {'group-error': !!el3ic0p.formHandler.getError(`settings.contact.email`) };

            for (let className in elf7xsC.cls) {
                elf7xsC.classList.toggle(className, elf7xsC.cls[className]);
            }  
            let elgz9oB = eo('label',null,null,`for`,`settings-contact-email`);
text(trans('email'));
let elgOn8S = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eloQmgd = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.settings, 'contact.email', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el3ic0p.formHandler.addError(`settings.contact.email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return el3ic0p.formHandler.addError(`settings.contact.email`, 'email', trans('invalid-email-address'));}return el3ic0p.formHandler.removeError(`settings.contact.email`);}]},`value`,`${fval(Object.get(component.settings, 'contact.email', ''))}`,`name`,`${(`settings.contact.email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`class`,`form-control`,`id`,`settings-contact-email`);
eloQmgd.value = fval(Object.get(component.settings, 'contact.email', ''));
let cndNo9P = el3ic0p.formHandler.getError(`settings.contact.email`);
this.setState('stOkaGN', cndNo9P);
if (cndNo9P) { 
let elPQ3Yt = eo('div','BKYf',null,`class`,`error-msg`);
text(el3ic0p.formHandler.getError(`settings.contact.email`));
ec('div');
}ec('div');
let elduGBP = eo('div',null,null,`class`,`form-group`);
elduGBP.cls = {'group-error': !!el3ic0p.formHandler.getError(`settings.contact.telephone`) };

            for (let className in elduGBP.cls) {
                elduGBP.classList.toggle(className, elduGBP.cls[className]);
            }  
            let eljs8Ra = eo('label',null,null,`for`,`settings-contact-telephone`);
text(trans('telephone'));
let elStiBU = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elxta8k = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.settings, 'contact.telephone', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el3ic0p.formHandler.addError(`settings.contact.telephone`, 'required', trans('validation.required'));}return el3ic0p.formHandler.removeError(`settings.contact.telephone`);}]},`value`,`${fval(Object.get(component.settings, 'contact.telephone', ''))}`,`name`,`${(`settings.contact.telephone`).toInputName()}`,`placeholder`,`${trans(`telephone`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-contact-telephone`);
elxta8k.value = fval(Object.get(component.settings, 'contact.telephone', ''));
let cnd42Z9 = el3ic0p.formHandler.getError(`settings.contact.telephone`);
this.setState('stUGyvx', cnd42Z9);
if (cnd42Z9) { 
let elS1KII = eo('div','ezaf',null,`class`,`error-msg`);
text(el3ic0p.formHandler.getError(`settings.contact.telephone`));
ec('div');
}ec('div');
let elufLot = eo('div',null,null,`class`,`form-group`);
elufLot.cls = {'group-error': !!el3ic0p.formHandler.getError(`settings.contact.address`) };

            for (let className in elufLot.cls) {
                elufLot.classList.toggle(className, elufLot.cls[className]);
            }  
            let elc60d_ = eo('label',null,null,`for`,`settings-contact-address`);
text(trans('address'));
let eljVeOb = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eluS_0_ = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.settings, 'contact.address', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el3ic0p.formHandler.addError(`settings.contact.address`, 'required', trans('validation.required'));}return el3ic0p.formHandler.removeError(`settings.contact.address`);}]},`value`,`${fval(Object.get(component.settings, 'contact.address', ''))}`,`name`,`${(`settings.contact.address`).toInputName()}`,`placeholder`,`${trans(`address`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-contact-address`);
eluS_0_.value = fval(Object.get(component.settings, 'contact.address', ''));
let cndqx5K = el3ic0p.formHandler.getError(`settings.contact.address`);
this.setState('stKhSFA', cndqx5K);
if (cndqx5K) { 
let elavbJR = eo('div','3oLf',null,`class`,`error-msg`);
text(el3ic0p.formHandler.getError(`settings.contact.address`));
ec('div');
}ec('div');
ec('div');
let elnHKxN = eo('div',null,null,`class`,`tab-pane col-sm-9`,`id`,`social-panel`);
elnHKxN.cls = component.activePanel('social');

            for (let className in elnHKxN.cls) {
                elnHKxN.classList.toggle(className, elnHKxN.cls[className]);
            }  
            let elilsCS = eo('div',null,null,`class`,`form-group`);
elilsCS.cls = {'group-error': !!el3ic0p.formHandler.getError(`settings.social.facebook`) };

            for (let className in elilsCS.cls) {
                elilsCS.classList.toggle(className, elilsCS.cls[className]);
            }  
            let elxcq1i = eo('label',null,null,`for`,`settings-social-facebook`);
text(trans('facebook'));
ec('label');
let elauhOU = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.settings, 'social.facebook', this.value);}]},`value`,`${fval(Object.get(component.settings, 'social.facebook', ''))}`,`name`,`${(`settings.social.facebook`).toInputName()}`,`placeholder`,`${trans(`facebook`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-social-facebook`);
elauhOU.value = fval(Object.get(component.settings, 'social.facebook', ''));
ec('div');
let elYDPiD = eo('div',null,null,`class`,`form-group`);
elYDPiD.cls = {'group-error': !!el3ic0p.formHandler.getError(`settings.social.twitter`) };

            for (let className in elYDPiD.cls) {
                elYDPiD.classList.toggle(className, elYDPiD.cls[className]);
            }  
            let elDnuVa = eo('label',null,null,`for`,`settings-social-twitter`);
text(trans('twitter'));
ec('label');
let eleYw_d = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.settings, 'social.twitter', this.value);}]},`value`,`${fval(Object.get(component.settings, 'social.twitter', ''))}`,`name`,`${(`settings.social.twitter`).toInputName()}`,`placeholder`,`${trans(`twitter`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-social-twitter`);
eleYw_d.value = fval(Object.get(component.settings, 'social.twitter', ''));
ec('div');
let elmYTEn = eo('div',null,null,`class`,`form-group`);
elmYTEn.cls = {'group-error': !!el3ic0p.formHandler.getError(`settings.social.instagram`) };

            for (let className in elmYTEn.cls) {
                elmYTEn.classList.toggle(className, elmYTEn.cls[className]);
            }  
            let elX8z_f = eo('label',null,null,`for`,`settings-social-instagram`);
text(trans('instagram'));
ec('label');
let el_CP4K = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.settings, 'social.instagram', this.value);}]},`value`,`${fval(Object.get(component.settings, 'social.instagram', ''))}`,`name`,`${(`settings.social.instagram`).toInputName()}`,`placeholder`,`${trans(`instagram`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-social-instagram`);
el_CP4K.value = fval(Object.get(component.settings, 'social.instagram', ''));
ec('div');
let elwPLlE = eo('div',null,null,`class`,`form-group`);
elwPLlE.cls = {'group-error': !!el3ic0p.formHandler.getError(`settings.social.youtube`) };

            for (let className in elwPLlE.cls) {
                elwPLlE.classList.toggle(className, elwPLlE.cls[className]);
            }  
            let elQmk5X = eo('label',null,null,`for`,`settings-social-youtube`);
text(trans('youtube'));
ec('label');
let elvBBFt = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.settings, 'social.youtube', this.value);}]},`value`,`${fval(Object.get(component.settings, 'social.youtube', ''))}`,`name`,`${(`settings.social.youtube`).toInputName()}`,`placeholder`,`${trans(`youtube`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-social-youtube`);
elvBBFt.value = fval(Object.get(component.settings, 'social.youtube', ''));
ec('div');
ec('div');
ec('div');
ec('form');
}}});
let cndEXWT = component.successSave;
this.setState('stGj6FD', cndEXWT);
if (cndEXWT) { 
let cmpsE97 = this._lc('chZcAzIO2', {parent:component,events:{onclose:function(e) {let $el = this; component.successSave = false}},content:(flkMessage) => {let elrx9Ry = eo('span');
text(trans('successSave'));
ec('span');
},state:'stGj6FD'});
}
                    this.isReadyToGo();
                }
        });