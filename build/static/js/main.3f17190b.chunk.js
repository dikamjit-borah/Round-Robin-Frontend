(this["webpackJsonpround-robin"]=this["webpackJsonpround-robin"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},39:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(8),i=c.n(s),d=(c(26),c(2)),r=(c(27),c(5)),l=c.n(r),o=(c(39),"https://round-robin-scheduler.herokuapp.com"),u=c(4),h=c.n(u),j=c(0);var b=function(e){var t=e.teacher_id,c=e.teacher_name,n=e.setAddedSchedule,a=e.startingTime,s=e.date;function i(e){var t;return t=parseInt(e)<=9?"0"+e+":00":e+":00",console.log(t),t}var d=function(e,a,s,i){console.log(e,a,s,i),h()({method:"post",url:"".concat(o,"/api/add_schedule"),data:{teacher_id:t,teacher_name:c,scheduled_topic:e,scheduled_date:a,scheduled_start_time:s,scheduled_end_time:i}}).then((function(e){console.log("isvalid start",e.data),e.data.isValidStart?(n(!0),alert("New schedule created")):(n(!0),alert("Time overlap! Please adjust start and end time"))}))};return Object(j.jsx)("div",{className:"addTopic-parent",children:Object(j.jsx)("div",{className:"addTopic-child",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){for(var t={},c=0;c<e.target.length;c++)t[e.target[c].id]=e.target[c].value;d(t.scheduled_topic,t.scheduled_date,t.scheduled_start_time,t.scheduled_end_time)}(e)},children:[Object(j.jsx)("p",{children:Object(j.jsx)("label",{for:"scheduled_topic",children:"Topic Name"})}),Object(j.jsx)("p",{children:Object(j.jsx)("input",{type:"text",id:"scheduled_topic"})}),Object(j.jsx)("p",{children:Object(j.jsx)("label",{for:"scheduled_date",children:"Select a Date"})}),Object(j.jsx)("p",{children:Object(j.jsx)("input",{type:"date",defaultValue:function(){if(!s)return"";var e=s.split("-"),t=s.split("-")[2];return parseInt(t)<=9&&(t="0"+t),e[0]+"-"+e[1]+"-"+t}(),id:"scheduled_date"})}),Object(j.jsx)("p",{children:Object(j.jsx)("label",{for:"scheduled_start_time",children:"Select starting time:"})}),Object(j.jsx)("p",{children:Object(j.jsx)("input",{type:"time",id:"scheduled_start_time",defaultValue:i(a)})}),Object(j.jsxs)("p",{children:[" ",Object(j.jsx)("label",{for:"scheduled_end_time",children:"Select ending time:"})]}),Object(j.jsx)("p",{children:Object(j.jsx)("input",{type:"time",id:"scheduled_end_time",defaultValue:i(parseInt(a)+1)})}),Object(j.jsx)("button",{className:"submit-btn",type:"submit",children:"Confirm Schedule"})]})})})},p=c(21);c(59);var m=function(e){var t=e.teacher_id,c=e.addSchedule,a=e.setAddedSchedule,s=Object(n.useState)("2021-02-01"),i=Object(d.a)(s,2),r=i[0],u=i[1],m=Object(n.useState)("2021-02-07"),v=Object(d.a)(m,2),O=v[0],f=v[1],x=Object(n.useState)([1,2,3,4,5,6,7]),g=Object(d.a)(x,2),_=g[0],N=g[1],S=Object(n.useState)(1),y=Object(d.a)(S,2),w=y[0],C=y[1],T=Object(n.useState)(!1),k=Object(d.a)(T,2),I=k[0],F=k[1],E=Object(n.useState)(0),L=Object(d.a)(E,2),D=L[0],V=L[1],A=Object(n.useState)(0),M=Object(d.a)(A,2),B=(M[0],M[1],Object(n.useState)("")),H=Object(d.a)(B,2),W=H[0],q=H[1];Object(n.useEffect)((function(){z(),P(),console.log("Fetching weekview for ",t)}),[w,t,c]);var z=function(){for(var e=0;e<_.length;e++){var t=document.getElementById(_[e]);t&&(t.innerHTML="")}},P=function(){J(),h.a.get("".concat(o,"/api/week_view"),{params:{teacher_id:"".concat(t),week_start_date:"".concat(r),week_end_date:"".concat(O)}}).then((function(e){console.log("response data WEEK",e.data),U(e.data)}))},R=function(e){var t=e.split("T")[0].split("-");return console.log("given Date id ",t[2]),parseInt(t[2])},Y=function(e){var t=e.split(":")[0];return console.log(t),t},J=function(){for(var e=document.getElementById("time-column"),t="",c=["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],n=0,a=0;a<24;a++)t+='<p style="width:100%; color:grey; font-weight:700; position:absolute;margin-top:'.concat(n,'px">').concat(c[a]," hrs</p>"),n+=42;e&&(e.innerHTML=t)},K=function(e,t){var c=parseInt(e.split(":")[0]),n=parseInt(t.split(":")[0])-c;return console.log("height",n),n},U=function(e){for(var t=[],c=[],n=0;n<e.length;n++){var a=R(e[n].scheduled_date);t.push(a);var s=Y(e[n].scheduled_start_time);c.push(42*s)}for(var i=0;i<t.length;i++){var d=document.getElementById(t[i]),r=K(e[i].scheduled_start_time,e[i].scheduled_end_time),l='<div class="has-topic" style="margin-top:'.concat(c[i],"px; height:").concat(42*r,'px"><p class="header">').concat(e[i].scheduled_topic,'</p><p style="font-size:10px">').concat(e[i].scheduled_start_time," to ").concat(e[i].scheduled_end_time,"</p></div>");d&&(d.innerHTML=d.innerHTML+l)}},G=function(e){for(var t=function(e,t){var c=[];c.push(e);for(var n=0;n<24;n++)c.push(c[n]+t);return console.log(c),c}(165,42),c=0;c<t.length;c++)if(e<=t[c]){V(c-1);break}};return Object(j.jsxs)("div",{className:"calender-parent",children:[Object(j.jsxs)("div",{className:"next-container",children:[Object(j.jsx)("button",{id:"previous",className:"next-btn",onClick:function(){var e=w-1;if(e>=1){!function(){var e=r.split("-"),t=parseInt(e[2])-7,c="2021-02-".concat(t);e=O.split("-"),t=parseInt(e[2])-7;var n="2021-02-".concat(t);u(c),f(n)}();for(var t=_,c=0;c<t.length;c++)t[c]=parseInt(t[c])-7;C(e),N(t)}},children:"<"}),Object(j.jsx)("button",{id:"next",className:"next-btn",onClick:function(){var e=w+1;if(e<=4){!function(){var e=r.split("-"),t=parseInt(e[2])+7,c="2021-02-".concat(t);e=O.split("-"),t=parseInt(e[2])+7;var n="2021-02-".concat(t);u(c),f(n)}();for(var t=_,c=0;c<t.length;c++)t[c]=parseInt(t[c])+7;C(e),N(t)}},children:">"})]}),Object(j.jsx)(l.a,{isOpen:I,onRequestClose:function(){F(!1)},shouldCloseOnOverlayClick:!0,children:Object(j.jsx)(b,Object(p.a)({teacher_id:t,teacher_name:t,startingTime:D,date:W,setAddedSchedule:a},"startingTime",D))}),Object(j.jsxs)("div",{className:"calender-heading",children:[Object(j.jsx)("div",{className:"calender-header",children:"\u2b07\ufe0fTime - Day\u27a1\ufe0f"}),Object(j.jsxs)("div",{className:"calender-header",children:[_[0]," Feb"]}),Object(j.jsxs)("div",{className:"calender-header",children:[_[1]," Feb"]}),Object(j.jsxs)("div",{className:"calender-header",children:[_[2]," Feb"]}),Object(j.jsxs)("div",{className:"calender-header",children:[_[3]," Feb"]}),Object(j.jsxs)("div",{className:"calender-header",children:[_[4]," Feb"]}),Object(j.jsxs)("div",{className:"calender-header",children:[_[5]," Feb"]}),Object(j.jsxs)("div",{className:"calender-header",children:[_[6]," Feb"]})]}),function(){for(var e=[],t=0;t<24;t++)e.push(Object(j.jsx)("div",{className:"calender-row",style:{marginTop:"".concat(42*t,"px")}}));return e}(),Object(j.jsxs)("div",{className:"calender-columns",onClick:function(e){G(e.pageY),q("2021-02-"+e.target.id),F(!0)},children:[Object(j.jsx)("div",{className:"calender-column",id:"time-column"}),Object(j.jsx)("div",{className:"calender-column",id:_[0]}),Object(j.jsx)("div",{className:"calender-column",id:_[1]}),Object(j.jsx)("div",{className:"calender-column",id:_[2]}),Object(j.jsx)("div",{className:"calender-column",id:_[3]}),Object(j.jsx)("div",{className:"calender-column",id:_[4]}),Object(j.jsx)("div",{className:"calender-column",id:_[5]}),Object(j.jsx)("div",{className:"calender-column",id:_[6]})]})]})};c(60);c(61);var v=function(e){var t=e.teacher_id,c=e.addSchedule,a=e.setAddedSchedule,s=Object(n.useState)(1),i=Object(d.a)(s,2),r=i[0],u=i[1],p=Object(n.useState)(1),m=Object(d.a)(p,2),v=m[0],O=m[1],f=Object(n.useState)("2021-02-01"),x=Object(d.a)(f,2),g=x[0],_=x[1],N=Object(n.useState)(0),S=Object(d.a)(N,2),y=S[0],w=S[1],C=Object(n.useState)(!1),T=Object(d.a)(C,2),k=T[0],I=T[1];Object(n.useEffect)((function(){F(),E(),console.log("Fetching dayview for ",t)}),[v,t,c]);var F=function(){var e=document.getElementById(r);e&&(e.innerHTML="")},E=function(){L(),h.a.get("".concat(o,"/api/day_view"),{params:{teacher_id:"".concat(t),the_date:"".concat(g)}}).then((function(e){console.log("response data",e.data),D(e.data)}))},L=function(){for(var e=document.getElementById("time-column"),t="",c=["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],n=0,a=0;a<24;a++)t+='<p style="width:100%; text-align:center;color:grey; font-weight:700; position:absolute;margin-top:'.concat(n,'px">').concat(c[a]," hrs</p>"),n+=42;e&&(e.innerHTML=t)},D=function(e){console.log("Day-data",e);for(var t=[],c=[],n=0;n<e.length;n++){var a=V(e[n].scheduled_date);t.push(a);var s=A(e[n].scheduled_start_time);c.push(42*s)}for(var i=0;i<t.length;i++){var d=document.getElementById(t[i]),r=M(e[i].scheduled_start_time,e[i].scheduled_end_time),l='<div class="has-topic" style="margin-top:'.concat(c[i],"px; height:").concat(42*r,'px"><p style="header">').concat(e[i].scheduled_topic,'</p><p style="font-size:10px">').concat(e[i].scheduled_start_time," to ").concat(e[i].scheduled_end_time,"</p></div>");d&&(d.innerHTML=d.innerHTML+l)}},V=function(e){var t=e.split("T")[0].split("-");return console.log("given Date id ",t[2]),parseInt(t[2])},A=function(e){var t=e.split(":")[0];return console.log(t),t},M=function(e,t){var c=parseInt(e.split(":")[0]),n=parseInt(t.split(":")[0])-c;return console.log("height",n),n},B=function(e){for(var t=function(e,t){var c=[];c.push(e);for(var n=0;n<24;n++)c.push(c[n]+t);return console.log(c),c}(165,42),c=0;c<t.length;c++)if(e<=t[c]){console.log("Clicked at time",c-1),w(c-1);break}};return Object(j.jsxs)("div",{className:"day-parent",children:[Object(j.jsxs)("div",{className:"next-container",children:[Object(j.jsx)("button",{id:"previous",className:"next-btn",onClick:function(){var e=v-1;if(e>=1){!function(){var e=g.split("-"),t=parseInt(e[2])-1,c="2021-02-".concat(t);_(c)}();var t=r-1;O(e),u(t)}},children:"<"}),Object(j.jsx)("button",{id:"next",className:"next-btn",onClick:function(){var e=v+1;if(e<=28){!function(){var e=g.split("-"),t=parseInt(e[2])+1,c="2021-02-".concat(t);_(c)}();var t=r+1;O(e),u(t)}},children:">"})]}),Object(j.jsx)(l.a,{className:"create-schedule-modal",isOpen:k,onRequestClose:function(){I(!1)},shouldCloseOnOverlayClick:!0,children:Object(j.jsx)(b,{teacher_id:t,teacher_name:t,startingTime:y,date:g,setAddedSchedule:a})}),Object(j.jsxs)("div",{className:"calender-heading",children:[Object(j.jsx)("div",{className:"calender-header",children:"\u2b07\ufe0fTime - Day\u27a1\ufe0f"}),Object(j.jsxs)("div",{className:"calender-header",children:[r," Feb"]})]}),function(){for(var e=[],t=0;t<24;t++)e.push(Object(j.jsx)("div",{className:"calender-row",style:{marginTop:"".concat(42*t,"px")}}));return e}(),Object(j.jsxs)("div",{className:"calender-columns",children:[Object(j.jsx)("div",{className:"calender-column",id:"time-column"}),Object(j.jsx)("div",{className:"calender-column",id:r,onClick:function(e){B(e.pageY),I(!0)}})]})]})};c(62);var O=function(e){var t=e.teacher_id,c=Object(n.useState)(),a=Object(d.a)(c,2),s=a[0],i=a[1],r=Object(n.useState)(!1),l=Object(d.a)(r,2),u=l[0],b=l[1];Object(n.useEffect)((function(){h.a.get("".concat(o,"/api/month_view"),{params:{teacher_id:"".concat(t)}}).then((function(e){console.log("month response",e.data),i([e.data]),b(!0)}))}),[t]);var p=1,m=function(e){var t=e.split("T")[0].split("-");return parseInt(t[2])};function v(){for(var e=[],t=0,c=0;c<7;c++){for(var n=0;n<s[0].length;n++)m(s[0][n].scheduled_date)==p&&(t=s[0][n]["COUNT(scheduled_date)"]);e.push(Object(j.jsxs)("div",{className:"col-item",children:[" ",Object(j.jsxs)("span",{style:{fontSize:"26px",color:"grey",fontWeight:"700"},children:[p," Feb"]}),Object(j.jsxs)("p",{children:["\ud83d\udd52 ",t," schedules"]})]})),p++}return e}return u?Object(j.jsx)("div",{className:"month-parent",children:Object(j.jsx)("div",{className:"row-div",children:function(){for(var e=[],t=0;t<4;t++)e.push(Object(j.jsx)("div",{className:"col-div",children:v()}));return e}()})}):Object(j.jsx)("div",{children:"Loading"})};var f=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(),i=Object(d.a)(s,2),r=i[0],u=i[1],p=Object(n.useState)([]),f=Object(d.a)(p,2),x=f[0],g=f[1],_=Object(n.useState)(!1),N=Object(d.a)(_,2),S=N[0],y=N[1],w=Object(n.useState)(1),C=Object(d.a)(w,2),T=C[0],k=C[1],I=Object(n.useState)(!1),F=Object(d.a)(I,2),E=F[0],L=F[1];Object(n.useEffect)((function(){D()}),[E]);var D=function(){console.log("Fetching teachers"),h.a.get("".concat(o,"/api/all_teachers"),{}).then((function(e){u(e.data[0].teacher_id),g(e.data),console.log("response data",e.data)}))};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"top-section",children:[Object(j.jsxs)("div",{className:"teachers-div",children:[Object(j.jsx)("span",{children:"Select Teacher:"}),Object(j.jsx)("select",{name:"selectList",id:"selectList",onChange:function(e){u(e.target.value)},children:x.map((function(e){return Object(j.jsx)("option",{value:e.teacher_id,children:e.teacher_name})}))})]}),Object(j.jsxs)("div",{className:"view-div",children:[Object(j.jsx)("span",{children:"Choose Your View:"}),Object(j.jsx)("input",{type:"radio",value:"Week View",name:"view",defaultChecked:!0,onClick:function(){k(1)}})," ","Week View",Object(j.jsx)("input",{type:"radio",value:"Day View",name:"view",onClick:function(){k(2)}})," ","Day View",Object(j.jsx)("input",{type:"radio",value:"Day View",name:"view",onClick:function(){k(3)}})," ","Month View"]}),Object(j.jsx)("div",{className:"view-div",style:{marginLeft:"50px"},children:Object(j.jsxs)("form",{onSubmit:function(e){!function(e){L(!1),e.preventDefault(),console.log(e.target[0].value),h()({method:"post",url:"".concat(o,"/api/add_teacher"),data:{teacher_name:e.target[0].value}}).then((function(t){L(!0),alert("Teacher ".concat(e.target[0].value," created"))}))}(e)},children:[Object(j.jsx)("input",{type:"text",placeholder:"Enter teacher name"})," ",Object(j.jsx)("button",{type:"submit",className:"submit-btn",children:"Create Teacher"})]})})]}),Object(j.jsx)("button",{className:"add-schedule-btn",onClick:function(){a(!0)},children:"+"}),Object(j.jsx)(l.a,{isOpen:c,onRequestClose:function(){a(!1)},shouldCloseOnOverlayClick:!0,children:Object(j.jsx)(b,{teacher_id:r,teacher_name:r,setAddedSchedule:y})}),Object(j.jsxs)("div",{className:"AppChild app-right",children:[console.log("currentTeacher",r),1==T?Object(j.jsx)(m,{teacher_id:r,addSchedule:S,setAddedSchedule:y}):2==T?Object(j.jsx)(v,{teacher_id:r,addSchedule:S,setAddedSchedule:y}):Object(j.jsx)(O,{teacher_id:r})]})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,64)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),x()}},[[63,1,2]]]);
//# sourceMappingURL=main.3f17190b.chunk.js.map