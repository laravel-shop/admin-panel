(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0659"],{CZfB:function(t,e,a){},"Iwy+":function(t,e,a){"use strict";a.r(e);var n=a("P2sY"),i=a.n(n),l=a("JCNI"),r={data:function(){return{tableData:[],currentPage:1,total:0,loading:!1,pageSize:this.$store.state["page-size"]}},mounted:function(){this.getArticleList()},methods:{handleEdit:function(t,e){},handleDelete:function(t,e){},handleSizeChange:function(t){console.log("每页 "+t+" 条"),this.pageSize=t,this.getArticleList()},handleCurrentChange:function(t){console.log("当前页: "+t),this.currentPage=t,this.getArticleList()},handleCreateClick:function(){this.$router.push({name:"article-create"})},getArticleList:function(){var t=this,e=i()({page:this.currentPage,limit:this.pageSize});return this.loading=!0,Object(l.c)(e).then(function(e){t.tableData=e.data.data,t.total=e.data.total}).finally(function(){t.loading=!1})}}},o=(a("i6aB"),a("KHd+")),c=Object(o.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.handleCreateClick}},[t._v("添加文章")])],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.tableData,border:"","empty-text":"没有数据"}},[a("el-table-column",{attrs:{prop:"title",label:"标题",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status_readable",label:"状态",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"weight",label:"排序"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-row",[a("el-col",[t._v("\n       \n    ")])],1),t._v(" "),t.total>0?a("el-pagination",{staticStyle:{float:"right"},attrs:{"current-page":t.currentPage,"page-sizes":t.$store.state["page-sizes"],"page-size":t.pageSize,total:t.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}):t._e()],1)},[],!1,null,"698e2f13",null);c.options.__file="index.vue";e.default=c.exports},JCNI:function(t,e,a){"use strict";a.d(e,"a",function(){return l}),a.d(e,"b",function(){return r}),a.d(e,"c",function(){return o});var n=a("t3Un"),i="http://localhost:8000/ccb-shop/admin/api/";function l(t){return Object(n.a)({url:i+"articles",method:"post",data:t})}function r(){return Object(n.a)({url:i+"articles/configs",method:"get"})}function o(t){return Object(n.a)({url:i+"articles",params:t,method:"get"})}},i6aB:function(t,e,a){"use strict";var n=a("CZfB");a.n(n).a}}]);