(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[3],{300:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__29WE8",dialogsItems:"Dialogs_dialogsItems__cMGZZ",messages:"Dialogs_messages__3nusA"}},301:function(e,a,t){e.exports={dialogs:"DialogItem_dialogs__2sxLe",dialog:"DialogItem_dialog__KBLhW",active:"DialogItem_active__3hkxw",dialogName:"DialogItem_dialogName__1ANn2"}},302:function(e,a,t){e.exports={message:"Message_message__ktMt4",rightMessage:"Message_rightMessage__1zgtx",leftMessage:"Message_leftMessage__waG0p"}},303:function(e,a,t){e.exports={textarea:"DialogTextArea_textarea__2izxM"}},308:function(e,a,t){"use strict";t.r(a);var s=t(67),n=t(0),i=t.n(n),l=t(300),g=t.n(l),o=t(11),c=t(301),m=t.n(c),r=function(e){var a="/dialogs/"+e.id;return i.a.createElement("div",{className:m.a.dialogs},i.a.createElement(o.b,{className:m.a.dialog,activeClassName:m.a.active,to:a},i.a.createElement("img",{src:e.avatar}),i.a.createElement("div",{className:m.a.dialogName},e.name)))},d=t(302),u=t.n(d),_=function(e){return e.id%2?i.a.createElement("div",{className:u.a.rightMessage},e.message):i.a.createElement("div",{className:u.a.leftMessage},e.message)},M=t(303),b=t.n(M),f=t(93),v=t(51),E=t(69),x=Object(v.a)("textarea"),p=Object(E.b)(100),N=function(e){return i.a.createElement("form",{className:b.a.textarea,onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(f.a,{placeholder:"tyt",name:"newMessageBody",validate:[E.c,p],component:x})),i.a.createElement("button",null,"Submit"))},h=t(131),w=Object(h.a)({form:"login"})(N),j=function(e){var a=e.state.dialogs.map((function(e){return i.a.createElement(r,{key:e.id,name:e.name,id:e.id,avatar:e.avatar})})),t=e.state.messages.map((function(e){return i.a.createElement(_,{key:e.id,message:e.message,id:e.id})}));return i.a.createElement("div",{className:g.a.dialogs},i.a.createElement("div",{className:g.a.dialogsItems},a),i.a.createElement("div",{className:g.a.messages},t),i.a.createElement(w,{onSubmit:function(a){console.log(a.newMessageBody),e.addMessage(a.newMessageBody)},addMessage:e.addMessage,onMessageChange:e.onMessageChange,newMessageText:e.state.newMessageText}))},k=t(10),D=t(75),O=t(6),I=function(e){return{state:e.dialogsPage}},y=function(e){return{addMessage:function(a){e(Object(s.a)(a))}}};Object(O.d)(Object(k.b)(I,y),D.a)(j);a.default=Object(O.d)(Object(k.b)(I,y),D.a)(j)}}]);
//# sourceMappingURL=3.c5367163.chunk.js.map