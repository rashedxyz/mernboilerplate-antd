(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8579],{64317:function(W,y,e){"use strict";var o=e(22122),P=e(28991),t=e(81253),s=e(67294),b=e(98757),g=e(22270),M=e(66758),U=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],I=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],Z=s.forwardRef(function(n,_){var l=n.fieldProps,c=n.children,T=n.params,p=n.proFieldProps,E=n.mode,r=n.valueEnum,u=n.request,f=n.showSearch,a=n.options,d=(0,t.Z)(n,U),A=(0,s.useContext)(M.Z);return s.createElement(b.Z,(0,o.Z)({mode:"edit",valueEnum:(0,g.h)(r),request:u,params:T,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,P.Z)({options:a,mode:E,showSearch:f,getPopupContainer:A.getPopupContainer},l),ref:_,proFieldProps:p},d),c)}),h=s.forwardRef(function(n,_){var l=n.fieldProps,c=n.children,T=n.params,p=n.proFieldProps,E=n.mode,r=n.valueEnum,u=n.request,f=n.options,a=(0,t.Z)(n,I),d=(0,P.Z)({options:f,mode:E||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},l),A=(0,s.useContext)(M.Z);return s.createElement(b.Z,(0,o.Z)({mode:"edit",valueEnum:(0,g.h)(r),request:u,params:T,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,P.Z)({getPopupContainer:A.getPopupContainer},d),ref:_,proFieldProps:p},a),c)}),i=Z,m=h,v=i;v.SearchSelect=m,v.displayName="ProFormComponent",y.Z=v},5966:function(W,y,e){"use strict";var o=e(22122),P=e(81253),t=e(67294),s=e(98757),b=["fieldProps","proFieldProps"],g=["fieldProps","proFieldProps"],M="text",U=function(i){var m=i.fieldProps,v=i.proFieldProps,n=(0,P.Z)(i,b);return t.createElement(s.Z,(0,o.Z)({mode:"edit",valueType:M,fieldProps:m,filedConfig:{valueType:M},proFieldProps:v},n))},I=function(i){var m=i.fieldProps,v=i.proFieldProps,n=(0,P.Z)(i,g);return t.createElement(s.Z,(0,o.Z)({mode:"edit",valueType:"password",fieldProps:m,proFieldProps:v,filedConfig:{valueType:M}},n))},Z=U;Z.Password=I,Z.displayName="ProFormComponent",y.Z=Z},15196:function(W,y,e){"use strict";e.d(y,{UW:function(){return d},ZP:function(){return A}});var o=e(9715),P=e(93766),t=e(22122),s=e(67294),b=e(49111),g=e(19650),M=e(96156),U=e(84305),I=e(39559),Z=e(28481),h=e(28991),i=e(8812),m=e(66758),v=e(96138),n=e(56725),_=e(53621),l=e(94184),c=e.n(l),T=s.forwardRef(function(L,R){var x=s.useContext(m.Z),C=x.groupProps,O=(0,h.Z)((0,h.Z)({},C),L),S=O.children,F=O.collapsible,j=O.defaultCollapsed,G=O.style,w=O.labelLayout,V=O.title,z=V===void 0?L.label:V,Y=O.tooltip,k=O.align,de=k===void 0?"start":k,me=O.direction,q=O.size,se=q===void 0?32:q,ee=O.titleStyle,N=O.titleRender,H=O.spaceProps,J=O.extra,oe=O.autoFocus,ve=(0,n.Z)(function(){return j||!1},{value:L.collapsed,onChange:L.onCollapse}),ie=(0,Z.Z)(ve,2),Q=ie[0],pe=ie[1],Ee=(0,s.useContext)(I.ZP.ConfigContext),D=Ee.getPrefixCls,X=D("pro-form-group"),K=F&&s.createElement(i.Z,{style:{marginRight:8},rotate:Q?void 0:90}),ue=s.createElement(_.Z,{label:K?s.createElement("div",null,K,z):z,tooltip:Y}),te=N?N(ue,L):ue,re=[],ce=s.Children.toArray(S).map(function(B,ae){var ne;return s.isValidElement(B)&&(B==null||(ne=B.props)===null||ne===void 0?void 0:ne.hidden)?(re.push(B),null):ae===0&&s.isValidElement(B)&&oe?s.cloneElement(B,(0,h.Z)((0,h.Z)({},B.props),{},{autoFocus:oe})):B});return s.createElement("div",{className:c()(X,(0,M.Z)({},"".concat(X,"-twoLine"),w==="twoLine")),style:G,ref:R},re.length>0&&s.createElement("div",{style:{display:"none"}},re),(z||Y||J)&&s.createElement("div",{className:"".concat(X,"-title"),style:ee,onClick:function(){pe(!Q)}},J?s.createElement("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"}},te,s.createElement("span",{onClick:function(ae){return ae.stopPropagation()}},J)):te),F&&Q?null:s.createElement(g.Z,(0,t.Z)({},H,{className:"".concat(X,"-container"),size:se,align:de,direction:me,style:(0,h.Z)({rowGap:0},H==null?void 0:H.style)}),ce))});T.displayName="ProForm-Group";var p=T,E=e(52241),r=e(7525);function u(L){return s.createElement(E.Z,(0,t.Z)({layout:"vertical",submitter:{render:function(x,C){return C.reverse()}},contentRender:function(x,C){return s.createElement(s.Fragment,null,x,C)}},L))}u.Group=p,u.useForm=P.Z.useForm,u.Item=r.Z;var f=u,a=e(56640),d=f.Group,A=f},53621:function(W,y,e){"use strict";var o=e(22385),P=e(69713),t=e(96156),s=e(84305),b=e(39559),g=e(67294),M=e(68628),U=e(47369),I=e.n(U),Z=e(94184),h=e.n(Z),i=function(v){var n=v.label,_=v.tooltip,l=v.ellipsis,c=v.subTitle,T=(0,g.useContext)(b.ZP.ConfigContext),p=T.getPrefixCls;if(!_&&!c)return g.createElement(g.Fragment,null,n);var E=p("pro-core-label-tip"),r=typeof _=="string"||g.isValidElement(_)?{title:_}:_,u=(r==null?void 0:r.icon)||g.createElement(M.Z,null);return g.createElement("div",{className:E,onMouseDown:function(a){return a.stopPropagation()},onMouseLeave:function(a){return a.stopPropagation()},onMouseMove:function(a){return a.stopPropagation()}},g.createElement("div",{className:h()("".concat(E,"-title"),(0,t.Z)({},"".concat(E,"-title-ellipsis"),l))},n),c&&g.createElement("div",{className:"".concat(E,"-subtitle")},c),_&&g.createElement(P.Z,r,g.createElement("span",{className:"".concat(E,"-icon")},u)))};y.Z=g.memo(i)},96138:function(){},56640:function(){},47369:function(){},70347:function(){},23689:function(W,y,e){"use strict";e.d(y,{yC:function(){return b},QX:function(){return M},FO:function(){return I},Vx:function(){return h},a1:function(){return m},Od:function(){return n}});var o=e(3182),P=e(94043),t=e.n(P),s=e(39031);function b(l){return g.apply(this,arguments)}function g(){return g=(0,o.Z)(t().mark(function l(c){return t().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,(0,s.v_)("/api/resources/search",c);case 2:return p.abrupt("return",p.sent);case 3:case"end":return p.stop()}},l)})),g.apply(this,arguments)}function M(l,c){return U.apply(this,arguments)}function U(){return U=(0,o.Z)(t().mark(function l(c,T){return t().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,(0,s.v_)("/api/resources/count",c,T);case 2:return E.abrupt("return",E.sent);case 3:case"end":return E.stop()}},l)})),U.apply(this,arguments)}function I(l,c){return Z.apply(this,arguments)}function Z(){return Z=(0,o.Z)(t().mark(function l(c,T){return t().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,(0,s.U2)("/api/resources/".concat(c),{},T);case 2:return E.abrupt("return",E.sent);case 3:case"end":return E.stop()}},l)})),Z.apply(this,arguments)}function h(l){return i.apply(this,arguments)}function i(){return i=(0,o.Z)(t().mark(function l(c){return t().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,(0,s.gz)("/api/resources",c);case 2:return p.abrupt("return",p.sent);case 3:case"end":return p.stop()}},l)})),i.apply(this,arguments)}function m(l){return v.apply(this,arguments)}function v(){return v=(0,o.Z)(t().mark(function l(c){return t().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,(0,s.v_)("/api/resources",c);case 2:return p.abrupt("return",p.sent);case 3:case"end":return p.stop()}},l)})),v.apply(this,arguments)}function n(l,c){return _.apply(this,arguments)}function _(){return _=(0,o.Z)(t().mark(function l(c,T){return t().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,(0,s.IV)("/api/resources/".concat(c),{},T);case 2:return E.abrupt("return",E.sent);case 3:case"end":return E.stop()}},l)})),_.apply(this,arguments)}},76410:function(W,y,e){"use strict";e.r(y);var o=e(58024),P=e(39144),t=e(34792),s=e(48086),b=e(11849),g=e(3182),M=e(2824),U=e(94043),I=e.n(U),Z=e(15196),h=e(5966),i=e(64317),m=e(43581),v=e(75362),n=e(23689),_=e(67294),l=e(85893),c=function(p){var E=(0,_.useState)(null),r=(0,M.Z)(E,2),u=r[0],f=r[1];(0,_.useEffect)(function(){var d=p.match.params.id,A=function(){var L=(0,g.Z)(I().mark(function R(x){var C;return I().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,(0,n.FO)(x);case 2:C=S.sent,f(C);case 4:case"end":return S.stop()}},R)}));return function(x){return L.apply(this,arguments)}}();A(d)},[]);var a=function(){var d=(0,g.Z)(I().mark(function A(L){var R;return I().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return console.log(L),C.next=3,(0,n.Vx)((0,b.Z)({_id:u._id},L));case 3:R=C.sent,console.log("resource",R),R instanceof Error?s.default.error(R.message):(s.default.success(R.message),m.m8.push("/resources"));case 6:case"end":return C.stop()}},A)}));return function(L){return d.apply(this,arguments)}}();return u&&(0,l.jsx)(v.ZP,{content:"My amazing role update form",children:(0,l.jsx)(P.Z,{bordered:!1,children:(0,l.jsxs)(Z.ZP,{hideRequiredMark:!1,style:{margin:"auto",marginTop:8,maxWidth:600},name:"basic",layout:"vertical",initialValues:u,onFinish:a,children:[(0,l.jsx)(h.Z,{width:"md",label:"Name",name:"name",value:u.name,rules:[{required:!0,message:"Please enter role name"}],placeholder:"Please enter role name"}),(0,l.jsx)(h.Z,{width:"md",label:"Alias",name:"alias",value:u.alias,rules:[{required:!0,message:"Please enter the Alias"}],placeholder:"Please enter role alias"}),(0,l.jsx)(i.Z,{width:"md",name:"type",label:"Resource type",options:[{value:"api",label:"Api"},{value:"client",label:"Client"}],placeholder:"Please select a type",rules:[{required:!0,message:"Please select a type"}]})]})})})};y.default=c},39031:function(W,y,e){"use strict";e.d(y,{U2:function(){return M},v_:function(){return U},gz:function(){return I},IV:function(){return Z}});var o=e(3182),P=e(11849),t=e(94043),s=e.n(t),b=e(11238),g=e(43581);b.ZP.interceptors.request.use(function(h,i){var m=localStorage.getItem("auth");if(m&&JSON.parse(m)){var v=JSON.parse(m),n=v.token;n?i.headers.Authorization="Bearer ".concat(n):i.headers.Authorization=null}return console.log("url","http://localhost:8002",h),i.headers["rbac-client-time"]="".concat(new Date," "),{url:"".concat("http://localhost:8002").concat(h),options:(0,P.Z)((0,P.Z)({},i),{},{interceptors:!0})}}),b.ZP.interceptors.response.use(function(){var h=(0,o.Z)(s().mark(function i(m,v){var n,_;return s().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(m.status!==401){c.next=4;break}return localStorage.removeItem("auth"),g.m8.replace({pathname:"/user/login"}),c.abrupt("return",{name:m.name});case 4:if(m.status!==400){c.next=12;break}return c.next=7,m.clone().json();case 7:return n=c.sent,console.log("data",n),_=new Error(n.message),_.error=n.error,c.abrupt("return",_);case 12:return c.abrupt("return",m);case 13:case"end":return c.stop()}},i)}));return function(i,m){return h.apply(this,arguments)}}());var M=function(){var h=(0,o.Z)(s().mark(function i(m,v,n){return s().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,b.ZP)(m,(0,P.Z)({method:"GET",params:v,skipErrorHandler:!0},n||{})));case 1:case"end":return l.stop()}},i)}));return function(m,v,n){return h.apply(this,arguments)}}(),U=function(){var h=(0,o.Z)(s().mark(function i(m,v,n){return s().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,b.ZP)(m,(0,P.Z)({method:"POST",data:v,skipErrorHandler:!0},n||{}));case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}},i)}));return function(m,v,n){return h.apply(this,arguments)}}(),I=function(){var h=(0,o.Z)(s().mark(function i(m,v,n){return s().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,b.ZP)(m,(0,P.Z)({method:"PUT",data:v,skipErrorHandler:!0},n||{})));case 1:case"end":return l.stop()}},i)}));return function(m,v,n){return h.apply(this,arguments)}}(),Z=function(){var h=(0,o.Z)(s().mark(function i(m,v,n){return s().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,b.ZP)(m,(0,P.Z)({method:"DELETE",data:v,skipErrorHandler:!0},n||{})));case 1:case"end":return l.stop()}},i)}));return function(m,v,n){return h.apply(this,arguments)}}()},39144:function(W,y,e){"use strict";e.d(y,{Z:function(){return E}});var o=e(96156),P=e(22122),t=e(67294),s=e(94184),b=e.n(s),g=e(98423),M=e(65632),U=function(r,u){var f={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&u.indexOf(a)<0&&(f[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,a=Object.getOwnPropertySymbols(r);d<a.length;d++)u.indexOf(a[d])<0&&Object.prototype.propertyIsEnumerable.call(r,a[d])&&(f[a[d]]=r[a[d]]);return f},I=function(u){var f=u.prefixCls,a=u.className,d=u.hoverable,A=d===void 0?!0:d,L=U(u,["prefixCls","className","hoverable"]);return t.createElement(M.C,null,function(R){var x=R.getPrefixCls,C=x("card",f),O=b()("".concat(C,"-grid"),a,(0,o.Z)({},"".concat(C,"-grid-hoverable"),A));return t.createElement("div",(0,P.Z)({},L,{className:O}))})},Z=I,h=function(r,u){var f={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&u.indexOf(a)<0&&(f[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,a=Object.getOwnPropertySymbols(r);d<a.length;d++)u.indexOf(a[d])<0&&Object.prototype.propertyIsEnumerable.call(r,a[d])&&(f[a[d]]=r[a[d]]);return f},i=function(u){return t.createElement(M.C,null,function(f){var a=f.getPrefixCls,d=u.prefixCls,A=u.className,L=u.avatar,R=u.title,x=u.description,C=h(u,["prefixCls","className","avatar","title","description"]),O=a("card",d),S=b()("".concat(O,"-meta"),A),F=L?t.createElement("div",{className:"".concat(O,"-meta-avatar")},L):null,j=R?t.createElement("div",{className:"".concat(O,"-meta-title")},R):null,G=x?t.createElement("div",{className:"".concat(O,"-meta-description")},x):null,w=j||G?t.createElement("div",{className:"".concat(O,"-meta-detail")},j,G):null;return t.createElement("div",(0,P.Z)({},C,{className:S}),F,w)})},m=i,v=e(90642),n=e(71230),_=e(15746),l=e(97647),c=function(r,u){var f={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&u.indexOf(a)<0&&(f[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,a=Object.getOwnPropertySymbols(r);d<a.length;d++)u.indexOf(a[d])<0&&Object.prototype.propertyIsEnumerable.call(r,a[d])&&(f[a[d]]=r[a[d]]);return f};function T(r){var u=r.map(function(f,a){return t.createElement("li",{style:{width:"".concat(100/r.length,"%")},key:"action-".concat(a)},t.createElement("span",null,f))});return u}var p=t.forwardRef(function(r,u){var f,a,d=t.useContext(M.E_),A=d.getPrefixCls,L=d.direction,R=t.useContext(l.Z),x=function(_e){var $;($=r.onTabChange)===null||$===void 0||$.call(r,_e)},C=function(){var _e;return t.Children.forEach(r.children,function($){$&&$.type&&$.type===Z&&(_e=!0)}),_e},O=r.prefixCls,S=r.className,F=r.extra,j=r.headStyle,G=j===void 0?{}:j,w=r.bodyStyle,V=w===void 0?{}:w,z=r.title,Y=r.loading,k=r.bordered,de=k===void 0?!0:k,me=r.size,q=r.type,se=r.cover,ee=r.actions,N=r.tabList,H=r.children,J=r.activeTabKey,oe=r.defaultActiveTabKey,ve=r.tabBarExtraContent,ie=r.hoverable,Q=r.tabProps,pe=Q===void 0?{}:Q,Ee=c(r,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),D=A("card",O),X=V.padding===0||V.padding==="0px"?{padding:24}:void 0,K=t.createElement("div",{className:"".concat(D,"-loading-block")}),ue=t.createElement("div",{className:"".concat(D,"-loading-content"),style:X},t.createElement(n.Z,{gutter:8},t.createElement(_.Z,{span:22},K)),t.createElement(n.Z,{gutter:8},t.createElement(_.Z,{span:8},K),t.createElement(_.Z,{span:15},K)),t.createElement(n.Z,{gutter:8},t.createElement(_.Z,{span:6},K),t.createElement(_.Z,{span:18},K)),t.createElement(n.Z,{gutter:8},t.createElement(_.Z,{span:13},K),t.createElement(_.Z,{span:9},K)),t.createElement(n.Z,{gutter:8},t.createElement(_.Z,{span:4},K),t.createElement(_.Z,{span:3},K),t.createElement(_.Z,{span:16},K))),te=J!==void 0,re=(0,P.Z)((0,P.Z)({},pe),(f={},(0,o.Z)(f,te?"activeKey":"defaultActiveKey",te?J:oe),(0,o.Z)(f,"tabBarExtraContent",ve),f)),ce,B=N&&N.length?t.createElement(v.Z,(0,P.Z)({size:"large"},re,{className:"".concat(D,"-head-tabs"),onChange:x}),N.map(function(le){return t.createElement(v.Z.TabPane,{tab:le.tab,disabled:le.disabled,key:le.key})})):null;(z||F||B)&&(ce=t.createElement("div",{className:"".concat(D,"-head"),style:G},t.createElement("div",{className:"".concat(D,"-head-wrapper")},z&&t.createElement("div",{className:"".concat(D,"-head-title")},z),F&&t.createElement("div",{className:"".concat(D,"-extra")},F)),B));var ae=se?t.createElement("div",{className:"".concat(D,"-cover")},se):null,ne=t.createElement("div",{className:"".concat(D,"-body"),style:V},Y?ue:H),Pe=ee&&ee.length?t.createElement("ul",{className:"".concat(D,"-actions")},T(ee)):null,he=(0,g.Z)(Ee,["onTabChange"]),fe=me||R,ge=b()(D,(a={},(0,o.Z)(a,"".concat(D,"-loading"),Y),(0,o.Z)(a,"".concat(D,"-bordered"),de),(0,o.Z)(a,"".concat(D,"-hoverable"),ie),(0,o.Z)(a,"".concat(D,"-contain-grid"),C()),(0,o.Z)(a,"".concat(D,"-contain-tabs"),N&&N.length),(0,o.Z)(a,"".concat(D,"-").concat(fe),fe),(0,o.Z)(a,"".concat(D,"-type-").concat(q),!!q),(0,o.Z)(a,"".concat(D,"-rtl"),L==="rtl"),a),S);return t.createElement("div",(0,P.Z)({ref:u},he,{className:ge}),ce,ae,ne,Pe)});p.Grid=Z,p.Meta=m;var E=p},58024:function(W,y,e){"use strict";var o=e(38663),P=e.n(o),t=e(70347),s=e.n(t),b=e(18106),g=e(13062),M=e(89032)},15746:function(W,y,e){"use strict";var o=e(21584);y.Z=o.Z},89032:function(W,y,e){"use strict";var o=e(38663),P=e.n(o),t=e(6999)},71230:function(W,y,e){"use strict";var o=e(92820);y.Z=o.Z},13062:function(W,y,e){"use strict";var o=e(38663),P=e.n(o),t=e(6999)}}]);
