(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a.n(c),o=a(6),i=a.n(o),r=(a(15),a(9)),u=a(2),l=a.p+"static/media/logo.fad4f8a5.svg";var d=function(){return Object(n.jsx)("header",{className:"header root__section",children:Object(n.jsx)("img",{src:l,alt:"mesto logo",className:"logo"})})},p=a.p+"static/media/close.8a65f75d.svg";var j=function(e){return Object(n.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen),children:Object(n.jsxs)("div",{className:"popup__content",children:[Object(n.jsx)("img",{src:p,alt:"Close",className:"popup__close",onClick:function(t){t.target.parentElement.lastElementChild.reset();var a=document.querySelectorAll(".popup__button");Array.from(a).forEach((function(e){e.classList.remove("popup__button_active")})),e.onClose()}}),Object(n.jsx)("h3",{className:"popup__title",children:e.title}),Object(n.jsx)("form",{className:"popup__form",name:e.name,onSubmit:e.onSubmit,noValidate:!0,children:e.children})]})})},b="\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435",h="\u041c\u0438\u043d\u0438\u043c\u0443\u043c 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430",m="\u042d\u0442\u043e \u043d\u0435 \u043f\u043e\u0445\u043e\u0436\u0435 \u043d\u0430 \u0441\u0441\u044b\u043b\u043a\u0443",f=/^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9=\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$/;var _=function(e){var t=s.a.useState(""),a=Object(u.a)(t,2),c=a[0],o=a[1],i=s.a.useState(""),r=Object(u.a)(i,2),l=r[0],d=r[1],p=s.a.useState(""),_=Object(u.a)(p,2),O=_[0],v=_[1],x=s.a.useState(""),g=Object(u.a)(x,2),k=g[0],N=g[1],C=s.a.useState(!1),S=Object(u.a)(C,2),y=S[0],P=S[1],E=s.a.useState(!1),A=Object(u.a)(E,2),L=A[0],U=A[1],w=s.a.useState(!1),I=Object(u.a)(w,2),T=I[0],D=I[1],q=s.a.useState(!0),F=Object(u.a)(q,2),z=F[0],J=F[1];return s.a.useEffect((function(){D(!(!y||!L))}),[y,L]),s.a.useEffect((function(){J(!T)}),[T]),Object(n.jsxs)(j,{isOpen:e.isOpen?"popup_is-opened":"",onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.submitFun(l,c),e.onClose()},name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",children:[Object(n.jsx)("input",{onChange:function(e){o(e.target.value)},onInput:function(e){e.target.value.length<2&&e.target.value?(N(h),P(!1)):e.target.value?(N(""),P(!0)):(N(b),P(!1))},type:"text",name:"name",maxLength:"20",className:"popup__input popup__input_type_name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",id:"name",required:!0}),Object(n.jsx)("p",{className:"popup__form-error",id:"name-error",children:k}),Object(n.jsx)("input",{onChange:function(e){d(e.target.value)},onInput:function(e){f.test(e.target.value)?(v(""),U(!0)):e.target.value?(v(m),U(!1)):(v(b),U(!1))},type:"text",name:"link",className:"popup__input popup__input_type_link-url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(n.jsx)("p",{className:"popup__form-error",id:"link-error",children:O}),Object(n.jsx)("button",{type:"submit",className:"button popup__button  ".concat(z?"":"popup__button_active"),disabled:!!z,children:"+"})]})},O=s.a.createContext();var v=function(e){var t=s.a.useContext(O),a=s.a.useState(""),c=Object(u.a)(a,2),o=c[0],i=c[1],r=s.a.useState(""),l=Object(u.a)(r,2),d=l[0],p=l[1],m=s.a.useState(""),f=Object(u.a)(m,2),_=f[0],v=f[1],x=s.a.useState(""),g=Object(u.a)(x,2),k=g[0],N=g[1],C=s.a.useState(!0),S=Object(u.a)(C,2),y=S[0],P=S[1],E=s.a.useState(!0),A=Object(u.a)(E,2),L=A[0],U=A[1],w=s.a.useState(!1),I=Object(u.a)(w,2),T=I[0],D=I[1],q=s.a.useState(!1),F=Object(u.a)(q,2),z=F[0],J=F[1];return s.a.useEffect((function(){i(t.name),p(t.about)}),[t]),s.a.useEffect((function(){D(!(!y||!L))}),[y,L]),s.a.useEffect((function(){J(!T)}),[T]),Object(n.jsxs)(j,{isOpen:e.isOpen?"popup_is-opened":"",onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onSubmit(o,d)},name:"add-card",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",children:[Object(n.jsx)("input",{onInput:function(e){e.target.value.length<2&&e.target.value?(v(h),P(!1)):e.target.value?(v(""),P(!0)):(v(b),P(!1))},onChange:function(e){i(e.target.value)},type:"text",name:"user_name",value:o||"",className:"popup__input",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"30",required:!0}),Object(n.jsx)("p",{className:"popup__form-error",children:_}),Object(n.jsx)("input",{onInput:function(e){e.target.value.length<2&&e.target.value?(N(h),U(!1)):e.target.value?(N(""),U(!0)):(N(b),U(!1))},onChange:function(e){p(e.target.value)},type:"text",name:"user_about",value:d||"",className:"popup__input ",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"30",required:!0}),Object(n.jsx)("p",{className:"popup__form-error",children:k}),Object(n.jsx)("button",{type:"submit",className:"button popup__button popup__button_edit  ".concat(z?"":"popup__button_active"),disabled:!!z,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})};var x=function(e){var t=s.a.useState(""),a=Object(u.a)(t,2),c=a[0],o=a[1],i=s.a.useState(""),r=Object(u.a)(i,2),l=r[0],d=r[1],p=s.a.useState(!0),h=Object(u.a)(p,2),_=h[0],O=h[1],v=s.a.useState(!1),x=Object(u.a)(v,2),g=x[0],k=x[1],N=s.a.useState(!1),C=Object(u.a)(N,2),S=C[0],y=C[1];return s.a.useEffect((function(){y(!!g)}),[g]),s.a.useEffect((function(){O(!S)}),[S]),Object(n.jsxs)(j,{isOpen:e.isOpen?"popup_is-opened":"",onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onSubmit(c)},name:"add-card",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",children:[Object(n.jsx)("input",{onInput:function(e){f.test(e.target.value)?(d(""),k(!0)):e.target.value?(d(m),k(!1)):(d(b),k(!1))},onChange:function(e){o(e.target.value)},type:"text",name:"user_ava",className:"popup__input popup__input_type_ava",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0}),Object(n.jsx)("p",{className:"popup__form-error",children:l}),Object(n.jsx)("button",{type:"submit",className:"button popup__button popup__button_ava  ".concat(_?"":"popup__button_active"),disabled:!!_,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})};var g=function(e){return Object(n.jsx)("div",{className:"loader__container ".concat(e.userinfo?"":"loader_disabled"),children:Object(n.jsxs)("div",{className:"sk-chase",children:[Object(n.jsx)("div",{className:"sk-chase-dot"}),Object(n.jsx)("div",{className:"sk-chase-dot"}),Object(n.jsx)("div",{className:"sk-chase-dot"}),Object(n.jsx)("div",{className:"sk-chase-dot"}),Object(n.jsx)("div",{className:"sk-chase-dot"}),Object(n.jsx)("div",{className:"sk-chase-dot"})]})})};var k=function(e){return Object(n.jsx)("div",{className:"loader__container loader__container_cards ".concat(e.cardsloader?"":"loader_disabled"),children:Object(n.jsxs)("div",{className:"sk-chase",children:[Object(n.jsx)("div",{className:"sk-chase-dot"}),Object(n.jsx)("div",{className:"sk-chase-dot"}),Object(n.jsx)("div",{className:"sk-chase-dot"}),Object(n.jsx)("div",{className:"sk-chase-dot"}),Object(n.jsx)("div",{className:"sk-chase-dot"}),Object(n.jsx)("div",{className:"sk-chase-dot"})]})})};var N=function(e){return Object(n.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_is-opened":""),children:Object(n.jsxs)("div",{className:"popup__img-container",children:[Object(n.jsx)("img",{onClick:e.onClose,src:p,alt:"Close",className:"popup__close"}),Object(n.jsx)("img",{src:e.img,alt:"Large size",className:"popup__img"})]})})},C=a(7),S=a(8),y="094546c675a8b4c5d67cb2c0",P=new(function(){function e(t){Object(C.a)(this,e),this.options=t}return Object(S.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this.options.baseUrl,"/cards"),{method:"GET",headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getUserData",value:function(){return fetch("".concat(this.options.baseUrl,"/users/me"),{method:"GET",headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"updateProfile",value:function(e,t){return fetch("".concat(this.options.baseUrl,"/users/me"),{method:"PATCH",headers:this.options.headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"addNewCard",value:function(e,t){return fetch("".concat(this.options.baseUrl,"/cards"),{method:"POST",headers:this.options.headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.options.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"likeCard",value:function(e){return fetch("".concat(this.options.baseUrl,"/cards/like/").concat(e),{method:"PUT",headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this.options.baseUrl,"/cards/like/").concat(e),{method:"DELETE",headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"updateAva",value:function(e){return fetch("".concat(this.options.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.options.headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({baseUrl:"https://nomoreparties.co/cohort10",headers:{authorization:"d6d7615e-1844-4421-b847-6aee70eeff4e","Content-Type":"application/json"}});var E=function(e){var t=s.a.useState(!1),a=Object(u.a)(t,2),c=a[0],o=a[1],i=s.a.useState(e.likes.length),r=Object(u.a)(i,2),l=r[0],d=r[1],p=s.a.useState(!1),j=Object(u.a)(p,2),b=j[0],h=j[1],m=s.a.useState(!1),f=Object(u.a)(m,2),_=f[0],O=f[1];return s.a.useEffect((function(){e.likes.forEach((function(e){e._id===y&&(o(!0),h(!0))}))}),[e.likes]),s.a.useEffect((function(){e.owner._id===y&&O(!0)}),[e.owner]),Object(n.jsxs)("div",{className:"place-card",children:[Object(n.jsx)("div",{onClick:function(t){t.target.classList.contains("place-card__image")&&e.Click(e.img)},className:"place-card__image",style:{backgroundImage:"url(".concat(e.img,")")},children:Object(n.jsx)("button",{onClick:function(t){P.deleteCard(e.id).then((function(){t.target.closest(".place-card").remove()}))},className:"place-card__delete-icon ".concat(_?"place-card_my-card":"")})}),Object(n.jsxs)("div",{className:"place-card__description",children:[Object(n.jsx)("h3",{className:"place-card__name",children:e.title}),Object(n.jsxs)("div",{className:"place-card__like",children:[Object(n.jsx)("button",{onClick:function(){o(!0),P.likeCard(e.id).then((function(){d(e.likes.length+1),h(!0)}))},className:"place-card__like-icon ".concat(c?"place-card__like-icon_liked":""),disabled:!!b}),Object(n.jsx)("span",{className:"place-card__like-counter",children:l})]})]})]})};var A=function(e){var t=s.a.useState(!1),a=Object(u.a)(t,2),c=a[0],o=a[1],i=s.a.useState(!1),r=Object(u.a)(i,2),l=r[0],d=r[1],p=s.a.useState(!1),j=Object(u.a)(p,2),b=j[0],h=j[1],m=s.a.useState(!1),f=Object(u.a)(m,2),C=f[0],S=f[1],y=s.a.useState(!0),A=Object(u.a)(y,2),L=A[0],U=A[1],w=s.a.useState(""),I=Object(u.a)(w,2),T=I[0],D=I[1],q=s.a.useState(""),F=Object(u.a)(q,2),z=F[0],J=F[1],Z=s.a.useState(!1),B=Object(u.a)(Z,2),G=B[0],H=B[1],$=s.a.useState(""),M=Object(u.a)($,2),V=M[0],K=M[1];s.a.useEffect((function(){P.getUserData().then((function(e){D(e.avatar),J(e),U(!1),S(!0)}))}),[]);var Q={closeAvaPopup:function(){h(!1)},closeAddPopup:function(){o(!1)},closeProfilePopup:function(){d(!1)},closeImgPopup:function(){H(!1)}},R={handleEditAvatarClick:function(){h(!0)},handleEditProfileClick:function(){d(!0)},handleAddPlaceClick:function(){o(!0)}};function W(e){H(!0),K(e)}return Object(n.jsx)("main",{className:"profile root__section",children:Object(n.jsxs)(O.Provider,{value:z,children:[Object(n.jsx)(g,{userinfo:L}),Object(n.jsxs)("div",{className:"user-info ".concat(C?"":"user-info_disabled"),children:[Object(n.jsx)("img",{src:T,alt:"User avatar",onClick:R.handleEditAvatarClick,className:"user-info__photo"}),Object(n.jsxs)("div",{className:"user-info__data",children:[Object(n.jsx)("h1",{className:"user-info__name",children:z.name}),Object(n.jsx)("p",{className:"user-info__job",children:z.about}),Object(n.jsx)("button",{onClick:R.handleEditProfileClick,className:"user-info__edit-button",children:"Edit"})]}),Object(n.jsx)("button",{onClick:R.handleAddPlaceClick,className:"button user-info__button",children:"+"})]}),Object(n.jsx)(k,{cardsloader:e.cardsloader}),Object(n.jsx)("div",{className:"places-list root__section",children:e.cards.map((function(e,t){return Object(n.jsx)(E,{Click:W,title:e.name,img:e.link,likes:e.likes,id:e._id,owner:e.owner},t)}))}),Object(n.jsx)(_,{isOpen:c,onClose:Q.closeAddPopup,submitFun:e.addNewPlace}),Object(n.jsx)(v,{isOpen:l,onClose:Q.closeProfilePopup,onSubmit:function(e,t){P.updateProfile(e,t).then((function(e){J(e),d(!1)}))}}),Object(n.jsx)(x,{isOpen:b,onClose:Q.closeAvaPopup,onSubmit:function(e){P.updateAva(e).then((function(e){D(e.avatar),h(!1)}))}}),Object(n.jsx)(N,{isOpen:G,onClose:Q.closeImgPopup,img:V})]})})};var L=function(){var e=s.a.useState([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=s.a.useState(!0),i=Object(u.a)(o,2),l=i[0],p=i[1];return s.a.useEffect((function(){P.getInitialCards().then((function(e){c(e.reverse().slice(0,70)),p(!1)}))}),[]),Object(n.jsxs)("div",{className:"root",children:[Object(n.jsx)(d,{}),Object(n.jsx)(A,{cards:a,addNewPlace:function(e,t){P.addNewCard(t,e).then((function(e){c([e].concat(Object(r.a)(a)))}))},cardsloader:l})]})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),s(e),o(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root")),U()}},[[16,1,2]]]);
//# sourceMappingURL=main.b9d8cd79.chunk.js.map