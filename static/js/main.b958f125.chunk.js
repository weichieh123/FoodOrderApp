(this["webpackJsonpfood-order-app"]=this["webpackJsonpfood-order-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3rc_S",total:"Cart_total__3BtwQ",actions:"Cart_actions__29e0e","button--alt":"Cart_button--alt__1nMi-",button:"Cart_button__CxleW"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1qKAd",summary:"CartItem_summary__2Nx70",price:"CartItem_price__2RQ9-",amount:"CartItem_amount__3ZPhB",actions:"CartItem_actions__B_9NI"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__38yYg",icon:"HeaderCartButton_icon__2O5gg",badge:"HeaderCartButton_badge__1VQLy",bump:"HeaderCartButton_bump__FjQFO"}},,function(e,t,n){e.exports={meal:"MealItem_meal__1OJFe",description:"MealItem_description__AHlPa",price:"MealItem_price__w7xzD"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__25SLg",modal:"Modal_modal__yjWCV","slide-down":"Modal_slide-down__27Tsc"}},,function(e,t,n){e.exports={"main-image":"Header_main-image__UiAad"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__1r4RA"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__3rXns","meals-appear":"AvailableMeals_meals-appear__2Pjfq"}},function(e,t,n){e.exports={card:"Card_card__3OM84"}},function(e,t,n){e.exports={form:"MealItemForm_form__2uy_l"}},function(e,t,n){e.exports={input:"Input_input__1HsMk"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(3)),r=n(1),s=n.n(r),o=n.p+"static/media/R0043250.f002766d.JPG",d=n(13),l=n.n(d),m=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),u=n(0),j=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},b=n(8),O=n.n(b),x=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(m),o=s.items,d=s.items.reduce((function(e,t){return e+t.amount}),0),l="".concat(O.a.button," ").concat(a?O.a.bump:"");return Object(r.useEffect)((function(){if(0!==o.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(u.jsxs)("button",{className:l,onClick:e.onShowCart,children:[Object(u.jsx)("span",{className:O.a.icon,children:Object(u.jsx)(j,{})}),Object(u.jsx)("span",{children:"Your Cart"}),Object(u.jsx)("span",{className:O.a.badge,children:d})]})},p=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("header",{className:l.a.header,children:[Object(u.jsx)("h1",{children:"ReactMeals"}),Object(u.jsx)(x,{onShowCart:e.onShowCart})]}),Object(u.jsx)("div",{className:l.a["main-image"],children:Object(u.jsx)("img",{src:o,alt:"Beautiful sky!"})})]})},h=n(15),_=n.n(h),f=function(){return Object(u.jsxs)("section",{className:_.a.summary,children:[Object(u.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(u.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(u.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(16),C=n.n(v),g=n(17),A=n.n(g),N=function(e){return Object(u.jsx)("div",{className:A.a.card,children:e.children})},y=n(10),I=n.n(y),H=n(18),w=n.n(H),M=n(2),B=n(19),k=n.n(B),F=s.a.forwardRef((function(e,t){return Object(u.jsxs)("div",{className:k.a.input,children:[Object(u.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(u.jsx)("input",Object(M.a)({ref:t},e.input))]})})),S=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(u.jsxs)("form",{className:w.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(u.jsx)(F,{ref:s,label:"Amount",input:{id:"amount"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(u.jsx)("button",{children:"+ Add"}),!a&&Object(u.jsx)("p",{children:"Please enter a valid amount(1-5)."})]})},R=function(e){var t=Object(r.useContext)(m),n="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:I.a.meal,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("div",{className:I.a.description,children:e.description}),Object(u.jsx)("div",{className:I.a.price,children:n})]}),Object(u.jsx)("div",{children:Object(u.jsx)(S,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},D=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],P=function(){var e=D.map((function(e){return Object(u.jsx)(R,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(u.jsx)("section",{className:C.a.meals,children:Object(u.jsx)(N,{children:Object(u.jsx)("ul",{children:e})})})},E=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{}),Object(u.jsx)(P,{})]})},T=n(4),z=n.n(T),V=n(11),J=n.n(V),Q=function(e){return Object(u.jsx)("div",{className:J.a.backdrop,onClick:e.onHideCart})},q=function(e){return Object(u.jsx)("div",{className:J.a.modal,children:Object(u.jsx)("div",{className:J.a.content,children:e.children})})},Y=document.getElementById("overlays"),$=function(e){return Object(u.jsxs)(u.Fragment,{children:[c.a.createPortal(Object(u.jsx)(Q,{onHideCart:e.onHideCart}),Y),c.a.createPortal(Object(u.jsx)(q,{children:e.children}),Y)]})},G=n(5),L=n.n(G),W=function(e){var t="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:L.a["cart-item"],children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsxs)("div",{className:L.a.summary,children:[Object(u.jsx)("span",{className:L.a.price,children:t}),Object(u.jsxs)("span",{className:L.a.amount,children:["x ",e.amount]})]})]}),Object(u.jsxs)("div",{className:L.a.actions,children:[Object(u.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(u.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},K=function(e){var t=Object(r.useContext)(m),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(M.a)(Object(M.a)({},e),{},{amount:1}))},s=Object(u.jsx)("ul",{className:z.a["cart-items"],children:t.items.map((function(e){return Object(u.jsx)(W,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(u.jsxs)($,{onHideCart:e.onHideCart,children:[s,Object(u.jsxs)("div",{className:z.a.total,children:[Object(u.jsx)("span",{children:"Total Amount"}),Object(u.jsx)("span",{children:n})]}),Object(u.jsxs)("div",{className:z.a.actions,children:[Object(u.jsx)("button",{className:z.a["button--alt"],onClick:e.onHideCart,children:"Close"}),a&&Object(u.jsx)("button",{className:z.a.button,children:"Order"})]})]})},U=n(14),X={items:[],totalAmount:0},Z=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(M.a)(Object(M.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(U.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),d=e.items[o],l=e.totalAmount-d.price;if(1===d.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(M.a)(Object(M.a)({},d),{},{amount:d.amount-1});(s=Object(U.a)(e.items))[o]=m}return{items:s,totalAmount:l}}return X},ee=function(e){var t=Object(r.useReducer)(Z,X),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(u.jsx)(m.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)(ee,{children:[n&&Object(u.jsx)(K,{onHideCart:function(){a(!1)}}),Object(u.jsx)(p,{onShowCart:function(){a(!0)}}),Object(u.jsx)("main",{children:Object(u.jsx)(E,{})})]})};c.a.render(Object(u.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.b958f125.chunk.js.map