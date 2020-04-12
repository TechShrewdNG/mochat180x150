(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var d,e="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},h;if("function"==typeof Object.setPrototypeOf)h=Object.setPrototypeOf;else{var k;a:{var n={j:!0},p={};try{p.__proto__=n;k=p.j;break a}catch(a){}k=!1}h=k?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var q=h,r=function(a){a=["object"==typeof globalThis&&globalThis,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");},u=r(this);var v=/^\d*\.?\d+\s\d*\.?\d+$/,w=function(a){var b=!1,c=a.getAttribute("focalpoint"),g=a.getAttribute("scaling");"cover"!==g&&"none"!==g||a.hasAttribute("disablefocalpoint")||!c||!v.test(c)||(b=!0);return b};var x=function(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")},y=function(a){if(x(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&x(a))return a;return null};var z=function(a){var b=!1,c=null;return function(){b=!0;c||(b&&(a(),b=!1),c=window.setTimeout(function(){c=null;b&&(a(),b=!1)},250))}};var A=["alignment","alt","focalpoint","scaling","source"],B=function(){var a=HTMLElement.call(this)||this;a.a=document.createElement("img");a.g=a.l.bind(a);a.i=z(a.m.bind(a));a.b=0;a.c=-1;a.f=-1;a.h=!1;a.a.addEventListener("load",a.g,!1);a.a.addEventListener("error",a.g,!1);return a},C=HTMLElement;B.prototype=e(C.prototype);B.prototype.constructor=B;
if(q)q(B,C);else for(var D in C)if("prototype"!=D)if(Object.defineProperties){var E=Object.getOwnPropertyDescriptor(C,D);E&&Object.defineProperty(B,D,E)}else B[D]=C[D];d=B.prototype;
d.connectedCallback=function(){if(!this.h){for(;this.firstChild;)this.removeChild(this.firstChild);var a=this.getAttribute("src");a&&(this.setAttribute("source",a),this.removeAttribute("src"));a=this.ownerDocument.createElement("div");a.classList.add("intermediate-element");a.appendChild(this.a);this.appendChild(a);this.h=!0}this.gwdIsLoaded()||((a=y(this))?a.gwdIsLoaded()&&this.gwdLoad():this.gwdLoad());w(this)&&window.addEventListener("resize",this.i,!1)};
d.disconnectedCallback=function(){window.removeEventListener("resize",this.i,!1)};d.attributeChangedCallback=function(a){if("source"==a)0!==this.b&&this.gwdLoad();else if("scaling"==a)F(this);else if("alignment"==a)G(this);else if("focalpoint"==a)H(this);else if("alt"==a){var b=this.a;if(this.hasAttribute(a)){var c=this.getAttribute(a);b.setAttribute(a,c)}else b.removeAttribute(a)}};
d.l=function(a){if(2!=this.b){a&&"error"==a.type?(this.b=3,this.c=this.f=-1,this.a.style.backgroundImage=""):(-1!=this.f&&-1!=this.c||!this.getAttribute("source")||(this.f=this.naturalWidth,this.c=this.naturalHeight),this.b=2);F(this);w(this)?H(this):G(this);var b=void 0===b?null:b;a=document.createEvent("CustomEvent");a.initCustomEvent("ready",!0,!0,b);this.dispatchEvent(a)}};d.m=function(){w(this)&&H(this)};
d.gwdLoad=function(){this.b=1;this.c=this.f=-1;var a=this.getAttribute("source")||"data:image/gif;base64,R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";this.a.setAttribute("src",a)};d.gwdIsLoaded=function(){return 2==this.b||3==this.b};
var F=function(a){if(2==a.b){var b=a.getAttribute("source"),c=a.getAttribute("scaling")||"stretch";"stretch"==c?(a.classList.remove("scaled-proportionally"),a.a.style.backgroundImage="",a=a.a,b=b||"data:image/gif;base64,R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",b!=a.getAttribute("src")&&a.setAttribute("src",b)):(a.classList.add("scaled-proportionally"),a.a.style.backgroundImage=b?"url("+JSON.stringify(b)+")":"",a.a.style.backgroundSize="none"!=c?c:"auto",b=a.a,"data:image/gif;base64,R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="!=
b.getAttribute("src")&&b.setAttribute("src","data:image/gif;base64,R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="))}},G=function(a){var b=a.getAttribute("alignment")||"center";a.a.style.backgroundPosition=b},H=function(a){var b=a.width,c=a.height,g=a.f,t=a.c,l=1;"cover"==a.getAttribute("scaling")&&(l=c/b>t/g?c/t:b/g);var f=a.getAttribute("focalpoint").split(" "),m=parseFloat(f[0])*l-b/2;f=parseFloat(f[1])*l-c/2;m=0<m?Math.min(m,g*l-b):0;f=0<f?Math.min(f,t*l-c):0;a.a.style.backgroundPositionX=
-m+"px";a.a.style.backgroundPositionY=-f+"px"};
u.Object.defineProperties(B.prototype,{nativeElement:{configurable:!0,enumerable:!0,get:function(){return this.a}},assetHeight:{configurable:!0,enumerable:!0,get:function(){return this.c}},assetWidth:{configurable:!0,enumerable:!0,get:function(){return this.f}},naturalHeight:{configurable:!0,enumerable:!0,get:function(){return this.a.naturalHeight}},naturalWidth:{configurable:!0,enumerable:!0,get:function(){return this.a.naturalWidth}},height:{configurable:!0,enumerable:!0,get:function(){return this.a.height},
set:function(a){this.a.height=a}},width:{configurable:!0,enumerable:!0,get:function(){return this.a.width},set:function(a){this.a.width=a}},alt:{configurable:!0,enumerable:!0,get:function(){return this.a.alt},set:function(a){this.a.alt=a}},src:{configurable:!0,enumerable:!0,get:function(){return this.a.src}}});u.Object.defineProperties(B,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return A}}});customElements.define("gwd-image",B);}).call(this);
