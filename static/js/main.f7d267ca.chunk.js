(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(t,e,n){t.exports=n(302)},164:function(t,e,n){},301:function(t,e,n){},302:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(15),o=n.n(c),i=n(81),u=n(26),s=n(21),l=n(6),m=n(83),d=n.n(m),p=n(31),E=n(130),f={"content-type":"application/json;charset=UTF-8"},h="https://simpleexpressapi.azurewebsites.net",b=new Headers({Accept:"application/json","Content-Type":"application/json;charset=UTF-8"});function C(t){return O.apply(this,arguments)}function O(){return(O=Object(E.a)(d.a.mark(function t(e){var n,r,a,c=arguments;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c.length>1&&void 0!==c[1]?c[1]:f,n=c.length>2&&void 0!==c[2]?c[2]:{},r=c.length>3&&void 0!==c[3]?c[3]:"GET",a=Object(l.a)({headers:{"Content-Type":"application/json"},method:r},"GET"!==r&&{body:JSON.stringify(n)}),t.next=6,new Promise(function(t,n){fetch(e,Object(l.a)({},a)).then(function(t){return t.ok?t.json():null}).then(function(e){return t(e)}).catch(function(t){return console.log("Looks like there was a problem: \n",t),null})}).then(function(t){return t});case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}b.append("Access-Control-Allow-Origin",h),b.append("Access-Control-Allow-Credentials","true");var y={FETCHED_RESULT:"FETCHED_RESULT",FETCHING_RESULT:"FETCHING_RESULT",SHOW_ERROR:"SHOW_ERROR",RESULT:"RESULT",RESET_STATE:"RESET_STATE",CLEAR_ERROR:"CLEAR_ERROR"},v=function(t){return Object(l.a)({type:y.FETCHING_RESULT},t)},g=function(t){return{type:y.FETCHED_RESULT,payload:t}},j=function(t){return Object(l.a)({type:y.SHOW_ERROR},t)},F=function(t){return function(e){e(v()),function(t){return C("".concat(h,"/update"),b,t,"POST").then(function(e){return Object(p.a)({},t.key,e)})}(Object(l.a)({},t)).then(function(t){e(g(Object(l.a)({},t)))}).catch(function(t){return e(j(t))})}};function R(t){return function(e){e(v({customerList:[]})),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return C("".concat(h,"/get")+(t.id&&"?id="+t.id||"")).then(function(e){return Object(p.a)({},t.key,e)})}(t).then(function(t){e(g(Object(l.a)({},t)))}).catch(function(t){return e(j(t))})}}function S(t){return function(e){e(v()),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return C("".concat(h,"/insert"),"",t,"POST").then(function(e){return Object(p.a)({},t.key,e)})}(Object(l.a)({},t,{key:"isCreatedUser"})).then(function(t){e(g(Object(l.a)({},t)))}).catch(function(t){return e(j(t))})}}function k(t){return function(e){e(v()),function(t){return C("".concat(h,"/delete"),"",t,"DELETE").then(function(e){return Object(p.a)({},t.key,e)})}({id:t,key:"isCustomerDeleted"}).then(function(t){t.isCustomerDeleted&&0===t.isCustomerDeleted.ok?e(j({error:"Couldn't delete user. This might happen if user is already not found or server Error !!"})):e(g(Object(l.a)({},t,{customerContact:[]})))}).catch(function(t){return e(j(t))})}}var T={customerList:[],customerContact:[]},w=n(7),U=n(131),_=n(132),L=n(307),D=n(133),A=n(134),x=n(142),H=n(135),N=n(55),P=n(141),G=n(303),W=n(306),I=n(304),V=n(305),z=n(57),J=n.n(z),q=n(136),B=n.n(q),Q=n(137),M=(n(162),n(163),n(164),n(143)),Y=n(138),$=n.n(Y),K=function(t){var e=t.input,n=t.data,r=t.valueField,c=t.textField,o=t.defaultValue,i=Object(M.a)(t,["input","data","valueField","textField","defaultValue"]);return a.a.createElement($.a,Object.assign({data:n,valueField:r,textField:c,onChange:e.onChange,defaultValue:o},e,i))},X=function(t){function e(t){var n;return Object(D.a)(this,e),(n=Object(x.a)(this,Object(H.a)(e).call(this,t))).componentState=function(){return{contactFields:[],isFieldUpdated:!1,customerContact:[]}},n.onChange=function(t){("undefined"===typeof n.props.customerContact[0]||n.props.customerContact[0]&&t.id!==n.props.customerContact[0].id)&&n.setState({contactFields:[],isFieldUpdated:!1},function(){return n.props.getCustomer(Object(l.a)({},t,{key:"customerContact"}))})},n.handleSubmit=function(t,e){var n=[];delete t.customerList,Object.keys(t).forEach(function(e){J.a.isObject(t[e])&&n.push({phone:t[e].phone,isActive:t[e].isActive.value})}),e.submitContact({key:"customerContact",contactDetail:n,id:e.customerContact[0]._id})},n.onDelete=function(t,e,n){n({key:"customerContact",contactDetail:e[0].contactDetail&&e[0].contactDetail.filter(function(e,n){return t!==n}),id:e[0]._id})},n.createUser=function(){n.props.history.push("/createnewcustomer")},n.addContact=function(){var t=n.state.contactFields;t.push({phone:"",isActive:0}),n.setState({contactFields:t,isFieldUpdated:!1})},n.getContactFields=function(t){var e=n.props,r=e.submitting,c=e.submitContact,o=e.customerContact,i=Object(N.a)(n),u=i.onDelete,s=i.addContact,l=n.state.contactFields,m=[{value:0,text:"deactivate"},{value:1,text:"activate"}],d=l.map(function(t,e){return a.a.createElement(G.a,{key:"field_".concat(e),name:"section_".concat(e)},a.a.createElement("tr",{key:"row_".concat(e)},a.a.createElement("td",null,a.a.createElement(W.a,{name:"phone",component:"input",type:"text",placeholder:"Phone number"})),a.a.createElement("td",null,a.a.createElement(W.a,{name:"isActive",component:K,data:m,valueField:"value",textField:"text",defaultValue:t.isActive})),a.a.createElement("td",null," ",a.a.createElement("button",{type:"button",onClick:function(t){return u(e,o,c)}},"Delete")," ")))});return a.a.createElement(a.a.Fragment,null,d,a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("button",{type:"button",onClick:s},"Add Number"))),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("button",{type:"submit",disabled:r},"Update"))))},n.handleErrorClick=function(){n.props.handleErrorClick(),n.props.history.push("/")},n.state=n.componentState(),n}return Object(P.a)(e,t),Object(A.a)(e,[{key:"componentDidMount",value:function(){this.props.getCustomer({key:"customerList"})}},{key:"componentDidUpdate",value:function(t,e){var n=this,r={},a=this.props.customerContact,c=J.a.isEqual(a,t.customerContact);c&&(!c||!t.customerContact[0]||J.a.isEqual(this.state.contactFields,this.props.customerContact[0].contactDetail))||this.state.isFieldUpdated||(a&&a[0]&&a[0].contactDetail.forEach(function(t,e){r["section_".concat(e,".phone")]=t.phone,r["section_".concat(e,".isActive")]=t.isActive}),Object.keys(r).forEach(function(t){return n.props.change(t,r[t])}),this.setState({isFieldUpdated:!0}))}},{key:"render",value:function(){var t=this,e=this.props,n=e.customerList,r=e.isFetching,c=e.customerContact,o=e.handleSubmit,i=e.deleteSelectedUser,u=e.submitContact,s=e.error;return e.isError&&Object(Q.confirmAlert)({title:"Error",message:s||"There is an Error Sorry !!",buttons:[{label:"Ok",onClick:function(){return t.handleErrorClick("Click Yes")}}]}),a.a.createElement(B.a,{active:r,spinner:!0},a.a.createElement(I.a,{onSubmit:o(function(e){return t.handleSubmit(e,{customerContact:c,submitContact:u})})},a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",{colSpan:"3"},a.a.createElement(W.a,{busy:r,busySpinner:a.a.createElement("span",{className:"fas fa-sync fa-spin"}),name:"customerList",component:K,data:n,valueField:"id",textField:"name",placeholder:"Select Customer",onChange:this.onChange}))),!!c.length&&this.getContactFields(),a.a.createElement("tr",null,a.a.createElement("td",{colSpan:"3"},a.a.createElement("button",{type:"button",onClick:this.createUser},"Create User"))),c[0]&&a.a.createElement("tr",null,a.a.createElement("td",{colSpan:"3"},a.a.createElement("button",{type:"button",onClick:function(t){return i(c[0]._id)}},"Delete Selected User")))||null))))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return e.contactFields&&e.contactFields.length>0&&0===t.customerContact.length&&window.location.reload(),{contactFields:t.customerContact[0]&&t.customerContact[0].contactDetail}}}]),e}(r.Component),Z=Object(V.a)({form:"ContactForm",enableReinitialize:!0})(X),tt=Object(s.b)(function(t){return{customerList:t.app.customerList||[],isFetching:t.app.isFetching,customerContact:t.app.customerContact||[],error:t.app.error,isError:t.app.isError}},function(t){return{getCustomer:function(e){return t(R(e))},submitContact:function(e){return t(F(e))},deleteSelectedUser:function(e){return t(k(e))},handleErrorClick:function(e){return t(function(t){t({type:y.CLEAR_ERROR})})}}})(Z),et=Object(V.a)({form:"newCustomer",enableReinitialize:!0})(function(t){return t.toRedirect?a.a.createElement(u.a,{to:"/"}):a.a.createElement(I.a,{name:"newCustomer",onSubmit:t.handleSubmit(t.createNewCustomer)},a.a.createElement(W.a,{name:"name",component:"input",type:"text",placeholder:"Customer Name"}),a.a.createElement("button",{type:"Submit"},"Create Customer"),a.a.createElement("button",{type:"button",onClick:function(){return a.a.createElement(u.a,{to:"/"})}},"Redirect To Customer Contact Page "))}),nt=Object(s.b)(function(t){return{toRedirect:t.app.isCreatedUser&&t.app.isCreatedUser.ok}},function(t){return{createNewCustomer:function(e){return t(S(e))}}})(et);n(301),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var rt=Object(w.c)({app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y.FETCHING_RESULT:return Object(l.a)({},t,{isFetching:!0,isError:!1});case y.SHOW_ERROR:return Object(l.a)({},t,{isFetching:!1,isError:!0,error:e.error});case y.CLEAR_ERROR:return Object(l.a)({},t,{isError:!1,error:null});case y.FETCHED_RESULT:return Object(l.a)({},t,{isFetching:!1,isError:!1},e.payload||[]);case y.RESET_STATE:return Object(l.a)({},t,{isFetching:!1,isError:!1,status:y.QUOTE,resultQuote:{}});default:return Object(l.a)({},t)}},form:L.a}),at=Object(U.createLogger)(),ct=Object(w.d)(rt,Object(w.a)(_.a,at)),ot=function(){return a.a.createElement("strong",null,"Sorry No Page Found")},it=a.a.createElement(s.a,{store:ct},a.a.createElement(function(){return a.a.createElement(i.a,{basename:"/simple-redux-form"},a.a.createElement(u.d,null,a.a.createElement(u.b,{path:"/createnewcustomer",component:nt}),a.a.createElement(u.b,{path:"/",component:tt}),a.a.createElement(u.b,{component:ot})))},null));o.a.render(it,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[144,1,2]]]);
//# sourceMappingURL=main.f7d267ca.chunk.js.map