(this["webpackJsonprestful-api"]=this["webpackJsonprestful-api"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(2),r=n.n(o),s=(n(13),n(3)),l=n(4),i=n(6),u=n(5),m=n(7),h=function(e){var t=e.contacts;return c.a.createElement("div",null,c.a.createElement("center",null,c.a.createElement("h1",null,"Contact List")),t.map((function(e){return c.a.createElement("div",{class:"card"},c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},e.name),c.a.createElement("p",{class:"card-text"},"Company: ",e.company.name," "),c.a.createElement("p",{class:"card-text"},"Phone: ",e.phone),c.a.createElement("p",{class:"card-text"},"Email: ",e.email)))})))},p=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={contacts:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({contacts:t})})).catch(console.log)}},{key:"render",value:function(){return c.a.createElement(h,{contacts:this.state.contacts})}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.42b1fbec.chunk.js.map