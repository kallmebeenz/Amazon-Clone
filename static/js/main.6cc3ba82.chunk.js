(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(44),l=a.n(c),o=a(11),i=(a(73),a(45)),m=a.n(i),s=a(38),u=a.n(s),d=a(46),p=a.n(d),E=a(0),_=a(17),g=a(40),f=a(41),h=a(52),b=a(51),v=a(13),N=a(49),O=a(50),j=a(27),y=Object(N.a)({apiKey:"AIzaSyBcfkwzoNETXIIKxZ9moMbjjE_9cs3AelA",authDomain:"clone-f50ae.firebaseapp.com",projectId:"clone-f50ae",storageBucket:"clone-f50ae.appspot.com",messagingSenderId:"644834230684",appId:"1:644834230684:web:c96208257b60fa685cc859",measurementId:"G-LZX5ZYX515"}),S=(Object(O.a)(y),Object(j.b)(y));var k=function(e){var t=e.mediaWidth,a=Object(v.c)(function(e){return e.cart}),c=Object(v.c)(function(e){return e.user}),l=Object(E.f)(),i=Object(n.useState)(!1),s=Object(o.a)(i,2),d=s[0],N=s[1],O=function(){N(function(e){return!e}),t<=840&&!c&&l("/login"),c&&S.signOut()},j=function(e){return e.split("@")[0]};return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__container"},t<=840&&r.a.createElement(b.a,{className:"header__toggleOpen",onClick:function(){return N(function(e){return!e})}}),r.a.createElement(_.b,{to:"/"},r.a.createElement("img",{src:m.a,alt:"amazon",className:"header__logo"})),t>840&&r.a.createElement("div",{className:"header__search"},r.a.createElement("input",{type:"text",className:"header__searchInput"}),r.a.createElement("div",{className:"header__searchIcon"},r.a.createElement(g.a,null))),r.a.createElement("nav",{className:"header__nav"},t>840&&r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionOne"},"English"),r.a.createElement("span",{className:"header__optionTwo header__optionImg"},r.a.createElement("img",{src:u.a,alt:"English"}))),t>840&&r.a.createElement(_.b,{to:!c&&"/login"},r.a.createElement("div",{className:"header__option",onClick:O},r.a.createElement("span",{className:"header__optionOne"},"Hello, ",c?j(c.email):"Guest"),r.a.createElement("span",{className:"header__optionTwo"},c?"Sign Out":"Sign In"))),t>840&&r.a.createElement(_.b,{to:"/orders"},r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionOne"},"Returns"),r.a.createElement("span",{className:"header__optionTwo"},"& Orders"))),t<=840&&r.a.createElement("div",{className:"header__mobileUser",onClick:function(){return!c&&l("/login")}},r.a.createElement(f.a,{className:"header__mobileUserIcon"}),r.a.createElement("span",{className:"header__mobileUserName"},c?j(c.email):"Guest")),r.a.createElement(_.b,{to:"/checkout"},r.a.createElement("div",{className:"header__optionBasket"},r.a.createElement("div",null,r.a.createElement("div",{className:"header__optionBasketCount"},a.length),r.a.createElement("img",{src:p.a,alt:"shopping cart",className:"header__basket"})),t>840&&r.a.createElement("span",null,"Cart"))))),r.a.createElement("div",{className:"header__mobileContainer"},t<=840&&r.a.createElement("div",{className:"header__search"},r.a.createElement("input",{type:"text",className:"header__searchInput"}),r.a.createElement("div",{className:"header__searchIcon"},r.a.createElement(g.a,null)))),t<=840&&r.a.createElement("div",{className:d?"header__mobileNav active":"header__mobileNav"},r.a.createElement("div",{className:d?"header__mobileNavContainer active":"header__mobileNavContainer"},r.a.createElement("div",{className:"header__mobileNavHeader"},r.a.createElement("div",{className:"header__mobileNavUser"},r.a.createElement("span",null,c?c.email:"Guest"),r.a.createElement(f.a,null)),r.a.createElement("p",null,r.a.createElement("span",null,"Browse"),r.a.createElement("br",null),"Amazon Clone")),r.a.createElement("ul",{className:"header__mobileNavItems"},r.a.createElement("li",{className:"header__option header__mobileNavItem"},r.a.createElement("span",{className:"header__optionOne"},"English"),r.a.createElement("span",{className:"header__optionTwo header__optionImg"},r.a.createElement("img",{src:u.a,alt:""}))),r.a.createElement("li",{className:"header__option header__mobileNavItem",onClick:function(){l("/orders"),N(function(e){return!e})}},r.a.createElement("span",{className:"header__optionOne"},"Returns"),r.a.createElement("span",{className:"header__optionTwo"},"& Orders")),r.a.createElement("li",{className:"header__option header__mobileNavItem",onClick:O},r.a.createElement("span",{className:"header__optionOne"},"Hello, ",c?j(c.email):"Guest"),r.a.createElement("span",{className:"header__optionTwo"},c?"Sign Out":"Sign In")))),r.a.createElement("div",{className:d?"header__toggleClose active":"header__toggleClose",onClick:function(){return N(function(e){return!e})}},r.a.createElement(h.a,null))))},C=a(53),w=a.n(C),I=a(54),A=a.n(I),R=(a(80),a(82),a(12)),T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"main",a=e.split("."),n=Object(o.a)(a,2),r=n[0],c=n[1];return"decimal"===t?c:r},D=function(e){var t=e;t||(t=1);var a=Math.floor(t/2*10),n=a%10;a-=n;var r=new Array(a/10).fill("BsStarFill").join(",");if(a+=n=0===n?0:n>5?10:5,a/=10,n&&(r+=",BsStarHalf"),(r=r.split(",")).length<5){var c=new Array(5-r.length);c.fill("BsStar"),r=[].concat(Object(R.a)(r),c)}return r},x=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),B=function(e){return e.reduce(function(e,t){return e+parseFloat(t.price)},0)},F=function(e){if(e.includes("Firebase: Error (auth/"))return e.replace("Firebase: Error (auth/","").replace(").","").split("-").join(" ")},U=a(34);var M=function(e){var t=e.text;return"BsStarFill"===t?r.a.createElement(U.b,null):"BsStarHalf"===t?r.a.createElement(U.c,null):r.a.createElement(U.a,null)},P=function(e){return{type:"store/cart/ADD_TO_CART",payload:{item:e}}},z=function(e){return{type:"store/cart/REMOVE_FROM_CART",payload:{id:e}}},W=function(){return{type:"store/cart/EMPTY_CART"}},G=function(e){return{type:"store/user/SET_USER",payload:{user:e}}},Y=function(e){return{type:"store/userInfo/ADD_ORDER",payload:{order:e}}},L=function(e){return{type:"store/userInfo/UPDATE_USER_ORDERS",payload:{orders:e}}},H=function(){return{type:"store/userInfo/DELETE_USER_ORDERS"}};var J=function(e){var t=e.id,a=e.image,n=e.title,c=e.price,l=e.rating,o=Object(v.b)();return r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"product__img"},r.a.createElement("img",{src:a,alt:""})),r.a.createElement("div",{className:"product__info"},r.a.createElement("p",{className:"product__title"},n),r.a.createElement("div",{className:"product__rating"},D(2*l).map(function(e,t){return r.a.createElement(M,{key:t,text:e})})),r.a.createElement("p",{className:"product__price"},r.a.createElement("span",null,"$"),r.a.createElement("span",null,T(c)),r.a.createElement("span",null,T(c,"decimal")))),r.a.createElement("button",{type:"button",onClick:function(){o(P({id:t,title:n,image:a,price:c,rating:l}))}},"Add to cart"))},V=a(55),Z=a.n(V),K=a(56),X=a.n(K),Q=a(57),$=a.n(Q),q=a(58),ee=a.n(q),te=a(59),ae=a.n(te),ne=a(60),re=a.n(ne);var ce=function(e){var t=e.mediaWidth,a=Object(v.c)(function(e){return e.cart}),c=Object(n.useState)(null),l=Object(o.a)(c,2),i=l[0],m=l[1],s=Object(n.useState)(null),u=Object(o.a)(s,2),d=u[0],p=u[1];return Object(n.useEffect)(function(){if(a.length){m("Item added to cart"),d&&clearTimeout(d);var e=setTimeout(function(){m(null)},1e3);p(e)}},[a]),r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home__container"},r.a.createElement("img",{src:t>840?w.a:A.a,alt:"home-background",className:"home__image"}),r.a.createElement("div",{className:"home__row"},r.a.createElement(J,{key:"537338",id:"537338",image:Z.a,title:"Apple iPhone 13, 128GB, Blue - Unlocked (Renewed)",price:"814.99",rating:4.5}),r.a.createElement(J,{key:"537339",id:"537339",image:X.a,title:"Samsung Galaxy S21 5G, 128GB, Phantom Gray",price:"599.99",rating:4.5})),r.a.createElement("div",{className:"home__row"},r.a.createElement(J,{key:"537340",id:"537340",image:$.a,title:"Echo (4th generation) With Alexa",price:"1299.99",rating:5}),r.a.createElement(J,{key:"537341",id:"537341",image:ee.a,title:"2021 Apple iPad Pro (Wi-Fi, 128GB) - Silver",price:"599.99",rating:5}),r.a.createElement(J,{key:"537342",id:"537342",image:ae.a,title:"Apple Watch Series 3 - Silver Aluminum Case",price:"139.00",rating:4.5})),r.a.createElement("div",{className:"home__row"},r.a.createElement(J,{key:"537343",id:"537343",image:re.a,title:"SAMSUNG Odyssey 32-Inch WQHD (2560x1440) Gaming Monitor",price:"199.99",rating:3.5}))),t>840&&r.a.createElement("div",{className:"Item added to cart"===i?"home__alert active":"home__alert"},i))},le=(a(84),a(61)),oe=a.n(le);a(86);var ie=function(){var e=Object(E.f)(),t=Object(v.c)(function(e){return e.cart}),a=Object(v.c)(function(e){return e.user}),c=Object(n.useState)(""),l=Object(o.a)(c,2),i=l[0],m=l[1];return r.a.createElement("div",{className:"subtotal"},r.a.createElement("div",{className:"subtotal__title"},"Subtotal (",t.length?"".concat(t.length," ").concat(1===t.length?"item":"items"):"empty","):\xa0",r.a.createElement("strong",null,x.format(t.reduce(function(e,t){return e+parseFloat(t.price)},0)))),r.a.createElement("div",{className:"subtotal__gift"},r.a.createElement("input",{type:"checkbox",name:"gift"}),r.a.createElement("span",null,"This order contains a gift")),r.a.createElement("button",{onClick:function(){t.length?a?e("/payment"):m("Please sign in first"):m("Cart is empty")},className:"subtotal__button",type:"button"},"Proceed to checkout"),r.a.createElement("div",{className:"subtotal__error"},i))};a(88);var me=function(e){var t=e.cartId,a=e.image,n=e.title,c=e.price,l=e.rating,o=Object(v.b)();return r.a.createElement("div",{className:"checkout__product"},r.a.createElement("div",{className:"checkout__productImg"},r.a.createElement("img",{src:a,alt:""})),r.a.createElement("div",{className:"checkout__productInfo"},r.a.createElement("div",{className:"checkout__productTitlePrice"},r.a.createElement("div",{className:"checkout__productTitle"},n),r.a.createElement("div",{className:"checkout__productPrice"},"$",c)),r.a.createElement("div",{className:"checkout__productGift"},r.a.createElement("input",{type:"checkbox",name:"gift"}),r.a.createElement("span",null,"This is a gift"),r.a.createElement("a",{href:"https://github.com/OkoyeCharles",target:"_blank",rel:"noreferrer"},"Learn More")),r.a.createElement("div",{className:"checkout__productRating"},D(2*l).map(function(e,t){return r.a.createElement(M,{key:t,text:e})})),r.a.createElement("div",{className:"checkout__productButtons"},r.a.createElement("button",{type:"button",onClick:function(){o(z(t))}},"Delete"),r.a.createElement("button",{type:"button"},"Save for later"))))};var se=function(){var e=Object(v.b)(),t=Object(v.c)(function(e){return e.cart});return r.a.createElement("div",{className:"checkout"},r.a.createElement("div",{className:"checkout__left"},r.a.createElement("a",{href:"http://www.linkedin.com/in/charles-k-okoye/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:oe.a,alt:"Are you looking for a Developer",className:"checkout__ad"})),r.a.createElement("div",{className:"checkout__header"},r.a.createElement("h2",{className:"checkout__title"},"Shopping Cart"),r.a.createElement("button",{onClick:function(){e(W())}},"Deselect all items")),r.a.createElement("div",{className:"checkout__products"},t.map(function(e,t){return r.a.createElement(me,{id:e.id,cartId:t,title:e.title,image:e.image,price:e.price,rating:e.rating})}))),r.a.createElement("div",{className:"checkout__right"},r.a.createElement(ie,null)))},ue=(a(43),a(32)),de=a.n(ue);var pe=function(){var e=Object(E.f)(),t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(""),m=Object(o.a)(i,2),s=m[0],u=m[1],d=Object(n.useState)(null),p=Object(o.a)(d,2),g=p[0],f=p[1],h=Object(n.useState)(!1),b=Object(o.a)(h,2),v=b[0],N=b[1],O=Object(n.useState)(!1),y=Object(o.a)(O,2),k=y[0],C=y[1];return Object(n.useEffect)(function(){return C(!0)},[]),r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:k?"login__wrapper active":"login__wrapper"},r.a.createElement(_.b,{to:"/"},r.a.createElement("img",{src:de.a,alt:"amazon",className:"login__logo"})),r.a.createElement("div",{className:"login__container"},r.a.createElement("h2",null,"Sign In"),r.a.createElement("form",null,!!g&&r.a.createElement("p",{className:"login__error"},g),r.a.createElement("label",{htmlFor:"login__email"},"Email address"),r.a.createElement("input",{type:"email",name:"email",id:"login__email",value:c,onChange:function(e){f(null),l(e.target.value)}}),r.a.createElement("label",{htmlFor:"login__password"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"login__password",value:s,onChange:function(e){f(null),u(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"login__signInButton",onClick:function(t){N(!0),t.preventDefault(),Object(j.c)(S,c,s).then(function(t){t&&e("/")}).catch(function(e){N(!1),f(F(e.message))})},disabled:v},"Sign In")),r.a.createElement("p",null,"By continuing, you agree to Charles' Amazon Clone Conditions of Use and Privacy Notice.")),r.a.createElement("p",null,"New to Amazon Clone? ",r.a.createElement(_.b,{to:"/signup"},"Create an account"))))},Ee=(a(91),a(33)),_e=a(103),ge=a(62),fe=a.n(ge);var he=function(){var e=Object(E.f)(),t=Object(v.b)(),a=Object(v.c)(function(e){return e.user}),c=Object(v.c)(function(e){return e.cart}),l=Object(n.useState)(!1),i=Object(o.a)(l,2),m=i[0],s=i[1],u=Object(n.useState)(""),d=Object(o.a)(u,2),p=d[0],g=d[1],f=Object(n.useState)(null),h=Object(o.a)(f,2),b=h[0],N=h[1],O=Object(n.useState)(!0),j=Object(o.a)(O,2),y=j[0],S=j[1];return r.a.createElement("div",{className:"payment"},r.a.createElement("div",{className:"payment__container"},r.a.createElement("h1",null,"Checkout ",r.a.createElement(_.b,{to:"/checkout"},c.length?"".concat(c.length," ").concat(1===c.length?"item":"items"):"empty")),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Delivery Address")),r.a.createElement("div",{className:"payment__address"},r.a.createElement("p",null,a.email),r.a.createElement("p",null,"123 Charles Lane"),r.a.createElement("p",null,"Los Angeles, CA"))),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Review Items and Delivery")),r.a.createElement("div",{className:"payment__items"},c.map(function(e,t){return r.a.createElement(me,{id:e.id,cartId:t,title:e.title,image:e.image,price:e.price,rating:e.rating})}))),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Payment Method")),r.a.createElement("div",{className:"payment__details"},r.a.createElement("form",{onSubmit:function(a){if(a.preventDefault(),c.length){!b&&g(!0);var n={order_id:Object(_e.a)(),amount:x.format(B(c)),created:fe()().format("MMMM Do YYYY, h:mma"),cart:c};t(Y(n)),setTimeout(function(){g(""),s(!0),S(!0),t(W()),e("/orders",{replace:!0})},1e3)}else e("/orders",{replace:!0})}},r.a.createElement(Ee.CardElement,{onChange:function(e){S(e.empty),N(e.error?e.error.message:"")}}),r.a.createElement("div",{className:"payment__priceContainer"},r.a.createElement("div",null,"Order Total :\xa0",r.a.createElement("strong",null,x.format(B(c)))),r.a.createElement("button",{disabled:p||y||m},r.a.createElement("span",null,p?"processing":"Buy Now"))),b&&r.a.createElement("div",null,b))))))},be=a(63);a(94),a(96);var ve=function(e){var t=e.order;return r.a.createElement("div",{className:"order"},r.a.createElement("h2",null,"Order"),r.a.createElement("p",{className:"order__id"},r.a.createElement("small",null,t.order_id)),r.a.createElement("p",null,t.created),t.cart.map(function(e,t){return r.a.createElement(me,{id:e.id,cartId:t,title:e.title,image:e.image,price:e.price,rating:e.rating})}),r.a.createElement("p",{className:"order__total"},"Order Total:\xa0",t.amount))};var Ne=function(){var e=Object(v.c)(function(e){return e.user}),t=Object(v.c)(function(e){return e.userInfo}),a=Object(n.useState)([]),c=Object(o.a)(a,2),l=c[0],i=c[1],m=Object(v.b)();return Object(n.useEffect)(function(){if(e){var a=(JSON.parse(localStorage.getItem("charles_amazon_clone_user_".concat(e.uid)))||{}).orders||[];a.length<t.orders.length&&(localStorage.setItem("charles_amazon_clone_user_".concat(e.uid),JSON.stringify(t)),i(a))}},[e,t]),Object(n.useEffect)(function(){e?m(L(l)):(i([]),m(H()))},[e,l]),r.a.createElement("div",{className:"orders"},r.a.createElement("h1",null,"Your Orders"),r.a.createElement("div",{className:"orders__order"},!e&&"Sign In to see your orders",e&&!l.length&&"Currently no orders",l.map(function(e){return r.a.createElement(ve,{order:e,key:e.id})})))};var Oe=function(){var e=Object(E.f)(),t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(""),m=Object(o.a)(i,2),s=m[0],u=m[1],d=Object(n.useState)(null),p=Object(o.a)(d,2),g=p[0],f=p[1],h=Object(n.useState)(!1),b=Object(o.a)(h,2),v=b[0],N=b[1],O=Object(n.useState)(!1),y=Object(o.a)(O,2),k=y[0],C=y[1];return Object(n.useEffect)(function(){return C(!0)},[]),r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:k?"login__wrapper active":"login__wrapper"},r.a.createElement(_.b,{to:"/"},r.a.createElement("img",{src:de.a,alt:"amazon",className:"login__logo"})),r.a.createElement("div",{className:"login__container"},r.a.createElement("h2",null,"Sign Up"),r.a.createElement("form",null,!!g&&r.a.createElement("p",{className:"login__error"},g),r.a.createElement("label",{htmlFor:"login__email"},"Email address"),r.a.createElement("input",{type:"email",name:"email",id:"login__email",value:c,onChange:function(e){f(null),l(e.target.value)}}),r.a.createElement("label",{htmlFor:"login__password"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"login__password",value:s,onChange:function(e){f(null),u(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"login__signInButton",onClick:function(t){t.preventDefault(),N(!0),Object(j.a)(S,c,s).then(function(t){t&&e("/")}).catch(function(e){N(!1),f(F(e.message))})},disabled:v},"Create Account")),r.a.createElement("p",null,"By continuing, you agree to Charles' Amazon Clone Conditions of Use and Privacy Notice.")),r.a.createElement("p",null,"Already on Amazon Clone? ",r.a.createElement(_.b,{to:"/login"},"Sign In"))))},je=Object(be.a)("pk_test_51LKikxJIr5sMtV8TVVCP3FSBVbFYb87a2Al30jAkasBgTDe61U02aRDd5ZJKT68wknB9Woa8ZNReOfSBs1Q3Ip6g00TdXWcbbN");var ye=function(){var e=Object(v.b)(),t=Object(n.useState)(null),a=Object(o.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)(function(){return l(window.innerWidth)},[]),window.addEventListener("resize",function(e){return l(e.target.innerWidth)}),Object(n.useEffect)(function(){S.onAuthStateChanged(function(t){e(G(t||null))})}),r.a.createElement(_.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/",element:r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{mediaWidth:c}),r.a.createElement(ce,{mediaWidth:c}))}),r.a.createElement(E.a,{path:"/orders",element:r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{mediaWidth:c}),r.a.createElement(Ne,null))}),r.a.createElement(E.a,{path:"/login",element:r.a.createElement(pe,null)}),r.a.createElement(E.a,{path:"/signup",element:r.a.createElement(Oe,null)}),r.a.createElement(E.a,{path:"/checkout",element:r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{mediaWidth:c}),r.a.createElement(se,null))}),r.a.createElement(E.a,{path:"/payment",element:r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{mediaWidth:c}),r.a.createElement(Ee.Elements,{stripe:je},r.a.createElement(he,null)))}))))},Se=(a(98),[]),ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"store/cart/ADD_TO_CART":return[].concat(Object(R.a)(e),[t.payload.item]);case"store/cart/REMOVE_FROM_CART":return e.filter(function(e,a){return a!==t.payload.id});case"store/cart/EMPTY_CART":return[];default:return e}},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"store/user/SET_USER":return t.payload.user;default:return e}},we=a(25),Ie={},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"store/userInfo/ADD_ORDER":return e.orders?Object(we.a)({},e,{orders:[t.payload.order].concat(Object(R.a)(e.orders))}):Object(we.a)({},e,{orders:[t.payload.order]});case"store/userInfo/UPDATE_USER_ORDERS":return Object(we.a)({},e,{orders:t.payload.orders});case"store/userInfo/DELETE_USER_ORDERS":return Object(we.a)({},e,{orders:[]});default:return e}},Re=a(19),Te=a(64),De=a(28),xe=Object(Re.b)({cart:ke,user:Ce,userInfo:Ae}),Be=Object(Te.a)({reducer:xe,middleware:[De.a]});l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v.a,{store:Be},r.a.createElement(ye,null))))},32:function(e,t,a){e.exports=a.p+"static/media/amazon-logo-dark.80775cf6.png"},38:function(e,t,a){e.exports=a.p+"static/media/america-flag.dc2ade83.png"},43:function(e,t,a){},45:function(e,t,a){e.exports=a.p+"static/media/amazon-logo.f1b7fec6.png"},46:function(e,t,a){e.exports=a.p+"static/media/cart.98c9c4b9.png"},53:function(e,t,a){e.exports=a.p+"static/media/home-bg.01c3525f.jpg"},54:function(e,t,a){e.exports=a.p+"static/media/home-bg-2.3db7d8fd.jpg"},55:function(e,t,a){e.exports=a.p+"static/media/product-iphone13.8a71dc80.png"},56:function(e,t,a){e.exports=a.p+"static/media/product-samsungs21.7d1fd216.png"},57:function(e,t,a){e.exports=a.p+"static/media/product-amazonecho.4d770b9e.png"},58:function(e,t,a){e.exports=a.p+"static/media/product-ipadpro.2776d904.png"},59:function(e,t,a){e.exports=a.p+"static/media/product-applewatch.2114fa8d.png"},60:function(e,t,a){e.exports=a.p+"static/media/product-samsungtv.0c3b62b5.png"},61:function(e,t,a){e.exports=a.p+"static/media/Developer-Ad.1db901c2.png"},66:function(e,t,a){e.exports=a(101)},73:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){},88:function(e,t,a){},91:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){},98:function(e,t,a){}},[[66,2,1]]]);
//# sourceMappingURL=main.6cc3ba82.chunk.js.map