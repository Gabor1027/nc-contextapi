(window["webpackJsonpnc-contextapi"]=window["webpackJsonpnc-contextapi"]||[]).push([[0],{23:function(e,n,t){e.exports=t(34)},34:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t(0),o=t.n(a),i=t(16),c=t.n(i),l=t(10),u=t(5),s=t(6),f=t(8),p=t(7),b=t(9),m=t(1),d=t(3),x=t(4),g=t.n(x),h=o.a.createContext(null);function O(){var e=Object(r.a)(["\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  background-color: #8e44ad;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: 25px;\n  top: -10px;\n"]);return O=function(){return e},e}function j(){var e=Object(r.a)(["\n  width: 40px;\n  height: 40px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  border-radius: 50%;\n  color: white;\n  background-color: #3498db;\n  margin-right: 30px;\n  cursor: pointer;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n  transition: all 0.2s ease-out;\n  position: relative;\n  &:hover {\n    transform: translateY(-1px);\n    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);\n  }\n"]);return j=function(){return e},e}function E(){var e=Object(r.a)(["\n  height: 100px;\n  background-color: #ecf0f1;\n  padding: 0 40px;\n  margin-bottom: 30px;\n"]);return E=function(){return e},e}var v=m.default.header(E()),y=m.default.span(j()),w=m.default.span(O()),k=function(){return o.a.createElement(v,null,o.a.createElement(d.b,{full:!0,justifyBetween:!0,alignCenter:!0},o.a.createElement(d.a,null,o.a.createElement("h3",null,"Antiredux")),o.a.createElement(d.a,null,o.a.createElement(d.b,null,o.a.createElement(y,null,o.a.createElement(g.a,{name:"user"})),o.a.createElement(y,null,o.a.createElement(g.a,{name:"cog"})),o.a.createElement(y,null,o.a.createElement(g.a,{name:"bell"}),o.a.createElement(w,null,o.a.createElement(h.Consumer,null,(function(e){return function(e){var n=[];return Object.keys(e).forEach((function(t){if(!e[t].seen)return n.push(e[t])})),n.length}(e.notifications)}))))))))},N=function(e){function n(){var e,t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(f.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(a)))).state={},t}return Object(b.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement(k,this.state)}}]),n}(a.Component);function S(){var e=Object(r.a)(["\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  border: 0;\n  color: white;\n  font-size: 16px;\n  cursor: pointer;\n  background-color: ",";\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n  transition: all 0.2s ease-out;\n  &:hover {\n    transform: translateY(-1px);\n    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);\n  }\n  &:active,\n  &:focus {\n    outline: none;\n  }\n  &:active {\n    transform: translateY(1px);\n  }\n"]);return S=function(){return e},e}function C(){var e=Object(r.a)(["\n  font-weight: 600;\n"]);return C=function(){return e},e}function F(){var e=Object(r.a)(["\n  background-color: white;\n  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);\n  width: 80%;\n  padding: 20px;\n  border-radius: 15px;\n  margin-bottom: 15px;\n  box-sizing: border-box;\n  border: 2px solid ",";\n"]);return F=function(){return e},e}var P=m.default.div(F(),(function(e){return e.seen?"transparent":"#f1c40f"})),A=m.default.span(C()),D=m.default.button(S(),(function(e){return e.seen?"#7f8c8d":e.success?"#2ecc71":e.danger?"#e74c3c":void 0})),H=function(e){var n=e.id,t=e.text,r=e.seen;return o.a.createElement(P,{seen:r},o.a.createElement(d.b,{alignCenter:!0,justifyBetween:!0},o.a.createElement(A,null,t),o.a.createElement(d.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(h.Consumer,null,(function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(D,{success:!0,seen:r,onClick:function(){return e.seeNotification(n)}},o.a.createElement(g.a,{name:"check"})),o.a.createElement(D,{danger:!0,seen:r,onClick:function(){return e.deleteNotification(n)}},o.a.createElement(g.a,{name:"times"})))}))))))},_=function(e){function n(){var e,t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(f.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(a)))).state={},t}return Object(b.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement(H,Object.assign({},this.props,this.state))}}]),n}(a.Component),z=function(){return o.a.createElement(a.Fragment,null,o.a.createElement(N,null),o.a.createElement(d.b,{alignCenter:!0,full:!0,column:!0},o.a.createElement(h.Consumer,null,(function(e){return Object.keys(e.notifications).map((function(n){return o.a.createElement(_,{key:e.notifications[n].id,id:e.notifications[n].id,text:e.notifications[n].text,seen:e.notifications[n].seen})}))}))))};function B(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function I(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?B(t,!0).forEach((function(n){Object(l.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Y=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(f.a)(this,Object(p.a)(n).call(this,e)))._deleteNotification=function(e){t.setState((function(n){return delete n.notifications[e]}))},t._seeNotification=function(e){t.setState((function(n){return I({},n,{notifications:I({},n.notifications,Object(l.a)({},e,I({},n.notifications[e],{seen:!0})))})}))},t.state={notifications:{1:{id:1,text:"Something",seen:!1},2:{id:2,text:"Something else",seen:!1},3:{id:3,text:"Something else but different",seen:!1}},deleteNotification:t._deleteNotification,seeNotification:t._seeNotification},t}return Object(b.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement(h.Provider,{value:this.state},o.a.createElement(z,null))}}]),n}(a.Component),J=t(19),U=t.n(J),G=t(20);function q(){var e=Object(r.a)(["\n",";\nbody{\n    background-color:#ecf0f1;\n}"]);return q=function(){return e},e}new(t.n(G).a)({googleFonts:[{name:"Nunito",styles:["400","600"]},{name:"Open Sans",styles:["400"]}],headerFontFamily:["Nunito","Helvetica Neue","Segoe UI","Helvetica","Arial","sans-serif"],bodyFontFamily:["Open Sans","Helvetica Neue","Segoe UI","Helvetica","Arial","sans-serif"],includeNormalize:!1}).injectStyles();var K=Object(m.createGlobalStyle)(q(),U.a);c.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(K,null),o.a.createElement(Y,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.f471ae97.chunk.js.map