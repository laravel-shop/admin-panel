(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-314c"],{IO3Y:function(e,t,a){"use strict";var n=a("h7TA");a.n(n).a},h7TA:function(e,t,a){},moOK:function(e,t,a){"use strict";a.r(t);var n=a("P2sY"),i=a.n(n),r=a("t3Un"),l="/ccb-shop/admin/api/";var o={data:function(){return{tableData:[],currentPage:1,total:0,loading:!1,pageSize:this.$store.state["page-size"],create:{visible:!1,form:{path:"",name:"",weight:0}}}},mounted:function(){this.getLinkList()},methods:{handleEdit:function(e,t){},handleDelete:function(e,t){},handleSizeChange:function(e){console.log("每页 "+e+" 条"),this.pageSize=e,this.getLinkList()},handleCurrentChange:function(e){console.log("当前页: "+e),this.currentPage=e,this.getLinkList()},handleCreateClick:function(){this.create.visible=!0},getLinkList:function(){var e=this,t=i()({page:this.currentPage,limit:this.pageSize});return this.loading=!0,function(e){return Object(r.a)({url:l+"links",params:e,method:"get"})}(t).then(function(t){e.tableData=t.data.data,e.total=t.data.total}).finally(function(){e.loading=!1})},resetForm:function(e){this.$refs[e].resetFields()},handleCreateForm:function(){var e=this;(function(e){return Object(r.a)({url:l+"links",method:"post",data:e})})(this.create.form).then(function(t){e.getLinkList(),e.create.visible=!1,e.resetForm("create.form")})}}},s=(a("IO3Y"),a("KHd+")),c=Object(s.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.handleCreateClick}},[e._v("添加链接")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.tableData,border:"","empty-text":"没有数据"}},[a("el-table-column",{attrs:{prop:"client_readable",label:"名称",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"path",label:"路径"}}),e._v(" "),a("el-table-column",{attrs:{prop:"weight",label:"排序"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-row",[a("el-col",[e._v("\n       \n    ")])],1),e._v(" "),a("el-pagination",{staticStyle:{float:"right"},attrs:{"current-page":e.currentPage,"page-sizes":e.$store.state["page-sizes"],"page-size":e.pageSize,total:e.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),a("el-dialog",{attrs:{visible:e.create.visible,title:"添加广告"},on:{"update:visible":function(t){e.$set(e.create,"visible",t)}}},[a("el-form",{ref:"create.form",attrs:{model:e.create.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"路径",prop:"path"}},[a("el-input",{model:{value:e.create.form.path,callback:function(t){e.$set(e.create.form,"path",t)},expression:"create.form.path"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{model:{value:e.create.form.name,callback:function(t){e.$set(e.create.form,"name",t)},expression:"create.form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"排序",prop:"weight"}},[a("el-input",{model:{value:e.create.form.weight,callback:function(t){e.$set(e.create.form,"weight",t)},expression:"create.form.weight"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.create.visible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleCreateForm}},[e._v("确 定")])],1)],1)],1)},[],!1,null,"bf38380c",null);c.options.__file="index.vue";t.default=c.exports}}]);