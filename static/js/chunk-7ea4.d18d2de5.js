(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7ea4"],{"+U2/":function(t,e,n){"use strict";var r=n("OPet");n.n(r).a},"+iuc":function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),t.exports=n("WEpk").Set},"/h46":function(t,e,n){n("cHUd")("Map")},"8iia":function(t,e,n){var r=n("QMMT"),i=n("RRc/");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},B9jh:function(t,e,n){"use strict";var r=n("Wu5q"),i=n("n3ko");t.exports=n("raTm")("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(i(this,"Set"),t=0===t?0:t,t)}},r)},Bjde:function(t,e,n){"use strict";n.r(e);var r=n("P2sY"),i=n.n(r),o=n("ODRq"),a=n.n(o),s=n("jWXv"),l=n.n(s),u=n("t3Un");var c={data:function(){return{tableData:[],columns:[],attributes:[],attributeSets:[],aa:7,attributeForm:{attributeSet:""},activeName:"first",set:{columns:new l.a,mmp:new a.a,root:[{select:"",values:[]}]}}},mounted:function(){this.getAttributeSetList()},methods:{delAttr:function(t){this.set.root.splice(t,1)},handleAttrChange:function(t,e,n,r){var o=this;this.set.root.forEach(function(t){console.log("map",t.select);var e=t.select;0!==t.values.length&&(o.set.columns.has(e)||(o.columns.push({key:o.attributeSets[e].id,prop:o.attributeSets[e].name,label:o.attributeSets[e].name}),o.set.columns.add(e)))});var a=[];!function t(e,n){if(e>0)for(var r=0;r<o.set.root[e-1].values.length;r++)console.log("内部",o.set.root,n,e-1,r),n[o.attributeSets[o.set.root[e-1].select].name]=o.set.root[e-1].values[r].value,t(e-1,n);else a.push(n)}(this.set.root.length,{price:0,stock:0}),this.tableData=i()(a,{})},handleAddAttrVal:function(t){this.set.root[t].values.push({value:""})},handleAddAttr:function(){this.set.root.push({values:[]})},delAttrVal:function(t,e){this.set.root[t].values.splice(e,1)},handleAttributeSetChange:function(t){var e=this;console.log(t),this.getAttributeList(t).then(function(t){t.map(function(t){e.attributeForm[t.key]=""})})},getAttributeSetList:function(){var t=this;Object(u.a)({url:"/ccb-shop/admin/api/products/attribute-sets",method:"get"}).then(function(e){t.attributeSets=e.data})},getAttributeList:function(t){var e=this;return function(t){return Object(u.a)({url:"/ccb-shop/admin/api/products/attributes/attribute-sets/"+t,method:"get"})}(t).then(function(t){return e.attributes=t.data,t.data})}}},f=(n("+U2/"),n("KHd+")),p=Object(f.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-row",[n("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"标准属性",name:"second"}},[n("el-alert",{attrs:{closable:!1,title:"所有商品都拥有的属性，又叫spu属性",type:"warning"}}),t._v(" "),n("el-form",{attrs:{"label-width":"120px"}},[n("el-form-item",{attrs:{label:"名称"}},[n("el-input")],1),t._v(" "),n("el-form-item",{attrs:{label:"分类(使用级联选择器)"}},[n("el-input")],1),t._v(" "),n("el-form-item",{attrs:{label:"品牌"}},[n("el-input")],1),t._v(" "),n("el-form-item",{attrs:{label:"手机端描述"}},[n("el-input")],1),t._v(" "),n("el-form-item",{attrs:{label:"pc端描述"}},[n("el-input")],1),t._v(" "),n("el-form-item",{attrs:{label:"排序"}},[n("el-input")],1),t._v(" "),n("el-form-item",{attrs:{label:"关键字"}},[n("el-input")],1),t._v(" "),n("el-form-item",{attrs:{label:"状态"}},[n("el-input")],1)],1)],1),t._v(" "),n("el-tab-pane",{attrs:{label:"库存属性",name:"first"}},[n("el-alert",{attrs:{closable:!1,title:"与库存有关的属性，又叫sku属性",type:"warning"}}),t._v(" "),n("el-form",{attrs:{"label-width":"120px"}},[n("el-card",{attrs:{shadow:"never"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("属性集")]),t._v(" "),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:t.handleAddAttr}},[t._v("添加")])],1),t._v(" "),t._l(t.set.root,function(e,r){return n("el-form-item",{key:r,attrs:{label:"属性"}},[n("el-select",{staticStyle:{width:"80%"},attrs:{placeholder:"请选择"},model:{value:e.select,callback:function(n){t.$set(e,"select",n)},expression:"value.select"}},t._l(t.attributeSets,function(t,e){return n("el-option",{key:t.id,attrs:{label:t.name,value:e}})})),t._v(" "),n("i",{staticClass:"el-icon-delete",staticStyle:{cursor:"pointer"},on:{click:function(e){t.delAttr(r)}}}),t._v(" "),n("el-form-item",{staticStyle:{width:"100%"}},[n("el-row",{attrs:{gutter:16}},[t._l(e.values,function(i,o){return n("el-col",{key:o,attrs:{span:4}},[n("el-input",{attrs:{size:"small"},on:{input:function(n){t.handleAttrChange(e.select,i.value,r,o)}},model:{value:i.value,callback:function(e){t.$set(i,"value",e)},expression:"val2.value"}},[n("template",{slot:"append"},[n("i",{staticClass:"el-icon-delete",staticStyle:{cursor:"pointer"},on:{click:function(e){t.delAttrVal(r,o)}}})])],2)],1)}),t._v(" "),n("el-col",{attrs:{span:4}},[n("el-button",{attrs:{size:"small",type:"text"},on:{click:function(e){t.handleAddAttrVal(r)}}},[t._v("添加属性值")])],1)],2)],1)],1)})],2),t._v(" "),n("el-col",[t._v(" ")]),t._v(" "),t.tableData.length>0?n("el-card",{attrs:{shadow:"never"}},[n("el-table",{attrs:{data:t.tableData,"empty-text":"没有数据"}},[t._l(t.columns,function(t){return n("el-table-column",{key:t.key,attrs:{prop:t.prop,label:t.label,width:"180"}})}),t._v(" "),n("el-table-column",{attrs:{prop:"price",label:"价格"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{model:{value:e.price,callback:function(n){t.$set(e,"price",n)},expression:"scope.price"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"stock",label:"库存"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{model:{value:e.stock,callback:function(n){t.$set(e,"stock",n)},expression:"scope.stock"}})]}}])})],2)],1):t._e()],1)],1),t._v(" "),n("el-tab-pane",{attrs:{label:"特殊属性",name:"third"}},[n("el-alert",{attrs:{closable:!1,title:"也是商品标准属性，只是不同的商品不一样",type:"warning"}})],1)],1)],1)],1)},[],!1,null,"627a04c8",null);p.options.__file="product-create.vue";e.default=p.exports},C2SN:function(t,e,n){var r=n("93I4"),i=n("kAMH"),o=n("UWiX")("species");t.exports=function(t){var e;return i(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},ODRq:function(t,e,n){t.exports={default:n("UDep"),__esModule:!0}},OPet:function(t,e,n){},"RRc/":function(t,e,n){var r=n("oioR");t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},UDep:function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),t.exports=n("WEpk").Map},"V+O7":function(t,e,n){n("aPfg")("Set")},V7Et:function(t,e,n){var r=n("2GTP"),i=n("M1xp"),o=n("JB68"),a=n("tEej"),s=n("v6xn");t.exports=function(t,e){var n=1==t,l=2==t,u=3==t,c=4==t,f=6==t,p=5==t||f,v=e||s;return function(e,s,d){for(var h,_,b=o(e),m=i(b),g=r(s,d,3),k=a(m.length),y=0,x=n?v(e,k):l?v(e,0):void 0;k>y;y++)if((p||y in m)&&(_=g(h=m[y],y,b),t))if(n)x[y]=_;else if(_)switch(t){case 3:return!0;case 5:return h;case 6:return y;case 2:x.push(h)}else if(c)return!1;return f?-1:u||c?c:x}}},Wu5q:function(t,e,n){"use strict";var r=n("2faE").f,i=n("oVml"),o=n("XJU/"),a=n("2GTP"),s=n("EXMj"),l=n("oioR"),u=n("MPFp"),c=n("UO39"),f=n("TJWN"),p=n("jmDH"),v=n("6/1s").fastKey,d=n("n3ko"),h=p?"_s":"size",_=function(t,e){var n,r=v(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,u){var c=t(function(t,r){s(t,c,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[h]=0,void 0!=r&&l(r,n,t[u],t)});return o(c.prototype,{clear:function(){for(var t=d(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[h]=0},delete:function(t){var n=d(this,e),r=_(n,t);if(r){var i=r.n,o=r.p;delete n._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),n._f==r&&(n._f=i),n._l==r&&(n._l=o),n[h]--}return!!r},forEach:function(t){d(this,e);for(var n,r=a(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!_(d(this,e),t)}}),p&&r(c.prototype,"size",{get:function(){return d(this,e)[h]}}),c},def:function(t,e,n){var r,i,o=_(t,e);return o?o.v=n:(t._l=o={i:i=v(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[h]++,"F"!==i&&(t._i[i]=o)),t},getEntry:_,setStrong:function(t,e,n){u(t,e,function(t,n){this._t=d(t,e),this._k=n,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?c(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,c(1))},n?"entries":"values",!n,!0),f(e)}}},XLbu:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},aPfg:function(t,e,n){"use strict";var r=n("Y7ZC"),i=n("eaoh"),o=n("2GTP"),a=n("oioR");t.exports=function(t){r(r.S,t,{from:function(t){var e,n,r,s,l=arguments[1];return i(this),(e=void 0!==l)&&i(l),void 0==t?new this:(n=[],e?(r=0,s=o(l,arguments[2],2),a(t,!1,function(t){n.push(s(t,r++))})):a(t,!1,n.push,n),new this(n))}})}},cHUd:function(t,e,n){"use strict";var r=n("Y7ZC");t.exports=function(t){r(r.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},dL40:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},dVTT:function(t,e,n){n("aPfg")("Map")},g33z:function(t,e,n){"use strict";var r=n("Wu5q"),i=n("n3ko");t.exports=n("raTm")("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=r.getEntry(i(this,"Map"),t);return e&&e.v},set:function(t,e){return r.def(i(this,"Map"),0===t?0:t,e)}},r,!0)},jWXv:function(t,e,n){t.exports={default:n("+iuc"),__esModule:!0}},n3ko:function(t,e,n){var r=n("93I4");t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},raTm:function(t,e,n){"use strict";var r=n("5T2Y"),i=n("Y7ZC"),o=n("6/1s"),a=n("KUxP"),s=n("NegM"),l=n("XJU/"),u=n("oioR"),c=n("EXMj"),f=n("93I4"),p=n("RfKB"),v=n("2faE").f,d=n("V7Et")(0),h=n("jmDH");t.exports=function(t,e,n,_,b,m){var g=r[t],k=g,y=b?"set":"add",x=k&&k.prototype,S={};return h&&"function"==typeof k&&(m||x.forEach&&!a(function(){(new k).entries().next()}))?(k=e(function(e,n){c(e,k,t,"_c"),e._c=new g,void 0!=n&&u(n,b,e[y],e)}),d("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in x&&(!m||"clear"!=t)&&s(k.prototype,t,function(n,r){if(c(this,k,t),!e&&m&&!f(n))return"get"==t&&void 0;var i=this._c[t](0===n?0:n,r);return e?this:i})}),m||v(k.prototype,"size",{get:function(){return this._c.size}})):(k=_.getConstructor(e,t,b,y),l(k.prototype,n),o.NEED=!0),p(k,t),S[t]=k,i(i.G+i.W+i.F,S),m||_.setStrong(k,t,b),k}},v6xn:function(t,e,n){var r=n("C2SN");t.exports=function(t,e){return new(r(t))(e)}},xvv9:function(t,e,n){n("cHUd")("Set")}}]);