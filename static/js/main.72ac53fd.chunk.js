(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,n){e.exports=n(303)},165:function(e,t,n){},302:function(e,t,n){},303:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c),i=n(81),u=n(26),l=n(21),s=n(6),m=n(83),d=n.n(m),p=n(31),E=n(130),h={"content-type":"application/json;charset=UTF-8"},f="https://simpleexpressapi.azurewebsites.net",b=new Headers({Accept:"application/json","Content-Type":"application/json;charset=UTF-8"});function C(e){return O.apply(this,arguments)}function O(){return(O=Object(E.a)(d.a.mark(function e(t){var n,a,r,c=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c.length>1&&void 0!==c[1]?c[1]:h,n=c.length>2&&void 0!==c[2]?c[2]:{},a=c.length>3&&void 0!==c[3]?c[3]:"GET",r=Object(s.a)({headers:{"Content-Type":"application/json"},method:a},"GET"!==a&&{body:JSON.stringify(n)}),e.next=6,new Promise(function(e,n){fetch(t,Object(s.a)({},r)).then(function(e){return e.ok?e.json():null}).then(function(t){return e(t)}).catch(function(e){return console.log("Looks like there was a problem: \n",e),null})}).then(function(e){return e});case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}b.append("Access-Control-Allow-Origin",f),b.append("Access-Control-Allow-Credentials","true");var v={FETCHED_RESULT:"FETCHED_RESULT",FETCHING_RESULT:"FETCHING_RESULT",SHOW_ERROR:"SHOW_ERROR",RESULT:"RESULT",RESET_STATE:"RESET_STATE",CLEAR_ERROR:"CLEAR_ERROR"},y=function(e){return Object(s.a)({type:v.FETCHING_RESULT},e)},g=function(e){return{type:v.FETCHED_RESULT,payload:e}},j=function(e){return Object(s.a)({type:v.SHOW_ERROR},e)},F=function(e){return function(t){t(y()),function(e){return C("".concat(f,"/update"),b,e,"POST").then(function(t){return Object(p.a)({},e.key,t)})}(Object(s.a)({},e)).then(function(e){t(g(Object(s.a)({},e)))}).catch(function(e){return t(j(e))})}};function R(e){return function(t){t(y({customerList:[]})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return C("".concat(f,"/get")+(e.id&&"?id="+e.id||"")).then(function(t){return Object(p.a)({},e.key,t)})}(e).then(function(e){t(g(Object(s.a)({},e)))}).catch(function(e){return t(j(e))})}}function S(e){return function(t){t(y()),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return C("".concat(f,"/insert"),"",e,"POST").then(function(t){return Object(p.a)({},e.key,t)})}(Object(s.a)({},e,{key:"isCreatedUser"})).then(function(e){t(g(Object(s.a)({},e)))}).catch(function(e){return t(j(e))})}}function k(e){return function(t){t(y()),function(e){return C("".concat(f,"/delete"),"",e,"DELETE").then(function(t){return Object(p.a)({},e.key,t)})}({id:e,key:"isCustomerDeleted"}).then(function(e){e.isCustomerDeleted&&0===e.isCustomerDeleted.ok?t(j({error:"Couldn't delete user. This might happen if user is already not found or server Error !!"})):t(g(Object(s.a)({},e,{customerContact:[]})))}).catch(function(e){return t(j(e))})}}var T={customerList:[],customerContact:[]},w=n(7),U=n(131),_=n(132),L=n(308),A=n(133),D=n(134),N=n(143),x=n(135),H=n(55),P=n(142),z=n(304),G=n(307),W=n(305),I=n(306),M=n(57),V=n.n(M),q=n(136),J=n.n(q),B=n(137),Q=(n(163),n(164),n(165),n(144)),$=n(138),Y=n.n($),Z=function(e){var t=e.input,n=e.data,a=e.valueField,c=e.textField,o=e.defaultValue,i=Object(Q.a)(e,["input","data","valueField","textField","defaultValue"]);return r.a.createElement(Y.a,Object.assign({data:n,valueField:a,textField:c,onChange:t.onChange,defaultValue:o},t,i))},K=function(e){var t=e.input,n=e.label,a=e.type,c=e.placeholder,o=e.meta,i=o.touched,u=o.error;return r.a.createElement("div",null,r.a.createElement("label",null,n),r.a.createElement("div",{className:"input"},r.a.createElement("p",{className:u&&i?"zero-button-margin":""},r.a.createElement("input",Object.assign({className:u&&i?"zero-button-margin":""},t,{placeholder:c,type:a}))),i&&u&&r.a.createElement("p",{className:"error"},r.a.createElement("span",null,u))))},X=function(e){function t(e){var n;return Object(A.a)(this,t),(n=Object(N.a)(this,Object(x.a)(t).call(this,e))).componentState=function(){return{contactFields:[],isFieldUpdated:!1,customerContact:[]}},n.onChange=function(e){("undefined"===typeof n.props.customerContact[0]||n.props.customerContact[0]&&e.id!==n.props.customerContact[0].id)&&n.setState({contactFields:[],isFieldUpdated:!1},function(){return n.props.getCustomer(Object(s.a)({},e,{key:"customerContact"}))})},n.handleSubmit=function(e,t){var n=[];delete e.customerList,Object.keys(e).forEach(function(t){V.a.isObject(e[t])&&n.push({phone:e[t].phone,isActive:e[t].isActive.value})}),t.submitContact({key:"customerContact",contactDetail:n,id:t.customerContact[0]._id})},n.onDelete=function(e,t,n){n({key:"customerContact",contactDetail:t[0].contactDetail&&t[0].contactDetail.filter(function(t,n){return e!==n}),id:t[0]._id})},n.createUser=function(){n.props.history.push("/createnewcustomer")},n.addContact=function(){var e=n.state.contactFields;e.push({phone:"",isActive:0}),n.setState({contactFields:e,isFieldUpdated:!1})},n.getContactFields=function(e){var t=n.props,a=t.submitting,c=t.submitContact,o=t.customerContact,i=Object(H.a)(n),u=i.onDelete,l=i.addContact,s=n.state.contactFields,m=[{value:0,text:"deactivate"},{value:1,text:"activate"}],d=s&&s.map(function(e,t){return r.a.createElement(z.a,{key:"field_".concat(t),name:"section_".concat(t)},r.a.createElement("tr",{key:"row_".concat(t)},r.a.createElement("td",null,r.a.createElement(G.a,{name:"phone",component:"input",type:"text",placeholder:"Phone number"})),r.a.createElement("td",null,r.a.createElement(G.a,{name:"isActive",component:Z,data:m,valueField:"value",textField:"text",defaultValue:e.isActive})),r.a.createElement("td",null," ",r.a.createElement("button",{type:"button",onClick:function(e){return u(t,o,c)}},"Delete")," ")))});return r.a.createElement(r.a.Fragment,null,d,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("button",{type:"button",onClick:l},"Add Number"))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("button",{type:"submit",disabled:a},"Update"))))},n.handleErrorClick=function(){n.props.handleErrorClick(),n.props.history.push("/")},n.state=n.componentState(),n}return Object(P.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){this.props.getCustomer({key:"customerList"})}},{key:"componentDidUpdate",value:function(e,t){var n=this,a={},r=this.props.customerContact,c=V.a.isEqual(r,e.customerContact);c&&(!c||!e.customerContact[0]||V.a.isEqual(this.state.contactFields,this.props.customerContact[0].contactDetail))||this.state.isFieldUpdated||(r&&r[0]&&r[0].contactDetail.forEach(function(e,t){a["section_".concat(t,".phone")]=e.phone,a["section_".concat(t,".isActive")]=e.isActive}),Object.keys(a).forEach(function(e){return n.props.change(e,a[e])}),this.setState({isFieldUpdated:!0}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.customerList,a=t.isFetching,c=t.customerContact,o=t.handleSubmit,i=t.deleteSelectedUser,u=t.submitContact,l=t.error;return t.isError&&Object(B.confirmAlert)({title:"Error",message:l||"There is an Error Sorry !!",buttons:[{label:"Ok",onClick:function(){return e.handleErrorClick("Click Yes")}}]}),r.a.createElement(J.a,{active:a,spinner:!0},r.a.createElement(W.a,{onSubmit:o(function(t){return e.handleSubmit(t,{customerContact:c,submitContact:u})})},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"3"},r.a.createElement(G.a,{busy:a,busySpinner:r.a.createElement("span",{className:"fas fa-sync fa-spin"}),name:"customerList",component:Z,data:n,valueField:"id",textField:"name",placeholder:"Select Customer",onChange:this.onChange}))),!!c.length&&this.getContactFields(),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"3"},r.a.createElement("button",{type:"button",onClick:this.createUser},"Create User"))),c[0]&&r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"3"},r.a.createElement("button",{type:"button",onClick:function(e){return i(c[0]._id)}},"Delete Selected User")))||null))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.contactFields&&t.contactFields.length>0&&0===e.customerContact.length&&window.location.reload(),{contactFields:e.customerContact[0]&&e.customerContact[0].contactDetail}}}]),t}(a.Component),ee=Object(I.a)({form:"ContactForm",enableReinitialize:!0})(X),te=Object(l.b)(function(e){return{customerList:e.app.customerList||[],isFetching:e.app.isFetching,customerContact:e.app.customerContact||[],error:e.app.error,isError:e.app.isError}},function(e){return{getCustomer:function(t){return e(R(t))},submitContact:function(t){return e(F(t))},deleteSelectedUser:function(t){return e(k(t))},handleErrorClick:function(t){return e(function(e){e({type:v.CLEAR_ERROR})})}}})(ee),ne=n(141),ae=function(e){return e||"string"===typeof e?void 0:"Required"},re=function(e){return e&&e.length>15?"Must be 15 characters or less":void 0},ce=function(e){return e&&e.length<2?"Must be 2 characters or more":void 0},oe=function(e){return e&&/^[a-zA-Z ]*$/.test(e)?void 0:"Must be alphabetic only"},ie=Object(I.a)({form:"newCustomer",enableReinitialize:!0})(function(e){var t=Object(a.useState)(!1),n=Object(ne.a)(t,2),c=n[0],o=n[1];return e.toRedirect||c?r.a.createElement(u.a,{to:"/"}):r.a.createElement(W.a,{name:"newCustomer",onSubmit:e.handleSubmit(e.createNewCustomer)},r.a.createElement("p",{className:"heading"},"Create New User"),r.a.createElement(G.a,{name:"name",component:K,type:"text",placeholder:"Customer Name",validate:[ae,re,ce,oe]}),e.touched&&e.error&&r.a.createElement("span",null,e.error),r.a.createElement("p",null,r.a.createElement("button",{type:"Submit"},"Create Customer")),r.a.createElement("p",null,r.a.createElement("button",{type:"button",onClick:function(e){return o(!0)}},"Redirect To Customer Contact Page ")))}),ue=Object(l.b)(function(e){return{toRedirect:e.app.isCreatedUser&&e.app.isCreatedUser.ok}},function(e){return{createNewCustomer:function(t){return e(S(t))}}})(ie);n(302),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=Object(w.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.FETCHING_RESULT:return Object(s.a)({},e,{isFetching:!0,isError:!1});case v.SHOW_ERROR:return Object(s.a)({},e,{isFetching:!1,isError:!0,error:t.error});case v.CLEAR_ERROR:return Object(s.a)({},e,{isError:!1,error:null});case v.FETCHED_RESULT:return Object(s.a)({},e,{isFetching:!1,isError:!1},t.payload||[]);case v.RESET_STATE:return Object(s.a)({},e,{isFetching:!1,isError:!1,status:v.QUOTE,resultQuote:{}});default:return Object(s.a)({},e)}},form:L.a}),se=Object(U.createLogger)(),me=Object(w.d)(le,Object(w.a)(_.a,se)),de=function(){return r.a.createElement("strong",null,"Sorry No Page Found")},pe=r.a.createElement(l.a,{store:me},r.a.createElement(function(){return r.a.createElement(i.a,{basename:"/simple-redux-form"},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/createnewcustomer",component:ue}),r.a.createElement(u.b,{path:"/",component:te}),r.a.createElement(u.b,{component:de})))},null));o.a.render(pe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[145,1,2]]]);
//# sourceMappingURL=main.72ac53fd.chunk.js.map