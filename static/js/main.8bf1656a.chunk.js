(this["webpackJsonpmy-table-app"]=this["webpackJsonpmy-table-app"]||[]).push([[0],{20:function(t,n,e){},24:function(t,n,e){"use strict";e.r(n);var c,i,r=e(1),a=e.n(r),l=e(12),s=e.n(l),o=(e(20),e(3)),u=e(5),d=e(2),j=e(4),b=e(0),f="active",h="disable",p="up",x="down";function O(t){var n=t.index,e=t.setter,c=t.table,i=t.title,a=t.indicator,l=t.tableIndex,s=f,o=h,j=p,O=x,g=Object(r.useState)(o),v=Object(d.a)(g,2),m=v[0],k=v[1],y=Object(r.useState)(c[n]),S=Object(d.a)(y,2),w=S[0],A=S[1],C=Object(r.useState)(j),E=Object(d.a)(C,2),F=E[0],_=E[1],N=Object(r.useRef)();function I(){k(s),A((function(t){return t.trim()})),setTimeout((function(){N.current.focus()}),100)}return Object(r.useEffect)((function(){A(c[n])}),[c]),Object(b.jsxs)("li",{children:[m===s?Object(b.jsx)("input",{ref:N,onChange:function(t){return A(t.target.value)},onBlur:function(){k(o),e((function(t){return t[l][n]=N.current.value,Object(u.a)(t)}))},onKeyDown:function(t){var e=t.target.parentElement.parentElement.querySelectorAll("li > div:nth-child(1)"),c=t.target.parentElement.parentElement.parentElement.querySelectorAll("li > div:nth-child(1)");"ArrowUp"===t.key&&e.forEach((function(t){t.getAttribute("id")!==String(n-1)?String(n-1)<0&&e[e.length-1].click():t.click()})),"ArrowDown"===t.key&&e.forEach((function(t){t.getAttribute("id")!==String(n+1)?String(n+1)>e.length&&e[0].click():t.click()})),"ArrowRight"===t.key&&c.forEach((function(t){t.getAttribute("data-indecator")!==String(a+1)||t.getAttribute("id")!==String(n)||t.click()})),"ArrowLeft"===t.key&&c.forEach((function(t){t.getAttribute("data-indecator")!==String(a-1)||t.getAttribute("id")!==String(n)||t.click()}))},onKeyPress:function(t){"Enter"===t.key&&t.target.blur()},type:"text",value:w}):Object(b.jsx)("div",{className:"table__item",onClick:I,id:n,"data-indecator":a,children:c[n]}),i?Object(b.jsxs)("div",{className:m===o?"table__item--hover":"off",children:[Object(b.jsx)("div",{onClick:I,children:"\u041f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u0442\u044c"}),Object(b.jsxs)("div",{onClick:function(){F===j?(e((function(t){var n=t[l].shift();return t[l].sort((function(t,n){return""===t||null===t?1:""===n||null===n?-1:t===n?0:t<n?-1:1})),t[l].unshift(n),Object(u.a)(t)})),_(O)):(e((function(t){var n=t[l].shift();return t[l].sort((function(t,n){return""===t||null===t?1:""===n||null===n?-1:t===n?0:n<t?-1:1})),t[l].unshift(n),Object(u.a)(t)})),_(j))},children:["\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c ",F===j?Object(b.jsx)(b.Fragment,{children:"^"}):Object(b.jsx)(b.Fragment,{children:"\u02c5"})]})]}):null]})}function g(t){var n=t.status,e=t.data,c=Object(r.useState)(e),i=Object(d.a)(c,2),a=i[0],l=i[1];return Object(b.jsx)(m,{status:n,children:a.map((function(t,n){return Object(b.jsx)(k,{children:t.map((function(e,c){return Object(b.jsx)(O,{setter:l,index:c,tableIndex:n,table:t,title:0===c,indicator:n},c)}))})}))})}var v,m=j.a.div(c||(c=Object(o.a)(["\n  display: ",";\n  justify-content: space-evenly;\n\n"])),(function(t){return"active"===t.status?"flex":"none"})),k=j.a.ul(i||(i=Object(o.a)(["\n  padding: 0;\n  list-style: none;\n\n  li {\n    position: relative;\n\n    div {\n      width: 150px;\n      border: 1px solid #000000;\n      margin: 0 0 10px 0;\n      height: 23px;\n    }\n\n    input {\n      width: 150px;\n      border: 1px solid #000000;\n      margin: 0 0 10px 0;\n      height: 23px;\n      padding: 5px 10px;\n    }\n  }\n\n  li:hover {\n    cursor: pointer;\n  }\n"])));function y(t){var n,e=t.next,c=t.prev,i=t.list,r=t.activeitem,a=t.add,l=t.teleport;return Object(b.jsxs)(A,{children:[Object(b.jsx)("span",{className:"location_btn",onClick:c,children:" \u2770 \xa0"}),(n=2,Object(b.jsxs)(b.Fragment,{children:[i.map((function(t,e){if(e<r&&e>=r-n)return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("span",{onClick:function(t){return l(t,e)},children:[e+1," \xa0"]})})})),Object(b.jsxs)("span",{className:"active",children:[r+1," \xa0"]}),i.map((function(t,e){if(e>r&&e<=r+n)return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("span",{onClick:function(t){return l(t,e)},children:[e+1," \xa0"]})})}))]})),Object(b.jsx)("span",{className:"location_btn",onClick:e,children:" \u2771 "}),Object(b.jsx)("span",{className:"location_btn--add",onClick:a,children:" + "})]})}var S,w,A=j.a.div(v||(v=Object(o.a)(["\n  display: flex;\n  padding: 10px;\n  margin: 0 auto;\n  width: 200px;\n\n  span:hover {\n    cursor: pointer;\n  }\n\n"]))),C=[["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""]],E=[[["hover Me!","9","8","6","7","2","1","5","3","4"],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""]],[["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""]]];var F=function(){var t=Object(r.useState)(E),n=Object(d.a)(t,2),e=n[0],c=n[1],i=Object(r.useState)(0),a=Object(d.a)(i,2),l=a[0],s=a[1];return Object(b.jsxs)("section",{className:"table__section",children:[Object(b.jsx)(_,{children:"Hello World !!!"}),Object(b.jsxs)("section",{className:"table",children:[Object(b.jsxs)(N,{children:["\u0422\u0430\u0431\u043b\u0438\u0446\u0430 ",l+1," / ",e.length]}),e.map((function(t,n){return Object(b.jsx)(g,{status:l===n?"active":"none-active",data:t})})),Object(b.jsx)(y,{teleport:function(t,n){s(n)},next:function(){l!==e.length-1&&s((function(t){return t+1}))},prev:function(){0!==l&&s((function(t){return t-1}))},list:e,activeitem:l,add:function(){var t=C.map((function(t){return Object.assign([],t)}));c([].concat(Object(u.a)(e),[t]))}})]})]})},_=j.a.h1(S||(S=Object(o.a)(["\n  text-align: center;\n  font-size: 26px;\n"]))),N=j.a.h1(w||(w=Object(o.a)(["\n  text-align: center;\n  font-size: 22px;\n"]))),I=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,25)).then((function(n){var e=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,a=n.getTTFB;e(t),c(t),i(t),r(t),a(t)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root")),I()}},[[24,1,2]]]);
//# sourceMappingURL=main.8bf1656a.chunk.js.map