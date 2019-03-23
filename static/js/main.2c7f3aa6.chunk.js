(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{183:function(e,t,n){e.exports=n(312)},188:function(e,t,n){},189:function(e,t,n){},312:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(22),i=n.n(s),o=(n(188),n(23)),c=n(24),u=n(26),l=n(25),h=n(27),d=(n(189),function(e){var t=e.leaderBoard,n=t&&t.map(function(e){return r.a.createElement("div",null,r.a.createElement("span",null,e.name),r.a.createElement("span",null," ",e.score[0]),r.a.createElement("span",null," of"),r.a.createElement("span",null," ",e.score[0]+e.score[1]))});return r.a.createElement("div",{style:{position:"absolute",top:"0",height:"20%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}},t?n:"NO SCORES YET")}),f=n(92),p=n(17),m=n.n(p),y=n(30),v=n(56),g=n.n(v),w=[{question:"What is the name of the Central African Republic in their native tongue?",query:{code:"CF",param:"native"}},{question:"What is the currency in Ivory Coast",query:{code:"CI",param:"currency"}},{question:"What is the Native Name for the United Arab Emirates?",query:{code:"AE",param:"native"}},{question:"What is Germany called in German?",query:{code:"DE",param:"native"}},{question:"What is currency of The Netherlands",query:{code:"NL",param:"currency"}}],b=n(10),E=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={currentQuestion:void 0,correct:"",name:"Player1",started:!1,finished:!1,result:[0,0]},n.queryMaker=function(e,t){return t?'query{country(code:"'.concat(t,'"){').concat(e,"}}"):"query{countries{".concat(e,"}}")},n.fetchCorrectAnswer=function(){var e=Object(y.a)(m.a.mark(function e(t,a){var r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=n.queryMaker(t,a),g.a.post("https://countries.trevorblades.com/graphql",{query:r,variables:{}}).then(function(e){return n.setState({correct:e.data.data.country[t]})}).catch(function(e){return console.log(e)});case 2:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),n.fetchAlternatives=function(){var e=Object(y.a)(m.a.mark(function e(t){var a,r,s,i;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.queryMaker(t),e.next=3,g.a.post("https://countries.trevorblades.com/graphql",{query:a,variables:{}}).then(function(e){return e.data.data.countries});case 3:return r=e.sent,e.next=6,n.makeOptions(r,t);case 6:s=e.sent,i=Math.floor(Math.random()*s.length),s[i]=n.state.correct,n.setState({options:s});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.handleNameChange=function(e){n.setState({name:e.target.value})},n.startGame=function(){n.setQuestions(w),n.setState({started:!0})},n.handleChoice=function(e){n.setState({answer:e.target.value})},n.submitAnswer=function(e){var t=n.state.result;n.state.answer?(n.state.answer===n.state.correct?t[0]++:t[1]++,n.setState({result:t}),n.getQuestion()):alert("Please enter an answer!")},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"setQuestions",value:function(){var e=Object(y.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=Object(f.a)(t),this.setState({questions:n});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getQuestion",value:function(){var e=Object(y.a)(m.a.mark(function e(){var t,n,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(t=this.state.questions).length?(n=Math.floor(Math.random()*t.length),a=(a=t.splice(n,1)).pop(),this.setState({questions:t,currentQuestion:a})):this.setState({finished:!0});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"makeOptions",value:function(e,t){for(var n=[];n.length<4;){var a=Math.floor(Math.random()*e.length);n.push(e[a][t])}return n}},{key:"updateTheLeaderBoard",value:function(){var e={name:this.state.name,score:this.state.result};this.props.update(e),this.setState({questions:void 0,currentQuestion:void 0,options:void 0,correct:"",name:"Player1",started:!1,finished:!1,result:[0,0]})}},{key:"componentDidUpdate",value:function(e,t){!t.questions&&this.state.questions&&this.getQuestion(),this.state.currentQuestion&&(this.state.currentQuestion!==t.currentQuestion&&this.fetchCorrectAnswer(this.state.currentQuestion.query.param,this.state.currentQuestion.query.code),t.correct!==this.state.correct&&this.fetchAlternatives(this.state.currentQuestion.query.param)),t.finished!==this.state.finished&&this.state.finished&&this.updateTheLeaderBoard()}},{key:"render",value:function(){var e=this.state.options&&this.state.options.map(function(e,t){return r.a.createElement(b.d,{value:e,control:r.a.createElement(b.g,null),label:e,key:t})});return this.state.started?this.state.options?r.a.createElement(b.b,{style:{display:"flex",flexDirection:"column",width:"80%",height:"60%",justifyContent:"space-between",paddingTop:"20%"}},r.a.createElement("span",null,this.state.currentQuestion.question),r.a.createElement(b.c,null,r.a.createElement(b.h,{"aria-label":"answers",name:"answer",value:this.state.answer,onChange:this.handleChoice},e),r.a.createElement(b.a,{onClick:this.submitAnswer,style:{color:"light-green"}},"ANSWER"))):r.a.createElement("span",null,"LOADING"):r.a.createElement(b.b,{style:{display:"flex",flexDirection:"column"}},r.a.createElement(b.f,{value:this.state.name,onChange:this.handleNameChange}),r.a.createElement(b.a,{onClick:this.startGame},"START"))}}]),t}(a.Component),q=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={leaderBoard:void 0},n.updateLeaderBoard=function(e){var t=n.state.leaderBoard;t?t.push(e):(t=[]).push(e),n.setState({leaderBoard:t}),localStorage.setItem("leaderBoard",JSON.stringify(t))},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getLeaderBoard",value:function(){var e=localStorage.getItem("leaderBoard");e&&(e=JSON.parse(e)),e&&this.setState({leaderBoard:e})}},{key:"componentDidMount",value:function(){this.getLeaderBoard()}},{key:"render",value:function(){var e=this.state.leaderBoard;return r.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},r.a.createElement(d,{className:"test",leaderBoard:e}),r.a.createElement(E,{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},update:this.updateLeaderBoard}))}}]),t}(a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(b.e,{container:!0,style:{height:"100%",width:"100%",display:"flex",flexDirection:"column"},alignContent:"center",justifycontent:"center"},r.a.createElement(b.e,{item:!0,lg:8,md:12,sm:12,style:{height:"100%",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifycontent:"center"}},r.a.createElement(q,{style:{height:"100%",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifycontent:"center"}})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[183,1,2]]]);
//# sourceMappingURL=main.2c7f3aa6.chunk.js.map