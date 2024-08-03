"use strict";(self.webpackChunkblur_engine_lua_docs=self.webpackChunkblur_engine_lua_docs||[]).push([[5323],{1061:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>h});var r=n(4848),t=n(8453);const c={title:"GUI",summary:"A BlurLua class",pagination_next:null,pagination_prev:null},l=void 0,i={id:"api/classes/class_GUI",title:"GUI",description:"Parent class: GUIContainer",source:"@site/docs/api/classes/class_GUI.md",sourceDirName:"api/classes",slug:"/api/classes/class_GUI",permalink:"/blurengine-docs/docs/api/classes/class_GUI",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"GUI",summary:"A BlurLua class",pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},d={},h=[{value:"Static Members",id:"static-members",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Functions",id:"functions",level:3},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"Events",id:"events",level:2}];function o(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Parent class: ",(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUIContainer",children:"GUIContainer"})]}),"\n",(0,r.jsx)(s.p,{children:"Base GUI class"}),"\n",(0,r.jsx)(s.h2,{id:"static-members",children:"Static Members"}),"\n",(0,r.jsx)(s.h3,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUI",children:"GUI"})})," GUI.new( ",(0,r.jsx)(s.strong,{children:"string"})," type )"]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"Instantiates a class deriving from GUI corresponding to the string"})})})]}),"\n",(0,r.jsx)(s.h3,{id:"functions",children:"Functions"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:[(0,r.jsx)(s.strong,{children:"bool"})," GUI.isMouseIntercepted(  )"]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"Returns whether the mouse should be intercepted by GUI (because the mouse is currently over a GUI object)"})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:["GUI.focus( ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUIObject",children:"GUIObject"})})," object )"]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"Focuses the given GUIObject, should also have the effect of pushing it to the top."})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUIObject",children:"GUIObject"})})," GUI.newObject( ",(0,r.jsx)(s.strong,{children:"string"})," type )"]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"Instantiates a class deriving from GUIObject corresponding to the string (exception: Texture will instantiate GUITexture)"})})})]}),"\n",(0,r.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_Vector2",children:"Vector2"})})," Size ",(0,r.jsxs)("span",{style:{float:"right"},children:["Inherited from: ",(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUIObject",children:"GUIObject"})]})]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"The on-screen size of the object"})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:[(0,r.jsx)(s.strong,{children:"bool"})," Visible ",(0,r.jsxs)("span",{style:{float:"right"},children:["Inherited from: ",(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUIObject",children:"GUIObject"})]})]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"Determines whether the given object is drawn or not. Invisible objects cannot be interacted with."})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:[(0,r.jsx)(s.strong,{children:"bool"})," Active ",(0,r.jsxs)("span",{style:{float:"right"},children:["Inherited from: ",(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUIObject",children:"GUIObject"})]})]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:["When set to true on a given object, any interractions will not be checked (for example: mouse click, hover) and the object will be skipped. Which would for example result in objects being able to be interracted with through the one you set ",(0,r.jsx)(s.code,{children:".Active"})," to ",(0,r.jsx)(s.code,{children:"true"})," on."]})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:[(0,r.jsx)(s.strong,{children:"number"})," Opacity ",(0,r.jsxs)("span",{style:{float:"right"},children:["Inherited from: ",(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUIObject",children:"GUIObject"})]})]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"Degree to which the objects's background is transparent"})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_Color",children:"Color"})})," Color ",(0,r.jsxs)("span",{style:{float:"right"},children:["Inherited from: ",(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUIObject",children:"GUIObject"})]})]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"Default color of the object"})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_Vector2",children:"Vector2"})})," Position ",(0,r.jsxs)("span",{style:{float:"right"},children:["Inherited from: ",(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUIObject",children:"GUIObject"})]})]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"The on-screen position of the object relative to the parent container"})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_Vector2",children:"Vector2"})})," MinSize"]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"The theoretical minimum size of the GUI, only used with objects that may resize the GUI"})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:[(0,r.jsx)(s.strong,{children:"bool"})," BlurBackground"]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"Determines whether the background of the GUI should be blurred"})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_Vector2",children:"Vector2"})})," MaxSize"]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:["Only used with ",(0,r.jsx)(s.code,{children:"ResizeDragger"}),", the 'theoretical maximum size' of your GUI"]})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/enums/enum_Alignment",children:"Alignment"})})," Alignment"]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"Screen Alignment (determines which corner Position corresponds to)"})})})]}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:["GUI",":pushFront","(  ) ",(0,r.jsxs)("span",{style:{float:"right"},children:["Inherited from: ",(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUIObject",children:"GUIObject"})]})]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"Pushes the object to the top (the object should now be displayed over every other object in the same container)"})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:["GUI",":pushBack","(  ) ",(0,r.jsxs)("span",{style:{float:"right"},children:["Inherited from: ",(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUIObject",children:"GUIObject"})]})]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"Pushes the object to the bottom (the object should now be displayed behind every other object in the same container)"})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:["GUI",":pushUp","(  ) ",(0,r.jsxs)("span",{style:{float:"right"},children:["Inherited from: ",(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUIObject",children:"GUIObject"})]})]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"Pushes the object nearer to the top (shifts its index within the container's order to be nearer to the top)"})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:["GUI",":pushDown","(  ) ",(0,r.jsxs)("span",{style:{float:"right"},children:["Inherited from: ",(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUIObject",children:"GUIObject"})]})]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"Pushes the object nearer to the bottom (shifts its index within the container's order to be nearer to the bottom)"})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:["GUI",":removeObject","( ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUIObject",children:"GUIObject"})})," object ) ",(0,r.jsxs)("span",{style:{float:"right"},children:["Inherited from: ",(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUIContainer",children:"GUIContainer"})]})]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:["Removes an ",(0,r.jsx)(s.code,{children:"object"})," from the GUI"]})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:[(0,r.jsx)(s.strong,{children:"List[GUIObject]"})," GUI",":getChildren","(  ) ",(0,r.jsxs)("span",{style:{float:"right"},children:["Inherited from: ",(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUIContainer",children:"GUIContainer"})]})]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"Returns a list of all objects present within the container"})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:["GUI",":addObject","( ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUIObject",children:"GUIObject"})})," object ) ",(0,r.jsxs)("span",{style:{float:"right"},children:["Inherited from: ",(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUIContainer",children:"GUIContainer"})]})]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:["Adds an ",(0,r.jsx)(s.code,{children:"object"})," to the GUI"]})})})]}),"\n",(0,r.jsx)(s.h2,{id:"events",children:"Events"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:["onEntered(  ) ",(0,r.jsxs)("span",{style:{float:"right"},children:["Inherited from: ",(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUIObject",children:"GUIObject"})]})]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"Called when the mouse starts hovering over the object"})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:["onReleased(  ) ",(0,r.jsxs)("span",{style:{float:"right"},children:["Inherited from: ",(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUIObject",children:"GUIObject"})]})]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"This is called when the mouse stops clicking the object"})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:["onMouseMove( ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_Vector2",children:"Vector2"})})," mouseMove ) ",(0,r.jsxs)("span",{style:{float:"right"},children:["Inherited from: ",(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUIObject",children:"GUIObject"})]})]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"Called when the mouse moves"})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:["onScrolled( ",(0,r.jsx)(s.strong,{children:"number"})," scrollX, ",(0,r.jsx)(s.strong,{children:"number"})," scrollY ) ",(0,r.jsxs)("span",{style:{float:"right"},children:["Inherited from: ",(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUIObject",children:"GUIObject"})]})]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"Called when using scrolling (either through the mouse wheel or a touchpad) while having the mouse be within the object"})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:["onPressed(  ) ",(0,r.jsxs)("span",{style:{float:"right"},children:["Inherited from: ",(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUIObject",children:"GUIObject"})]})]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"This is called when the mouse clicks the object"})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:["onLeave(  ) ",(0,r.jsxs)("span",{style:{float:"right"},children:["Inherited from: ",(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_GUIObject",children:"GUIObject"})]})]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"Called when the mouse stops hovering over the object"})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{children:"onUnfocused(  )"})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"Called when the GUI is no longer focused."})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.th,{children:["onResize( ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_Vector2",children:"Vector2"})})," oldSize, ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/blurengine-docs/docs/api/classes/class_Vector2",children:"Vector2"})})," newSize )"]})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"Called when the GUI is resized."})})})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{children:"onFocused(  )"})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"Called when the GUI is focused."})})})]})]})}function a(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>i});var r=n(6540);const t={},c=r.createContext(t);function l(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);