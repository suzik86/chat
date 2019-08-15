(window["webpackJsonpmy-chat"]=window["webpackJsonpmy-chat"]||[]).push([[0],{36:function(e,t,n){e.exports=n.p+"static/media/logo.116b6b3b.png"},37:function(e,t,n){e.exports=n(66)},47:function(e,t,n){},48:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(15),i=n.n(o),r=n(19),c=n(17),l=(n(47),n(5)),m=n(6),u=n(9),g=n(7),f=n(8),h=(n(48),n(20)),d=n.n(h),p=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(s)))).state={message:""},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("form",{action:".",onSubmit:function(t){t.preventDefault(),e.props.onSubmitMessage(e.state.message),e.setState({message:""})}},s.a.createElement("textarea",{className:"text",type:"text",placeholder:"Enter message...",value:this.state.message,onChange:function(t){return e.setState({message:t.target.value})}}),s.a.createElement(d.a,{className:"submit-button",type:"submit",variant:"dark"},"Send"))}}]),t}(a.Component),b=function(e){var t=e.name,n=e.message,a=e.time;return s.a.createElement("div",{className:"message"},s.a.createElement("strong",{className:"nickname"},t),s.a.createElement("span",{className:"time"},new Date(a).toLocaleString()),s.a.createElement("em",{className:"message-text"},n))},v=n(35),w=n.n(v),O=function(e){function t(e){var n;return Object(l.a)(this,t),n=Object(u.a)(this,Object(g.a)(t).call(this)),console.log(e),n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"scrollToBottom",value:function(){this.messagesEnd.scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){var e=this;return s.a.createElement("section",{className:"messages-block"},this.props.messages.map(function(e){return s.a.createElement(b,{key:w()(),message:e.message,name:e.from,time:e.time})}),s.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}}))}}]),t}(a.Component),E=Object(c.b)(function(e){return{messages:e.messages}})(O),k=function(e){var t=e.logOut;return s.a.createElement(d.a,{className:"logout-button",onClick:t,variant:"dark"},"Log out")},j="ADD_MESSAGES";var y=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(g.a)(t).call(this))).addMessages=function(e){(0,n.props.dispatch)(function(e){return{type:j,messages:e}}(e))},n.submitMessage=function(e){var t={from:n.state.name,message:e};n.ws.send(JSON.stringify(t))},n.logOut=function(){localStorage.removeItem("nickname"),n.setState(function(e){return{name:""}})},n.state={name:"",messages:[]},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.initConnection()}},{key:"initConnection",value:function(){var e=this;this.ws=new WebSocket("wss://wssproxy.herokuapp.com/"),this.ws.onopen=function(){console.log("connected"),e.setState(function(e){return{name:localStorage.getItem("nickname")}})},this.ws.onmessage=function(t){var n=JSON.parse(t.data);if(e.addMessages(n),!0===document.hidden)if("Notification"in window)if("granted"===Notification.permission){new Notification("New message");console.log("New message")}else"denied"!==Notification.permission&&Notification.requestPermission().then(function(e){if("granted"===e){new Notification("New message");console.log("New message")}});else alert("This browser does not support desktop notification")},this.ws.onclose=function(t){console.log("disconnected"),e.initConnection()},this.ws.onerror=function(e){alert("\u041e\u0448\u0438\u0431\u043a\u0430 "+e.message)}}},{key:"render",value:function(){var e=this;return s.a.createElement("main",{className:"main"},s.a.createElement("label",{htmlFor:"name"},"Nickname:\xa0",s.a.createElement("input",{type:"text",id:"name",placeholder:"Enter your name...",value:this.state.name,onChange:function(t){localStorage.setItem("nickname",t.target.value),e.setState({name:t.target.value})}})),s.a.createElement(k,{logOut:this.logOut}),s.a.createElement(E,null),s.a.createElement(p,{ws:this.ws,onSubmitMessage:function(t){return e.submitMessage(t)}}))}}]),t}(a.Component),N=Object(c.b)()(y),S=n(26),C=n.n(S),M=n(36),x=n.n(M),D=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("header",null,s.a.createElement(C.a,{bg:"dark",variant:"dark"},s.a.createElement(C.a.Brand,{href:"#home",className:"chat-title"},s.a.createElement("img",{alt:"",src:x.a,width:"50",height:"50",className:"d-inline-block align-top"})," My super chat"))))}}]),t}(a.Component),B=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(D,null),s.a.createElement(N,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I={messages:[]};var A=Object(r.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object.assign({},e,{messages:e.messages.concat(t.messages.reverse())});default:return e}});i.a.render(s.a.createElement(c.a,{store:A},s.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.6d1fb701.chunk.js.map