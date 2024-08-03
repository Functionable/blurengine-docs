"use strict";(self.webpackChunkblur_engine_lua_docs=self.webpackChunkblur_engine_lua_docs||[]).push([[9055],{6738:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var n=r(4848),i=r(8453);const s={title:"File Library",summary:"File Library",pagination_next:null,pagination_prev:null},l=void 0,o={id:"api/libraries/library_File",title:"File Library",description:"Allows you to write/read content from the user's drive, if you do not wish to use BLF.",source:"@site/docs/api/libraries/library_File.md",sourceDirName:"api/libraries",slug:"/api/libraries/library_File",permalink:"/blurengine-docs/docs/api/libraries/library_File",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"File Library",summary:"File Library",pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},d={},a=[];function c(e){const t={admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Allows you to write/read content from the user's drive, if you do not wish to use BLF."}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.mdxAdmonitionTitle,{}),(0,n.jsx)(t.p,{children:"Functions in this library only work within blur's core directory. Access outside of that is disallowed for security reasons."})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsx)(t.tr,{children:(0,n.jsxs)(t.th,{children:[(0,n.jsx)(t.strong,{children:"bool"})," exists( ",(0,n.jsx)(t.strong,{children:"string"})," path )"]})})}),(0,n.jsx)(t.tbody,{children:(0,n.jsx)(t.tr,{children:(0,n.jsx)(t.td,{children:"Determines whether a given path to a file exists on the filesystem"})})})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsx)(t.tr,{children:(0,n.jsxs)(t.th,{children:[(0,n.jsx)(t.strong,{children:"bool"})," isDirectory( ",(0,n.jsx)(t.strong,{children:"string"})," path )"]})})}),(0,n.jsx)(t.tbody,{children:(0,n.jsx)(t.tr,{children:(0,n.jsx)(t.td,{children:"Returns true when a given path contains points to a directory"})})})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsx)(t.tr,{children:(0,n.jsxs)(t.th,{children:[(0,n.jsx)(t.strong,{children:"array"})," listDir( ",(0,n.jsx)(t.strong,{children:"string"})," path )"]})})}),(0,n.jsx)(t.tbody,{children:(0,n.jsx)(t.tr,{children:(0,n.jsx)(t.td,{children:"Recursively iterates over a given directory and returns the list of files contained within"})})})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsx)(t.tr,{children:(0,n.jsxs)(t.th,{children:[(0,n.jsx)(t.strong,{children:"string"})," load( ",(0,n.jsx)(t.strong,{children:"string"})," path )"]})})}),(0,n.jsx)(t.tbody,{children:(0,n.jsx)(t.tr,{children:(0,n.jsx)(t.td,{children:"Loads entire file as string (path relative to blur root)"})})})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsx)(t.tr,{children:(0,n.jsxs)(t.th,{children:["remove( ",(0,n.jsx)(t.strong,{children:"string"})," path )"]})})}),(0,n.jsx)(t.tbody,{children:(0,n.jsx)(t.tr,{children:(0,n.jsx)(t.td,{children:"Removes a file"})})})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsx)(t.tr,{children:(0,n.jsxs)(t.th,{children:["save( ",(0,n.jsx)(t.strong,{children:"string"})," path, ",(0,n.jsx)(t.strong,{children:"string"})," contents )"]})})}),(0,n.jsx)(t.tbody,{children:(0,n.jsx)(t.tr,{children:(0,n.jsx)(t.td,{children:"Saves string as file (path relative to blur root)"})})})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var n=r(6540);const i={},s=n.createContext(i);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);