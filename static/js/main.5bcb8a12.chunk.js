(this.webpackJsonpinventory=this.webpackJsonpinventory||[]).push([[0],{11:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(5),a=c.n(s),l=c(2),i=(c(11),c(0));var d=function(e){var t=Object(r.useState)(""),c=Object(l.a)(t,2),n=c[0],s=c[1],a=Object(r.useState)(""),d=Object(l.a)(a,2),j=d[0],o=d[1],b=Object(r.useState)(""),h=Object(l.a)(b,2),m=h[0],O=h[1],u=Object(r.useState)(0),x=Object(l.a)(u,2),p=x[0],f=x[1];return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"row text-center",children:Object(i.jsx)("h1",{children:"Search Items"})}),Object(i.jsxs)("div",{className:"row mt-4",children:[Object(i.jsxs)("div",{className:"col",children:[Object(i.jsx)("label",{htmlFor:"search-name-field",children:Object(i.jsx)("strong",{children:"Name"})}),Object(i.jsx)("input",{className:"form-control",type:"text",id:"search-name-field",placeholder:"Item Name",onChange:function(e){return s(e.target.value)}})]}),Object(i.jsxs)("div",{className:"col",children:[Object(i.jsx)("label",{htmlFor:"search-type-field",children:Object(i.jsx)("strong",{children:"Type"})}),Object(i.jsx)("input",{placeholder:"Type of item",className:"form-control",type:"text",id:"search-type-field",onChange:function(e){return o(e.target.value)}})]}),Object(i.jsxs)("div",{className:"col",children:[Object(i.jsx)("label",{htmlFor:"search-brand-field",children:Object(i.jsx)("strong",{children:"Brand"})}),Object(i.jsx)("input",{placeholder:"Brand Name",className:"form-control",type:"text",id:"search-brand-field",onChange:function(e){return O(e.target.value)}})]}),Object(i.jsxs)("div",{className:"col",children:[Object(i.jsx)("label",{htmlFor:"search-price-field",children:Object(i.jsx)("strong",{children:"Price"})}),Object(i.jsx)("input",{className:"form-control",type:"number",placeholder:"Price",id:"search-price-field",onChange:function(e){return f(parseInt(e.target.value))}})]})]}),Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"mt-3 text-center",children:Object(i.jsx)("button",{className:"col-4 btn btn-outline-primary border-4",type:"button",onClick:function(){e.updateFilters({name:n,type:j,brand:m,price:p})},children:"Search"})})})]})};var j=function(e){var t=Object(r.useState)(""),c=Object(l.a)(t,2),n=c[0],s=c[1],a=Object(r.useState)(""),d=Object(l.a)(a,2),j=d[0],o=d[1],b=Object(r.useState)(""),h=Object(l.a)(b,2),m=h[0],O=h[1],u=Object(r.useState)(0),x=Object(l.a)(u,2),p=x[0],f=x[1];return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"row text-center",children:Object(i.jsx)("h1",{children:"Add Items"})}),Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{className:"form-group row mt-4",children:[Object(i.jsx)("label",{htmlFor:"add-name-field",className:"col-2",children:Object(i.jsx)("strong",{children:"Name"})}),Object(i.jsx)("div",{className:"col-8",children:Object(i.jsx)("input",{className:"form-control",type:"text",id:"add-name-field",placeholder:"Ex: Shirt",onChange:function(e){return s(e.target.value)}})})]}),Object(i.jsxs)("div",{className:"form-group row mt-4",children:[Object(i.jsx)("label",{htmlFor:"add-type-field",className:"col-2",children:Object(i.jsx)("strong",{children:"Type"})}),Object(i.jsx)("div",{className:"col-8",children:Object(i.jsx)("input",{className:"form-control",type:"text",id:"add-type-field",placeholder:"Ex: Cotton",onChange:function(e){return o(e.target.value)}})})]}),Object(i.jsxs)("div",{className:"form-group row mt-4",children:[Object(i.jsx)("label",{htmlFor:"add-brand-field",className:"col-2",children:Object(i.jsx)("strong",{children:"Brand"})}),Object(i.jsx)("div",{className:"col-8",children:Object(i.jsx)("input",{className:"form-control",type:"text",id:"add-brand-field",placeholder:"Ex: Nike",onChange:function(e){return O(e.target.value)}})})]}),Object(i.jsxs)("div",{className:"form-group row mt-4",children:[Object(i.jsx)("label",{htmlFor:"add-price-field",className:"col-2",children:Object(i.jsx)("strong",{children:"Price"})}),Object(i.jsx)("div",{className:"col-8",children:Object(i.jsx)("input",{className:"form-control",type:"number",id:"add-price-field",placeholder:"Ex: $50",onChange:function(e){return f(parseInt(e.target.value))}})})]})]}),Object(i.jsx)("div",{className:"row mt-3",children:Object(i.jsx)("div",{className:"text-center",children:Object(i.jsx)("button",{type:"button",className:"col-5 btn btn-outline-secondary border-3",onClick:function(){e.addItem({id:null,name:n,type:j,brand:m,price:p})},children:"Add"})})})]})};function o(e){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"row text-center",children:Object(i.jsx)("h2",{children:"Items"})}),Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("table",{className:" text-center table table-primary table-bordered table-striped p-3",children:[Object(i.jsx)("thead",{className:"thead-light",children:e.items.length>0?Object(i.jsx)("tr",{children:Object.keys(e.items[0]).map((function(e){return Object(i.jsx)("th",{scope:"col",children:e.toUpperCase()})}))}):Object(i.jsx)("tr",{children:Object(i.jsx)("th",{className:"text-center bg-warning border text-danger",children:"No Items Satisfying Search Requirements"})})}),Object(i.jsx)("tbody",{children:e.items.map((function(e){return Object(i.jsx)("tr",{children:Object.entries(e).map((function(e){return Object(i.jsx)("td",{children:e[1]})}))})}))})]})})]})}var b=c(6);function h(e,t){var c,r=[],n=Object.entries(e).filter((function(e){return e[1]})),s=Object(b.a)(t);try{var a=function(){var e=c.value;!n.map((function(t){var c=Object(l.a)(t,2),r=c[0],n=c[1];return e[r]===n})).includes(!1)&&r.push(e)};for(s.s();!(c=s.n()).done;)a()}catch(i){s.e(i)}finally{s.f()}return r}function m(){var e=Object(r.useState)({}),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)({items:[]}),a=Object(l.a)(s,2),b=a[0],m=a[1];return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"mt-5 row",children:Object(i.jsx)(d,{updateFilters:function(e){n(e)}})}),Object(i.jsx)("div",{className:"mt-5 row",children:Object(i.jsx)(o,{items:h(c,b.items)})}),Object(i.jsx)("div",{className:"mt-5 row",children:Object(i.jsx)(j,{addItem:function(e){var t=b.items,c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("http://localhost:3000/items",c).then((function(e){return e.json()})).then((function(e){t.push(e),m({items:t})}))}})})]})}c(13),c(14);a.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5bcb8a12.chunk.js.map