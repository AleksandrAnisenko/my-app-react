(this["webpackJsonpmy-app-react"]=this["webpackJsonpmy-app-react"]||[]).push([[0],{109:function(e,n,t){"use strict";t.r(n);var c={};t.r(c),t.d(c,"loginRequest",(function(){return ee}));var a=t(3),r=t(0),i=t.n(r),u=t(25),s=t.n(u),o=(t(82),t(18)),d=t(51),l=t(10),j=t(32),b=t(33),f=t(35),O=t(34),h=function(e){var n=e.info,t=e.friends.join(" ");return Object(a.jsxs)("div",{className:"information",children:[Object(a.jsxs)("h2",{children:[" ID: ",e.id," "]}),Object(a.jsxs)("h2",{children:[" name: ",n," "]}),Object(a.jsxs)("h2",{children:["friends: ",t]})]})},x=function(e){Object(f.a)(t,e);var n=Object(O.a)(t);function t(e){var c;return Object(j.a)(this,t),(c=n.call(this,e)).state={},c}return Object(b.a)(t,[{key:"render",value:function(){var e=this.props.user,n=this.props.match.params.id,t=e.map((function(e){if(n==="id".concat(e.id))return e.name})),c=e.map((function(e){if(n==="id".concat(e.id))return e.friends}));return Object(a.jsx)(h,{id:n,info:t,friends:c})}}]),t}(r.Component),p=[{id:"uniq1",name:"Paul",friends:["Mary ","Suzanna"]},{id:"uniq2",name:"Mary",friends:["Suzanna ","Paul"]},{id:"uniq3",name:"Victor",friends:["Vladislav ","Bernard"]},{id:"uniq4",name:"Suzanna",friends:["Mary ","Paul"]},{id:"uniq5",name:"Peter",friends:["Anna ","Scarlett"]},{id:"uniq6",name:"Vladislav",friends:["Victor ","Bernard"]},{id:"uniq7",name:"Anna",friends:["Peter ","Scarlett"]},{id:"uniq8",name:"Scarlett",friends:["Peter ","Anna"]},{id:"uniq9",name:"Bernard",friends:["Victor ","Vladislav"]}],v=function(e){return Object(a.jsx)("header",{children:Object(a.jsx)("div",{className:"container wrapper",children:Object(a.jsxs)(d.a,{children:[Object(a.jsx)("nav",{children:p.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsxs)(d.b,{to:"/id".concat(e.id),name:e.name,children:[" ","".concat(e.name)," "]})},e.id)}))}),Object(a.jsx)(l.c,{children:Object(a.jsx)(l.a,{path:"/:id",component:function(e){return Object(a.jsx)(x,Object(o.a)(Object(o.a)({},e),{},{user:p}))}})})]})})})},m=t(67),C=t(69),g=t(129),S=t(136),k=t(133),w=t(130),y=t(131),q=t(128),G=function(e){var n=e.addCount,t=e.funcIncrease,c=e.funcDecrease;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:n}),Object(a.jsx)(q.a,{onClick:t,children:"+ 1"}),Object(a.jsx)(q.a,{onClick:c,children:"- 1"})]})},I=function(e){var n=e.multiCount,t=e.multiFunc,c=e.divfunc;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:n}),Object(a.jsx)(q.a,{onClick:t,children:"* 4"}),Object(a.jsx)(q.a,{onClick:c,children:"/ 4"})]})},P=function(e){var n=e.generatedWord,t=e.funcGeneration;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:n}),Object(a.jsx)(q.a,{onClick:t,children:"Generate word"})]})};function F(e){var n=e.children,t=e.value,c=e.index,r=Object(C.a)(e,["children","value","index"]);return Object(a.jsx)("div",Object(o.a)(Object(o.a)({role:"tabpanel",hidden:t!==c,id:"simple-tabpanel-".concat(c),"aria-labelledby":"simple-tab-".concat(c)},r),{},{children:t===c&&Object(a.jsx)(y.a,{p:3,children:Object(a.jsx)("div",{children:n})})}))}function L(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var A=Object(g.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function D(e){var n=A(),t=i.a.useState(0),c=Object(m.a)(t,2),r=c[0],u=c[1];return Object(a.jsxs)("div",{className:n.root,children:[Object(a.jsx)(S.a,{position:"static",children:Object(a.jsxs)(k.a,{value:r,onChange:function(e,n){u(n)},"aria-label":"simple tabs example",centered:!0,children:[Object(a.jsx)(w.a,Object(o.a)({label:"Additionn/Substraction"},L(0))),Object(a.jsx)(w.a,Object(o.a)({label:"Multiplication/Division"},L(1))),Object(a.jsx)(w.a,Object(o.a)({label:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u043b\u043e\u0432"},L(2)))]})}),Object(a.jsx)(F,{value:r,index:0,children:Object(a.jsx)(G,{addCount:e.addCount,funcIncrease:e.funcIncrease,funcDecrease:e.funcDecrease})}),Object(a.jsx)(F,{value:r,index:1,children:Object(a.jsx)(I,{multiCount:e.multiCount,multiFunc:e.multiFunc,divfunc:e.divfunc})}),Object(a.jsx)(F,{value:r,index:2,children:Object(a.jsx)(P,{generatedWord:e.word,funcGeneration:e.funcGeneration})})]})}var E=t(87),M=function(e){Object(f.a)(t,e);var n=Object(O.a)(t);function t(e){var c;return Object(j.a)(this,t),(c=n.call(this,e)).addition=function(){c.setState((function(e){return{addCount:c.state.addCount+1}}))},c.subtraction=function(){c.setState((function(e){return{addCount:c.state.addCount-1}}))},c.multiplication=function(){c.setState((function(e){return{multiCount:4*e.multiCount}}))},c.division=function(){c.setState((function(e){return{multiCount:e.multiCount/4}}))},c.funcGeneration=function(){var e=E({exactly:1,maxLength:7});if(6!==e[0].length)do{e=E({exactly:1,maxLength:7})}while(6!==e[0].length);c.setState({word:e})},c.state={addCount:1,multiCount:1,word:"New word"},c}return Object(b.a)(t,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)(D,Object(o.a)(Object(o.a)({},this.state),{},{funcIncrease:this.addition,funcDecrease:this.subtraction,multiFunc:this.multiplication,divfunc:this.division,funcGeneration:this.funcGeneration}))})}}]),t}(r.Component),N=t(68),R=t(46),B=t(29),V=t(43),T=t(132),_=t(135),z=Object(_.a)("LOGIN_REQUEST"),U=(Object(_.a)("LOGIN_SUCCESS"),Object(_.a)("LOGIN_FAIL"),Object(T.a)(Object(V.a)({},z,(function(e,n){return n.payload})),{initialState:[]})),J=t(22),Q=t.n(J),W=t(41),Y=t(65),$=t.n(Y),H=t(66),K=t.n(H);function X(e,n){return K()({url:e,method:n})}var Z=Q.a.mark(ee);function ee(e){var n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.b)(X,"https://test-todoist.herokuapp.com/api/tasks");case 2:n=e.sent,console.log(n);case 4:case"end":return e.stop()}}),Z)}var ne=Q.a.mark(ae),te=Q.a.mark(re),ce=Q.a.mark(ie);function ae(e){var n,t,a,r;return Q.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return n=e.payload,t=e.type,console.log(n,"PAYLOAD"),console.log(t,"TYPE"),a=$.a.camelCase(t),r=c[a](n),i.next=7,r;case 7:case"end":return i.stop()}}),ne)}function re(e){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.c)((function(e){var n=e.type;return/_REQUEST$/g.test(n)}),ae);case 2:case"end":return e.stop()}}),te)}function ie(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.a)([re()]);case 2:case"end":return e.stop()}}),ce)}var ue=function(e){Object(f.a)(t,e);var n=Object(O.a)(t);function t(e){var c;return Object(j.a)(this,t),(c=n.call(this,e)).testMethod=function(){c.props.loginRequest("test")},c.state={value:""},c}return Object(b.a)(t,[{key:"render",value:function(){return Object(a.jsx)(q.a,{onClick:this.testMethod,children:"Button for Redux and Axios"})}}]),t}(i.a.Component),se=Object(R.b)((function(e){return{}}),(function(e){return{loginRequest:function(n){return e(z(n))}}}))(ue),oe=Object(N.a)(),de=Object(B.c)({dataReducer:U}),le=Object(B.e)(de,Object(B.a)(oe));oe.run(ie);var je=function(){return Object(a.jsx)(R.a,{store:le,children:Object(a.jsxs)("div",{children:[Object(a.jsx)(v,{}),Object(a.jsx)(M,{}),Object(a.jsx)(se,{})]})})},be=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,138)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),r(e),i(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(je,{})}),document.getElementById("root")),be()},82:function(e,n,t){}},[[109,1,2]]]);
//# sourceMappingURL=main.39c0594c.chunk.js.map