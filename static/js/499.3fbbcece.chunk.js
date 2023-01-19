"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[499],{1499:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,c,a,o,i,u=t(9439),s=t(2791),l=t(1087),d=t(7689),p=t(4390),f=t(4321),h=t(9457),v=t(168),x=t(82),g=x.ZP.img(r||(r=(0,v.Z)(["\n  max-width: 150px;\n"]))),m=x.ZP.h2(c||(c=(0,v.Z)(["\n  margin-bottom: ","px;\n\n  font-weight: 700;\n  font-style: italic;\n"])),(function(n){return n.theme.space[3]})),j=x.ZP.span(a||(a=(0,v.Z)(["\n  font-weight: 700;\n"]))),w=x.ZP.p(o||(o=(0,v.Z)(["\n  :not(:last-child) {\n    margin-bottom: ","px;\n  }\n"])),(function(n){return n.theme.space[3]})),Z=(0,x.ZP)(l.OL)(i||(i=(0,v.Z)(["\n  padding: ","px;\n  color: ",";\n  text-decoration: none;\n  border-radius: ","px;\n\n  :not(:last-child) {\n    margin-right: ","px;\n  }\n\n  &.active {\n    color: ",";\n  }\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.background_secondary})),_=t(184),b=function(){var n,e,t=(0,d.UO)().moviesId,r=(0,s.useState)(null),c=(0,u.Z)(r,2),a=c[0],o=c[1],i=(0,d.TH)(),v=(0,s.useState)(null),x=(0,u.Z)(v,2),b=x[0],y=x[1];if((0,s.useEffect)((function(){(0,p.vq)(t).then((function(n){o(n)})).catch((function(n){y("Ooops. Something went wrong..."),console.log(n)}))}),[t]),!a)return null;var k=a.id,S=a.title,P=a.overview,U=a.popularity,O=a.poster_path,q=a.release_date,C=a.genres,I=null!==(n=null===(e=i.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/home";return(0,_.jsxs)(h.x,{children:[(0,_.jsx)(l.rU,{to:I,children:"Back to list"}),b&&(0,_.jsx)("div",{children:b}),(0,_.jsxs)(h.x,{display:"flex",alignItems:"center",p:4,children:[(0,_.jsx)(h.x,{mr:4,children:(0,_.jsx)(g,{src:"".concat(p.r1).concat(O),alt:"poster"})}),(0,_.jsxs)(h.x,{children:[(0,_.jsx)(m,{children:S}),(0,_.jsxs)(w,{children:[(0,_.jsx)(j,{children:"Popularity:"})," ",U]}),(0,_.jsxs)(w,{children:[(0,_.jsx)(j,{children:"Release date:"})," ",q]}),(0,_.jsxs)(w,{children:[(0,_.jsx)(j,{children:"Genres"}),C.map((function(n){return(0,_.jsx)("li",{children:n.name},n.id)}))]}),(0,_.jsxs)(w,{children:[(0,_.jsx)(j,{children:"Overview:"})," ",P]})]})]}),(0,_.jsxs)(h.x,{as:"ul",display:"flex",p:4,children:[(0,_.jsx)(Z,{to:"cast",children:"Cast"}),(0,_.jsx)(Z,{to:"reviews",children:"Reviews"})]}),(0,_.jsx)(s.Suspense,{fallback:(0,_.jsx)(f.Z,{}),children:(0,_.jsx)(d.j3,{})})]},k)}},4390:function(n,e,t){t.d(e,{M1:function(){return p},Pt:function(){return h},r1:function(){return s},rj:function(){return l},tx:function(){return f},vq:function(){return d}});var r=t(5861),c=t(4687),a=t.n(c),o=t(3263),i="115b567d77b04428b1251a93b22d9778",u="https://api.themoviedb.org/3",s="https://image.tmdb.org/t/p/w500/",l=function(){var n=(0,r.Z)(a().mark((function n(){var e,t,r=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,n.next=3,o.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(i,"&page=").concat(e,"&language=en-US&include_adult=false"));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,c=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:1,n.next=3,o.Z.get("".concat(u,"/movie/").concat(e,"?api_key=").concat(i,"&page=").concat(t,"&language=en-US&include_adult=false"));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,c=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:1,n.next=3,o.Z.get("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(i,"&page=").concat(t,"&language=en-US&include_adult=false"));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,c=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:1,n.next=3,o.Z.get("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&page=").concat(t,"&language=en-US&include_adult=false"));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,c=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:1,n.next=3,o.Z.get("".concat(u,"/search/movie?api_key=").concat(i,"&page=").concat(t,"&language=en-US&include_adult=false&query=").concat(e));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=499.3fbbcece.chunk.js.map