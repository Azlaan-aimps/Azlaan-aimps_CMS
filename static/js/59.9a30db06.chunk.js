(this.webpackJsonptaabedar_admin_dashboard=this.webpackJsonptaabedar_admin_dashboard||[]).push([[59],{643:function(e,t,r){},644:function(e,t,r){"use strict";t.a="http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice"},645:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,c=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(s){c=!0,a=s}finally{try{n||null==i.return||i.return()}finally{if(c)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return c}))},954:function(e,t,r){"use strict";r.r(t);var n=r(645),c=r(1),a=r.n(c),o=r(646),i=r(651),s=r.n(i),d=(r(643),r(644)),l=r(18),u=r(29),j={placeholder:"Search here...",label:"Search:  "},b={label:"Rows:",values:[5,10,25,50,75,100]},h=[{key:"SL No"},{key:"productName"},{key:"productPrice"},{key:"productQuantity"}];t.default=function(e){console.log(e);var t=e.location.state.data.orderFkid,r=e.location.state.data.pkid,i=Object(c.useState)(),f=Object(n.a)(i,2),p=f[0],O=f[1],m=Object(c.useState)(""),y=Object(n.a)(m,2);y[0],y[1];a.a.useEffect((function(){s()({method:"GET",url:d.a+"/GetProductItemBySuborderIdAndOrderId/"+t+"/"+r,headers:{"content-type":"application/json"},params:{language_code:"en"}}).then((function(e){O(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[]);var x=Object(l.g)();return Object(u.jsx)("div",{children:Object(u.jsxs)(o.M,{children:[Object(u.jsx)(o.j,{md:"2"}),Object(u.jsx)(o.j,{md:"12",children:Object(u.jsx)(o.e,{children:Object(u.jsxs)(o.f,{children:[Object(u.jsx)(o.M,{children:Object(u.jsx)(o.j,{md:"1",children:Object(u.jsx)(o.d,{color:"danger",size:"sm",onClick:function(){return x.goBack()},children:"Back"})})}),Object(u.jsx)("br",{}),Object(u.jsx)(o.M,{children:Object(u.jsx)(o.j,{children:Object(u.jsxs)(o.e,{children:[Object(u.jsx)(o.i,{children:"Sub Orders Details"}),Object(u.jsx)(o.f,{children:Object(u.jsx)(o.m,{items:p,fields:h,striped:!0,itemsPerPage:10,pagination:!0,sorter:!0,size:"sm",tableFilter:j,itemsPerPageSelect:b,scopedSlots:{"SL No":function(e){return Object(u.jsx)("td",{children:e.id})}}})})]})})})]})})})]})})}}}]);
//# sourceMappingURL=59.9a30db06.chunk.js.map