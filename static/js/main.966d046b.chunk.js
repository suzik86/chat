(window["webpackJsonpmy-chat"]=window["webpackJsonpmy-chat"]||[]).push([[0],{39:function(e,t,n){e.exports=n.p+"static/media/logo.116b6b3b.png"},40:function(e,t,n){e.exports=n(68)},49:function(e,t,n){},50:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(15),i=n.n(s),c=n(19),r=n(17),m=(n(49),n(5)),l=n(6),u=n(9),g=n(7),h=n(8),f=(n(50),n(20)),d=n.n(f),b=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{action:".",onSubmit:this.props.onSubmitFunc},o.a.createElement("span",{id:"connection"}),o.a.createElement("textarea",{className:"text",type:"text",placeholder:"Enter message...",value:this.props.message,onChange:this.props.onChange}),o.a.createElement(d.a,{className:"submit-button",type:"submit",variant:"dark"},"Send"))}}]),t}(a.Component),p=function(e){var t=e.name,n=e.message,a=e.time;return o.a.createElement("div",{className:"message"},o.a.createElement("strong",{className:"nickname"},t),o.a.createElement("span",{className:"time"},new Date(a).toLocaleString()),o.a.createElement("em",{className:"message-text"},n),o.a.createElement("span",{id:"message-info"}))},v=n(38),w=n.n(v),E=function(e){function t(e){var n;return Object(m.a)(this,t),n=Object(u.a)(this,Object(g.a)(t).call(this)),console.log(e),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"scrollToBottom",value:function(){this.messagesEnd.scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){var e=this;return o.a.createElement("section",{className:"messages-block"},this.props.messages.map(function(e){return o.a.createElement(p,{key:w()(),message:e.message,name:e.from,time:e.time})}),o.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}}))}}]),t}(a.Component),y=Object(r.b)(function(e){return{messages:e.messages}})(E),O=function(e){var t=e.logOut;return o.a.createElement(d.a,{className:"logout-button",onClick:t,variant:"dark"},"Log out")},k="ADD_MESSAGES";var S=n(27),j=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(u.a)(this,Object(g.a)(t).call(this))).addMessages=function(e){(0,n.props.dispatch)(function(e){return{type:k,messages:e}}(e))},n.submitMessage=function(e){var t={from:n.state.name,message:e};n.ws.send(JSON.stringify(t))},n.onSubmitFunc=function(e){e.preventDefault(),1!==n.ws.readyState?(n.state.notSubmitMessages.push(n.state.message),console.log(n.state.notSubmitMessages),n.setState({message:""})):(n.submitMessage(n.state.message),n.setState({message:""}))},n.logOut=function(){localStorage.removeItem("nickname"),n.setState(function(e){return{name:""}})},n.onChange=function(e){n.setState({message:e.target.value})},n.reconnectTimer=null,n.state={name:"",message:"",notSubmitMessages:[]},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.initConnection(),this.setState(function(e){return{name:localStorage.getItem("nickname")}})}},{key:"waitForSocketConnection",value:function(e,t){var n=this;Object(S.setTimeout)(function(){1===e.readyState?null!=t&&t():n.waitForSocketConnection(e,t)},5)}},{key:"initConnection",value:function(){var e=this;this.ws=new WebSocket("wss://wssproxy.herokuapp.com/");var t=this;this.ws.onopen=function(){console.log("connected"),document.getElementById("connection").innerHTML="online",document.getElementById("connection").style.color="green",t.waitForSocketConnection(t.ws,function(){t.state.notSubmitMessages.forEach(t.submitMessage),t.setState({notSubmitMessages:[]})})},this.ws.onmessage=function(t){var n=JSON.parse(t.data);if(e.addMessages(n),!0===document.hidden)if("Notification"in window)if("granted"===Notification.permission){new Notification("New message");console.log("New message")}else"denied"!==Notification.permission&&Notification.requestPermission().then(function(e){if("granted"===e){new Notification("New message");console.log("New message")}});else alert("This browser does not support desktop notification")},this.ws.onclose=function(e){console.log("disconnected"),document.getElementById("connection").innerHTML="offline",document.getElementById("connection").style.color="red",t.reconnect()},this.ws.onerror=function(e){console.error(e)}}},{key:"reconnect",value:function(){var e=this;Object(S.setTimeout)(function(){e.initConnection()},5e3)}},{key:"render",value:function(){var e=this;return o.a.createElement("main",{className:"main"},o.a.createElement("label",{htmlFor:"name"},"Nickname:\xa0",o.a.createElement("input",{type:"text",id:"name",placeholder:"Enter your name...",value:this.state.name,onChange:function(t){localStorage.setItem("nickname",t.target.value),e.setState({name:t.target.value})}})),o.a.createElement(O,{logOut:this.logOut}),o.a.createElement(y,null),o.a.createElement(b,{ws:this.ws,onSubmitFunc:this.onSubmitFunc,message:this.state.message,onChange:this.onChange}))}}]),t}(a.Component),N=Object(r.b)()(j),C=n(28),M=n.n(C),B=n(39),F=n.n(B),I=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,o.a.createElement(M.a,{bg:"dark",variant:"dark"},o.a.createElement(M.a.Brand,{href:"#home",className:"chat-title"},o.a.createElement("img",{alt:"",src:F.a,width:"50",height:"50",className:"d-inline-block align-top"})," My super chat"))))}}]),t}(a.Component),T=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(I,null),o.a.createElement(N,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x={messages:[]};var D=Object(c.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object.assign({},e,{messages:e.messages.concat(t.messages.reverse())});default:return e}});i.a.render(o.a.createElement(r.a,{store:D},o.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.966d046b.chunk.js.map