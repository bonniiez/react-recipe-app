(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{15:function(e,a,t){e.exports=t(24)},20:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(8),l=t.n(r),i=(t(20),t(7),t(3)),s=t.n(i),o=t(9),m=t(1),u=t(10),p=t(11),d=function(e){var a=e.eachRecipe,t=e.recipeIndex;console.log("recipeIndex: ",t);var n=a.recipe,r=n.ingredients,l=n.healthLabels.join(", ");return c.a.createElement("div",{className:"recipe-details-container"},c.a.createElement("header",{className:"recipe-details-header"},c.a.createElement("div",{className:"recipe-details-image"},c.a.createElement("img",{src:n.image,alt:n.label})),c.a.createElement("div",{className:"recipe-details-header-content"},c.a.createElement("h2",{className:"recipe-details-title"},n.label),c.a.createElement("hr",null),c.a.createElement("div",{className:"recipes-details-rating"},"*****"),c.a.createElement("div",{className:"recipes-details-details"},c.a.createElement("ul",{className:"recipes-details-list"},c.a.createElement("li",{className:"recipe-detail-header-calories"},c.a.createElement("span",null,"calories: ",n.calories)),c.a.createElement("li",{className:"recipe-detail-header-healthlabels"},c.a.createElement("span",null,l," ")),c.a.createElement("li",{className:"recipe-detail-header-yield"},c.a.createElement("span",null,"yields: ",n.yield)))))),c.a.createElement("div",{className:"recipe-details-content"}),c.a.createElement("ul",null,r.map((function(e,a){return c.a.createElement("li",{key:a},e.text)}))))};function f(){var e=Object(u.a)(["\n    &:hover{\n        background: #723f5f;\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        opacity: 1;\n        color: #fff;\n        font-family: 'Dosis',sans-serif;\n        font-size: 22px;\n        line-height: 1;\n        height: 94px;\n        overflow: hidden;\n        text-align: center;\n        text-transform: lowercase;\n    }\n"]);return f=function(){return e},e}var h=p.a.div(f()),E=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(0),i=Object(m.a)(l,2),u=i[0],p=i[1],f=Object(n.useState)(""),E=Object(m.a)(f,2),b=E[0],v=E[1],N=Object(n.useState)([]),g=Object(m.a)(N,2),j=g[0],w=g[1],x=Object(n.useState)(""),O=Object(m.a)(x,2),y=O[0],k=O[1],S=Object(n.useState)("chicken"),I=Object(m.a)(S,2),B=I[0],C=I[1];Object(n.useEffect)((function(){D()}),[B]);var D=function(){var e=Object(o.a)(s.a.mark((function e(){var a,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(B,"&app_id=").concat("f7be027e","&app_key=").concat("38555891ce91633ed9569bbda9c382b4"));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,w(t.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(e){k(e.target.value)},R=function(e){e.preventDefault(),C(y),console.log("get search",y),k("")};return c.a.createElement("div",{className:"recipe-wrap"},c.a.createElement("div",{className:"content-sidebar-wrap flex-container"},t?c.a.createElement("div",null,c.a.createElement(d,{eachRecipe:b,recipeIndex:u})):c.a.createElement("div",null,c.a.createElement("form",{onSubmit:R,className:"search-form"},c.a.createElement("input",{className:"search-bar",value:y,type:"textbox",onChange:J}),c.a.createElement("button",{className:"search-button",type:"submit"},"Search")),c.a.createElement("div",{className:"main-content-wrap flex-container"},j.map((function(e,a){return c.a.createElement("main",{className:"main-content",key:a},c.a.createElement("article",{className:"entry-article"},c.a.createElement("button",{onClick:function(){return function(e,a){r(!0),p(a),v(e)}(e,a)}},c.a.createElement("img",{src:e.recipe.image,alt:""})),c.a.createElement(h,null,c.a.createElement("div",{className:"caption"},c.a.createElement("span",{className:"subtitle"},e.recipe.label)))))}))))))};var b=function(){return c.a.createElement("div",{className:"Home"},c.a.createElement("div",{className:"app-container"},c.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){}},[[15,1,2]]]);
//# sourceMappingURL=main.8df1be80.chunk.js.map