(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),l=a.n(c),o=(a(14),function(e){var t=e.children;return r.a.createElement("div",{className:"Layout"},t)}),u=a(3),i=a(4),s=a(5),d=a(7),m=a(6),b=a(8);function v(e){var t=e.title,a=e.children;return r.a.createElement("div",null,r.a.createElement("p",{className:"title"},t),a)}function p(e){var t=e.options,a=e.onLeaveFeedback;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("button",{type:"button",name:e,onClick:a},e.toUpperCase())})))}function f(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,l=e.positivePercentage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Good: ",t),r.a.createElement("p",null,"Neutral: ",a),r.a.createElement("p",null,"Bad: ",n),r.a.createElement("p",null,"Total: ",c),r.a.createElement("p",null,"Positive feedback: ",l,"%"))}function E(e){var t=e.message;return r.a.createElement("p",null,t)}var g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={good:0,neutral:0,bad:0},a.increaseValue=function(e){var t=e.target.name;a.setState(Object(u.a)({},t,a.state[t]+1))},a.countTotalFeedback=function(){return a.state.good+a.state.neutral+a.state.bad},a.countPositiveFeedbackPercentage=function(){var e=a.state.good,t=a.countTotalFeedback();return 0===t?0:Math.floor(e/t*100)},a}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.countPositiveFeedbackPercentage();return r.a.createElement("div",null,r.a.createElement(v,{title:"Please leave feedback"},r.a.createElement(p,{options:Object.keys(this.state),onLeaveFeedback:this.increaseValue})),e>0?r.a.createElement(v,{title:"Statistics:"},r.a.createElement(f,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:e,positivePercentage:t})):r.a.createElement(E,{message:"No feedback given"}))}}]),t}(n.Component);g.defaultProps={};var h=g;l.a.render(r.a.createElement((function(){return r.a.createElement(o,null,r.a.createElement(h,null))}),null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.4fcddc33.chunk.js.map