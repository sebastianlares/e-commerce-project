(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){},104:function(e,t,a){},106:function(e,t,a){},108:function(e,t,a){},110:function(e,t,a){},112:function(e,t,a){},114:function(e,t,a){},116:function(e,t,a){},118:function(e,t,a){},120:function(e,t,a){},122:function(e,t,a){},124:function(e,t,a){},126:function(e,t,a){},128:function(e,t,a){},130:function(e,t,a){},132:function(e,t,a){},134:function(e,t,a){},136:function(e,t,a){},138:function(e,t,a){},140:function(e,t,a){},142:function(e,t,a){},144:function(e,t,a){},146:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),o=(a(42),a(44),a(2)),i=a(10),s=a(7),m=(a(46),a(22)),u=a(34),d=a.n(u);a(81),a(83);var E=function(e){var t=e.images,a=e.id,c=e.setLink,l=Object(o.f)(),i=Object(n.useCallback)(function(){return l.push("/item/".concat(a))},[l]),s=function(e){e.preventDefault()},u=[r.a.createElement("img",{onClick:c?i:null,src:t[0],onDragStart:s,alt:a}),r.a.createElement("img",{onClick:c?i:null,src:t[1],onDragStart:s,alt:a})];return r.a.createElement(d.a,Object(m.a)({mouseTracking:!0,items:u,autoHeight:450,autoWidth:300,infinite:!0},"autoWidth",!0))},f=a(35),p=a(4),b=a(13),v=(a(92),a(94),b.a.initializeApp({apiKey:"".concat("AIzaSyCStGrCCTBw760-VyqpdcYa4QE0pLb2p-Q"),authDomain:"".concat("coder-e-commerce.firebaseapp.com"),projectId:"coder-e-commerce",storageBucket:"coder-e-commerce.appspot.com",messagingSenderId:"166405162002",appId:"".concat("1:166405162002:web:8ebf150c417cdce41144cb")})),g=function(){return b.a.firestore(v)},h=b.a.auth(),O=new b.a.auth.GoogleAuthProvider;O.setCustomParameters({prompt:"select_account"});var N=b.a,j=function(e){if("orderId"===e){var t=localStorage.getItem("orderId");return t?JSON.parse(localStorage.getItem("orderId")):[]}if("phone"===e){var a=localStorage.getItem("phone");return a?JSON.parse(localStorage.getItem("phone")):{}}if("cartItems"===e){var n=localStorage.getItem("cartItems");return n?JSON.parse(localStorage.getItem("cartItems")):[]}},y=r.a.createContext(),k=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(p.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)({question:"",answer:""}),s=Object(p.a)(i,2),m=s[0],u=s[1],d=Object(n.useState)(!1),E=Object(p.a)(d,2),b=E[0],v=E[1],g=Object(n.useState)(!1),N=Object(p.a)(g,2),k=N[0],I=N[1],S=Object(n.useState)(j("cartItems")),C=Object(p.a)(S,2),w=C[0],q=C[1],D=Object(n.useState)({}),P=Object(p.a)(D,2),A=P[0],L=P[1],R=Object(n.useState)([]),F=Object(p.a)(R,2),T=F[0],x=F[1],z=Object(n.useState)({}),M=Object(p.a)(z,2),U=M[0],B=M[1],W=Object(n.useState)(j("phone")),H=Object(p.a)(W,2),V=H[0],$=H[1],G=Object(n.useState)(j("orderId")),J=Object(p.a)(G,2),Q=J[0],Z=J[1],_=Object(n.useState)(!1),Y=Object(p.a)(_,2),K=Y[0],X=Y[1],ee=Object(n.useState)({itemList:!1,itemDetail:!1,form:!1,cart:!1,userProfile:!1}),te=Object(p.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)(!1),ce=Object(p.a)(re,2),le=ce[0],oe=ce[1];Object(n.useEffect)(function(){localStorage.setItem("phone",JSON.stringify(V))},[V]),Object(n.useEffect)(function(){localStorage.setItem("orderId",JSON.stringify(Q))},[Q]),Object(n.useEffect)(function(){localStorage.setItem("cartItems",JSON.stringify(w))},[w]);var ie=A.stock;Object(n.useEffect)(function(){h.onAuthStateChanged(function(e){B(e)})},[]);return r.a.createElement(y.Provider,{value:{isModalOpen:l,openModal:function(e,t){u({question:e,answer:t}),o(!0)},closeModal:function(){o(!1)},loadingItems:k,setLoadingItems:I,addItemToCart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if(q([].concat(Object(f.a)(w),[{item:e,quantity:t}])),w.some(function(t){return t.item.color[0]===e.color[0]&&t.item.id===e.id&&t.item.color[1]===e.color[1]})){var a=w.findIndex(function(t){return t.item.id===e.id}),n=w.filter(function(t){return t.item.id!==e.id}),r=t+w[a].quantity;r>ie&&(r=ie),n.push({item:e,quantity:r}),q(n)}},setItemsOnCart:q,itemsOnCart:w,itemDetail:A,setItemDetail:L,removeItemFromCart:function(e,t){var a=w.findIndex(function(a){return a.item.id===e&&a.item.color[0]===t[0]&&a.item.color[1]===t[1]}),n=w.splice(a,1),r=w.filter(function(e){return e!==n});q(r)},removeAllItems:function(){q([])},data:T,setData:x,currentUser:U,total:function(){return new Intl.NumberFormat("de-DE").format(w.reduce(function(e,t){var a=t.item;return e+(a.price-.2*a.price)*t.quantity},0))},signIn:function(){h.signInWithPopup(O)},setPhoneNumber:$,phoneNumber:V,orderId:Q,setOrderId:Z,isSubmenuOpen:b,handleSubmenu:function(e){e.target.classList.contains("category")||e.target.classList.contains("subMenu")||e.target.classList.contains("link")||v(!1)},openSubmenu:function(){v(!0)},showEdit:K,setShowEdit:X,pageError:le,setPageError:oe,errorRequest:ae,setErrorRequest:ne,modalData:m}},t)},I=function(){return Object(n.useContext)(y)};var S=function(e){var t=e.item,a=t.price,n=t.title,c=t.id,l=t.color,o=I().loadingItems;return r.a.createElement("div",{className:"item"},!o&&r.a.createElement(E,{images:Object.values(l)[0].pictures,id:c,setLink:!0}),r.a.createElement(s.b,{to:"/item/".concat(c)},r.a.createElement("p",{className:"item-title"},n)),r.a.createElement("h4",null,"$",new Intl.NumberFormat("de-DE").format(a),",00 "))};a(96);var C=function(e){var t=e.data,a=e.categoryId;return console.log(typeof window.innerWidth),r.a.createElement("div",{className:"list-wrapper"},r.a.createElement("div",{className:"list-links"},r.a.createElement(s.b,{to:"/productos"},"Productos "),r.a.createElement("span",null," / "),r.a.createElement(s.b,{to:"/".concat(a)},a," ")),r.a.createElement("section",{className:"item-list",style:{gridTemplateColumns:"".concat(window.innerWidth<=480?"repeat(1, 1fr)":window.innerWidth&&t.length>1>480?"repeat(3, 1fr)":1===t.length&&"repeat(1, 1fr)")}},t.map(function(e){var t=e.id;return r.a.createElement(S,{item:e,key:t})})))},w=(a(98),a(161)),q=a(6);a(100);var D=function(e){var t=e.styled,a=I().setErrorRequest;return r.a.createElement("div",{className:"requestError",style:{paddingTop:"".concat(t&&t),margin:"".concat(t&&"auto")}},r.a.createElement(q.j,null),r.a.createElement("p",null,"Parece que hubo un error, ",r.a.createElement("br",null),"por favor intent\xe1 de nuevo!"),r.a.createElement("button",{onClick:function(){return a({itemList:!1,itemDetail:!1,cart:!1,userProfile:!1,form:!1})}},"Recargar"))};var P=function(e){var t=e.greeting,a=I(),c=a.loadingItems,l=a.setLoadingItems,s=a.setData,m=a.data,u=a.errorRequest,d=a.setErrorRequest,E=Object(o.g)().categoryId;return Object(n.useEffect)(function(){l(!0);var e=g();("topVentas"===E?e.collection("ItemList").where("topSells","==",!0):void 0===E?e.collection("ItemList").orderBy("title").limit(6):e.collection("ItemList").where("categoryId","==","".concat(E))).get().then(function(e){return e.docs.map(function(e){return Object(i.a)({},e.data(),{id:e.id})})}).then(function(e){if(!e.length)return l(!1),void d({itemList:!0});l(!1),s(e)}).catch(function(e){d({itemList:!0})})},[E,u.itemList]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"item-list-container"},r.a.createElement("h2",{className:"container-greeting"},t),r.a.createElement("p",null,"COLECCI\xd3N 2020"),c?r.a.createElement("div",{className:"sk-listContainer"},r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"})):u.itemList?r.a.createElement(D,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{data:m,categoryId:E}),6===m.length&&"topVentas"!==E&&r.a.createElement(w.a,{onClick:function(){g().collection("ItemList").orderBy("title").get().then(function(e){var t=e.docs.map(function(e){return Object(i.a)({},e.data(),{id:e.id})});return console.log(t),t}).then(function(e){s(e)}).catch(function(e){d({itemList:!0})})},className:"more-items",variant:"outlined",color:"primary",style:{width:"10%",marginTop:"36px",alignSelf:"center",borderColor:"d48a4c"},id:"load-more"},"Ver m\xe1s items"))))};a(102);var A=function(){var e=I().itemsOnCart;return r.a.createElement("div",{className:"cartWidget-container"},r.a.createElement(q.q,null),r.a.createElement("div",{className:"cartWidget-count"},r.a.createElement("p",null,e.reduce(function(e,t){return e+t.quantity},0))))};a(104),a(106);var L=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],c=t[1],l=I(),o=l.currentUser,i=l.signIn;return Object(n.useEffect)(function(){c(null!==o)},[o]),r.a.createElement("div",{className:"signButton"},a?r.a.createElement(w.a,{onClick:function(){N.auth().signOut().then(function(){console.log("sign out completado"),c(!1)}).catch(function(e){console.log(e)})}},"CERRAR SESI\xd3N"):r.a.createElement(w.a,{onClick:i},"INICIAR SESI\xd3N"))};a(108);var R=function(e){var t=e.category,a=e.toggleScroll,n=I(),c=n.isSubmenuOpen,l=n.openSubmenu;return n.closeSubmenu,r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{className:"category",to:"/".concat(t),onMouseOver:l},t),r.a.createElement("div",{className:"subMenu ".concat(c&&"show")},[{name:"Batas",link:"bata"},{name:"Buzos",link:"buzo"},{name:"Remerones",link:"remer\xf3n"},{name:"Shorts",link:"short"}].map(function(e,t){return r.a.createElement(s.b,{to:"/category/".concat(e.link),key:t,className:"link",onClick:a},e.name)})))};var F=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(p.a)(l,2),i=o[0],m=o[1],u=Object(n.useState)(!0),d=Object(p.a)(u,2),E=(d[0],d[1],Object(n.useState)()),f=Object(p.a)(E,2),b=f[0],v=f[1],g=I(),h=g.itemsOnCart,O=g.currentUser,N=g.pageError,j=g.setErrorRequest;Object(n.useEffect)(function(){null!==O&&v(O.photoURL)},[O]);var y=function(){window.document.body.style.overflow="scroll",m(!1)};return Object(n.useEffect)(function(){!i&&(window.document.body.style.overflow="scroll")},[i]),Object(n.useEffect)(function(){var e=function(){window.scrollY>80?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}},[]),r.a.createElement(r.a.Fragment,null,!N&&r.a.createElement("div",{className:a?"navbar active ":"navbar",style:{height:"".concat(i?"100vh":"80px")}},r.a.createElement("div",{className:"brand-name"},r.a.createElement(s.b,{to:"/",style:{border:"none"},onClick:function(){return y()}},r.a.createElement("h3",{className:"simpleShop"},"SimpleCloths"))),r.a.createElement("div",{className:"toggle",style:{height:"".concat(i?"100vh":"0")}},r.a.createElement("ul",null,[{name:"home",id:1},{name:"productos",id:2},{name:"nosotros",id:3},{name:"contacto",id:4}].map(function(e){var t=e.name,a=e.id;return"productos"===t?r.a.createElement("div",{key:a,to:"/".concat(t),className:"category",onClick:function(){j({itemList:!1}),y()}},r.a.createElement(R,{category:"productos",className:"category",toggleScroll:y})):r.a.createElement(s.b,{key:a,to:"/".concat(t),onClick:function(){return y()}},r.a.createElement("li",null,t))})),r.a.createElement("div",{className:"user-section"},null===h||0===h.length?null:r.a.createElement(s.b,{to:"/cart",id:"cartWidget",onClick:function(){return y()}},r.a.createElement(A,null)),null!==O&&r.a.createElement(s.b,{to:"/userProfile",id:"profile-link",onClick:function(){return y()}},r.a.createElement("img",{src:b,className:"user-profile-link",alt:b})),r.a.createElement(L,null))),r.a.createElement("button",{className:"hamburger-toggle",onClick:function(){m(!i),window.document.body.style.overflow="hidden"}},r.a.createElement(q.p,null))))};a(110),a(112),a(114);var T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{to:"/cart",style:{marginTop:"10px"}},r.a.createElement(w.a,{id:"orange",variant:"outlined",color:"primary",style:{width:"100%",marginTop:"0"}},"Terminar mi compra")))};var x=function(e){var t=e.stock,a=e.initial,c=e.onAdd,l=e.alert,o=e.setAlert,i=e.cartReady,s=Object(n.useState)(a),m=Object(p.a)(s,2),u=m[0],d=m[1];return Object(n.useEffect)(function(){var e=setTimeout(function(){o(!1)},500);return function(){return clearTimeout(e)}},[l]),Object(n.useEffect)(function(){var e=setTimeout(function(){},1e3);return function(){return clearTimeout(e)}}),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container ".concat(0===t&&"disabled")},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"stock-container"},r.a.createElement("div",{className:"count-container ".concat(l&&"error")},r.a.createElement("button",{className:"btn",onClick:function(){u<=0?o(!0):d(u-1)}},r.a.createElement(q.r,null)),r.a.createElement("p",{className:"display-count"},0===t?r.a.createElement("p",null,"Producto fuera de stock"):u),r.a.createElement("button",{className:"btn",onClick:function(){u>=t?o(!0):d(u+1)}},r.a.createElement(q.a,null)))),r.a.createElement(w.a,{id:"orange-color",variant:"outlined",style:{width:"100%"},onClick:function(){return c(u)}},"Agregar al Carrito"),i&&r.a.createElement(T,null))))};var z=function(e){var t=e.loading,a=e.handleColor,c=Object(n.useState)(!1),l=Object(p.a)(c,2),o=l[0],m=l[1],u=Object(n.useState)([]),d=Object(p.a)(u,2),f=d[0],b=d[1],v=Object(n.useState)(),g=Object(p.a)(v,2),h=g[0],O=g[1],N=Object(n.useState)(),j=Object(p.a)(N,2),y=j[0],k=j[1],S=Object(n.useState)(),C=Object(p.a)(S,2),w=C[0],q=C[1],D=Object(n.useState)(),P=Object(p.a)(D,2),A=P[0],L=P[1],R=Object(n.useState)(1),F=Object(p.a)(R,2),T=(F[0],F[1]),z=Object(n.useState)(!1),M=Object(p.a)(z,2),U=M[0],B=M[1],W=Object(n.useState)(!1),H=Object(p.a)(W,2),V=H[0],$=H[1],G=I(),J=G.addItemToCart,Q=G.itemDetail,Z=Q.title,_=Q.description,Y=Q.price,K=Q.categoryId,X=Q.color;return Object(n.useEffect)(function(){if(!t){var e=Object.values(X)[0];b(e.pictures),O(Object.keys(X).find(function(e){return e[0]})),q(e),k(Object.values(e.stock)[0]),L(Object.keys(e.stock)[0])}},[X]),Object(n.useEffect)(function(){var e=setTimeout(function(){$(!1)},1e3);return function(){return clearTimeout(e)}},[V]),r.a.createElement("div",{className:"item-detail",style:{gridTemplateColumns:"".concat(window.document.body.style.width<="480px"?"repeat(1, 100%)":t?"repeat(1, 1fr)":"repeat(2, 1fr")}},t?r.a.createElement("div",{className:"sk-chase"},r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"})):r.a.createElement(r.a.Fragment,null,f&&r.a.createElement(E,{images:f,setLink:!1}),r.a.createElement("div",{className:"description"},r.a.createElement("div",{className:"category-links"},r.a.createElement(s.b,{to:"/productos"},"Productos "),r.a.createElement("span",null,"/ "),r.a.createElement(s.b,{to:"/category/".concat(K),style:{textTransform:"capitalize"}},K),r.a.createElement("span",null," / ")," ",Z),r.a.createElement("h3",null,Z),r.a.createElement("div",{className:"discount"},r.a.createElement("p",null,"$",new Intl.NumberFormat("de-DE").format(Y),",00 "),r.a.createElement("p",null,"$",new Intl.NumberFormat("de-DE").format(Y-.2*Y),",00"),r.a.createElement("p",null,"20% OFF")),r.a.createElement("p",{className:"discount-two"},"10% de descuento pagando por transferencia bancaria \xf3 efectivo."),r.a.createElement("div",{className:"color"},r.a.createElement("p",null,"Color"),X&&Object.entries(X).map(function(e,t){return r.a.createElement("div",{key:t,className:"color-pick",value:e[0],style:{background:a(e[0])},onClick:function(){return function(e,t){b(e[1].pictures),q(e[1]),document.getElementById("size").value="a",k(20),L(""),O(t)}(e,e[0])}})}),r.a.createElement("p",null,"Talle: "),w&&r.a.createElement("div",{className:"size"},r.a.createElement("select",{id:"size",onChange:function(e){return function(e){var t=e.target.value,a=Object.entries(w.stock).find(function(e){return e[0]===t});L(a[0]),k(a[1])}(e)},style:{border:"".concat(V?"1px solid red":"1px solid black")}},Object.keys(w.stock).map(function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))),r.a.createElement("p",null,"Stock: ",y," U")),r.a.createElement("div",{className:"countContainer"},r.a.createElement(x,{initial:1,alert:o,stock:y,onAdd:function(e){if(0!==e)if(""!==A){var t=Object.entries(X).find(function(e){return e[0]===h}),a=Object(i.a)({},t,{1:A});J(Object(i.a)({},Q,{color:a}),e),T(e),B(!0)}else $(!0);else m(!0)},setAlert:m,cartReady:U,size:A})),r.a.createElement("p",{className:"descr"},_))))};var M=function(){var e=Object(n.useState)(!0),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(o.g)().id,s=I(),m=s.setItemDetail,u=s.errorRequest,d=s.setErrorRequest;return Object(n.useEffect)(function(){c(!0),g().collection("ItemList").doc(l).get().then(function(e){if(!e.exists)return console.log("archivo no encontrado"),void d({itemDetail:!0});c(!1),m(Object(i.a)({},e.data(),{id:e.id}))}).catch(function(e){d({itemDetail:!0})})},[l,m,u.itemDetail]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"detail-container"},u.itemDetail?r.a.createElement(D,{styled:"300px"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"comfy",style:{display:"".concat(a?"none":"block")}},"Estate c\xf3modo ",r.a.createElement("span",null,"todo")," el d\xeda"),r.a.createElement(z,{loading:a,handleColor:function(e){return"black"===e?"black":"white"===e?"white":"toasted"===e?"#d39c4d":"aero"===e?"#97bfe9":"grey"===e?"#c0bfbf":"cranberry"===e?"#c41d33d9":"light blue"===e?"#5c9cd5":void 0}}))))};a(116);var U=function(e){var t=e.route,a=e.location;return r.a.createElement(s.b,{to:"/".concat(t)},r.a.createElement(w.a,{id:"orange",variant:"outlined",style:{width:"100%",marginTop:"20px"}},a))};a(118);var B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"home-container"},r.a.createElement("div",{className:"section-background"},r.a.createElement("section",{className:"home-section"},r.a.createElement("div",{className:"a\xf1o-section"},r.a.createElement("h2",null,"Nuevo A\xf1o, ",r.a.createElement("br",null),r.a.createElement("span",null,"Nuevo")," Comienzo"),r.a.createElement("p",null,"Comenz\xe1 este ciclo visti\xe9ndote ",r.a.createElement("br",null)," con algo igual de c\xf3modo",r.a.createElement("br",null)," al a\xf1o que quer\xe9s tener.")))),r.a.createElement("div",{className:"no-gender"},r.a.createElement("h2",null,"NO GENDER #HOMEWEAR")),r.a.createElement("div",{className:"section-background-two"},r.a.createElement("div",null,r.a.createElement("h2",null,"Conoc\xe9 nuestros productos m\xe1s vendidos"),r.a.createElement(U,{route:"category/topVentas",location:"ver productos"})))))};a(120),a(122);var W=function(){var e=I(),t=e.isModalOpen,a=e.closeModal,n=e.modalData,c=n.question,l=n.answer;return r.a.createElement("div",{className:"".concat(t?"modal-overlay show-modal":"modal-overlay"," ")},r.a.createElement("div",{className:"modal-container"},r.a.createElement("h3",null,c),l,r.a.createElement("button",{className:"close-modal-btn",onClick:a},r.a.createElement(q.f,null))))},H=[{id:4,question:"C\xf3mo hago para comprar?",answer:r.a.createElement("p",null,"1. Eleg\xed el producto que quer\xe9s comprar, seleccionando el talle y la cantidad correspondiente. ",r.a.createElement("br",null),"2. Hac\xe9 click en el bot\xf3n 'Agregar al carrito'. Pod\xe9s seguir agregando otros productos al carrito, o a trav\xe9s del bot\xf3n 'Terminar mi compra' podes finalizar la misma.")},{id:5,question:"C\xf3mo hago si necesito una devoluci\xf3n?",answer:r.a.createElement("p",null,"Los pedidos pueden ser cancelados hasta el momento que son empaquetados. Generalmente las primeras 24 horas una vez confirmada la compra. Deber\xe1s enviar un correo a simplecloths.wear@gmail.com con el N\xfamero de Orden, tus datos e \xedtem/s de la compra.")},{id:6,question:"Aceptan diferentes m\xe9todos de pago?",answer:r.a.createElement("p",null,"Si! Aceptamos tanto tarjetas de d\xe9bito como de cr\xe9dito, tanto Visa como Mastercard, adem\xe1s de pagos en efectivo y tambi\xe9n transferencias bancarias.")}];var V=function(){var e=I(),t=e.openModal,a=e.pageError,n={width:"20px",height:"20px"},c=[{red:"https://www.instagram.com/cushi.homewear/",link:q.n,pagina:"@simplecloths.homewear"},{red:"https://twitter.com/cushiwear",pagina:"@simpleclothswear",link:q.s},{red:"https://www.facebook.com/cushi.homewear",pagina:"simplecloths.homewear",link:q.k}],l=[{data:"sebastian.laresh@gmail.com",icon:q.o},{data:"+541130254158",icon:q.d}];return r.a.createElement(r.a.Fragment,null,a?null:r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer-container"},r.a.createElement("section",{className:"redes"},r.a.createElement("h4",null,"Nuestras Redes"),c.map(function(e,t){return r.a.createElement("a",{href:e.red,alt:e.red,target:"_blank",key:t,rel:"noopener noreferrer"},r.a.createElement(e.link,{style:n}),r.a.createElement("p",null,e.pagina))})),r.a.createElement("section",{className:"contacto"},r.a.createElement("h4",null,"Contacto"),l.map(function(e,t){return r.a.createElement("div",{className:"cnt",key:t},r.a.createElement(e.icon,{style:n})," ",r.a.createElement("p",null,e.data))})),r.a.createElement("section",{className:"ayuda"},r.a.createElement("h4",null,"Ayuda"),r.a.createElement(r.a.Fragment,null,H.map(function(e){var a=e.question,n=e.answer,c=e.id;return r.a.createElement(r.a.Fragment,{key:c},r.a.createElement(W,null),r.a.createElement("p",{onClick:function(){return t(a,n)}},a))})))),r.a.createElement("a",{href:"https://github.com/sebastianlares",alt:"github-link",className:"github",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(q.l,null))))};a(124);var $=function(){return r.a.createElement("div",{className:"sk-listContainer"},r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}))};a(126);var G=function(e){var t=e.order,a=e.setDeleteOrder,n=t.id,c=t.items,l=t.date,o=t.total,i=new Date(1e3*l.seconds).toLocaleDateString();return r.a.createElement("div",{className:"order-detail"},r.a.createElement("section",{className:"info"},r.a.createElement("div",{className:"delete-order-btn",onClick:function(){return a({id:n,bool:!0})}},r.a.createElement("h4",null,"Detalle de compra:"),r.a.createElement(q.g,null)),r.a.createElement("p",null,"Fecha: ",i),r.a.createElement("p",null,"Id de compra: ",n),r.a.createElement("p",null,"Precio Total: $",o),r.a.createElement("p",null,"Estado de compra: En preparaci\xf3n")),c.map(function(e){var t=e.id,a=e.price,n=e.quantity,c=e.title;return r.a.createElement("section",{key:t,className:"order-section"},r.a.createElement("li",null,"Producto: ",c),r.a.createElement("p",null,"Cantidad: ",n," "),r.a.createElement("p",null,"Precio final: $",((a-.2*a)*n).toFixed(2),"0"," "))}))};a(128);var J=function(){var e=Object(n.useState)(),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(p.a)(l,2),i=o[0],s=o[1],m=I(),u=m.setPhoneNumber,d=m.showEdit,E=m.setShowEdit;return Object(n.useEffect)(function(){var e=setTimeout(function(){s(!1)},2e3);return function(){clearTimeout(e)}},[i]),r.a.createElement("div",{className:"check-in",style:{display:d?"flex":"none"}},r.a.createElement("input",{style:{border:i&&"1px solid red"},type:"text",placeholder:"Ingresar n\xfamero",required:!0,onChange:function(e){return function(e){c(e.target.value)}(e)}}),r.a.createElement(q.e,{onClick:function(){return function(e){if(void 0!==e){var t=/^[a-zA-Z]+$/;e.split("").some(function(e){return t.test(e)})?s(!0):(s(!1),u(e),E(!1))}else s(!0)}(a)}}))};var Q=function(e){var t=e.loading,a=e.userOrderData,n=e.setDeleteOrder,c=I(),l=c.phoneNumber,o=c.currentUser,i=c.setShowEdit,s=c.errorRequest,m=o.displayName,u=o.email,d=o.photoURL;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"user-profile"},r.a.createElement("div",{className:"user-info"},r.a.createElement("img",{src:d,alt:m}),r.a.createElement("div",{className:"user-p"},r.a.createElement("p",null,"Usuario: ",m),r.a.createElement("div",{className:"number-edit"},r.a.createElement("div",{className:"number"},r.a.createElement("p",null,"Tel\xe9fono:"),r.a.createElement("p",null," ",l," "),r.a.createElement(q.i,{onClick:function(){return i(!0)}})),r.a.createElement(J,null)),r.a.createElement("p",null,"Email: ",u)),r.a.createElement("div",{className:"orders"},t?r.a.createElement($,null):s.userProfile?r.a.createElement(D,null):a.map(function(e,t){return r.a.createElement(G,{order:e,setDeleteOrder:n,key:t})})))))};a(130);var Z=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({id:"",bool:!1}),o=Object(p.a)(l,2),s=o[0],u=o[1],d=I(),E=d.loadingItems,f=d.setLoadingItems,v=d.currentUser,h=(d.errorRequest,d.setErrorRequest);return Object(n.useEffect)(function(){null!==v&&(f(!0),g().collection("orders").where("buyer.email","==","".concat(v.email)).get().then(function(e){return e.docs.map(function(e){return Object(i.a)({},e.data(),{id:e.id})})}).then(function(e){f(!1),c(e)}).catch(function(e){h({userProfile:!0})}))},[null!==v&&v.email]),Object(n.useEffect)(function(){if(!0===s.bool&&null!==v){f(!0);var e=g(),t=e.collection("ItemList");a.map(function(e){var a=e.items[0],n=a.color,r=a.id,c=a.quantity,l=a.size,o=b.a.firestore.FieldValue.increment(c);t.doc("".concat(r)).update(Object(m.a)({},"color.".concat(n,".stock.").concat(l),o))});var n=e.collection("orders").where("buyer.email","==","".concat(v.email));e.collection("orders").doc(s.id).delete().then(function(){u({id:"",bool:!1})}).catch(function(e){h({userProfile:!0})}),n.get().then(function(e){return e.docs.map(function(e){return Object(i.a)({},e.data(),{id:e.id})})}).then(function(e){f(!1),c(e)}).catch(function(e){h({userProfile:!0})})}},[s.id]),r.a.createElement("div",{className:"user-container"},null===v?r.a.createElement("div",{className:"user-login"},r.a.createElement("p",null,"Para poder acceder al perfil de usuario deb\xe9s iniciar sesi\xf3n!"),r.a.createElement(L,null)):r.a.createElement(Q,{loading:E,userOrderData:a,setDeleteOrder:u}))};a(132);var _=function(e){var t=e.singleItem,a=I().removeItemFromCart,n=t.item,c=t.quantity,l=n.price,o=n.title,i=n.id,m=n.color;return r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"link-wrapper"},r.a.createElement(s.b,{to:"/item/".concat(i)},r.a.createElement("li",{className:"cart-title"},o))),r.a.createElement("p",null,"Color: ",m[0]),r.a.createElement("p",null,"Talle: ",m[1].toUpperCase()),r.a.createElement("p",{id:"quantity"},"Cantidad: ",c),r.a.createElement("p",{id:"price"},"$",new Intl.NumberFormat("de-DE").format((l-.2*l)*c),",00"),r.a.createElement("button",{onClick:function(){return a(i,m)}},r.a.createElement(q.h,null)))};a(134),a(136);var Y=function(e){var t=e.setBuyDB,a=e.updateFbItems,c=Object(n.useState)(!1),l=Object(p.a)(c,2),o=l[0],i=l[1],s=I(),m=s.phoneNumber,u=s.currentUser,d=s.removeAllItems,E=s.itemsOnCart;return Object(n.useEffect)(function(){!0===o&&(t(),a(E),d())},[o]),r.a.createElement(r.a.Fragment,null,0===Object.keys(m).length||null===u?r.a.createElement(w.a,{variant:"outlined",id:"disabledButton"},"Finalizar Compra"):r.a.createElement(w.a,{variant:"outlined",id:"buyButton",onClick:function(){i(!0)}},"Finalizar Compra"))};a(138);var K=function(){var e=Object(n.useState)(),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(p.a)(l,2),i=o[0],s=o[1],m=Object(n.useState)(!1),u=Object(p.a)(m,2),d=u[0],E=u[1],f=Object(n.useState)(!1),b=Object(p.a)(f,2),v=b[0],g=b[1],h=Object(n.useState)(!1),O=Object(p.a)(h,2),N=O[0],j=O[1],y=I(),k=y.signIn,S=y.currentUser,C=y.setPhoneNumber,D=y.phoneNumber;return Object(n.useEffect)(function(){(0===Object.keys(D).length||null===S)&&s(!0)},[S,D]),Object(n.useEffect)(function(){d&&g(!0);var e=setTimeout(function(){g(!1),E(!1)},2e3);return function(){clearTimeout(e)}},[d]),r.a.createElement(r.a.Fragment,null,i&&r.a.createElement(r.a.Fragment,null,N&&r.a.createElement("div",{className:"showInfo"},null===S&&r.a.createElement("p",{className:"user-log-in"},"Para finalizar la compra ten\xe9s que iniciar sesi\xf3n!",r.a.createElement(w.a,{id:"log-in",onClick:k},"Iniciar sesi\xf3n")),0===Object.keys(D).length&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"phone-number"},"Para finalizar la compra ten\xe9s que agregar un n\xfamero de tel\xe9fono!"),r.a.createElement("div",{className:"check",id:"check"},r.a.createElement("input",{type:"text",placeholder:"Ingresar n\xfamero",required:!0,onChange:function(e){return function(e){c(e.target.value)}(e)}}),r.a.createElement(q.e,{onClick:function(){return function(e){var t=/^[a-zA-Z]+$/;e.split("").some(function(e){return t.test(e)})?E(!0):(E(!1),C(e))}(a)}})),d&&v&&r.a.createElement("p",{className:"tooltip"},"el tel\xe9fono debe contener solo n\xfameros!"))),r.a.createElement(q.m,{id:"info-alert",onClick:function(){return j(!N)}})))};var X=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],c=t[1],l=I(),o=l.itemsOnCart,i=l.removeAllItems,s=l.total,u=l.phoneNumber,d=l.currentUser,E=l.setOrderId,f=l.loadingItems,v=l.setLoadingItems,h=l.errorRequest,O=l.setErrorRequest,N=function(){return{buyer:{name:d.displayName,email:d.email,phone:u},items:o.map(function(e){var t=e.item,a=t.color;return{id:t.id,title:t.title,price:new Intl.NumberFormat("de-DE").format(t.price),quantity:e.quantity,size:a[1],color:a[0]}}),totalAmount:s()}};return r.a.createElement("div",{className:"cart-container"},r.a.createElement("h1",null,"Mi Carrito"),f&&0===o.length?r.a.createElement($,null):h.cart?r.a.createElement(D,null):a&&0===o.length?r.a.createElement("div",{className:"buy-container"},r.a.createElement("p",null,"Tu compra fue finalizada con \xe9xito!"),r.a.createElement("p",null,"En tu perf\xedl vas a econtrar toda la informaci\xf3n necesaria acerca de tu compra."),r.a.createElement(U,{location:"Ir al Perfil",route:"userProfile"}),r.a.createElement(U,{route:"",location:"  Ir a Inicio"}),r.a.createElement(U,{route:"productos",location:"Ir a Productos"})):0===o.length?r.a.createElement("div",null,r.a.createElement("h2",null,"Parece ser que no ten\xe9s items agregados al carrito!"),r.a.createElement("div",{className:"cart-container-links"},r.a.createElement(U,{route:"",location:"Volver a Inicio"}),r.a.createElement(U,{route:"productos",location:"Ir a Productos"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"total-items-detail"},o.map(function(e){var t=e.id;return r.a.createElement(_,{key:t,singleItem:e})})),r.a.createElement("section",{className:"total-price"},r.a.createElement("p",null,"Total: $",s(),",00"),r.a.createElement(q.g,{onClick:function(){return i()}})),r.a.createElement("div",{className:"final-buy"},(0===Object.keys(u).length||null===d)&&r.a.createElement(K,null),r.a.createElement(Y,{setBuyDB:function(){v(!0);var e=N(),t=g().collection("orders"),a={buyer:e.buyer,items:e.items,date:b.a.firestore.Timestamp.fromDate(new Date),total:e.totalAmount};t.add(a).then(function(e){var t=e.id;E(t)}).then(function(){v(!1),c(!0)}).catch(function(e){O({cart:!0})})},updateFbItems:function(e){var t=g().collection("ItemList");e.map(function(e){var a=e.item,n=a.color,r=n[0],c=n[1];console.log(r,c);var l=b.a.firestore.FieldValue.increment(-e.quantity);t.doc("".concat(a.id)).update(Object(m.a)({},"color.".concat(r,".stock.").concat(c),l)).catch(function(e){O({cart:!0})})})}}))))},ee=(a(140),[{id:1,title:"\xbfC\xd3MO COMPRAR?",info:"1. Eleg\xed el producto que quer\xe9s comprar, seleccionando el talle y la cantidad correspondiente.                                                                             2. Hac\xe9 click en el bot\xf3n 'Agregar al carrito'. Pod\xe9s seguir agregando otros productos al carrito, o a trav\xe9s del bot\xf3n 'Terminar mi compra' podes finalizar la misma."},{id:2,title:"QUIERO CANCELAR MI PEDIDO, \xbfC\xd3MO HAGO?",info:"Los pedidos pueden ser cancelados hasta el momento que son empaquetados. Generalmente las primeras 24 horas una vez confirmada la compra. Deber\xe1s enviar un correo a simplecloths.wear@gmail.com con el Id de la compra, tus datos e \xedtem/s de la compra."},{id:3,title:"\xbfMI PEDIDO PUEDE SER RECIBIDO POR OTRA PERSONA?",info:"\xa1Por supuesto! Siempre y cuando la misma acredite su identidad al momento de la recepci\xf3n con DNI. Adem\xe1s deber\xe1 contar consigo el Documento de Identidad del responsable de la compra o una fotocopia legible del mismo."},{id:4,title:"\xbfQU\xc9 PASA CON TODA LA INFORMACI\xd3N QUE CARGU\xc9 EN EL E-SHOP DE SIMPLECLOTHS?",info:"SIMPLECLOTHS se compromete a conservar la pol\xedtica de confidencialidad con el objetivo de proteger la privacidad de la informaci\xf3n personal obtenida a trav\xe9s de su p\xe1gina, de acuerdo a la Ley Argentina de Habeas Data (Ley. 25.326). Esto significa que tus datos no ser\xe1n compartidos, vendidos o alquilados a ninguna empresa, y que podr\xe1s consultarlos cuando quieras. Valoramos much\xedsimo la confianza que deposit\xe1s en nosotros. "}]);a(142);var te=function(e){var t=e.title,a=e.info,c=Object(n.useState)(!1),l=Object(p.a)(c,2),o=l[0],i=l[1];return r.a.createElement("article",{className:"question"},r.a.createElement("header",null,r.a.createElement("h4",null,t),r.a.createElement("button",{className:"btn",onClick:function(){return i(!o)}},o?r.a.createElement(q.c,null):r.a.createElement(q.b,null))),o&&r.a.createElement("p",null,a))};var ae=function(){var e=Object(n.useState)(ee),t=Object(p.a)(e,2),a=t[0];return t[1],r.a.createElement("div",{className:"about-us"},r.a.createElement("h2",null,"En SimpleCloths queremos despejar ",r.a.createElement("br",null)," cualquier duda que puedas tener!"),r.a.createElement("section",{className:"faq-info"},a.map(function(e){return r.a.createElement(te,Object.assign({key:e.id},e))})))};a(144);var ne=function(){var e=Object(n.useState)({firstName:"",lastName:"",comments:"",email:""}),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(p.a)(l,2),s=o[0],m=o[1],u=Object(n.useState)(!1),d=Object(p.a)(u,2),E=d[0],f=d[1],v=I(),h=v.loadingItems,O=v.setLoadingItems,N=v.errorRequest,j=v.setErrorRequest,y=function(e,t){var n=e.target.value;"firstName"===t?c(Object(i.a)({},a,{firstName:n})):"lastName"===t?c(Object(i.a)({},a,{lastName:n})):"comments"===t&&c(Object(i.a)({},a,{comments:n}))};return Object(n.useEffect)(function(){if(s){O(!0);var e=g().collection("emails"),t={user:a.firstName,comments:a.comments,email:a.email,date:b.a.firestore.Timestamp.fromDate(new Date)};e.add(t).then(function(){m(!1),O(!1),alert("Tu sugerencia se envi\xf3 correctamente, gracias!")}).catch(function(e){j({form:!0})})}},[s]),r.a.createElement("div",{className:"contact-form"},r.a.createElement("h2",null,"Tu opini\xf3n nos es importante! ",r.a.createElement("br",null),"Por eso, ante cualquier duda o sugerencia que tengas, ",r.a.createElement("br",null)," no dudes en escribirnos!"),r.a.createElement(r.a.Fragment,null,N.form?r.a.createElement(D,null):r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==a.firstName&&""!==a.flastName&&""!==a.comments&&""!==a.email&&E&&m(!0)}},r.a.createElement("input",{type:"text",name:"firstName",placeholder:"Nombre",required:!0,onChange:function(e){return y(e,"firstName")},value:s?"":null}),r.a.createElement("input",{type:"text",name:"lastName",placeholder:"Apellido",required:!0,onChange:function(e){return y(e,"lastName")},value:s?"":null}),r.a.createElement("input",{type:"text",name:"email",placeholder:"Email",required:!0,onChange:function(e){return function(e){var t=e.target.value;c(Object(i.a)({},a,{email:t}))}(e)},value:s?"":null}),r.a.createElement("input",{type:"textarea",placeholder:"Comentarios",id:"area",onChange:function(e){return y(e,"comments")},value:s?"":null}),r.a.createElement("button",{type:"submit",onClick:function(){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(a.email).toLowerCase())?f(!0):(alert("Por favor ingresa una direcci\xf3n de mail v\xe1lida!"),void f(!1))}},"Enviar"))),h&&r.a.createElement($,null))};a(146);var re=function(){var e=I().setPageError;return Object(n.useEffect)(function(){e(!0)},[]),r.a.createElement("div",{className:"error404"},r.a.createElement(q.j,null),r.a.createElement("p",null,"Error 404"),r.a.createElement(s.b,{to:"/",onClick:function(){return e(!1)}},"Volver a Inicio"))};var ce=function(){var e=I().handleSubmenu;return r.a.createElement("div",{className:"App",onMouseOver:e},r.a.createElement(F,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/cart",component:X}),r.a.createElement(o.a,{path:"/category/:categoryId"},r.a.createElement(P,{greeting:"#HOMEWEAR #NOGENDER"})),r.a.createElement(o.a,{exact:!0,path:"/userProfile",component:Z}),r.a.createElement(o.a,{exact:!0,path:"/item/:id",component:M}),r.a.createElement(o.a,{exact:!0,path:"/productos"},r.a.createElement(P,{greeting:"#HOMEWEAR #NOGENDER"})),r.a.createElement(o.a,{exact:!0,path:"/nosotros",component:ae}),r.a.createElement(o.a,{exact:!0,path:"/contacto",component:ne}),r.a.createElement(o.a,{exact:!0,path:"/",component:B}),r.a.createElement(o.a,{exact:!0,path:"/home",component:B}),r.a.createElement(o.a,{exact:!0,path:"/e-commerce-project/",component:B}),r.a.createElement(o.a,{component:re})),r.a.createElement(V,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null,r.a.createElement(s.a,null,r.a.createElement(ce,null)))),document.getElementById("root"))},37:function(e,t,a){e.exports=a(148)},42:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},83:function(e,t,a){},96:function(e,t,a){},98:function(e,t,a){}},[[37,2,1]]]);
//# sourceMappingURL=main.15d683ae.chunk.js.map