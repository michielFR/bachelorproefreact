(this.webpackJsonpbachelorproefreact=this.webpackJsonpbachelorproefreact||[]).push([[0],{14:function(e,t,a){},191:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(36),c=a.n(l),o=(a(90),a(14),a(15)),s=a(16),i=a(19),u=a(18),m=a(198),d=a(193),p=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={gegenereerd:[],gesorteerd:[],difference:0,comparisons:0,arraycheck:0,currentdistribution:"Genereer eerst",justsorted:!1},e.genereerRandomGetallen=function(){for(var t=[],a=0;a<5e3;a++)t[a]=Math.floor(1e3*Math.random());e.setState({gegenereerd:t,currentdistribution:"Random",justsorted:!1}),e.fillGesorteerd(t)},e.genereerReversedGetallen=function(){for(var t=[],a=0;a<5e3;a++)t[a]=5e3-a;e.setState({gegenereerd:t,currentdistribution:"Reversed",justsorted:!1}),e.fillGesorteerd(t)},e.genereerFewUniqueGetallen=function(){for(var t=[],a=1,n=0;n<5e3;n++)t[n]=a,n%500===0&&a++;t=e.Shuffle(t),e.setState({gegenereerd:t,currentdistribution:"Few unique",justsorted:!1}),e.fillGesorteerd(t)},e.genereerAlmostSortedGetallen=function(){for(var t=[],a=0;a<5e3;a++)t[a]=a;t[4500]=5,e.setState({gegenereerd:t,currentdistribution:"Almost sorted",justsorted:!1}),e.fillGesorteerd(t)},e.toonArray=function(e){var t="nog niets gegenereerd";if(0!==e.length){t="";for(var a=0;a<100;a++)t+=e[a]+" - ";t+="..."}return t},e.justSorted=function(t){return t?r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h5",null,r.a.createElement("b",null,"Uitvoertijd")," = ",e.state.difference," ms"),r.a.createElement("h5",null,r.a.createElement("b",null,"Vergelijkingen")," = ",e.state.comparisons.toLocaleString()," "),r.a.createElement("h5",null,r.a.createElement("b",null,"Array wijzigingen")," = ",e.state.arraycheck.toLocaleString(),"  ")):r.a.createElement("div",null)},e.fillGesorteerd=function(t){for(var a=[],n=0;n<t.length;n++)a[n]=t[n];e.setState({gesorteerd:a})},e.shuffle=function(e){var t,a,n;for(n=e.length-1;n>0;n--)t=Math.floor(Math.random()*(n+1)),a=e[n],e[n]=e[t],e[t]=a;return e},e.bubbleSort=function(){var t,a=0,n=0,r=(new Date).getTime(),l=e.state.gesorteerd,c=l.length-1;do{t=!1;for(var o=0;o<c;o++)if(n+=1,l[o]>l[o+1]){var s=l[o];l[o]=l[o+1],l[o+1]=s,t=!0,a+=2}c--}while(t);e.setState({gesorteerd:l});var i=(new Date).getTime();e.setState({difference:i-r}),e.setState({comparisons:n}),e.setState({arraycheck:a}),e.setState({justsorted:!0})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"px-3"},r.a.createElement("h1",null,"Genereren & Sorteren"),r.a.createElement(m.a,null,r.a.createElement(m.a.Header,null,r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-2"},r.a.createElement("h5",null,this.state.currentdistribution)),r.a.createElement("div",{class:"col-md-9 text-right"},r.a.createElement("div",{class:"btn-group",role:"group"},r.a.createElement(d.a,{type:"button",variant:"success",onClick:this.genereerRandomGetallen},"Random"),r.a.createElement(d.a,{type:"button",variant:"success",onClick:this.genereerReversedGetallen},"Reversed"),r.a.createElement(d.a,{type:"button",variant:"success",onClick:this.genereerFewUniqueGetallen},"Few unique"),r.a.createElement(d.a,{type:"button",variant:"success",onClick:this.genereerAlmostSortedGetallen},"Almost sorted"))),r.a.createElement("div",{class:"col-md-1"},r.a.createElement(d.a,{variant:"warning",onClick:this.bubbleSort},"Sorteer")))),r.a.createElement(m.a.Body,null,r.a.createElement(m.a.Title,null,"Gegenereerd"),r.a.createElement(m.a.Text,null,this.toonArray(this.state.gegenereerd)),r.a.createElement("hr",null),r.a.createElement(m.a.Title,null,"Gesorteerd"),r.a.createElement(m.a.Text,null,this.toonArray(this.state.gesorteerd)),this.justSorted(this.state.justsorted))))}}]),a}(r.a.Component),h=a(23),E=a.n(h),v=a(39),f=a(41),b=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,{style:{width:"18rem"}},r.a.createElement(m.a.Img,{variant:"top",src:this.props.photo.img_src}),r.a.createElement(m.a.Body,null,r.a.createElement(m.a.Title,null,this.props.photo.id+" "+this.props.photo.camera.name),r.a.createElement(m.a.Text,null,"Date: ",this.props.photo.earth_date,r.a.createElement("br",null),"Rover: ",this.props.photo.rover.name)))}}]),a}(r.a.Component),g=a(194),y=a(195);var j=function(){Object(n.useEffect)((function(){c()}),[]);var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],l=t[1],c=function(){var e=Object(v.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=JiErxLPFtI9gmM24WjFWpaP9m84iXtCZjX0FcfOb");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a.photos),l(a.photos);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"Nasa"),r.a.createElement(g.a,{center:"true"},a.map((function(e){return r.a.createElement(y.a,{className:"d-flex justify-content-around",key:e.id},r.a.createElement(b,{photo:e}))}))))};var k=function(){return r.a.createElement("div",{className:"px-3"},r.a.createElement("h2",null,"Blazor, performantie van C# webapplicaties met behulp van WebAssembly"),"Dit is de React applicatie!")},x=a(77),S=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={data:{labels:["Red","Blue","Yellow"],datasets:[{data:[4,5,6],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},options:{maintainAspectRatio:!0,responsive:!1,title:{display:!0,text:"Sample chart from react-chartjs-2"}}},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"px-3"},r.a.createElement("h2",null,"Pie Example"),r.a.createElement("div",{align:"center"},r.a.createElement(x.a,{data:this.state.data,options:this.state.options,width:900,height:450})))}}]),a}(r.a.Component),w=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"createAlert",value:function(){alert("dit is een alert")}},{key:"startAnimation",value:function(){var e=document.getElementById("animate"),t=0,a=setInterval((function(){350===t?clearInterval(a):(t++,e.style.top=t+"px",e.style.left=t+"px")}),5)}},{key:"helloUser",value:function(){var e,t=prompt("Wat is je naam?","Harry Potter");e=null===t||""===t?"gebruiker heeft geannuleerd.":"Dag "+t+"! Wat vind je van de animatie?",document.getElementById("demo").innerHTML=e}},{key:"render",value:function(){return r.a.createElement("div",{className:"px-3"},r.a.createElement("h1",null,"JavaScript"),r.a.createElement(m.a,null,r.a.createElement(m.a.Header,null,r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-2"},r.a.createElement("h5",null,"Standaard functies")),r.a.createElement("div",{class:"col-md-10 text-right"},r.a.createElement("div",{class:"btn-group",role:"group"},r.a.createElement(d.a,{type:"button",variant:"success",onClick:this.createAlert},"Alert"),r.a.createElement(d.a,{type:"button",variant:"success",onClick:this.helloUser},"Dag gebruiker"),r.a.createElement(d.a,{type:"button",variant:"success",onClick:this.startAnimation},"Start animatie"))))),r.a.createElement(m.a.Body,null,r.a.createElement(m.a.Text,{className:"text-center"},r.a.createElement("p",{id:"demo"}),r.a.createElement("hr",null),r.a.createElement("div",{id:"box",className:"bg-primary"},r.a.createElement("div",{id:"animate",className:"bg-success"}))))))}}]),a}(r.a.Component);var O=function(){Object(n.useEffect)((function(){c()}),[]);var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],l=t[1],c=function(){var e=Object(v.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/planetary/apod?api_key=JiErxLPFtI9gmM24WjFWpaP9m84iXtCZjX0FcfOb");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),l(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"text-center px-3"},r.a.createElement("h1",{className:"text-center"},"Nasa picture of the day!"),r.a.createElement("h5",null,a.title," - ",a.date),r.a.createElement(m.a,null,r.a.createElement(m.a.Body,null,r.a.createElement(m.a.Text,null,a.explanation,r.a.createElement("br",null),"klik ",r.a.createElement("a",{href:a.hdurl}," hier")," voor foto.")),r.a.createElement(m.a.Img,{variant:"bottom",src:a.hdurl})))},N=(a(186),a(196)),C=a(197),A=a(13);var F=function(){return r.a.createElement(N.a,{bg:"light",expand:"lg"},r.a.createElement(N.a.Brand,null," ",r.a.createElement(A.b,{to:"/",className:"btn btn-lg btn-outline-dark"},"Bachelorproef react")),r.a.createElement(N.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(N.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(C.a,{className:"mr-auto"},r.a.createElement(C.a.Link,null,r.a.createElement(A.b,{to:"/sort",className:"btn btn-outline-secondary"},"Genereren & Sorteren")),r.a.createElement(C.a.Link,null,r.a.createElement(A.b,{to:"/nasa",className:"btn btn-outline-secondary"},"Nasa")),r.a.createElement(C.a.Link,null,r.a.createElement(A.b,{to:"/interop",className:"btn btn-outline-secondary"},"JavaScript")),r.a.createElement(C.a.Link,null,r.a.createElement(A.b,{to:"/chart",className:"btn btn-outline-secondary"},"Chart")),r.a.createElement(C.a.Link,null,r.a.createElement(A.b,{to:"/picofday",className:"btn btn-outline-secondary"},"Picture of the day")))))},G=a(20);var B=function(){return r.a.createElement(A.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(F,null),r.a.createElement(G.a,{path:"/",exact:!0,component:k}),r.a.createElement(G.a,{path:"/sort",component:p}),r.a.createElement(G.a,{path:"/nasa",component:j}),r.a.createElement(G.a,{path:"/picofday",component:O}),r.a.createElement(G.a,{path:"/chart",component:S}),r.a.createElement(G.a,{path:"/interop",component:w})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},85:function(e,t,a){e.exports=a(191)},90:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.5b9169a9.chunk.js.map