(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],u=0,m=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({"contact~login":"contact~login",contact:"contact",login:"login",notFound:"notFound",partners:"partners",team:"team"}[t]||t)+"."+{"contact~login":"795aa6f5",contact:"039a7191",login:"36195b2a",notFound:"9bf1be20",partners:"8040554b",team:"a2112668"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"contact~login":1,contact:1,notFound:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({"contact~login":"contact~login",contact:"contact",login:"login",notFound:"notFound",partners:"partners",team:"team"}[t]||t)+"."+{"contact~login":"4b07e030",contact:"a92e7f05",login:"31d6cfe0",notFound:"9deb4d24",partners:"31d6cfe0",team:"31d6cfe0"}[t]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){l=m[s],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],d.parentNode.removeChild(d),a(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var m=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",m.name="ChunkLoadError",m.type=n,m.request=r,a[1](m)}o[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var m=0;m<l.length;m++)e(l[m]);var d=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01f0":function(t,e,a){t.exports=a.p+"img/ABUAD-tour.0d318f1a.jpg"},"034f":function(t,e,a){"use strict";a("85ec")},"051f":function(t,e,a){t.exports=a.p+"img/s2.d0407df6.jpg"},"06af":function(t,e,a){t.exports=a.p+"img/cross-river-irrigation-site.5f72efc5.jpg"},"08f4":function(t,e,a){t.exports=a.p+"img/agbetuntun-logo2.0b7359e9.png"},"094f":function(t,e,a){t.exports=a.p+"img/iyalode-at-EKICCIMA.c4f26926.jpg"},"0b33":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",t._l(t.teams,(function(e){return n("v-col",{key:e.id,attrs:{cols:"12",sm:"6",md:"3"}},[n("v-card",{staticClass:"mx-auto"},[n("v-img",{attrs:{src:a("1771")("./"+e.img)}}),n("v-card-title",[t._v(" "+t._s(e.name)+" ")]),n("v-card-subtitle",[t._v(" "+t._s(e.position)+" ")]),n("v-card-actions",[n("v-btn",{attrs:{color:t.themeColor2,text:""}},[t._v(" Read more... ")]),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(t){e.show=!e.show}}},[n("v-icon",[t._v(t._s(e.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"team.show"}]},[n("v-divider"),n("v-card-text",[t._v(" "+t._s(e.description)+" ")])],1)])],1)],1)})),1)],1)},r=[],o=a("5530"),i=a("2f62"),s={name:"WorkTeam",data:function(){return{show:!1,teams:[{id:"44d9ece3-47ac-49c4-88c4-ea3c4810c3e5",name:"Chief Kola Akosile",position:"CEO & Founder",description:"Chief Kola Akosile is the CEO & Founder of Agbetuntun.",img:"t1.jpg",show:!1},{id:"49d986a6-e903-4212-8be2-40a97f95dad4",name:"Aina Babatunde",position:"Marketing Manager",description:"Aina Babatunde is the Marketing Manager at Agbetuntun.",img:"t2.jpg",show:!1},{id:"68714f0b-87b7-4893-a0f1-76b22067299a",name:"Oluwabusayo Opeyemi",position:"Public Relation",description:"Oluwabusayo Opeyemi is the Public Relation Personnel at Agbetuntun.",img:"t3.jpg",show:!1},{id:"da1d129a-9a29-487a-8521-d4ac6cf43b72",name:"Clifford Israel",position:"Farm Operations Manager",description:"Clifford Israel is the Farm Operations Manager at Agbetuntun.",img:"t4.jpg",show:!1}]}},computed:Object(o["a"])({},Object(i["c"])(["themeColor2"]))},c=s,l=a("2877"),u=a("6544"),m=a.n(u),d=a("8336"),p=a("b0af"),f=a("99d9"),g=a("62ad"),v=a("ce7e"),b=a("0789"),h=a("132d"),C=a("adda"),A=a("0fd9"),j=a("2fa4"),_=Object(l["a"])(c,n,r,!1,null,null,null);e["a"]=_.exports;m()(_,{VBtn:d["a"],VCard:p["a"],VCardActions:f["a"],VCardSubtitle:f["b"],VCardText:f["c"],VCardTitle:f["d"],VCol:g["a"],VDivider:v["a"],VExpandTransition:b["a"],VIcon:h["a"],VImg:C["a"],VRow:A["a"],VSpacer:j["a"]})},1399:function(t,e,a){t.exports=a.p+"img/kinplus.c6f5de08.png"},1718:function(t,e,a){t.exports=a.p+"img/ikogosi.b623ca19.jpg"},"176f":function(t,e,a){t.exports=a.p+"img/ikogosi-2.791dafe8.jpg"},1771:function(t,e,a){var n={"./ABUAD-tour.jpg":"01f0","./IITA-2017.jpg":"b7da","./IITA-garri-frying-unit.jpg":"fbd7","./NYE-Ekiti.jpg":"4fa6","./agbetuntun-logo.png":"aa44","./agbetuntun-logo2.png":"08f4","./agra-innovate-2017-2.jpg":"9310","./agra-innovate-2017-3.jpg":"95e3","./agra-innovate-2017.jpg":"5638","./at-ABUAD-chapel.jpg":"91c9","./award1.jpg":"e850","./award2.jpg":"8102","./cross-river-irrigation-site.jpg":"06af","./delegates-at-ABUAD-hall.jpg":"90c4","./efon-agro-input-one-stop-shop.jpg":"b8a2","./g1.jpg":"969a","./g2.jpg":"893a","./g3.jpg":"aa34","./g4.jpg":"59d6","./hydroponics.jpg":"a453","./ibadan-sensitization-2017.jpg":"c66f","./ikogosi-2.jpg":"176f","./ikogosi.jpg":"1718","./iyalode-at-EKICCIMA.jpg":"094f","./kinplus.png":"1399","./naccima-at-ABUAD.jpg":"2f42","./naccima-team-at-ABUAD.jpg":"5cbf","./notore-partnership-2.jpg":"7ce9","./notore-partnership.jpg":"cb60","./notore.jpg":"3a25","./offers.jpg":"d6b0","./oxfam-GALI.jpg":"dab3","./partners.jpg":"a6be","./s1.jpg":"b5a2","./s2.jpg":"051f","./s3.jpg":"6a55","./s4.jpg":"7652","./s5.jpg":"b1c0","./t1.jpg":"6043","./t2.jpg":"e6bc","./t3.jpg":"df06","./t4.jpg":"755b","./vision-banner.jpg":"fef8","./welcoming-naccima-president-to-Ekiti.jpg":"6f37"};function r(t){var e=o(t);return a(e)}function o(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=o,t.exports=r,r.id="1771"},"2f42":function(t,e,a){t.exports=a.p+"img/naccima-at-ABUAD.3fcc2a6d.jpg"},"3a25":function(t,e,a){t.exports=a.p+"img/notore.f13bcb7c.jpg"},4942:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-btn",{staticClass:"mr-2",attrs:{icon:"",value:"whatsapp",href:"tel:+2348033158123",title:"+2348033158123",target:"_blank"}},[a("v-icon",[t._v("mdi-cellphone-android")])],1),a("v-btn",{staticClass:"mr-2",attrs:{icon:"",value:"whatsapp",href:"mailto:info@agbetuntun.com",title:"info@agbetuntun.com",target:"_blank"}},[a("v-icon",[t._v("mdi-email-outline")])],1),a("v-btn",{staticClass:"mr-2",attrs:{icon:"",value:"whatsapp",href:"https://wa.me/+2348033158123",title:"wa.me/+2348033158123",target:"_blank"}},[a("v-icon",[t._v("mdi-whatsapp")])],1),a("v-btn",{staticClass:"mr-2",attrs:{icon:"",value:"facebook",href:"https://www.facebook.com/",title:"www.facebook.com/",target:"_blank"}},[a("v-icon",[t._v("mdi-facebook")])],1),a("v-btn",{attrs:{icon:"",value:"twitter",href:"https://twitter.com/",title:"twitter.com/",target:"_blank"}},[a("v-icon",[t._v("mdi-twitter")])],1)],1)},r=[],o={name:"SocialSite"},i=o,s=a("2877"),c=a("6544"),l=a.n(c),u=a("8336"),m=a("132d"),d=Object(s["a"])(i,n,r,!1,null,null,null);e["a"]=d.exports;l()(d,{VBtn:u["a"],VIcon:m["a"]})},"4fa6":function(t,e,a){t.exports=a.p+"img/NYE-Ekiti.f675c309.jpg"},5638:function(t,e,a){t.exports=a.p+"img/agra-innovate-2017.38a9e285.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app",[n("v-app-bar",{attrs:{app:"","clipped-right":"","max-height":"90px"}},[n("router-link",{staticClass:" mb-1",attrs:{to:{name:"home"}}},[n("v-img",{attrs:{contain:"",position:"left","max-width":t.logowidth,"max-height":t.logoheight,src:a("aa44")}})],1),n("v-spacer"),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.mobile,expression:"!mobile"}]},[n("v-btn",{attrs:{small:"",text:"",to:{name:"home"},color:t.themeColor2}},[n("v-icon",{attrs:{color:t.themeColor}},[t._v("mdi-home")]),t._v(" Home ")],1),n("v-btn",{attrs:{small:"",text:"",to:{name:"about"},color:t.themeColor2}},[n("v-icon",{attrs:{color:t.themeColor}},[t._v("mdi-clipboard-text")]),t._v(" About Us ")],1),n("v-btn",{attrs:{small:"",text:"",to:{name:"services"},color:t.themeColor2}},[n("v-icon",{attrs:{color:t.themeColor}},[t._v("mdi-view-list")]),t._v(" Services ")],1),n("v-btn",{attrs:{small:"",text:"",to:{name:"gallery"},color:t.themeColor2}},[n("v-icon",{attrs:{color:t.themeColor}},[t._v("mdi-image-album")]),t._v(" Gallery ")],1),n("v-btn",{attrs:{small:"",text:"",to:{name:"contact"},color:t.themeColor2}},[n("v-icon",{attrs:{color:t.themeColor}},[t._v("mdi-map-marker-radius")]),t._v(" Contact ")],1),n("v-menu",{attrs:{"open-on-hover":"","open-on-click":"","open-on-focus":"",bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{small:"",text:"",color:t.themeColor2}},"v-btn",r,!1),a),[n("v-icon",{attrs:{color:t.themeColor}},[t._v("mdi-link-variant")]),t._v(" Partners ")],1)]}}])},[n("v-list",t._l(t.links,(function(e){return n("v-list-item",{key:e.id},[n("v-btn",{attrs:{text:"",href:e.url,target:"_blank"}},[t._v(t._s(e.title))])],1)})),1)],1)],1),t.mobile?n("div",{staticClass:"d-flex justify-end pr-2"},[n("v-app-bar-nav-icon",{directives:[{name:"show",rawName:"v-show",value:!t.drawer,expression:"!drawer"}],on:{click:t.drawerTrueFalse}}),n("v-icon",{directives:[{name:"show",rawName:"v-show",value:t.drawer,expression:"drawer"}],attrs:{large:""},on:{click:t.hideDrawer}},[t._v("mdi-close")])],1):t._e()],1),n("v-main",[n("router-view")],1),n("v-navigation-drawer",{directives:[{name:"show",rawName:"v-show",value:t.mobile,expression:"mobile"}],attrs:{app:t.mobile,right:"",clipped:"",stateless:"",width:"160"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("nav-drawer",{attrs:{hideDrawer:t.hideDrawer,links:t.links}})],1),n("v-footer",{attrs:{outlined:""}},[n("div",{staticClass:"mx-auto py-6"},[n("div",{attrs:{title:"Agbetuntun Social Presence"}},[n("v-row",{attrs:{justify:"center"}},[n("social-site")],1)],1),n("div",[n("b",{staticClass:"theme-color2"},[t._v("Copyright © "+t._s((new Date).getFullYear())+" Agbe"),n("span",{staticClass:"theme-color"},[t._v("tuntun")]),t._v(". All rights reserved.")])])])])],1)],1)},o=[],i=(a("99af"),a("5530")),s=a("dde5"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-block"},[a("v-list",[a("v-list-item",{attrs:{title:"Agbetuntun"}},[a("v-btn",{attrs:{color:t.themeColor2,to:{name:"home"},small:"",text:""},on:{click:t.hideDrawer}},[a("v-icon",{attrs:{color:t.themeColor}},[t._v("mdi-home")]),t._v(" Home")],1)],1),a("v-list-item",{attrs:{title:"About Agbetuntun"}},[a("v-btn",{attrs:{color:t.themeColor2,to:{name:"about"},small:"",text:""},on:{click:t.hideDrawer}},[a("v-icon",{attrs:{color:t.themeColor}},[t._v("mdi-clipboard-text")]),t._v(" About Us")],1)],1),a("v-list-item",{attrs:{title:"Agbetuntun services"}},[a("v-btn",{attrs:{color:t.themeColor2,to:{name:"services"},small:"",text:""},on:{click:t.hideDrawer}},[a("v-icon",{attrs:{color:t.themeColor}},[t._v("mdi-view-list")]),t._v(" Services")],1)],1),a("v-list-item",{attrs:{title:"Agbetuntun gallery"}},[a("v-btn",{attrs:{color:t.themeColor2,to:{name:"gallery"},small:"",text:""},on:{click:t.hideDrawer}},[a("v-icon",{attrs:{color:t.themeColor}},[t._v("mdi-image-album")]),t._v(" Gallery")],1)],1),a("v-list-item",{attrs:{title:"Agbetuntun contacts"}},[a("v-btn",{attrs:{color:t.themeColor2,to:{name:"contact"},small:"",text:""},on:{click:t.hideDrawer}},[a("v-icon",{attrs:{color:t.themeColor}},[t._v("mdi-map-marker-radius")]),t._v(" Contact")],1)],1),a("v-list-item",{attrs:{title:"Agbetuntun partner links"}},[a("v-menu",{attrs:{"open-on-hover":"","open-on-click":"","open-on-focus":"",bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{small:"",text:"",color:t.themeColor2}},"v-btn",r,!1),n),[a("v-icon",{attrs:{color:t.themeColor}},[t._v("mdi-link-variant")]),t._v(" Partners ")],1)]}}])},[a("v-list",t._l(t.links,(function(e){return a("v-list-item",{key:e.id},[a("v-btn",{attrs:{text:"",href:e.url,target:"_blank"}},[t._v(t._s(e.title))])],1)})),1)],1)],1)],1)],1)},l=[],u=a("2f62"),m={name:"NavDrawer",data:function(){return{}},props:{hideDrawer:Function,links:Array},computed:Object(i["a"])({},Object(u["c"])(["themeColor","themeColor2"]))},d=m,p=a("2877"),f=a("6544"),g=a.n(f),v=a("8336"),b=a("132d"),h=a("8860"),C=a("da13"),A=a("e449"),j=Object(p["a"])(d,c,l,!1,null,null,null),_=j.exports;g()(j,{VBtn:v["a"],VIcon:b["a"],VList:h["a"],VListItem:C["a"],VMenu:A["a"]});var w=a("4942"),x={name:"App",data:function(){return{drawer:!1,uid:"",links:[{id:"f684258b-e804-40c3-ac17-366cc0bcb260",title:"CBN",url:"//cbn.gov.ng"},{id:"8690be96-e35d-4998-b58a-d8ccf8a936c0",title:"NIRSAL",url:"//nirsal.com"},{id:"79c325ec-896b-4e9f-8fc3-d42765b92171",title:"Fed. Min. of Agric. & Food Security",url:"//fmard.gov.ng"},{id:"17516ff3-066f-455e-b8b9-f52e55f28899",title:"BOI",url:"//boi.ng"},{id:"e23059f4-c530-4beb-a340-5ab862857ad5",title:"BOA",url:"//boanig.com"},{id:"40280e10-6ddb-4a0f-ae1c-e0cdceb1276e",title:"DFID",url:"//dfid.gov.uk"},{id:"9f4a238d-dfba-4049-baef-09c1d7cf410a",title:"USAID",url:"//usaid.gov"}],aboutus:[{id:"6416899f-935a-40af-b190-1fd7184e39e8",title:"The Company",url:"about"},{id:"a7216296-6699-404e-9f8d-ef07cffd08ce",title:"Our Team",url:"team"},{id:"3f5f05e6-26c3-4e94-abe8-0d1c7d83141f",title:"Our Partners",url:"partners"}],curTime:""}},components:{NavDrawer:_,SocialSite:w["a"]},computed:Object(i["a"])(Object(i["a"])({},Object(u["c"])(["themeColor","themeColor2","themeBg"])),{},{mobile:function(){return this.$vuetify.breakpoint.smAndDown},logowidth:function(){return this.mobile?"5rem":"6rem"},logoheight:function(){return this.mobile?"3rem":"4rem"}}),created:function(){this.timer()},watch:{mobile:function(t){t&&(this.drawer=!1)}},methods:{generateuuid:function(){this.uid=Object(s["b"])()},hideDrawer:function(){this.mobile&&(this.drawer=!1)},drawerTrueFalse:function(){this.drawer=!0},timer:function(){var t=new Date,e=t.getHours(),a=t.getMinutes(),n=t.getSeconds();this.curTime="".concat(e,":").concat(a,":").concat(n),setInterval(this.timer,1e3)}}},y=x,k=(a("034f"),a("7496")),I=a("40dc"),O=a("5bc1"),E=a("553a"),V=a("adda"),D=a("f6c4"),S=a("f774"),T=a("0fd9"),B=a("2fa4"),P=Object(p["a"])(y,r,o,!1,null,null,null),N=P.exports;g()(P,{VApp:k["a"],VAppBar:I["a"],VAppBarNavIcon:O["a"],VBtn:v["a"],VFooter:E["a"],VIcon:b["a"],VImg:V["a"],VList:h["a"],VListItem:C["a"],VMain:D["a"],VMenu:A["a"],VNavigationDrawer:S["a"],VRow:T["a"],VSpacer:B["a"]});a("45fc"),a("d3b7");var M=a("8c4f"),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("our-vision")],1),a("v-row",{staticClass:"my-6"},[a("v-col",{attrs:{cols:"12",sm:"6",md:"8"}},[a("slides-carousel")],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"theme-bg rounded"},[a("h1",{staticClass:"theme-color text-center",attrs:{title:"About Agbetuntun"}},[t._v(" About Us ")])]),a("div",{staticClass:"subtitle-1 pa-2"},[a("about-details-a"),t.expand?t._e():a("b",{staticClass:"theme-color2 read-more",attrs:{title:"Click to read more"},on:{click:function(e){t.expand=!t.expand}}},[t._v("Read more...")]),t.expand?a("b",{staticClass:"theme-color2 read-more",attrs:{title:"Click to minimize"},on:{click:function(e){t.expand=!t.expand}}},[a("v-icon",{attrs:{color:t.themeColor2}},[t._v("mdi-close")])],1):t._e()],1),a("v-expand-transition",[a("v-card",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],staticClass:"px-2 pt-1"},[a("about-details-b")],1)],1)],1)])],1),a("div",{staticClass:"py-5 mt-5 grey lighten-3"},[a("ServicesPage")],1)],1)},U=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("v-carousel",{attrs:{cycle:"",interval:"3000","max-height":"400","hide-delimiters":"","show-arrows":!1,light:""}},t._l(t.slides,(function(e){return n("v-carousel-item",{key:e.id},[e.alt?n("h4",{staticClass:"theme-color2 text-center"},[t._v(t._s(e.alt))]):t._e(),n("v-img",{attrs:{src:a("1771")("./"+e.src),alt:e.alt,contain:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-skeleton-loader",{staticClass:"mx-auto",attrs:{"max-width":"300",type:"card"}})]},proxy:!0}],null,!0)})],1)})),1)],1)],1)},K=[],L={name:"SlidesCarousel",data:function(){return{slides:[{id:"38ed4922-5a3f-400e-8797-1210e8b8ddc5",src:"s1.jpg",alt:""},{id:"07d31aa8-a932-4f9f-90b7-70e3952ae73e",src:"s2.jpg",alt:"Chief Kola Akosile Speaking during the launching of Agbetuntun at IITA"},{id:"ecf49bed-c932-44f1-abf7-5f46eeb676ec",src:"s3.jpg",alt:"Launching of Agbetuntun at IITA"},{id:"0093feab-fdc8-4c58-b2f8-03c3eae6b9fa",src:"s4.jpg",alt:"Youth Connect to Work Programn with Ekiti State Commissioner for Agriculture"},{id:"f8ab984b-4673-4cca-bc0e-94d02c1c0de3",src:"s5.jpg",alt:"Agbetuntun sustainable mechanized farming tool"},{id:"5babc187-5458-45d9-8308-86d1a20acf90",src:"offers.jpg",alt:"The Agbetuntun Model"},{id:"6cabea85-efb0-4a33-bf6e-b1851ca05e19",src:"partners.jpg",alt:"Strategic Partners/Stakeholders"}]}}},z=L,G=a("5e66"),R=a("3e35"),q=a("a523"),H=a("3129"),W=Object(p["a"])(z,$,K,!1,null,null,null),Y=W.exports;g()(W,{VCarousel:G["a"],VCarouselItem:R["a"],VContainer:q["a"],VImg:V["a"],VSkeletonLoader:H["a"]});var J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",[a("p",{staticClass:"text-justify"},[t._v(" Agbetuntun (New Farmer) as a socio-economic initiative is designed and conceptualized to be a private-sector cooperative franchise model that will position agribusiness as a new sustainable phenomenon. ")])])}],Q={name:"AboutDetailsA"},X=Q,tt=Object(p["a"])(X,J,Z,!1,null,null,null),et=tt.exports,at=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},nt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"text-justify"},[t._v(" By transiting the smallholder farmers from subsistence farming to commercial farming using an innovative integration of mobile technology, affordable financial services, quality inputs, hybrid seeds, professional agronomy services and secured market access. ")])])}],rt={name:"AboutDetailsB"},ot=rt,it=Object(p["a"])(ot,at,nt,!1,null,null,null),st=it.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"text-center pa-5",attrs:{img:a("fef8"),dark:""}},[n("h1",{attrs:{title:"Agbetuntun Vision"}},[t._v("Our Vision!")]),n("p",[t._v(" Agbetuntun is aimed to be a leader in the conception and implementation of agricultural projects, with a focus on the establishment of agricultural farms, farm management and operation, sales and marketing of agricultural products. ")])])},lt=[],ut={name:"OurVision",computed:Object(i["a"])({},Object(u["c"])(["themeColor"]))},mt=ut,dt=a("b0af"),pt=Object(p["a"])(mt,ct,lt,!1,null,null,null),ft=pt.exports;g()(pt,{VCard:dt["a"]});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"px-2 py-5 mt-5"},[a("h1",{staticClass:"text-center theme-color2",attrs:{title:"Agbetuntun Services"}},[t._v("Our Services")]),a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"6",md:"4"}},[a("v-avatar",{attrs:{size:"6rem"}},[a("v-icon",{attrs:{size:"5rem",color:t.themeColor}},[t._v("mdi-cash")])],1),a("h5",[t._v("Enumeration & Onboarding")]),a("p",{staticClass:"text-justify"},[t._v(" Agbetuntun Enumeration & Onboarding process is the process of collecting accurate price information from markets and same are transferred to an online process and intergrating our customer & getting them acquainted with new pricing of product and services and making our customer lives easier by baking in payment directly into our solution or Sign up for a merchant account enabling to process payment. ")])],1),a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"6",md:"4"}},[a("v-avatar",{attrs:{size:"6rem"}},[a("v-icon",{attrs:{size:"5rem",color:t.themeColor}},[t._v("mdi-camera-iris")])],1),a("h5",[t._v("Cooperative Management System")]),a("p",{staticClass:"text-justify"},[t._v(" Agbetuntun Cooperative management System tries to achieve more effective and equitable systems of resource management.In cooperative management,representatives of user groups,the scientific community and government agencies should share knowledge,power and responsibility. ")])],1),a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"6",md:"4"}},[a("v-avatar",{attrs:{size:"6rem"}},[a("v-icon",{attrs:{size:"5rem",color:t.themeColor}},[t._v("mdi-clock")])],1),a("h5",[t._v("Farm Management System")]),a("p",{staticClass:"text-justify"},[t._v(" Agbetuntun Farm Management System as a digital farming management, is the consistent use or application of the method of precision farming and smart farming, networking of the farm both internal and external. taking over of all aspects of farming. Giving farmer access to timely valuable insight so that they can adopt best pratices and mange farm more effeciently ")])],1),a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"6",md:"4"}},[a("v-avatar",{attrs:{size:"6rem"}},[a("v-icon",{attrs:{size:"5rem",color:t.themeColor}},[t._v("mdi-checkbox-multiple-marked-outline")])],1),a("h5",[t._v("Project Management")]),a("p",{staticClass:"text-justify"},[t._v(" Agbetuntun Project Management is one of the core services offered to bring to limelight the efficiency of digital farming management in application of the method of precision farming and smart farming, networking of the farm both internal and external. taking over of all aspects of farming. Giving farmer access to timely valuable insight so that they can adopt best pratices and mange farm more effeciently ")])],1),a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"6",md:"4"}},[a("v-avatar",{attrs:{size:"6rem"}},[a("v-icon",{attrs:{size:"5rem",color:t.themeColor}},[t._v("mdi-account-multiple")])],1),a("h5",[t._v("Advisory Services")]),a("p",{staticClass:"text-justify"},[t._v(" Agbetuntun offers advisory services to partners to promote adequate and efficient digital farming management to enhance the consistent use or application of the method of precision farming and smart farming, networking of the farm both internal and external. taking over of all aspects of farming. Giving farmer access to timely valuable insight so that they can adopt best pratices and mange farm more effeciently ")])],1)],1)],1)},vt=[],bt={name:"ServicesPage",computed:Object(i["a"])({},Object(u["c"])(["themeColor"]))},ht=bt,Ct=a("8212"),At=a("62ad"),jt=Object(p["a"])(ht,gt,vt,!1,null,null,null),_t=jt.exports;g()(jt,{VAvatar:Ct["a"],VCol:At["a"],VIcon:b["a"],VRow:T["a"]});var wt={name:"Home",data:function(){return{expand:!1}},computed:Object(i["a"])({},Object(u["c"])(["themeColor2"])),components:{SlidesCarousel:Y,AboutDetailsA:et,AboutDetailsB:st,OurVision:ft,ServicesPage:_t}},xt=wt,yt=(a("cccb"),a("0789")),kt=Object(p["a"])(xt,F,U,!1,null,null,null),It=kt.exports;g()(kt,{VCard:dt["a"],VCol:At["a"],VExpandTransition:yt["a"],VIcon:b["a"],VRow:T["a"]});var Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pa-2"},[n("div",[t._m(0),n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"4",lg:"5"}},[n("v-img",{attrs:{contain:"",src:a("d6b0")}})],1),n("v-col",{attrs:{cols:"12",sm:"8",lg:"7"}},[n("span",{staticClass:"subtitle-1"},[n("about-details-a",{staticClass:"theme-color"}),n("about-details-b",{staticClass:"theme-color"})],1)])],1)],1),n("div",[t._m(1),n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"4",lg:"5"}},[n("v-img",{attrs:{contain:"",src:a("a6be")}})],1),n("v-col",{attrs:{cols:"12",sm:"8",lg:"7"}},[n("span",{staticClass:"subtitle-1"},[n("about-details-c",{staticClass:"theme-color"})],1)])],1)],1),n("div",{staticClass:"mt-5 pa-3 grey lighten-4"},[t._m(2),n("work-team")],1)])},Et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"theme-color2 text-center"},[t._v("About Agbe"),a("span",{staticClass:"theme-color"},[t._v("tuntun")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"theme-color2 text-center"},[t._v("Agbe"),a("span",{staticClass:"theme-color"},[t._v("tuntun")]),t._v(" Partners")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"theme-color2 text-center my-3",attrs:{title:"Agbetuntun Work Team"}},[t._v("Agbe"),a("span",{staticClass:"theme-color"},[t._v("tuntun")]),t._v(" Work Team")])}],Vt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Dt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"text-justify"},[t._v(" Agbetuntun is a skillful and unique amalgamation of the various segments of the existing Agribusiness scheme of international Development partners such as DFID, USAID, GIZ and FGN Intervention schemes viz- BOI-GEEP, NIRSAL's Commercial Grain production financing and Guarantee scheme, CBN Anchor Borrowers programme with linkages with Agro subsidy-GESS ")])])}],St={name:"AboutDetailsC"},Tt=St,Bt=Object(p["a"])(Tt,Vt,Dt,!1,null,null,null),Pt=Bt.exports,Nt=a("0b33"),Mt={name:"About",components:{AboutDetailsA:et,AboutDetailsB:st,AboutDetailsC:Pt,WorkTeam:Nt["a"]}},Ft=Mt,Ut=Object(p["a"])(Ft,Ot,Et,!1,null,null,null),$t=Ut.exports;g()(Ut,{VCol:At["a"],VImg:V["a"],VRow:T["a"]});var Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("services-page")],1)},Lt=[],zt={name:"Services",components:{ServicesPage:_t}},Gt=zt,Rt=Object(p["a"])(Gt,Kt,Lt,!1,null,null,null),qt=Rt.exports,Ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("gallery-page")],1)},Wt=[],Yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("v-carousel",{attrs:{cycle:"",interval:"4000","hide-delimiters":""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.slides,(function(e){return n("v-carousel-item",{key:e.id},[e.alt?n("h4",{staticClass:"theme-color2 text-center"},[t._v(t._s(e.alt))]):t._e(),n("v-img",{attrs:{src:a("1771")("./"+e.src),alt:e.alt,contain:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:t.themeColor2}})],1)]},proxy:!0}],null,!0)})],1)})),1),n("v-row",{attrs:{justify:"center",align:"center"}},t._l(t.slides,(function(e,r){return n("v-col",{key:e.id,attrs:{cols:"auto"},on:{click:function(e){t.model=r}}},[n("v-img",{attrs:{src:a("1771")("./"+e.src),alt:e.alt,width:"100",height:"100"}})],1)})),1)],1)],1)},Jt=[],Zt={name:"GalleryPage",data:function(){return{model:0,slides:[{id:"ead519da-3405-4be1-a84a-14bd40ccb827",src:"s1.jpg",alt:""},{id:"ecf49bed-c932-44f1-abf7-5f46eeb676ec",src:"g1.jpg",alt:"Launching of Agbetuntun at IITA"},{id:"0093feab-fdc8-4c58-b2f8-03c3eae6b9fa",src:"g2.jpg",alt:"Youth Connect to Work Programn with Ekiti State Commissioner for Agriculture"},{id:"8ebcc431-e0a7-4753-b718-05a5d3e17a23",src:"g3.jpg",alt:"Chief Kola Akosile Speaking during the launching of Agbetuntun at IITA"},{id:"e4dd92cb-caec-474e-9e09-445d2db5b468",src:"g4.jpg",alt:"The RDA Book launch"},{id:"020726f9-a3b5-4425-9f36-e9b2d462ea1c",src:"award1.jpg",alt:"Awards given to agbetuntun"},{id:"ca9e59a6-19e6-490c-8707-3ef771caf418",src:"award2.jpg",alt:"Agbetuntun receiving award with partners"},{id:"dce3a79e-8e33-4328-bfa1-1da341de5551",src:"cross-river-irrigation-site.jpg",alt:"Cross River Irrigation Stite."},{id:"a5f5864a-c1f9-4620-b667-8e45bc63a5eb",src:"efon-agro-input-one-stop-shop.jpg",alt:"Efon Agro Input One Stop Shop."},{id:"0c013c78-3f3b-4033-8a64-53d0f7bf54c3",src:"hydroponics.jpg",alt:"Hydroponics."},{id:"13ec4e5d-fa09-47f7-9799-fccd9b1d10e5",src:"IITA-2017.jpg",alt:"Agbetuntun Chairman, Chief Kola Akosile and Team at IITA 2017."},{id:"8aecaccc-ca38-401c-a93d-e830d8709ba0",src:"IITA-garri-frying-unit.jpg",alt:"Agbetuntun Chairman, Chief Kola Akosile and Team at IITA Garri Frying Unit."},{id:"2ba537c3-ba5b-4015-8110-bc1d509f7e0e",src:"agra-innovate-2017.jpg",alt:"Agbetuntun Chairman, Chief Kola Akosile and Team at Agra Innovate 2017."},{id:"a265c762-860e-405a-85dc-b64c2b8eccbd",src:"agra-innovate-2017-2.jpg",alt:"Agbetuntun Chairman, Chief Kola Akosile and Team at Agra Innovate Processing Display 2017."},{id:"292f3712-313e-446e-bea3-eb10aee0367b",src:"agra-innovate-2017-3.jpg",alt:"Agbetuntun Chairman, Chief Kola Akosile and Team at Agra Innovate Display Fair 2017."},{id:"db2b9a2f-cfe6-4370-9c36-7028b325c6ed",src:"oxfam-GALI.jpg",alt:"Oxfam-GALI Incubators and Accelerators Meeting, Lagos."},{id:"0cbf9a30-3dfa-4eff-8ee7-4492cd23404c",src:"notore.jpg",alt:"Agbetuntun with NOTORE Partnership."},{id:"9294db77-fbf0-4a50-8231-a04511604280",src:"notore-partnership.jpg",alt:"Agbetuntun with NOTORE Partnership Sensitization."},{id:"b2ee17d0-c023-473e-bad8-33c3a533c5f8",src:"notore-partnership-2.jpg",alt:"Agbetuntun with NOTORE Partnership Forum."},{id:"4462a6ac-f868-45a8-8dc5-3549dc80f1de",src:"NYE-Ekiti.jpg",alt:"NYE Ekiti."},{id:"37ee19d8-73c5-45bc-8d5b-a01ed2a0c631",src:"welcoming-naccima-president-to-Ekiti.jpg",alt:"Welcoming NACCIMA President to Ekiti."},{id:"fe683025-0c97-4e47-810b-bb4b216894e6",src:"ABUAD-tour.jpg",alt:"Agbetuntun Chairman, Chief Kola Akosile with NACCIMA President touring ABUAD."},{id:"b8552872-e024-47d4-9a53-877849882634",src:"naccima-at-ABUAD.jpg",alt:"Agbetuntun Chairman, Chief Kola Akosile with NACCIMA delegates touring ABUAD."},{id:"1b17a639-c1fa-4f9a-a5ab-b3f578ee2a9e",src:"naccima-team-at-ABUAD.jpg",alt:"Agbetuntun Chairman, Chief Kola Akosile with NACCIMA Team at ABUAD."},{id:"f3c24272-d0c2-4b59-9672-77124a947f90",src:"at-ABUAD-chapel.jpg",alt:"Agbetuntun Chairman, Chief Kola Akosile with NACCIMA Team at ABUAD Chapel."},{id:"b8c8451a-891b-4c72-b934-e1001affca32",src:"delegates-at-ABUAD-hall.jpg",alt:"Agbetuntun Chairman, Chief Kola Akosile with Delegates at ABUAD Hall."},{id:"98d4ee8a-e346-49dc-a827-13167d2a1b7e",src:"iyalode-at-EKICCIMA.jpg",alt:"Agbetuntun Chairman, Chief Kola Akosile with Iyalode at EKICCIMA."},{id:"83b03233-2853-405e-aee6-0f7ac9a770e9",src:"agra-innovate-2017-2.jpg",alt:"Agbetuntun Chairman, Chief Kola Akosile and Team at Agra Innovate Processing Display 2017."},{id:"82b6e67e-d476-4f3c-9d89-d96564154d3c",src:"ibadan-sensitization-2017.jpg",alt:"Agbetuntun Chairman, Chief Kola Akosile and Team at Ibadan Sensitization 2017."},{id:"dcdf2393-a5b0-4f98-92c5-c9e28745b87f",src:"ikogosi.jpg",alt:"Ikogosi warm spring resort."},{id:"fc76949a-8891-4f4e-8a91-9fc06e392adf",src:"ikogosi-2.jpg",alt:"Ikogosi redevelopment and build contract."}]}},computed:Object(u["c"])(["themeColor2"])},Qt=Zt,Xt=a("490a"),te=Object(p["a"])(Qt,Yt,Jt,!1,null,null,null),ee=te.exports;g()(te,{VCarousel:G["a"],VCarouselItem:R["a"],VCol:At["a"],VContainer:q["a"],VImg:V["a"],VProgressCircular:Xt["a"],VRow:T["a"]});var ae={components:{GalleryPage:ee}},ne=ae,re=Object(p["a"])(ne,Ht,Wt,!1,null,null,null),oe=re.exports,ie=a("793c");n["a"].use(M["a"]);var se=[{path:"/home",alias:"/",name:"home",component:It},{path:"/about-us",name:"about",component:$t},{path:"/services",name:"services",component:qt},{path:"/gallery",name:"gallery",component:oe},{path:"/team",name:"team",component:function(){return a.e("team").then(a.bind(null,"0767"))}},{path:"/partners",name:"partners",component:function(){return a.e("partners").then(a.bind(null,"1a8c"))}},{path:"/contact-us",name:"contact",component:function(){return Promise.all([a.e("contact~login"),a.e("contact")]).then(a.bind(null,"b8fa"))}},{path:"/login",name:"login",component:function(){return Promise.all([a.e("contact~login"),a.e("login")]).then(a.bind(null,"a55b"))}},{path:"/404",alias:"*",name:"notFound",component:function(){return a.e("notFound").then(a.bind(null,"9703"))}}],ce=new M["a"]({mode:"history",base:"/",routes:se});ce.beforeEach((function(t,e,a){t.matched.some((function(t){return t.meta.requiresAuth}))?ie["a"].login?a():a({name:"login",query:{redirect:t.fullPath}}):a()}));var le=ce;n["a"].use(u["a"]);var ue=new u["a"].Store({state:{themeColor:"#532e04",themeColor2:"#429640",themeBg:"#c2f5c4"},mutations:{},actions:{},getters:{},modules:{}}),me=a("f309");n["a"].use(me["a"]);var de=new me["a"]({theme:{}});n["a"].config.productionTip=!1,new n["a"]({router:le,store:ue,vuetify:de,render:function(t){return t(N)}}).$mount("#app")},"59d6":function(t,e,a){t.exports=a.p+"img/g4.cc961639.jpg"},"5cbf":function(t,e,a){t.exports=a.p+"img/naccima-team-at-ABUAD.6f2aed9f.jpg"},"5ced":function(t,e,a){},6043:function(t,e,a){t.exports=a.p+"img/t1.7a157861.jpg"},"6a55":function(t,e,a){t.exports=a.p+"img/s3.a0481db6.jpg"},"6f37":function(t,e,a){t.exports=a.p+"img/welcoming-naccima-president-to-Ekiti.b825ea35.jpg"},"755b":function(t,e,a){t.exports=a.p+"img/t4.f00b323c.jpg"},7652:function(t,e,a){t.exports=a.p+"img/s4.33602f96.jpg"},"793c":function(t,e,a){"use strict";e["a"]={login:null}},"7ce9":function(t,e,a){t.exports=a.p+"img/notore-partnership-2.ffe4fec1.jpg"},8102:function(t,e,a){t.exports=a.p+"img/award2.e7478957.jpg"},"85ec":function(t,e,a){},"893a":function(t,e,a){t.exports=a.p+"img/g2.e4223b11.jpg"},"90c4":function(t,e,a){t.exports=a.p+"img/delegates-at-ABUAD-hall.e3108108.jpg"},"91c9":function(t,e,a){t.exports=a.p+"img/at-ABUAD-chapel.7a9685c1.jpg"},9310:function(t,e,a){t.exports=a.p+"img/agra-innovate-2017-2.67ae2d4a.jpg"},"95e3":function(t,e,a){t.exports=a.p+"img/agra-innovate-2017-3.4365095d.jpg"},"969a":function(t,e,a){t.exports=a.p+"img/g1.2f21805f.jpg"},a453:function(t,e,a){t.exports=a.p+"img/hydroponics.f047166d.jpg"},a6be:function(t,e,a){t.exports=a.p+"img/partners.0c63f108.jpg"},aa34:function(t,e,a){t.exports=a.p+"img/g3.b3af5d21.jpg"},aa44:function(t,e,a){t.exports=a.p+"img/agbetuntun-logo.52d118b6.png"},b1c0:function(t,e,a){t.exports=a.p+"img/s5.5749dde0.jpg"},b5a2:function(t,e,a){t.exports=a.p+"img/s1.2f4ec953.jpg"},b7da:function(t,e,a){t.exports=a.p+"img/IITA-2017.b4ec8793.jpg"},b8a2:function(t,e,a){t.exports=a.p+"img/efon-agro-input-one-stop-shop.a9c2141c.jpg"},c66f:function(t,e,a){t.exports=a.p+"img/ibadan-sensitization-2017.0bc452f0.jpg"},cb60:function(t,e,a){t.exports=a.p+"img/notore-partnership.0c2bf09d.jpg"},cccb:function(t,e,a){"use strict";a("5ced")},d6b0:function(t,e,a){t.exports=a.p+"img/offers.c8f81ec3.jpg"},dab3:function(t,e,a){t.exports=a.p+"img/oxfam-GALI.795712ac.jpg"},dde5:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s}));var n=a("bc3a"),r=a.n(n),o=a("11c1"),i=r.a.create({baseURL:"/api"}),s=o["v4"]},df06:function(t,e,a){t.exports=a.p+"img/t3.1c5db609.jpg"},e6bc:function(t,e,a){t.exports=a.p+"img/t2.4596e892.jpg"},e850:function(t,e,a){t.exports=a.p+"img/award1.3566bca9.jpg"},fbd7:function(t,e,a){t.exports=a.p+"img/IITA-garri-frying-unit.121e69f5.jpg"},fef8:function(t,e,a){t.exports=a.p+"img/vision-banner.ee12dbe0.jpg"}});
//# sourceMappingURL=app.aa734ec7.js.map