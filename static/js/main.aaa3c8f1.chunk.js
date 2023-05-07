(this["webpackJsonpinvoice-generator"]=this["webpackJsonpinvoice-generator"]||[]).push([[0],{58:function(e,t,s){},59:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){"use strict";s.r(t);var i=s(2),a=s.n(i),l=s(21),n=s.n(l),c=(s(58),s(10)),r=s(11),o=s(17),d=s(16),h=(s(32),s(59),s(51)),j=s(14),b=s(27),m=s(25),u=s(15),p=s(19),x=s(7),O=s(52),v=s(34),f=s(24),y=s(26),N=s(1),w=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(N.jsxs)(y.a,{className:"my-1 flex-nowrap",children:[null!=this.props.cellData.leading&&Object(N.jsx)(y.a.Text,{className:"bg-light fw-bold border-0 text-secondary px-2",children:Object(N.jsx)("span",{className:"border border-2 border-secondary rounded-circle d-flex align-items-center justify-content-center small",style:{width:"20px",height:"20px"},children:this.props.cellData.leading})}),Object(N.jsx)(x.a.Control,{className:this.props.cellData.textAlign,type:this.props.cellData.type,placeholder:this.props.cellData.placeholder,min:this.props.cellData.min,name:this.props.cellData.name,id:this.props.cellData.id,value:this.props.cellData.value,step:this.props.cellData.step,presicion:this.props.cellData.presicion,"aria-label":this.props.cellData.name,onChange:this.props.onItemizedItemEdit,required:!0})]})}}]),s}(a.a.Component),g=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var e=this.props.onItemizedItemEdit,t=this.props.currency,s=this.props.onRowDel,i=this.props.items.map((function(i){return Object(N.jsx)(I,{onItemizedItemEdit:e,item:i,onDelEvent:s.bind(this),currency:t},i.id)}));return Object(N.jsxs)("div",{children:[Object(N.jsxs)(v.a,{children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"ITEM"}),Object(N.jsx)("th",{children:"QTY"}),Object(N.jsx)("th",{children:"PRICE/RATE"}),Object(N.jsx)("th",{className:"text-center",children:"ACTION"})]})}),Object(N.jsx)("tbody",{children:i})]}),Object(N.jsx)(p.a,{className:"fw-bold",onClick:this.props.onRowAdd,children:"Add Item"})]})}}]),s}(a.a.Component),I=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"onDelEvent",value:function(){this.props.onDelEvent(this.props.item)}},{key:"render",value:function(){return Object(N.jsxs)("tr",{children:[Object(N.jsxs)("td",{style:{width:"100%"},children:[Object(N.jsx)(w,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{type:"text",name:"name",placeholder:"Item name",value:this.props.item.name,id:this.props.item.id}}),Object(N.jsx)(w,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{type:"text",name:"description",placeholder:"Item description",value:this.props.item.description,id:this.props.item.id}})]}),Object(N.jsx)("td",{style:{minWidth:"70px"},children:Object(N.jsx)(w,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{type:"number",name:"quantity",min:1,step:"1",value:this.props.item.quantity,id:this.props.item.id}})}),Object(N.jsx)("td",{style:{minWidth:"130px"},children:Object(N.jsx)(w,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{leading:this.props.currency,type:"number",name:"price",min:1,step:"0.01",presicion:2,textAlign:"text-end",value:this.props.item.price,id:this.props.item.id}})}),Object(N.jsx)("td",{className:"text-center",style:{minWidth:"50px"},children:Object(N.jsx)(f.d,{onClick:this.onDelEvent.bind(this),style:{height:"33px",width:"33px",padding:"7.5px"},className:"text-white mt-1 btn btn-danger"})})]})}}]),s}(a.a.Component),C=g,T=s(20),F=s(39),D=s(41),E=s.n(D),A=s(47),S=s(29),M="ADD_INVOICE",k="UPDATE_INVOICE",q="DELETE_INVOICE";function R(){E()(document.querySelector("#invoiceCapture")).then((function(e){var t=e.toDataURL("image/png",1),s=new A.a({orientation:"portrait",unit:"pt",format:[612,792]});s.internal.scaleFactor=1;var i=s.getImageProperties(t),a=s.internal.pageSize.getWidth(),l=i.height*a/i.width;s.addImage(t,"PNG",0,0,a,l),s.save("invoice-001.pdf")}))}var B=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var i;return Object(c.a)(this,s),(i=t.call(this,e)).handleSaveInvoice=i.handleSaveInvoice.bind(Object(b.a)(i)),i}return Object(r.a)(s,[{key:"handleSaveInvoice",value:function(){var e={invoiceId:Math.floor(1e3*Math.random())+Date.now(),items:this.props.items||[],billedFrom:this.props.info.billFrom||"",billedFromAddress:this.props.info.billFromAddress||"",billedFromMail:this.props.info.billFromMail||"",billedTo:this.props.info.billTo||"",billedToAddress:this.props.info.billToAddress||"",billedToMail:this.props.info.billToMail||"",dateOfIssue:this.props.info.dateOfIssue||"",currency:this.props.currency||"",subTotal:this.props.subTotal||0,tax:this.props.taxAmmount||0,discount:this.props.discountAmmount||0,total:this.props.total||0};this.props.dispatch({type:M,payload:e}),this.props.closeModal()}},{key:"render",value:function(){var e=this;return Object(N.jsxs)("div",{children:[Object(N.jsxs)(T.a,{show:this.props.showModal,onHide:this.props.closeModal,size:"lg",centered:!0,children:[Object(N.jsxs)("div",{id:"invoiceCapture",children:[Object(N.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4",children:[Object(N.jsxs)("div",{className:"w-100",children:[Object(N.jsx)("h4",{className:"fw-bold my-2",children:this.props.info.billFrom||"John Uberbacher"}),Object(N.jsxs)("h6",{className:"fw-bold text-secondary mb-1",children:["Invoice #: ",this.props.info.invoiceNumber||""]})]}),Object(N.jsxs)("div",{className:"text-end ms-4",children:[Object(N.jsx)("h6",{className:"fw-bold mt-1 mb-2",children:"Amount\xa0Due:"}),Object(N.jsxs)("h5",{className:"fw-bold text-secondary",children:[" ",this.props.currency," ",this.props.total]})]})]}),Object(N.jsxs)("div",{className:"p-4",children:[Object(N.jsxs)(m.a,{className:"mb-4",children:[Object(N.jsxs)(u.a,{md:4,children:[Object(N.jsx)("div",{className:"fw-bold",children:"Billed to:"}),Object(N.jsx)("div",{children:this.props.info.billTo||""}),Object(N.jsx)("div",{children:this.props.info.billToAddress||""}),Object(N.jsx)("div",{children:this.props.info.billToEmail||""})]}),Object(N.jsxs)(u.a,{md:4,children:[Object(N.jsx)("div",{className:"fw-bold",children:"Billed From:"}),Object(N.jsx)("div",{children:this.props.info.billFrom||""}),Object(N.jsx)("div",{children:this.props.info.billFromAddress||""}),Object(N.jsx)("div",{children:this.props.info.billFromEmail||""})]}),Object(N.jsxs)(u.a,{md:4,children:[Object(N.jsx)("div",{className:"fw-bold mt-2",children:"Date Of Issue:"}),Object(N.jsx)("div",{children:this.props.info.dateOfIssue||""})]})]}),Object(N.jsxs)(v.a,{className:"mb-0",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"QTY"}),Object(N.jsx)("th",{children:"DESCRIPTION"}),Object(N.jsx)("th",{className:"text-end",children:"PRICE"}),Object(N.jsx)("th",{className:"text-end",children:"AMOUNT"})]})}),Object(N.jsx)("tbody",{children:this.props.items.map((function(t,s){return Object(N.jsxs)("tr",{id:s,children:[Object(N.jsx)("td",{style:{width:"70px"},children:t.quantity}),Object(N.jsxs)("td",{children:[t.name," - ",t.description]}),Object(N.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[e.props.currency," ",t.price]}),Object(N.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[e.props.currency," ",t.price*t.quantity]})]},s)}))})]}),Object(N.jsx)(v.a,{children:Object(N.jsxs)("tbody",{children:[Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:"\xa0"}),Object(N.jsx)("td",{children:"\xa0"}),Object(N.jsx)("td",{children:"\xa0"})]}),Object(N.jsxs)("tr",{className:"text-end",children:[Object(N.jsx)("td",{}),Object(N.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"SUBTOTAL"}),Object(N.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",this.props.subTotal]})]}),0!==this.props.taxAmmount&&Object(N.jsxs)("tr",{className:"text-end",children:[Object(N.jsx)("td",{}),Object(N.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"TAX"}),Object(N.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",this.props.taxAmmount]})]}),0!==this.props.discountAmmount&&Object(N.jsxs)("tr",{className:"text-end",children:[Object(N.jsx)("td",{}),Object(N.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"DISCOUNT"}),Object(N.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",this.props.discountAmmount]})]}),Object(N.jsxs)("tr",{className:"text-end",children:[Object(N.jsx)("td",{}),Object(N.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"TOTAL"}),Object(N.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",this.props.total]})]})]})}),this.props.info.notes&&Object(N.jsx)("div",{className:"bg-light py-3 px-4 rounded",children:this.props.info.notes})]})]}),Object(N.jsx)("div",{className:"pb-4 px-4",children:Object(N.jsxs)(m.a,{children:[Object(N.jsx)(u.a,{md:6,children:Object(N.jsxs)(p.a,{variant:"primary",className:"d-block w-100",onClick:R,children:[Object(N.jsx)(f.c,{style:{width:"15px",height:"15px",marginTop:"-3px"},className:"me-2"}),"Send Invoice"]})}),Object(N.jsx)(u.a,{md:6,children:Object(N.jsxs)(p.a,{variant:"outline-primary",className:"d-block w-100 mt-3 mt-md-0",onClick:R,children:[Object(N.jsx)(f.b,{style:{width:"16px",height:"16px",marginTop:"-3px"},className:"me-2"}),"Download Copy"]})})]})}),Object(N.jsx)("div",{className:"pb-4 px-4",children:Object(N.jsxs)(m.a,{children:[Object(N.jsx)(u.a,{md:6,children:Object(N.jsxs)(p.a,{variant:"outline-primary",className:"d-block w-100",onClick:this.handleSaveInvoice,children:[Object(N.jsx)(f.a,{style:{width:"16px",height:"16px",marginTop:"-3px"},className:"me-2"}),"Save Invoice"]})}),Object(N.jsx)(u.a,{md:6,children:Object(N.jsxs)(p.a,{variant:"outline-primary",className:"d-block w-100 mt-3 mt-md-0",onClick:this.props.closeModal,children:[Object(N.jsx)(F.a,{style:{width:"16px",height:"16px",marginTop:"-3px"},className:"me-2"}),"Discard Invoice"]})})]})})]}),Object(N.jsx)("hr",{className:"mt-4 mb-3"})]})}}]),s}(a.a.Component),z=Object(S.b)()(B),L=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var i;return Object(c.a)(this,s),(i=t.call(this,e)).editField=function(e){i.setState(Object(j.a)({},e.target.name,e.target.value)),i.handleCalculateTotal()},i.onCurrencyChange=function(e){i.setState(e)},i.openModal=function(e){e.preventDefault(),i.handleCalculateTotal(),i.setState({isOpen:!0})},i.closeModal=function(e){i.setState({isOpen:!1}),i.setState({isOpen:!1,currency:"$",currentDate:"",invoiceNumber:1,dateOfIssue:"",billTo:"",billToEmail:"",billToAddress:"",billFrom:"",billFromEmail:"",billFromAddress:"",notes:"",total:"0.00",subTotal:"0.00",taxRate:"",taxAmmount:"0.00",discountRate:"",discountAmmount:"0.00"}),i.state.items=[{id:0,name:"",description:"",price:"0.00",quantity:1}]},i.state={isOpen:!1,currency:"$",currentDate:"",invoiceNumber:1,dateOfIssue:"",billTo:"",billToEmail:"",billToAddress:"",billFrom:"",billFromEmail:"",billFromAddress:"",notes:"",total:"0.00",subTotal:"0.00",taxRate:"",taxAmmount:"0.00",discountRate:"",discountAmmount:"0.00"},i.state.items=[{id:0,name:"",description:"",price:"0.00",quantity:1}],i.editField=i.editField.bind(Object(b.a)(i)),i}return Object(r.a)(s,[{key:"componentDidMount",value:function(e){this.handleCalculateTotal()}},{key:"handleRowDel",value:function(e){var t=this.state.items.indexOf(e);this.state.items.splice(t,1),this.setState(this.state.items)}},{key:"handleAddEvent",value:function(e){var t={id:(+new Date+Math.floor(999999*Math.random())).toString(36),name:"",price:"0.00",description:"",quantity:1};this.state.items.push(t),this.setState(this.state.items),this.handleCalculateTotal()}},{key:"handleCalculateTotal",value:function(){var e=this,t=this.state.items,s=0;t.map((function(e,t){s+=parseFloat(e.price)*parseFloat(e.quantity)})),this.setState({subTotal:parseFloat(s).toFixed(2)},(function(){e.setState({taxAmmount:parseFloat(parseFloat(s)*(e.state.taxRate/100)).toFixed(2)},(function(){e.setState({discountAmmount:parseFloat(parseFloat(s)*(e.state.discountRate/100)).toFixed(2)},(function(){e.setState({total:s-e.state.discountAmmount+parseFloat(e.state.taxAmmount)})}))}))}))}},{key:"onItemizedItemEdit",value:function(e){var t={id:e.target.id,name:e.target.name,value:e.target.value},s=this.state.items.slice().map((function(e){for(var s in e)s==t.name&&e.id==t.id&&(e[s]=t.value);return e}));this.setState({items:s}),this.handleCalculateTotal()}},{key:"render",value:function(){var e=this;return Object(N.jsx)(x.a,{onSubmit:this.openModal,children:Object(N.jsxs)(m.a,{children:[Object(N.jsx)(u.a,{md:8,lg:9,children:Object(N.jsxs)(O.a,{className:"p-4 p-xl-5 my-3 my-xl-4",children:[Object(N.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mb-3",children:[Object(N.jsxs)("div",{class:"d-flex flex-column",children:[Object(N.jsx)("div",{className:"d-flex flex-column",children:Object(N.jsxs)("div",{class:"mb-2",children:[Object(N.jsx)("span",{className:"fw-bold",children:"Current\xa0Date:\xa0"}),Object(N.jsx)("span",{className:"current-date",children:(new Date).toLocaleDateString()})]})}),Object(N.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[Object(N.jsx)("span",{className:"fw-bold d-block me-2",children:"Due\xa0Date:"}),Object(N.jsx)(x.a.Control,{type:"date",value:this.state.dateOfIssue,name:"dateOfIssue",onChange:function(t){return e.editField(t)},style:{maxWidth:"150px"},required:"required"})]})]}),Object(N.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[Object(N.jsx)("span",{className:"fw-bold me-2",children:"Invoice\xa0Number:\xa0"}),Object(N.jsx)(x.a.Control,{type:"number",value:this.state.invoiceNumber,name:"invoiceNumber",onChange:function(t){return e.editField(t)},min:"1",style:{maxWidth:"70px"},required:"required"})]})]}),Object(N.jsx)("hr",{className:"my-4"}),Object(N.jsxs)(m.a,{className:"mb-5",children:[Object(N.jsxs)(u.a,{children:[Object(N.jsx)(x.a.Label,{className:"fw-bold",children:"Bill to:"}),Object(N.jsx)(x.a.Control,{placeholder:"Who is this invoice to?",rows:3,value:this.state.billTo,type:"text",name:"billTo",className:"my-2",onChange:function(t){return e.editField(t)},autoComplete:"name",required:"required"}),Object(N.jsx)(x.a.Control,{placeholder:"Email address",value:this.state.billToEmail,type:"email",name:"billToEmail",className:"my-2",onChange:function(t){return e.editField(t)},autoComplete:"email",required:"required"}),Object(N.jsx)(x.a.Control,{placeholder:"Billing address",value:this.state.billToAddress,type:"text",name:"billToAddress",className:"my-2",autoComplete:"address",onChange:function(t){return e.editField(t)},required:"required"})]}),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(x.a.Label,{className:"fw-bold",children:"Bill from:"}),Object(N.jsx)(x.a.Control,{placeholder:"Who is this invoice from?",rows:3,value:this.state.billFrom,type:"text",name:"billFrom",className:"my-2",onChange:function(t){return e.editField(t)},autoComplete:"name",required:"required"}),Object(N.jsx)(x.a.Control,{placeholder:"Email address",value:this.state.billFromEmail,type:"email",name:"billFromEmail",className:"my-2",onChange:function(t){return e.editField(t)},autoComplete:"email",required:"required"}),Object(N.jsx)(x.a.Control,{placeholder:"Billing address",value:this.state.billFromAddress,type:"text",name:"billFromAddress",className:"my-2",autoComplete:"address",onChange:function(t){return e.editField(t)},required:"required"})]})]}),Object(N.jsx)(C,{onItemizedItemEdit:this.onItemizedItemEdit.bind(this),onRowAdd:this.handleAddEvent.bind(this),onRowDel:this.handleRowDel.bind(this),currency:this.state.currency,items:this.state.items}),Object(N.jsx)(m.a,{className:"mt-4 justify-content-end",children:Object(N.jsxs)(u.a,{lg:6,children:[Object(N.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between",children:[Object(N.jsx)("span",{className:"fw-bold",children:"Subtotal:"}),Object(N.jsxs)("span",{children:[this.state.currency,this.state.subTotal]})]}),Object(N.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mt-2",children:[Object(N.jsx)("span",{className:"fw-bold",children:"Discount:"}),Object(N.jsxs)("span",{children:[Object(N.jsxs)("span",{className:"small ",children:["(",this.state.discountRate||0,"%)"]}),this.state.currency,this.state.discountAmmount||0]})]}),Object(N.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mt-2",children:[Object(N.jsx)("span",{className:"fw-bold",children:"Tax:"}),Object(N.jsxs)("span",{children:[Object(N.jsxs)("span",{className:"small ",children:["(",this.state.taxRate||0,"%)"]}),this.state.currency,this.state.taxAmmount||0]})]}),Object(N.jsx)("hr",{}),Object(N.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between",style:{fontSize:"1.125rem"},children:[Object(N.jsx)("span",{className:"fw-bold",children:"Total:"}),Object(N.jsxs)("span",{className:"fw-bold",children:[this.state.currency,this.state.total||0]})]})]})}),Object(N.jsx)("hr",{className:"my-4"}),Object(N.jsx)(x.a.Label,{className:"fw-bold",children:"Notes:"}),Object(N.jsx)(x.a.Control,{placeholder:"Thanks for your business!",name:"notes",value:this.state.notes,onChange:function(t){return e.editField(t)},as:"textarea",className:"my-2",rows:1})]})}),Object(N.jsx)(u.a,{md:4,lg:3,children:Object(N.jsxs)("div",{className:"sticky-top pt-md-3 pt-xl-4",children:[Object(N.jsx)(p.a,{variant:"primary",type:"submit",className:"d-block w-100",children:"Review Invoice"}),Object(N.jsx)(z,{showModal:this.state.isOpen,closeModal:this.closeModal,info:this.state,items:this.state.items,currency:this.state.currency,subTotal:this.state.subTotal,taxAmmount:this.state.taxAmmount,discountAmmount:this.state.discountAmmount,total:this.state.total}),Object(N.jsxs)(x.a.Group,{className:"mb-3",children:[Object(N.jsx)(x.a.Label,{className:"fw-bold",children:"Currency:"}),Object(N.jsxs)(x.a.Select,{onChange:function(t){return e.onCurrencyChange({currency:t.target.value})},className:"btn btn-light my-1","aria-label":"Change Currency",children:[Object(N.jsx)("option",{value:"$",children:"USD (United States Dollar)"}),Object(N.jsx)("option",{value:"\xa3",children:"GBP (British Pound Sterling)"}),Object(N.jsx)("option",{value:"\xa5",children:"JPY (Japanese Yen)"}),Object(N.jsx)("option",{value:"$",children:"CAD (Canadian Dollar)"}),Object(N.jsx)("option",{value:"$",children:"AUD (Australian Dollar)"}),Object(N.jsx)("option",{value:"$",children:"SGD (Signapore Dollar)"}),Object(N.jsx)("option",{value:"\xa5",children:"CNY (Chinese Renminbi)"}),Object(N.jsx)("option",{value:"\u20bf",children:"BTC (Bitcoin)"})]})]}),Object(N.jsxs)(x.a.Group,{className:"my-3",children:[Object(N.jsx)(x.a.Label,{className:"fw-bold",children:"Tax rate:"}),Object(N.jsxs)(y.a,{className:"my-1 flex-nowrap",children:[Object(N.jsx)(x.a.Control,{name:"taxRate",type:"number",value:this.state.taxRate,onChange:function(t){return e.editField(t)},className:"bg-white border",placeholder:"0.0",min:"0.00",step:"0.01",max:"100.00"}),Object(N.jsx)(y.a.Text,{className:"bg-light fw-bold text-secondary small",children:"%"})]})]}),Object(N.jsxs)(x.a.Group,{className:"my-3",children:[Object(N.jsx)(x.a.Label,{className:"fw-bold",children:"Discount rate:"}),Object(N.jsxs)(y.a,{className:"my-1 flex-nowrap",children:[Object(N.jsx)(x.a.Control,{name:"discountRate",type:"number",value:this.state.discountRate,onChange:function(t){return e.editField(t)},className:"bg-white border",placeholder:"0.0",min:"0.00",step:"0.01",max:"100.00"}),Object(N.jsx)(y.a.Text,{className:"bg-light fw-bold text-secondary small",children:"%"})]})]})]})})]})})}}]),s}(a.a.Component),P=(s(68),function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var i;return Object(c.a)(this,s),(i=t.call(this,e)).handleShowModal=function(){i.setState({showModal:!0})},i.handleCloseModal=function(){i.setState({showModal:!1,refreshModal:!1})},i.handleEditCloseModal=function(){i.setState({showEditModal:!1})},i.handleEditSubmission=function(e){e.preventDefault();var t=i.state.selectedInvoice,s={invoiceId:t.invoiceId,items:t.items,billedFrom:e.target.billedFrom.value,billedTo:e.target.billedTo.value,dateOfIssue:e.target.dateOfIssue.value,subTotal:e.target.subTotal.value,tax:e.target.tax.value,discount:e.target.discount.value,total:parseFloat(e.target.subTotal.value)+parseFloat(e.target.tax.value)-parseFloat(e.target.discount.value)};i.props.updateInvoice(s.invoiceId,s),i.setState({showEditModal:!1,selectedInvoice:""})},i.state={showModal:!1,showEditModal:!1,selectedInvoice:"",refreshModal:!1},i}return Object(r.a)(s,[{key:"handleDeleteInvoice",value:function(e){this.props.deleteInvoice(e)}},{key:"componentDidUpdate",value:function(e){e.invoices!==this.props.invoices&&this.setState({refreshModal:!0})}},{key:"render",value:function(){var e=this,t=this.props.invoices;return Object(N.jsxs)("div",{style:{marginBottom:"10px"},children:[Object(N.jsx)(p.a,{variant:"primary",type:"submit",className:"d-block w-10",onClick:this.handleShowModal,children:"View List of Invoices"}),Object(N.jsxs)(T.a,{show:this.state.showModal,onHide:this.handleCloseModal,size:"lg",centered:!0,contentClassName:"custom-modal-width",children:[Object(N.jsx)(T.a.Header,{closeButton:!0,children:Object(N.jsx)(T.a.Title,{children:"List of Invoices"})}),Object(N.jsx)(T.a.Body,{children:Object(N.jsxs)("table",{className:"table invoice-table",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"Invoice ID"}),Object(N.jsx)("th",{children:"Billed From"}),Object(N.jsx)("th",{children:"Billed To"}),Object(N.jsx)("th",{children:"Date of Issue"}),Object(N.jsx)("th",{children:"Sub Total"}),Object(N.jsx)("th",{children:"Tax"}),Object(N.jsx)("th",{children:"Discount"}),Object(N.jsx)("th",{children:"Total"}),Object(N.jsx)("th",{}),Object(N.jsx)("th",{})]})}),Object(N.jsx)("tbody",{children:t.map((function(t){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:t.invoiceId}),Object(N.jsx)("td",{children:t.billedFrom}),Object(N.jsx)("td",{children:t.billedTo}),Object(N.jsx)("td",{children:t.dateOfIssue}),Object(N.jsxs)("td",{children:[t.currency,t.subTotal]}),Object(N.jsxs)("td",{children:[t.currency,t.tax]}),Object(N.jsxs)("td",{children:[t.currency,t.discount]}),Object(N.jsxs)("td",{children:[t.currency,t.total]}),Object(N.jsx)("td",{children:Object(N.jsx)(F.b,{style:{height:"33px",width:"33px",padding:"7.5px"},onClick:function(){e.setState({selectedInvoice:t,showEditModal:!0})},children:"Edit"})}),Object(N.jsx)("td",{children:Object(N.jsx)(f.d,{style:{height:"33px",width:"33px",padding:"7.5px"},className:"text-white mt-1 btn btn-danger",onClick:function(){return e.handleDeleteInvoice(t.invoiceId)}})})]},t.invoiceId)}))})]},this.state.refreshModal)}),Object(N.jsx)(T.a.Footer,{children:Object(N.jsx)(p.a,{variant:"secondary",onClick:this.handleCloseModal,children:"Close"})})]},[t.length]),Object(N.jsxs)(T.a,{show:this.state.showEditModal,onHide:this.handleEditCloseModal,size:"lg",centered:!0,contentClassName:"custom-modal-width",children:[Object(N.jsx)(T.a.Header,{closeButton:!0,children:Object(N.jsxs)(T.a.Title,{children:["Edit Invoice - ",this.state.selectedInvoice.invoiceId]})}),Object(N.jsx)(T.a.Body,{children:Object(N.jsxs)("form",{onSubmit:this.handleEditSubmission,children:[Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{htmlFor:"billedFrom",children:"Billed From"}),Object(N.jsx)("input",{type:"text",className:"form-control",name:"billedFrom",placeholder:"Enter Billed From",defaultValue:this.state.selectedInvoice.billedFrom})]}),Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{htmlFor:"billedTo",children:"Billed To"}),Object(N.jsx)("input",{type:"text",className:"form-control",name:"billedTo",placeholder:"Enter Billed To",defaultValue:this.state.selectedInvoice.billedTo})]}),Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{htmlFor:"dateOfIssue",children:"Date of Issue"}),Object(N.jsx)("input",{type:"date",className:"form-control",name:"dateOfIssue",placeholder:"Enter Date of Issue",defaultValue:this.state.selectedInvoice.dateOfIssue})]}),Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{htmlFor:"subTotal",children:"Sub Total"}),Object(N.jsx)("input",{type:"number",className:"form-control",name:"subTotal",placeholder:"Enter Sub Total",defaultValue:this.state.selectedInvoice.subTotal})]}),Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{htmlFor:"tax",children:"Tax"}),Object(N.jsx)("input",{type:"number",className:"form-control",name:"tax",placeholder:"Enter Tax",defaultValue:this.state.selectedInvoice.tax})]}),Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{htmlFor:"discount",children:"Discount"}),Object(N.jsx)("input",{type:"number",className:"form-control",name:"discount",placeholder:"Enter Discount",defaultValue:this.state.selectedInvoice.discount})]}),Object(N.jsx)("div",{style:{marginTop:"10px"},children:Object(N.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})})]})}),Object(N.jsx)(T.a.Footer,{children:Object(N.jsx)(p.a,{variant:"secondary",onClick:this.handleEditCloseModal,children:"Close"})})]})]})}}]),s}(a.a.Component)),U=Object(S.b)((function(e){return{invoices:e.invoices}}),{deleteInvoice:function(e){return{type:q,payload:e}},updateInvoice:function(e,t){return{type:k,payload:{id:e,updatedInvoice:t}}}})(P),V=s(50),W=s(30),G=s(3),$={invoices:[]},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(G.a)(Object(G.a)({},e),{},{invoices:[].concat(Object(W.a)(e.invoices),[t.payload])});case k:var s=e.invoices.map((function(e){return e.invoiceId===t.payload.id?t.payload.updatedInvoice:e}));return Object(G.a)(Object(G.a)({},e),{},{invoices:s});case q:var i=e.invoices.filter((function(e){return e.invoiceId!==t.payload}));return Object(G.a)(Object(G.a)({},e),{},{invoices:i});default:return e}},J=Object(V.a)({reducer:H}),Y=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(N.jsx)("div",{className:"App d-flex flex-column align-items-center justify-content-center w-100",children:Object(N.jsx)(h.a,{children:Object(N.jsxs)(S.a,{store:J,children:[Object(N.jsx)(L,{}),Object(N.jsx)(U,{})]})})})}}]),s}(i.Component),_=function(e){e&&e instanceof Function&&s.e(5).then(s.bind(null,461)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,l=t.getLCP,n=t.getTTFB;s(e),i(e),a(e),l(e),n(e)}))};n.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(Y,{})}),document.getElementById("root")),_()}},[[69,1,3]]]);
//# sourceMappingURL=main.aaa3c8f1.chunk.js.map