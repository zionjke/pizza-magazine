(this["webpackJsonppizza-magazine"]=this["webpackJsonppizza-magazine"]||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/pizza-logo.f3327011.svg"},42:function(e,t,a){e.exports=a.p+"static/media/empty-cart.ceb2faf0.png"},44:function(e,t,a){e.exports=a(73)},49:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),i=a.n(r),l=(a(49),a(37)),o=a.n(l),s=a(14),m=a.n(s),u=function(e){var t=e.outline,a=e.onClick,n=e.className,r=e.children;e.add;return c.a.createElement("button",{onClick:a,className:m()("button",n,{"button--outline":t})},r)},d=a(10),p=a(8),E=function(){var e=Object(p.c)((function(e){return e.cart})),t=e.totalPrice,a=e.totalCount;return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"header__logo"},c.a.createElement("img",{width:"38",src:o.a,alt:"Pizza logo"}),c.a.createElement("div",null,c.a.createElement(d.b,{to:"/pizza-magazine"},c.a.createElement("h1",null,"Pizzeria")),c.a.createElement("p",null,"\u0441\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432\u043e \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439"))),c.a.createElement("div",{className:"header__cart"},c.a.createElement(d.b,{to:"/pizza-magazine/cart"},c.a.createElement(u,{className:"button--cart"},c.a.createElement("span",null,t," \u20bd"),c.a.createElement("div",{className:"button__delimiter"}),c.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})),c.a.createElement("span",null,a))))))},C=c.a.memo((function(e){var t=e.items,a=e.onClickCategory,n=e.activeCategory;return c.a.createElement("div",{className:"categories"},c.a.createElement("ul",null,c.a.createElement("li",{onClick:function(){return a(null)},className:"".concat(null===n&&"active")},"\u0412\u0441\u0435"),t&&t.map((function(e,t){return c.a.createElement("li",{className:"".concat(n===t&&"active"),onClick:function(){return a(t)},key:"".concat(e,"_").concat(t)},e)}))))})),h=a(17),b=c.a.memo((function(e){var t=e.items,a=e.activeSortType,r=e.onClickSort,i=Object(n.useState)(!1),l=Object(h.a)(i,2),o=l[0],s=l[1],m=Object(n.useRef)(),u=t.find((function(e){return e.type===a})).name,d=function(e){(e.path||e.composedPath&&e.composedPath()).includes(m.current)||s(!1)};return Object(n.useEffect)((function(){document.body.addEventListener("click",d)}),[]),c.a.createElement("div",{ref:m,className:"sort"},c.a.createElement("div",{className:"sort__label"},c.a.createElement("svg",{className:"".concat(o&&"rotated"),width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})),c.a.createElement("b",null,"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"),c.a.createElement("span",{onClick:function(){s(!o)}},u)),o&&c.a.createElement("div",{className:"sort__popup"},c.a.createElement("ul",null,t.map((function(e,t){return c.a.createElement("li",{key:"".concat(e.type,"_").concat(t),className:"".concat(a===e.type&&"active"),onClick:function(){return t=e,s(!1),void r(t);var t}},e.name)})))))})),v=function(e){var t=e.id,a=e.name,c=e.imageUrl,r=e.price,i=e.types,l=e.sizes,o=e.onAddPizzaToCart,s=e.addedCount,d=["\u0442\u043e\u043d\u043a\u043e\u0435","\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435"],p=[26,30,40],E=n.useState(i[0]),C=Object(h.a)(E,2),b=C[0],v=C[1],f=n.useState(p.indexOf(l[0])),_=Object(h.a)(f,2),g=_[0],k=_[1];return n.createElement("div",{className:"pizza-block"},n.createElement("img",{className:"pizza-block__image",src:c,alt:"Pizza"}),n.createElement("h4",{className:"pizza-block__title"},a),n.createElement("div",{className:"pizza-block__selector"},n.createElement("ul",null,d.map((function(e,t){return n.createElement("li",{key:e,className:m()({active:b===t,disabled:!i.includes(t)}),onClick:function(){return function(e){v(e)}(t)}},e)}))),n.createElement("ul",null,p.map((function(e,t){return n.createElement("li",{key:e,className:m()({active:g===t,disabled:!l.includes(e)}),onClick:function(){return function(e){k(e)}(t)}},e," \u0441\u043c.")})))),n.createElement("div",{className:"pizza-block__bottom"},n.createElement("div",{className:"pizza-block__price"},"\u043e\u0442 ",r," \u20bd"),n.createElement(u,{onClick:function(){var e={id:t,name:a,imageUrl:c,price:r,size:p[g],type:d[b]};o(e)},className:"button--add",outline:!0},n.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})),n.createElement("span",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),s&&n.createElement("i",null,s))))},f=function(e){var t=e.id,a=e.name,c=e.type,r=e.size,i=e.totalPrice,l=e.totalCount,o=e.onRemoveCartItem,s=e.onMinus,m=e.onPlus;return n.createElement("div",{className:"cart__item"},n.createElement("div",{className:"cart__item-img"},n.createElement("img",{className:"pizza-block__image",src:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",alt:"Pizza"})),n.createElement("div",{className:"cart__item-info"},n.createElement("h3",null,a),n.createElement("p",null,c," \u0442\u0435\u0441\u0442\u043e, ",r," \u0441\u043c.")),n.createElement("div",{className:"cart__item-count"},n.createElement("div",{className:"button button--outline button--circle cart__item-count-minus"},n.createElement("svg",{onClick:function(){s(t)},width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),n.createElement("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"}))),n.createElement("b",null,l),n.createElement("div",{className:"button button--outline button--circle cart__item-count-plus"},n.createElement("svg",{onClick:function(){m(t)},width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),n.createElement("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})))),n.createElement("div",{className:"cart__item-price"},n.createElement("b",null,i," \u20bd")),n.createElement("div",{className:"cart__item-remove"},n.createElement(u,{onClick:function(){return o(t)},className:"button button--outline button--circle"},n.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),n.createElement("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})))))},_=a(25),g=a.n(_),k=a(39),w=a(2),y=function(e){return{type:"SET_PIZZAS",payload:e}},z=function(e){return{type:"SET_LOADED",payload:e}},O=a(40),L=a.n(O),j=function(e,t){return L.a.get("https://pizza-magazine.herokuapp.com/pizzas?".concat(null!==t?"category=".concat(t):"","&_sort=").concat(e.type,"&_order=").concat(e.order))},N={items:[],isLoaded:!1};var x=a(41),T=function(e){return n.createElement(x.a,{className:"pizza-block",speed:2,width:280,height:460,viewBox:"0 0 280 460",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},n.createElement("circle",{cx:"132",cy:"142",r:"115"}),n.createElement("rect",{x:"0",y:"273",rx:"6",ry:"6",width:"280",height:"26"}),n.createElement("rect",{x:"0",y:"310",rx:"6",ry:"6",width:"280",height:"84"}),n.createElement("rect",{x:"0",y:"418",rx:"6",ry:"6",width:"91",height:"31"}),n.createElement("rect",{x:"137",y:"408",rx:"25",ry:"25",width:"140",height:"46"}))},B=["\u041c\u044f\u0441\u043d\u044b\u0435","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0430\u044f","\u0413\u0440\u0438\u043b\u044c","\u041e\u0441\u0442\u0440\u044b\u0435","\u0417\u0430\u043a\u0440\u044b\u0442\u044b\u0435"],M=[{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438",type:"popular",order:"desc"},{name:"\u0446\u0435\u043d\u0435",type:"price",order:"desc"},{name:"\u0430\u043b\u0444\u0430\u0432\u0438\u0442",type:"name",order:"asc"}],P=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.pizzas})),a=t.isLoaded,r=t.items,i=Object(p.c)((function(e){return e.filters})),l=i.sortBy,o=i.category,s=Object(p.c)((function(e){return e.cart.items})),m=c.a.useCallback((function(t){e(function(e){return{type:"SET_CATEGORY",payload:e}}(t))}),[]),u=c.a.useCallback((function(t){var a;e({type:"SET_SORT_BY",payload:{type:(a=t).type,order:a.order}})}),[]),d=c.a.useCallback((function(t){e(function(e){return{type:"ADD_PIZZA_TO_CART",payload:e}}(t))}),[]);return Object(n.useEffect)((function(){e(function(e,t){return function(){var a=Object(k.a)(g.a.mark((function a(n){var c;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(z(!1)),a.next=3,j(e,t);case 3:c=a.sent,n(y(c.data));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(l,o))}),[o,l]),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"content__top"},c.a.createElement(C,{onClickCategory:m,activeCategory:o,items:B}),c.a.createElement(b,{onClickSort:u,activeSortType:l.type,items:M})),c.a.createElement("h2",{className:"content__title"},"\u0412\u0441\u0435 \u043f\u0438\u0446\u0446\u044b"),c.a.createElement("div",{className:"content__items"},a?r.map((function(e){return c.a.createElement(v,Object.assign({onAddPizzaToCart:d,addedCount:s[e.id]&&s[e.id].items.length,key:e.id},e))})):Array(12).fill(0).map((function(e,t){return c.a.createElement(T,{key:t})}))))},A=a(42),I=a.n(A),S=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.cart})),a=t.totalPrice,n=t.totalCount,r=t.items,i=Object.keys(r).map((function(e){return r[e].items[0]})),l=function(t){e({type:"REMOVE_CART_ITEM",itemId:t})},o=function(t){e({type:"PLUS_CART_ITEM",itemId:t})},s=function(t){e({type:"MINUS_CART_ITEM",itemId:t})};return c.a.createElement("div",{className:"container container--cart"},n?c.a.createElement("div",{className:"cart"},c.a.createElement("div",{className:"cart__top"},c.a.createElement("h2",{className:"content__title"},c.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})),"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"),c.a.createElement("div",{className:"cart__clear"},c.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})),c.a.createElement("span",{onClick:function(){window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443?")&&e({type:"CLEAR_CART"})}},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"))),c.a.createElement("div",{className:"content__items"},i.map((function(e){return c.a.createElement(f,{name:e.name,id:e.id,type:e.type,size:e.size,onMinus:s,onPlus:o,onRemoveCartItem:l,totalCount:r[e.id].items.length,totalPrice:r[e.id].totalPrice})}))),c.a.createElement("div",{className:"cart__bottom"},c.a.createElement("div",{className:"cart__bottom-details"},c.a.createElement("span",null," \u0412\u0441\u0435\u0433\u043e \u043f\u0438\u0446\u0446: ",c.a.createElement("b",null,n," \u0448\u0442.")," "),c.a.createElement("span",null," \u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",c.a.createElement("b",null,a," \u20bd")," ")),c.a.createElement("div",{className:"cart__bottom-buttons"},c.a.createElement("a",{href:"/",className:"button button--outline button--add go-back-btn"},c.a.createElement("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),c.a.createElement("span",null,"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434")),c.a.createElement("div",{className:"button pay-btn"},c.a.createElement("span",{onClick:function(){console.log("\u0412\u0410\u0428 \u0417\u0410\u041a\u0410\u0417",r)}},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"))))):c.a.createElement("div",{className:"container container--cart"},c.a.createElement("div",{className:"cart cart--empty"},c.a.createElement("h2",null,"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f ",c.a.createElement("icon",null,"\ud83d\ude15")),c.a.createElement("p",null,"\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0439 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u043d\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438 \u0435\u0449\u0451 \u043f\u0438\u0446\u0446\u0443.",c.a.createElement("br",null),"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."),c.a.createElement("img",{src:I.a,alt:"Empty cart"}),c.a.createElement(d.b,{to:"/pizza-magazine",className:"button button--black"},c.a.createElement("span",null,"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434")))))},V=a(3);var R=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"wrapper"},c.a.createElement(E,null),c.a.createElement("div",{className:"content"},c.a.createElement(V.a,{exact:!0,path:"/pizza-magazine",component:P}),c.a.createElement(V.a,{exact:!0,path:"/pizza-magazine/cart",component:S}))))},Z=a(11),H=a(13),D=a(26),W={items:{},totalPrice:0,totalCount:0},U=function(e){return e.reduce((function(e,t){return t.price+e}),0)};var Y=a(43),G={sortBy:{type:"popular",order:"desc"},category:null};var J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.d,X=Object(Z.c)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PIZZA_TO_CART":var a=e.items[t.payload.id]?[].concat(Object(D.a)(e.items[t.payload.id].items),[t.payload]):[t.payload],n=Object(w.a)(Object(w.a)({},e.items),{},Object(H.a)({},t.payload.id,{items:a,totalPrice:U(a)})),c=Object.values(n).map((function(e){return e.items})),r=[].concat.apply([],c);return Object(w.a)(Object(w.a)({},e),{},{items:n,totalCount:r.length,totalPrice:U(r)});case"CLEAR_CART":return Object(w.a)(Object(w.a)({},e),{},{items:{},totalPrice:0,totalCount:0});case"REMOVE_CART_ITEM":var i=Object(w.a)({},e.items),l=i[t.itemId].totalPrice,o=i[t.itemId].items.length;return delete i[t.itemId],Object(w.a)(Object(w.a)({},e),{},{items:i,totalPrice:e.totalPrice-l,totalCount:e.totalCount-o});case"PLUS_CART_ITEM":var s=[].concat(Object(D.a)(e.items[t.itemId].items),[e.items[t.itemId].items[0]]);return Object(w.a)(Object(w.a)({},e),{},{items:Object(w.a)(Object(w.a)({},e.items),{},Object(H.a)({},t.itemId,{items:s,totalPrice:U(s)}))});case"MINUS_CART_ITEM":var m=e.items[t.itemId].items,u=m.length>1?e.items[t.itemId].items.slice(1):m;return Object(w.a)(Object(w.a)({},e),{},{items:Object(w.a)(Object(w.a)({},e.items),{},Object(H.a)({},t.itemId,{items:u,totalPrice:U(u)}))})}return e},pizzas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PIZZAS":return Object(w.a)(Object(w.a)({},e),{},{items:t.payload,isLoaded:!0});case"SET_LOADED":return Object(w.a)(Object(w.a)({},e),{},{isLoaded:t.payload})}return e},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SORT_BY":return Object(w.a)(Object(w.a)({},e),{},{sortBy:t.payload});case"SET_CATEGORY":return Object(w.a)(Object(w.a)({},e),{},{category:t.payload})}return e}}),q=Object(Z.e)(X,J(Object(Z.a)(Y.a)));i.a.render(c.a.createElement(d.a,null,c.a.createElement(p.a,{store:q},c.a.createElement(R,null))),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.93d83534.chunk.js.map