(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,a,t){e.exports=t(52)},40:function(e,a,t){},41:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),c=t.n(l),i=t(15),s=t(16),o=t(14),u=(t(40),t(17)),m=t(29),p=t(21),d={SAVE_RESTOURANTS:"SAVE_RESTOURANTS",SET_LOAD_RESTAURANTS_ERROR:"SET_LOAD_RESTAURANTS_ERROR",START_LOADING:"START_LOADING",STOP_LOADING:"STOP_LOADING",GIVE_TO_UUID:"GIVE_TO_UUID",SAVE_RESTAURANT_INFO:"SAVE_RESTAURANTS_INFO"},f=function(e){return{type:d.SET_LOAD_RESTAURANTS_ERROR,payload:e}},_=function(){return{type:d.START_LOADING}},g=function(){return{type:d.STOP_LOADING}};function h(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function E(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?h(t,!0).forEach(function(a){Object(p.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var v={restaurantsData:null,restaurantInfo:null,isLoading:!1,error:null,search:"",uuid:null};console.log(v);var b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c,N=[m.a],O=Object(u.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case d.SAVE_RESTOURANTS:return E({},e,{error:null,restaurantsData:a.payload});case d.SAVE_RESTAURANT_INFO:return E({},e,{restaurantInfo:a.payload});case d.SET_LOAD_RESTAURANTS_ERROR:return E({},e,{error:a.payload,restaurantsListData:null});case d.START_LOADING:return E({},e,{isLoading:!0});case d.STOP_LOADING:return E({},e,{isLoading:!1});case d.GIVE_TO_UUID:return E({},e,{uuid:a.payload});default:return e}},b(u.a.apply(void 0,N))),S=t(9),y=t(10),k=t(12),j=t(11),R=t(13),T=(t(41),function(e){var a=e.imageUrl,t=e.title,n=e.categories,l=e.etaRange,c=e.uuid;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{className:"restaurant-card",to:"/".concat(c)},r.a.createElement("img",{src:a,alt:t,className:"restaurant-card__img"}),r.a.createElement("h2",{className:"restaurant-card__title"},t),r.a.createElement("div",{className:"restaurant-card__categories"},n.join(" \u2022 ")),r.a.createElement("div",{className:"restaurant-card__eta"},l)))});T.defaultProps={categories:[],etaRange:""};t(43),t(44);var A=function(){return r.a.createElement("div",{className:"loader-container"},r.a.createElement("div",{className:"lds-default"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},I=(t(45),function(e){var a=e.message;return r.a.createElement("div",{className:"error"},r.a.createElement("p",{className:"error__text"},a),r.a.createElement("a",{href:"/",className:"error__link"},"Go to Home"))});I.defaultProps={message:"Sorry, something went wrong"};var U=function(e){function a(){return Object(S.a)(this,a),Object(k.a)(this,Object(j.a)(a).apply(this,arguments))}return Object(R.a)(a,e),Object(y.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.loadRestaurants)()}},{key:"render",value:function(){var e=this.props,a=e.restaurantsData,t=e.error,n=e.isLoading,l=e.giveToUuid;return n?r.a.createElement(A,null):t?r.a.createElement(I,{message:t}):r.a.createElement("div",{className:"restaurants-list"},a.map(function(e){var a=e.uuid,t=e.title,n=e.categories,c=e.heroImageUrl,i=e.etaRange;return r.a.createElement(T,{key:a,uuid:a,giveToUuid:l,title:t,categories:n,imageUrl:c,etaRange:i?i.text:"20 - 30 min"})}))}}]),a}(n.Component);U.defaultProps={restaurantsData:[],error:null,isLoading:!1,giveToUuid:null};var D=t(2),w=function(e){return e},L=Object(D.a)(w,function(e){var a=e.restaurantsData;if(!a)return[];var t=a.feedItems,n=a.storesMap;return t.map(function(e){var a=e.uuid;return n[a]})}),C=(Object(D.a)(w,function(e){return e.search}),Object(D.a)(w,function(e){return e.error})),V=Object(D.a)(w,function(e){return e.isLoading}),M=function(e){var a=e.menuItemInfo;return a||[]},P=function(e){var a=e.restaurantInfo;return a||{}},F=(Object(D.a)(w,function(e){var a=e.restaurantsListData;if(!a)return[];var t=a.feedItems,n=a.storesMap;return t.map(function(e){var a=e.uuid;return n[a]})}),Object(D.a)(w,function(e){return e.isLoading})),G=(Object(D.a)(w,function(e){return e.modalWindowInfo}),Object(D.a)(w,function(e){return e.error}),Object(D.a)(P,function(e){var a=e.heroImageUrls;return a?a[a.length-1].url:""})),x=Object(D.a)(P,function(e){var a=e.sections,t=e.sectionsMap;return a?a.map(function(e){return t[e]}):[]}),B=(Object(D.a)(P,function(e){return e.entitiesMap||{}}),Object(D.a)(P,function(e){return e.title||""})),J=Object(D.a)(P,function(e){return e.location?e.location.address:""}),W=Object(D.a)(P,function(e){return e.etaRange?e.etaRange.text:"35 - 45 min"}),X=Object(D.a)(P,function(e){return e.cuisineList||[]});Object(D.a)(M,function(e){return e.imageUrl||""}),Object(D.a)(M,function(e){return e.title}),Object(D.a)(M,function(e){return e.itemDescription||""}),Object(D.a)(M,function(e){return e.price}),Object(D.a)(M,function(e){return e.customizationsList}),Object(D.a)(w,function(e){var a=e.menuItemError;return"{}"===a?"Sorry, something went wrong(":a});var z={loadRestaurants:function(){return function(e){e(_()),fetch("https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants").then(function(e){return e.json()}).then(function(a){var t=a.data;e(function(e){return{type:d.SAVE_RESTOURANTS,payload:e}}(t))}).catch(function(a){return e(f(a.message))}).finally(function(){return e(g())})}},giveToUuid:function(e){return fetch("https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants/".concat(e)).then(function(e){return e.json()}).then(function(e){return console.log(e)}),{type:d.GIVE_TO_UUID,payload:e}}},H=Object(s.b)(function(e){return{restaurantsData:L(e),error:C(e),isLoading:V(e)}},z)(U),Q=(t(46),function(e){function a(){var e,t;Object(S.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(k.a)(this,(e=Object(j.a)(a)).call.apply(e,[this].concat(r)))).state={activeSection:null},t.handleNavLinkClick=function(e){t.setState({activeSection:e})},t}return Object(R.a)(a,e),Object(y.a)(a,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.loadRestaurantInfo)(e.match.params.id),window.scrollTo(0,0)}},{key:"render",value:function(){var e=this,a=this.props,t=a.isLoading,n=a.pageMainImgUrl,l=a.pageFoodSections,c=a.restaurantTitle,i=a.restaurantAddress,s=a.restaurantEtaRange,o=a.restaurantCuisineList;this.state.activeSection;return t?r.a.createElement(A,null):r.a.createElement("section",{className:"restaurant-page"},r.a.createElement("div",{className:"restaurant-page__top-part"},r.a.createElement("div",{className:"restaurant-page__img-wrapper"},r.a.createElement("img",{src:n,alt:"",className:"restaurant-page__main-img"})),r.a.createElement("div",{className:"restaurant-page__rest-details"},r.a.createElement("h1",{className:"restaurant-page__main-title"},c),r.a.createElement("p",{className:"restaurant-page__description"},"\xa3 \u2022 ".concat(o.join(" \u2022 "))),r.a.createElement("p",{className:"restaurant-page__time"},s),r.a.createElement("p",{className:"restaurant-page__location"},i))),r.a.createElement("div",{className:"restaurant-page__main-content content"},r.a.createElement("nav",{className:"restaurant-page__navigation-wrapper"},r.a.createElement("ul",{className:"restaurant-page__navigation"},l.map(function(a){return r.a.createElement("li",{key:a.title},r.a.createElement("button",{type:"button",className:"restaurant-page__navigation-link",onClick:function(){return e.handleNavLinkClick(a.uuid)}},a.title.toLowerCase()))})))))}}]),a}(r.a.Component)),q=Object(s.b)(function(e){return{isLoading:F(e),pageMainImgUrl:G(e),pageFoodSections:x(e),restaurantTitle:B(e),restaurantAddress:J(e),restaurantEtaRange:W(e),restaurantCuisineList:X(e)}},{loadRestaurantInfo:function(e){return function(a){a(_()),fetch("https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants/".concat(e)).then(function(e){return e.json()}).then(function(e){var t=e.data;return a(function(e){return{type:d.SAVE_RESTAURANT_INFO,payload:e}}(t))}).catch(function(e){return a(f(e))}).finally(function(){return a(g())})}}})(Q),K=(t(47),t(48),function(e){function a(){var e,t;Object(S.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(t=Object(k.a)(this,(e=Object(j.a)(a)).call.apply(e,[this].concat(l)))).state={isFocused:!1},t.inputRef=Object(n.createRef)(),t.handleFocus=function(){return t.setState({isFocused:!0})},t.handleBlur=function(){return t.setState({isFocused:!1})},t.focus=function(){return t.inputRef.current.focus()},t}return Object(R.a)(a,e),Object(y.a)(a,[{key:"render",value:function(){var e=this.props,a=e.iconUrl,t=e.value,n=e.onChange,l=e.name,c=e.type,i=e.placeholder,s=e.className,o=e.isSmall,u=e.label,m=this.state.isFocused,p="control__input-wrapper ".concat(m?"control__input-wrapper--focused":""," ").concat(s),d="control__input ".concat(o?"":"control_input--small",",\n      ").concat("time"===c?"control__input--time":""," ").concat(s);return r.a.createElement("label",{className:"control"},u&&r.a.createElement("p",{className:"control__label"},u),r.a.createElement("div",{className:p},!!a&&r.a.createElement("img",{src:a,alt:i,className:"control__icon",placeholder:i}),r.a.createElement("input",{ref:this.inputRef,type:c,value:t,onChange:n,name:l,onFocus:this.handleFocus,onBlur:this.handleBlur,className:d,placeholder:i})))}}]),a}(n.PureComponent));K.defaultProps={iconUrl:"",type:"text",placeholder:"",label:"",className:"",isSmall:!0};var Y=function(e){function a(){var e,t;Object(S.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(k.a)(this,(e=Object(j.a)(a)).call.apply(e,[this].concat(r)))).state={address:"",time:"",search:"",isMobileSearchVisible:!1,isMobileDeliveryInfoVisible:!1},t.handleChange=function(e){var a=e.target;t.setState(Object(p.a)({},a.name,a.value))},t.toggleSearch=function(){return t.setState(function(e){return{isMobileSearchVisible:!e.isMobileSearchVisible,isMobileDeliveryInfoVisible:!1}})},t.toggleDeliveryInfo=function(){return t.setState(function(e){return{isMobileDeliveryInfoVisible:!e.isMobileDeliveryInfoVisible,isMobileSearchVisible:!1}})},t.closeMobile=function(){return t.setState({isMobileDeliveryInfoVisible:!1,isMobileSearchVisible:!1})},t}return Object(R.a)(a,e),Object(y.a)(a,[{key:"render",value:function(){var e=this.state,a=e.address,t=e.time,n=e.search,l=e.isMobileSearchVisible,c=e.isMobileDeliveryInfoVisible;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header__inner"},r.a.createElement(i.b,{to:"/"},r.a.createElement("img",{src:"./images/logo.svg",alt:"Uber eats",className:"header__logo"})),r.a.createElement("div",{className:"header__delivery-info"},r.a.createElement(K,{name:"address",value:a,onChange:this.handleChange,placeholder:"Address",iconUrl:"./images/place.svg"}),r.a.createElement(K,{name:"time",value:t,onChange:this.handleChange,placeholder:"Time",type:"time"})),r.a.createElement("div",{className:"header__search"},r.a.createElement(K,{name:"search",value:n,onChange:this.handleChange,placeholder:"Search",iconUrl:"./images/search.svg"})),r.a.createElement("div",{className:"header__toggle-buttons"},r.a.createElement("button",{type:"button",className:"header__toggle-btn",onClick:this.toggleDeliveryInfo},r.a.createElement("img",{src:"./images/place.svg",alt:"location"})),r.a.createElement("button",{type:"button",className:"header__toggle-btn",onClick:this.toggleSearch},r.a.createElement("img",{src:"./images/search.svg",alt:"search"}))),r.a.createElement("a",{className:"header__link",href:"/"},"Sigh In"))),(l||c)&&r.a.createElement("div",{className:"header__mobile-controls mobile-controls content"},l&&r.a.createElement(K,{label:"Search",name:"search",value:n,onChange:this.handleChange,placeholder:"Search",iconUrl:"./images/search.svg",isSmall:!1}),c&&r.a.createElement(r.a.Fragment,null,r.a.createElement(K,{label:"Where",name:"address",value:a,onChange:this.handleChange,placeholder:"Address",iconUrl:"./images/place.svg",isSmall:!1}),r.a.createElement(K,{label:"To",name:"time",value:t,onChange:this.handleChange,placeholder:"Time",type:"time",isSmall:!1})),r.a.createElement("button",{type:"button",className:"mobile-controls__close",onClick:this.closeMobile},"\xd7")))}}]),a}(n.Component),Z=(t(49),t(50),function(e){var a=e.name,t=e.value,n=e.onSelect,l=e.options,c=e.iconUrl;return r.a.createElement("div",{className:"select"},r.a.createElement("select",{name:a,value:t,onChange:n,className:"select__input"},l.map(function(e){var a=e.value,t=e.label;return r.a.createElement("option",{value:a,key:a},t)})),!!c&&r.a.createElement("img",{className:"select__icon",src:c,alt:"select icon"}),r.a.createElement("img",{className:"select__arrow",src:"./images/arrow_down.svg",alt:"arrow down"}))});Z.defaultProps={onSelect:function(){},options:[],iconUrl:""};var $=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"footer__top-part"},r.a.createElement("div",{className:"footer__main"},r.a.createElement("div",{className:"footer__logo-container"},r.a.createElement("img",{src:"./images/logo_footer.svg",alt:"UBER EATS",className:"footer__logo"}),r.a.createElement(Z,{name:"language",options:[{value:"en",label:"English"},{value:"ru",label:"Russian"},{value:"ua",label:"Ukraine"}],value:"en",iconUrl:"./images/earth.svg"})),r.a.createElement("div",{className:"footer__mobile-apps"},r.a.createElement("a",{href:"#",className:"footer__mobile-app"},r.a.createElement("img",{src:"./images/app_store.png",alt:"App Store"})),r.a.createElement("a",{href:"#",className:"footer__mobile-app"},r.a.createElement("img",{src:"./images/play_market.png",alt:"Google Play"})))),r.a.createElement("div",{className:"footer__top-links links"},r.a.createElement("a",{href:"#",className:"links__link links__link--intended"},"About UberEats"),r.a.createElement("a",{href:"#",className:"links__link"},"Read  our blog"),r.a.createElement("a",{href:"#",className:"links__link"},"Sign up to deliver"),r.a.createElement("a",{href:"#",className:"links__link"},"Add your restaurant")),r.a.createElement("div",{className:"footer__top-links links"},r.a.createElement("a",{href:"#",className:"links__link links__link--intended"},"Get help"),r.a.createElement("a",{href:"#",className:"links__link"},"Read FAQs"),r.a.createElement("a",{href:"#",className:"links__link"},"View all cities"))),r.a.createElement("div",{className:"footer__bottom-part"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2019 Uber Technologies Inc."),r.a.createElement("div",{className:"footer__misc"},r.a.createElement("div",{className:"footer__bottom-links links"},r.a.createElement("a",{href:"#",className:"links__link"},"Privacy policy"),r.a.createElement("a",{href:"#",className:"links__link"},"Terms of use"),r.a.createElement("a",{href:"#",className:"links__link"},"Pricing")),r.a.createElement("div",{className:"footer__social social"},r.a.createElement("a",{href:"#",className:"social__link"},r.a.createElement("img",{src:"./images/fb.svg",alt:"facebook"})),r.a.createElement("a",{href:"#",className:"social__link"},r.a.createElement("img",{src:"./images/tw.svg",alt:"twitter"})),r.a.createElement("a",{href:"#",className:"social__link"},r.a.createElement("img",{src:"./images/inst.svg",alt:"instagram"})))))))};t(51);c.a.render(r.a.createElement(i.a,null,r.a.createElement(function(){return r.a.createElement(s.a,{store:O},r.a.createElement(Y,null),r.a.createElement("main",{className:"page"},r.a.createElement(o.a,{path:"/:id",component:q}),r.a.createElement("div",{className:"content"},r.a.createElement(o.a,{exact:!0,path:"/",component:H}))),r.a.createElement($,null))},null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.3402156a.chunk.js.map