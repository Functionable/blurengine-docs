"use strict";(self.webpackChunkblur_engine_lua_docs=self.webpackChunkblur_engine_lua_docs||[]).push([[435],{198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(4848),s=n(8453);const i={title:"table Library",summary:"table Library",pagination_next:null,pagination_prev:null},a=void 0,l={id:"api/libraries/library_table",title:"table Library",description:"This default Lua library contains additional functions that help with table manipulation",source:"@site/docs/api/libraries/library_table.md",sourceDirName:"api/libraries",slug:"/api/libraries/library_table",permalink:"/blurengine-docs/docs/api/libraries/library_table",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"table Library",summary:"table Library",pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},d={},o=[];function c(e){const t={a:"a",code:"code",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This default Lua library contains additional functions that help with table manipulation"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsx)(t.tr,{children:(0,r.jsxs)(t.th,{children:[(0,r.jsx)(t.strong,{children:"string"})," concat( ",(0,r.jsx)(t.strong,{children:"table"})," table, ",(0,r.jsx)(t.strong,{children:"string"})," sep, ",(0,r.jsx)(t.strong,{children:"number"})," i, ",(0,r.jsx)(t.strong,{children:"number"})," j )"]})})}),(0,r.jsx)(t.tbody,{children:(0,r.jsx)(t.tr,{children:(0,r.jsxs)(t.td,{children:["Concatenates all elements in a given table into a string. All arguments after table are optional. ",(0,r.jsx)(t.code,{children:"sep"})," is the separator between each entry, while ",(0,r.jsx)(t.code,{children:"i"})," and ",(0,r.jsx)(t.code,{children:"j"})," are the start and end bounds between which all elements will be concatenated into a string."]})})})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsx)(t.tr,{children:(0,r.jsxs)(t.th,{children:["insert( ",(0,r.jsx)(t.strong,{children:"table"})," list, ",(0,r.jsx)(t.strong,{children:"number"})," pos, ",(0,r.jsx)(t.strong,{children:"any"})," value )"]})})}),(0,r.jsx)(t.tbody,{children:(0,r.jsx)(t.tr,{children:(0,r.jsxs)(t.td,{children:["This function inserts a value into a table at a specified ",(0,r.jsx)(t.code,{children:"pos"}),". The ",(0,r.jsx)(t.code,{children:"pos"})," is an optional argument and if not specified, the function assumes that ",(0,r.jsx)(t.code,{children:"pos"})," is at the end of the table."]})})})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsx)(t.tr,{children:(0,r.jsxs)(t.th,{children:[(0,r.jsx)(t.strong,{children:"table"})," move( ",(0,r.jsx)(t.strong,{children:"table"})," table1, ",(0,r.jsx)(t.strong,{children:"number"})," startIndex, ",(0,r.jsx)(t.strong,{children:"number"})," endIndex, ",(0,r.jsx)(t.strong,{children:"number"})," otherStart, ",(0,r.jsx)(t.strong,{children:"table"})," table2 )"]})})}),(0,r.jsx)(t.tbody,{children:(0,r.jsx)(t.tr,{children:(0,r.jsxs)(t.td,{children:["Returns table2. It moves elements from ",(0,r.jsx)(t.code,{children:"table1"})," (between ",(0,r.jsx)(t.code,{children:"startIndex"})," and ",(0,r.jsx)(t.code,{children:"endIndex"}),") to ",(0,r.jsx)(t.code,{children:"table2"})," (from ",(0,r.jsx)(t.code,{children:"otherStart"})," onwards), ",(0,r.jsx)(t.code,{children:"table2"})," is an optional argument, and if not specified, ",(0,r.jsx)(t.code,{children:"table2"})," is assumed to be ",(0,r.jsx)(t.code,{children:"table1"}),"."]})})})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsx)(t.tr,{children:(0,r.jsxs)(t.th,{children:[(0,r.jsx)(t.strong,{children:"table"})," pack( ",(0,r.jsx)(t.strong,{children:"variable"})," any )"]})})}),(0,r.jsx)(t.tbody,{children:(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{children:"This function accepts any number of arguments. It will then create and return a new table containing all of these arguments."})})})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsx)(t.tr,{children:(0,r.jsxs)(t.th,{children:["remove( ",(0,r.jsx)(t.strong,{children:"table"})," table, ",(0,r.jsx)(t.strong,{children:"number"})," index )"]})})}),(0,r.jsx)(t.tbody,{children:(0,r.jsx)(t.tr,{children:(0,r.jsxs)(t.td,{children:["Removes an element from a table at a given index. The ",(0,r.jsx)(t.code,{children:"index"})," is optional, and if not specified it defaults to the end of the table. This function modifies the table passed and therefore does not modify anything."]})})})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsx)(t.tr,{children:(0,r.jsxs)(t.th,{children:["sort( ",(0,r.jsx)(t.strong,{children:"table"})," table, ",(0,r.jsx)(t.strong,{children:"function"})," sort )"]})})}),(0,r.jsx)(t.tbody,{children:(0,r.jsx)(t.tr,{children:(0,r.jsxs)(t.td,{children:["This function sorts a table. It modifies the table specified and therefore does not return anything. It also accepts an optional argument ",(0,r.jsx)(t.code,{children:"sort"})," which should be a function taking two arguments that is able to sort the table. More information on how this function works can be found ",(0,r.jsx)(t.a,{href:"https://www.lua.org/manual/5.4/manual.html#pdf-table.sort",children:"here"})]})})})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsx)(t.tr,{children:(0,r.jsxs)(t.th,{children:[(0,r.jsx)(t.strong,{children:"variable"})," unpack( ",(0,r.jsx)(t.strong,{children:"table"})," list, ",(0,r.jsx)(t.strong,{children:"number"})," start, ",(0,r.jsx)(t.strong,{children:"number"})," end )"]})})}),(0,r.jsx)(t.tbody,{children:(0,r.jsx)(t.tr,{children:(0,r.jsxs)(t.td,{children:["Returns the elements in the list. The arguments ",(0,r.jsx)(t.code,{children:"start"})," and ",(0,r.jsx)(t.code,{children:"end"})," are optional."]})})})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(6540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);