(this["webpackJsonprouter-anime"]=this["webpackJsonprouter-anime"]||[]).push([[0],{19:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),i=n(9),r=n.n(i),o=n(8),l=n(2),j=(n(19),n(18)),u=n(23),d="/",m="/features",b="/sign-up",h=n(21),x=n.n(h),_=(n(29),function(e){var t=e.styles;return Object(c.jsx)(o.b,{to:d,className:x()("Logo",t),children:"Mimini"})}),O=(n(35),function(e){var t=e.children,n=Object(u.a)(e,["children"]);return Object(c.jsx)(o.c,Object(j.a)(Object(j.a)({className:"Header__navLink",exact:!0,activeClassName:"Header__navLink--active"},n),{},{children:t}))}),f=function(){return Object(c.jsx)("header",{className:"Header",children:Object(c.jsxs)("nav",{className:"Header__nav",children:[Object(c.jsx)(_,{styles:"Header__logo"}),Object(c.jsxs)("ul",{className:"Header__mainNav",children:[Object(c.jsx)("li",{className:"Header__navItem",children:Object(c.jsx)(O,{to:d,children:"Home"})}),Object(c.jsx)("li",{className:"Header__navItem",children:Object(c.jsx)(O,{to:m,children:"Features"})})]}),Object(c.jsx)("ul",{className:"Header__secondaryNav",children:Object(c.jsx)("li",{className:"Header__navItem",children:Object(c.jsx)(O,{to:b,children:"Sign up"})})})]})})},p=(n(36),function(){return Object(l.g)(b)?null:Object(c.jsx)("footer",{className:"Footer",children:Object(c.jsx)(_,{styles:"Footer__logo"})})}),g=n(46),N=n(47),v=n(13),y=n.p+"static/media/1.2c205e09.jpeg",w=n.p+"static/media/2.6b77dbce.svg",F=n.p+"static/media/3.feb754da.jpeg",H=n.p+"static/media/4.075f91c9.webp",S=n.p+"static/media/5.d7317c20.jpg",C=(n(37),n(38),function(e){var t=e.onClose;return r.a.createPortal(Object(c.jsxs)("div",{className:"Modal",children:[Object(c.jsx)("button",{onClick:t,className:"Modal__closeButton",children:"\xd7"}),Object(c.jsx)("div",{className:"Modal__content",children:"It`s Modal window!!!"})]}),document.body)}),I=n(12),U=function(e){R=!1,(G=e)&&(G.style.display="none")},k=function(){(L=document.createElement("div")).classList.add("Wrapper"),document.body.appendChild(L),I.a.from(".Wrapper",{x:"100%",duration:.5,onComplete:function(){setTimeout((function(){R=!0,V()}),300)}})},M=function(){E=!0,V()},E=!1,R=!1,G=null,L=null,T=function(){E=!1,R=!1,G=null,L&&document.body.removeChild(L),L=null},V=function(){G&&R&&E&&(G.style.display="block",I.a.to(".Wrapper",{x:"-100%",duration:.5,onComplete:T}))},W=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(){return Object(a.useEffect)((function(){t||M()}),[]),Object(c.jsx)(e,{onReadyNewRoute:M})}},q=W((function(){var e=Object(a.useState)(!1),t=Object(v.a)(e,2),n=t[0],s=t[1];return Object(c.jsxs)("section",{className:"Features",children:[Object(c.jsx)("h1",{className:"Features__title",children:"A Fitting Design"}),Object(c.jsx)("p",{className:"Features__text",children:"If you want to spend hours with your Mimini VR, you can: the Mimini VR is engineered with your comfort in mind and is designed to feel comfortable when you\u2019re wearing it."}),Object(c.jsx)("button",{onClick:function(){return s(!0)},className:"Features__button",children:"Press me!"}),n&&Object(c.jsx)(C,{onClose:function(){return s(!1)}}),Object(c.jsxs)("div",{className:"Features__imageGrid",children:[Object(c.jsx)("div",{className:"Features__imageMain",children:Object(c.jsx)("img",{src:y,alt:"Interior 1",width:"300",className:"Features__image"})}),Object(c.jsxs)("div",{className:"Features__imageGridRow",children:[Object(c.jsxs)("div",{className:"Features__imageGridColumn",children:[Object(c.jsx)("img",{src:H,alt:"Interior 2",width:"300",className:"Features__image Features__image2"}),Object(c.jsx)("img",{src:F,alt:"Interior 3",width:"300",className:"Features__image Features__image3"})]}),Object(c.jsxs)("div",{className:"Features__imageGridColumn",children:[Object(c.jsx)("img",{src:w,alt:"Interior 4",width:"300",className:"Features__image Features__image4"}),Object(c.jsx)("img",{src:S,alt:"Interior 5",width:"300",className:"Features__image Features__image5"})]})]})]})]})})),A=(n(39),W((function(e){var t=e.onReadyNewRoute,n=s.a.useState(!0),a=Object(v.a)(n,2),i=a[0],r=a[1];return s.a.useEffect((function(){i||(I.a.from(".Home__title",{y:-40,opacity:0,duration:2}),I.a.from(".Home__text",{y:-40,opacity:0,duration:2}))}),[i]),s.a.useEffect((function(){setTimeout((function(){r(!1),t()}),2e3)}),[t]),Object(c.jsxs)("section",{className:"Home",children:[Object(c.jsx)("h1",{className:"Home__title",children:"Go on Adventures You've Only Dreamt of\u2026"}),Object(c.jsx)("p",{className:"Home__text",children:"Travel new lands and see magical landscapes with the wide 101\xb0 field of view through the large lens. The stable and precise head tracking via the built-in gyro sensor and accelerometer makes sure it's a smooth ride."})]})}),!0)),B=(n(40),W((function(){return Object(c.jsx)("section",{className:"SignUp",children:Object(c.jsxs)("div",{className:"SignUp__content",children:[Object(c.jsx)("h1",{className:"SignUp__title",children:"Sign Up Now"}),Object(c.jsx)("p",{className:"SignUp__text",children:"Use the Minini VR controller as a remote control to navigate your virtual reality with ease or use it as a gamepad."}),Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{className:"SignUp__input",type:"text",placeholder:"Name",required:!0}),Object(c.jsx)("input",{className:"SignUp__input",type:"email",placeholder:"Email",required:!0}),Object(c.jsx)("button",{className:"SignUp__button",children:"Sign Up Now"})]})]})})}))),D=(n(41),W((function(){return Object(c.jsx)("section",{className:"NotFound",children:Object(c.jsx)("h1",{className:"NotFound__title",children:"Not Found, sorry"})})}))),J=(n(42),function(e){var t=e.location;return Object(c.jsx)("main",{className:"Main",children:Object(c.jsxs)(l.d,{location:t,children:[Object(c.jsx)(l.b,{path:d,exact:!0,children:Object(c.jsx)(A,{})}),Object(c.jsx)(l.b,{path:m,exact:!0,render:function(){return Object(c.jsx)(q,{})}}),Object(c.jsx)(l.b,{path:b,exact:!0,children:Object(c.jsx)(B,{})}),Object(c.jsx)(l.b,{path:"*",children:Object(c.jsx)(D,{})})]})})}),P=function(e){var t=e.location,n=t.key;return Object(c.jsx)(g.a,{component:null,children:Object(c.jsx)(N.a,{timeout:{enter:200,exit:1e3},onEnter:U,onExit:k,children:Object(c.jsx)(J,{location:t})},n)})},Y=function(e){var t=e.children;return Object(c.jsx)("div",{children:t(!0)})};var z=function(){return Object(c.jsxs)(o.a,{children:[Object(c.jsx)(f,{}),Object(c.jsx)(Y,{children:function(e){return e?"":"Sign Up"}}),Object(c.jsx)(l.b,{render:function(e){var t=e.location;return Object(c.jsx)(P,{location:t})}}),Object(c.jsx)(p,{})]})};r.a.render(Object(c.jsx)(z,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.af219c33.chunk.js.map