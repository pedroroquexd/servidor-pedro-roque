(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6429:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(8872)}])},8872:function(e,n,t){"use strict";function r(e,n,t,r,o,u,s){try{var a=e[u](s),c=a.value}catch(i){return void t(i)}a.done?n(c):Promise.resolve(c).then(r,o)}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}t.r(n),t.d(n,{default:function(){return l}});var s=t(7582),a=t(5893),c=t(7294),i=t(1163),l=function(){var e=(0,c.useState)({username:"",password:""}),n=e[0],t=e[1],l=(0,i.useRouter)(),p=function(e){t(u(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},n),o({},e.target.name,e.target.value)))},f=function(){var e,t=(e=function(e){var t,r,o;return(0,s.__generator)(this,(function(u){switch(u.label){case 0:e.preventDefault(),u.label=1;case 1:return u.trys.push([1,6,,7]),[4,fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})];case 2:return(t=u.sent()).ok?[4,t.json()]:[3,4];case 3:return r=u.sent(),console.log("Token recebido:",r.token),l.push("/dashboard"),[3,5];case 4:console.error("Falha na autentica\xe7\xe3o"),u.label=5;case 5:return[3,7];case 6:return o=u.sent(),console.error("Erro durante a autentica\xe7\xe3o:",o),[3,7];case 7:return[2]}}))},function(){var n=this,t=arguments;return new Promise((function(o,u){var s=e.apply(n,t);function a(e){r(s,o,u,a,c,"next",e)}function c(e){r(s,o,u,a,c,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"P\xe1gina de Login"}),(0,a.jsxs)("form",{onSubmit:f,children:[(0,a.jsxs)("label",{children:["Usu\xe1rio:",(0,a.jsx)("input",{type:"text",name:"username",value:n.username,onChange:p})]}),(0,a.jsx)("br",{}),(0,a.jsxs)("label",{children:["Senha:",(0,a.jsx)("input",{type:"password",name:"password",value:n.password,onChange:p})]}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{type:"submit",children:"Login"})]})]})}},1163:function(e,n,t){e.exports=t(387)}},function(e){e.O(0,[774,888,179],(function(){return n=6429,e(e.s=n);var n}));var n=e.O();_N_E=n}]);