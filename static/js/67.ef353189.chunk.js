(this["webpackJsonp@jbrowse/web"]=this["webpackJsonp@jbrowse/web"]||[]).push([[67],{2448:function(e,n,a){"use strict";a.r(n);var t=a(1),r=a.n(t),l=a(85),i=a(88),c=a(84),o=a(51),u=a(2415),m=a(2364),s=Object(o.a)((function(e){return{root:{margin:e.spacing(2),paddingTop:e.spacing(2)},subtitle:{margin:e.spacing()},pluginList:{margin:e.spacing(1),marginTop:e.spacing(5)}}}));n.default=Object(l.observer)((function(e){var n=e.model,a=s(),t=Object(c.getSession)(n).version,l=Object(i.getEnv)(n).pluginManager,o=l.plugins,g=o.filter((function(e){var n;return null===(n=l.pluginMetadata[e.name])||void 0===n?void 0:n.isCore})).map((function(e){return e.name})),p=o.filter((function(e){return g.includes(e.name)})).map((function(e){return r.a.createElement("li",{key:e.name},e.name," ",e.version||"")})),E=o.filter((function(e){return!g.includes(e.name)})).map((function(e){var n="".concat(e.name," ").concat(e.version||"");return r.a.createElement("li",{key:e.name},e.url?r.a.createElement(u.a,{target:"_blank",rel:"noopener noreferrer",href:e.url},n):n)}));return r.a.createElement("div",{className:a.root},r.a.createElement(m.a,{variant:"h4",align:"center",color:"primary"},"JBrowse 2"),r.a.createElement(m.a,{variant:"h6",align:"center",className:a.subtitle},t),r.a.createElement(m.a,{align:"center",variant:"body2"},"JBrowse is a"," ",r.a.createElement(u.a,{href:"http://gmod.org/",target:"_blank",rel:"noopener noreferrer"},"GMOD")," ","project"),r.a.createElement("br",null),r.a.createElement(m.a,{align:"center"},"\xa9 2019-2021 The Evolutionary Software Foundation"),r.a.createElement("div",{className:a.pluginList},E.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{variant:"h6"},"External plugins loaded"),r.a.createElement("ul",null,E)):null,p.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{variant:"h6"},"Core plugins loaded"),r.a.createElement("ul",null,p)):null))}))}}]);
//# sourceMappingURL=67.ef353189.chunk.js.map