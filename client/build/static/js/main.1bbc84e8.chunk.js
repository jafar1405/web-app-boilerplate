(this.webpackJsonpquizz=this.webpackJsonpquizz||[]).push([[0],{22:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var o=n(2),r=n.n(o),s=n(12),a=n.n(s),c=(n(22),n(13)),i=n(14),u=n(17),h=n(16),d=n(15),p=n.n(d),j=n(1),l=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={response:{}},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/v1/say-something").then((function(t){var n=t.data;e.setState({response:n})}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Hello from the frontend! Yooooo sdfsdf"}),Object(j.jsx)("h1",{children:this.state.response.body})]})}}]),n}(o.Component);a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.1bbc84e8.chunk.js.map