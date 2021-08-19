(this["webpackJsonp@jbrowse/web"]=this["webpackJsonp@jbrowse/web"]||[]).push([[22],{2326:function(e,t,a){"use strict";var n=a(86),r=a(97);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(1)),l=(0,n(a(98)).default)(o.createElement("path",{d:"M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}),"PermDataSetting");t.default=l},2327:function(e,t,a){"use strict";var n=a(86),r=a(97);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(1)),l=(0,n(a(98)).default)(o.createElement("path",{d:"M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2zm2 10H3v4c0 1.1.9 2 2 2h4v-2H5v-4zm14 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zm0-16h-4v2h4v4h2V5c0-1.1-.9-2-2-2z"}),"CropFree");t.default=l},2464:function(e,t,a){"use strict";a.r(t);var n=a(83),r=a(1),o=a.n(r),l=a(51),c=a(2394),i=a(2368),s=a(2411),m=a(2486),u=a(85),d=a(128),p=a(546),b=a.n(p),f=a(2373),g=a(2409),h=a(1016),v=a(2375),E=a(1060),w=a(2380),C=a(2472),N=a(2471),y=a(2484),M=a(2361),S=a(2363),O=a(2404),x=a(2406),k=a(2364),j=a(82),P=Object(l.a)((function(e){return{root:{position:"relative",padding:e.spacing(1),background:"white"},errorCard:{width:"50%",margin:[[e.spacing(2),"auto"]],border:[["2px","solid",e.palette.error.main]]},buttonContainer:{marginTop:e.spacing(1)}}})),F=Object(u.observer)((function(e){var t=e.model,a=e.disabled,l=e.modelPropName,c=e.modelSetterName,i=Object(r.useState)(t[l]),s=Object(n.a)(i,2),m=s[0],u=s[1];return Object(r.useEffect)((function(){var e=parseInt(m,10);Number.isNaN(e)||(e>0?t[c](e):u(1))}),[t,c,m]),o.a.createElement(f.a,{value:m,disabled:a,type:"number",onChange:function(e){return u(e.target.value)},style:{width:"2rem",verticalAlign:"baseline"}})})),z=Object(u.observer)((function(e){var t=e.model,a=P(),n="CSV"===t.fileType||"TSV"===t.fileType,r=t.selectedAssemblyIdx,l=t.setSelectedAssemblyIdx,i=t.fileType,m=t.fileTypes,u=t.setFileType,p=t.hasColumnNameLine,b=t.toggleHasColumnNameLine,f=t.assemblyChoices;return o.a.createElement(g.a,null,o.a.createElement(c.a,{style:{width:"25rem",margin:"0 auto"},container:!0,spacing:1,direction:"column",alignItems:"flex-start"},o.a.createElement(c.a,{item:!0},o.a.createElement(h.a,{component:"fieldset"},o.a.createElement(v.a,{component:"legend"},"Tabular file"),o.a.createElement(s.a,null,o.a.createElement(d.FileSelector,{location:t.fileSource,setLocation:t.setFileSource})))),o.a.createElement(c.a,{item:!0},o.a.createElement(h.a,{component:"fieldset",className:a.formControl},o.a.createElement(v.a,{component:"legend"},"File Type"),o.a.createElement(E.a,{"aria-label":"file type",name:"type",value:i},o.a.createElement(c.a,{container:!0,spacing:1,direction:"row"},m.map((function(e){return o.a.createElement(c.a,{item:!0,key:e},o.a.createElement(w.a,{checked:i===e,value:e,onClick:function(){return u(e)},control:o.a.createElement(C.a,null),label:e}))})))))),n?o.a.createElement(c.a,{item:!0},o.a.createElement(h.a,{component:"fieldset",className:a.formControl},o.a.createElement(v.a,{component:"legend"},"Column Names"),o.a.createElement("div",null,o.a.createElement(w.a,{disabled:!n,label:"has column names on line",labelPlacement:"end",control:o.a.createElement(N.a,{checked:p,onClick:b})}),o.a.createElement(F,{model:t,disabled:!n||!p,modelPropName:"columnNameLineNumber",modelSetterName:"setColumnNameLineNumber"})))):null,o.a.createElement(c.a,{item:!0},o.a.createElement(h.a,{fullWidth:!0},o.a.createElement(v.a,{component:"legend"},"Associated with assembly"),o.a.createElement(y.a,{value:r,onChange:function(e){return l(e.target.value)}},f.map((function(e,t){var a=Object(j.readConfObject)(e,"name");return o.a.createElement(M.a,{key:a,value:t},a)}))))),o.a.createElement(c.a,{item:!0,className:a.buttonContainer},t.canCancel?o.a.createElement(S.a,{variant:"contained",color:"default",onClick:t.cancelButton,disabled:!t.canCancel},"Cancel"):null," ",o.a.createElement(S.a,{disabled:!t.isReadyToOpen,variant:"contained","data-testid":"open_spreadsheet",color:"primary",onClick:t.import},"Open"))))})),I=Object(u.observer)((function(e){var t=e.errorMessage,a=P();return o.a.createElement(O.a,{className:a.errorCard},o.a.createElement(x.a,null,o.a.createElement(k.a,{variant:"h6",color:"error"},String(t))))})),T=Object(u.observer)((function(e){var t=e.model,a=P();return o.a.createElement(o.a.Fragment,null,t.error?o.a.createElement(g.a,{className:a.errorContainer},o.a.createElement(I,{errorMessage:"".concat(t.error)})):null,o.a.createElement(z,{model:t}))})),B=a(88),A=a(19),L=a(20),R=a(2370),H=a(832),D=a.n(H),_=a(711),V=a.n(_),W=a(2327),J=a.n(W),U=a(702),G=a.n(U),K=a(84),q=a(1091),Q=a.n(q),X=a(855),Y=a.n(X),Z=a(2326),$=a.n(Z),ee=a(1084),te=a.n(ee),ae=Object(u.observer)((function(e){var t=e.viewModel,a=e.spreadsheetModel,r=e.currentColumnMenu,l=e.setColumnMenu,c=function(){l(null)};var i=r&&r.colNumber,s=function(e){a.setSortColumns([{columnNumber:i,descending:e}])},m=a.dataTypeChoices,u=new Map;m.forEach((function(e){var t=e.displayName,a=e.categoryName;a?(u.has(a)||u.set(a,{isCategory:!0,subMenuItems:[]}),u.get(a).subMenuItems.push(e)):u.set(t,e)}));var p=r&&a.columns[i].dataType,b=p&&p.type||"",f=r&&a.columns[i].dataType.displayName||"",g=Boolean(a.sortColumns.length&&r&&a.sortColumns.find((function(e){return e.columnNumber===r.colNumber&&!e.descending}))),h=Boolean(a.sortColumns.length&&r&&a.sortColumns.find((function(e){return e.columnNumber===r.colNumber&&e.descending})));function v(){c(),a.setSortColumns([])}var E=[{label:"Sort ascending",icon:te.a,type:"radio",checked:g,onClick:g?v:s.bind(null,!1)},{label:"Sort descending",icon:te.a,type:"radio",checked:h,onClick:h?v:s.bind(null,!0)},{label:"Type: ".concat(f),icon:$.a,subMenu:Object(K.iterMap)(u.entries(),(function(e){var t=Object(n.a)(e,2),r=t[0],o=t[1],l=o.subMenuItems,c=o.typeName;if(c){var s={label:r||c,onClick:function(){a.setColumnType(i,c)}};return b===c&&(s.icon=Q.a),s}return l?{label:r,icon:l.find((function(e){return e.typeName===b}))?Q.a:void 0,subMenu:l.map((function(e){var t=e.typeName;return{label:e.displayName,icon:t===b?Q.a:void 0,onClick:function(){a.setColumnType(i,t)}}}))}:null})).filter(Boolean)}];return p&&p.hasFilter&&E.push({label:"Create filter",icon:Y.a,onClick:function(){t.filterControls.addBlankColumnFilter(i)}.bind(null,!0)}),o.a.createElement(d.Menu,{anchorEl:r&&r.anchorEl,open:Boolean(r),onMenuItemClick:function(e,t){t(),c()},onClose:c,menuItems:E,anchorOrigin:{vertical:"bottom",horizontal:"right"}})})),ne=a(92),re=Object(u.observer)((function(e){var t,a=e.viewModel,n=e.spreadsheetModel,r=n.rowMenuPosition,l=n.setRowMenuPosition,c=function(){l(null)},i=null===(t=n.rowMenuPosition)||void 0===t?void 0:t.rowNumber;if(void 0===i)return null;var s=n.rowSet.rows[i-1];var m=a.rowMenuItems.map((function(e){if("function"===typeof e.disabled){var t=e.disabled(a,n,i,s);return Object(ne.a)(Object(ne.a)({},e),{},{disabled:t})}return e}));return o.a.createElement(d.Menu,{anchorEl:r&&r.anchorEl,open:Boolean(r),onMenuItemClick:function(e,t){t(a,n,i,s),c()},onClose:c,menuItems:m,anchorOrigin:{vertical:"bottom",horizontal:"right"}})}));var oe=Object(l.a)((function(e){return{root:{position:"relative",marginBottom:e.spacing(1),background:A.a[500],overflow:"auto"},dataTable:{borderCollapse:"collapse",borderSpacing:0,boxSizing:"border-box","& td":{border:"1px solid ".concat(A.a[300]),padding:"0.2rem",maxWidth:"50em",overflow:"hidden",textOverflow:"ellipsis"}},dataTableBody:{background:"white"},rowNumCell:{background:A.a[200],textAlign:"left",border:"1px solid ".concat(A.a[300]),position:"relative",padding:"0 2px 0 0",whiteSpace:"nowrap",userSelect:"none"},rowNumber:{fontWeight:"normal",display:"inline-block",flex:"none",paddingRight:"20px",margin:0,whiteSpace:"nowrap"},rowMenuButton:{padding:0,margin:0,position:"absolute",right:0,display:"inline-block",whiteSpace:"nowrap",flex:"none"},rowMenuButtonIcon:{},rowSelector:{position:"relative",top:"-2px",margin:0,padding:"0 0.2rem"},columnHead:{fontWeight:"normal",background:A.a[200],border:"1px solid ".concat(A.a[300]),position:"sticky",top:"-1px",zIndex:2,whiteSpace:"nowrap",padding:[[0,e.spacing(1)]]},sortIndicator:{position:"relative",top:"0.2rem",fontSize:"1rem"},columnButtonContainer:{display:"none",position:"absolute",right:0,top:0,background:A.a[100],height:"100%",boxSizing:"border-box",borderLeft:"1px solid ".concat(A.a[300])},columnButton:{padding:0},topLeftCorner:{background:A.a[300],position:"sticky",top:"-1px",zIndex:2,minWidth:e.spacing(2),textAlign:"left"},dataRowSelected:{background:L.a[100],"& th":{background:L.a[100]}},emptyMessage:{captionSide:"bottom"}}})),le=Object(u.observer)((function(e){var t=e.cell,a=e.spreadsheetModel,n=e.columnNumber,r=a.columns.get(n).dataType;return r.DataCellReactComponent?o.a.createElement(r.DataCellReactComponent,{cell:t,dataType:r,columnNumber:n,spreadsheet:a}):t.text})),ce=Object(u.observer)((function(e){var t=e.rowModel,a=e.rowNumber,n=e.spreadsheetModel,r=oe(),l=n.hideRowSelection,c=n.columnDisplayOrder,s=r.dataRow;function m(e){t.toggleSelect(),e.stopPropagation(),e.preventDefault()}return t.isSelected&&(s+=" ".concat(r.dataRowSelected)),o.a.createElement("tr",{className:s},o.a.createElement("th",{className:r.rowNumCell,onClick:m},o.a.createElement(w.a,{className:r.rowNumber,control:l?null:o.a.createElement(N.a,{className:r.rowSelector,checked:t.isSelected,onClick:m}),label:t.id}),o.a.createElement(i.a,{className:r.rowMenuButton,onClick:function(e){n.setRowMenuPosition({anchorEl:e.currentTarget,rowNumber:a}),e.preventDefault(),e.stopPropagation()},color:"secondary"},o.a.createElement(G.a,{className:r.rowMenuButtonIcon}))),c.map((function(e){return o.a.createElement("td",{key:e},o.a.createElement(le,{cell:t.cellsWithDerived[e],spreadsheetModel:n,columnNumber:e}))})))}));function ie(e){var t=e.model,a=e.columnNumber,n=oe(),r=t.sortColumns.find((function(e){return e.columnNumber===a}));return r?r.descending?o.a.createElement(D.a,{className:n.sortIndicator}):o.a.createElement(V.a,{className:n.sortIndicator}):null}var se=Object(u.observer)((function(e){var t=e.rows,a=e.spreadsheetModel,n=e.page,r=e.rowsPerPage,l=oe();return o.a.createElement("tbody",{className:l.dataTableBody},t.slice(r*n,r*(n+1)).map((function(e){return o.a.createElement(ce,{key:e.id,rowNumber:e.id,spreadsheetModel:a,rowModel:e})})))})),me=Object(u.observer)((function(e){var t=e.model,a=e.page,l=e.rowsPerPage,c=t.columnDisplayOrder,s=t.columns,m=t.hasColumnNames,u=t.rowSet,d=oe(),p=Object(r.useState)(null),b=Object(n.a)(p,2),f=b[0],g=b[1];function h(e,t){g({colNumber:e,anchorEl:t.currentTarget})}var v=Object(r.useState)(null),E=Object(n.a)(v,2),w=E[0],C=E[1];function N(e){C(e)}function y(){C(null)}var M=u.count,S=u.sortedFilteredRows;return o.a.createElement(o.a.Fragment,null,o.a.createElement(ae,{viewModel:Object(B.getParent)(t),spreadsheetModel:t,currentColumnMenu:f,setColumnMenu:g}),o.a.createElement(re,{viewModel:Object(B.getParent)(t),spreadsheetModel:t}),o.a.createElement("table",{className:d.dataTable},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{className:d.topLeftCorner},o.a.createElement(R.a,{title:"Unselect all",placement:"right"},o.a.createElement("span",null,o.a.createElement(i.a,{className:d.unselectAllButton,onClick:t.unselectAll,disabled:!t.rowSet.selectedCount,color:"secondary"},o.a.createElement(J.a,{className:d.columnButtonIcon}))))),c.map((function(e){return o.a.createElement("th",{className:d.columnHead,key:e,onMouseOver:N.bind(null,e),onMouseOut:y.bind(null,e)},o.a.createElement(ie,{model:t,columnNumber:e}),m&&s.get(e).name||function(e){function t(e){return String.fromCharCode(e+65)}if(e>=0){if(e<26)return t(e);if(e<702)return t(Math.floor(e/26-1))+t(e%26)}throw new RangeError("column number out of range")}(e),o.a.createElement("div",{className:d.columnButtonContainer,style:{display:w===e||f&&f.colNumber===e?"block":"none"}},o.a.createElement(i.a,{className:d.columnButton,onClick:h.bind(null,e),color:"secondary"},o.a.createElement(G.a,{className:d.columnButtonIcon}))))})))),o.a.createElement(se,{rows:S,spreadsheetModel:t,page:a,rowsPerPage:l}),S.length?null:o.a.createElement("caption",{className:d.emptyMessage},M?"no rows match criteria":"no rows present")))})),ue=Object(u.observer)((function(e){var t=e.model,a=e.height,n=e.page,r=e.rowsPerPage,l=oe();return o.a.createElement("div",{className:l.root,style:{height:a}},t&&t.rowSet&&t.rowSet.isLoaded&&t.initialized?o.a.createElement(me,{model:t,page:n,rowsPerPage:r}):o.a.createElement("div",null,"Loading..."))})),de=a(2413),pe=a(436),be=a.n(pe),fe=Object(l.a)((function(){return{textFilterControlEndAdornment:{marginRight:"-18px"}}})),ge=Object(u.observer)((function(e){var t=e.textFilter,a=fe(),l=Object(r.useState)(t.stringToFind),c=Object(n.a)(l,2),s=c[0],m=c[1],u=Object(K.useDebounce)(s,500);return Object(r.useEffect)((function(){t.setString(u)}),[u,t]),o.a.createElement("div",{className:a.filterControls},o.a.createElement(f.a,{label:"text filter",value:s,onChange:function(e){return m(e.target.value)},className:a.textFilterControl,variant:"outlined",InputProps:{startAdornment:o.a.createElement(de.a,{className:a.textFilterControlStartAdornment,position:"start"},o.a.createElement(Y.a,null)),endAdornment:o.a.createElement(de.a,{className:a.textFilterControlEndAdornment,position:"end"},o.a.createElement(i.a,{"aria-label":"clear filter",onClick:function(){return m("")},color:"secondary"},o.a.createElement(be.a,null)))}}))})),he=Object(u.observer)((function(e){var t=e.model.filterControls.rowFullText;return o.a.createElement(ge,{textFilter:t})})),ve=a(131),Ee=a.n(ve),we=Object(l.a)((function(e){return{columnName:{verticalAlign:"middle",paddingRight:"0.3em"},columnFilter:{overflow:"hidden",whiteSpace:"nowrap",boxSizing:"border-box",width:"100%",position:"relative"},filterIcon:{position:"relative",top:"12px"},filterIconBg:{background:e.palette.tertiary.main,color:"white",padding:[[0,e.spacing(1.5)]]}}}));function Ce(e){var t=e.filterModel;return t?o.a.createElement(t.ReactComponent,{filterModel:t}):null}var Ne=Object(u.observer)((function(e){var t=e.viewModel,a=e.filterModel,n=e.columnNumber,r=e.height,l=we(),s=t.spreadsheet.columns[n];if(!s)throw new Error("no column definition! filters are probably out of date");return o.a.createElement(c.a,{container:!0,direction:"row",className:l.columnFilter,style:{height:r}},o.a.createElement(c.a,{item:!0,className:l.filterIconBg},o.a.createElement(Y.a,{className:l.filterIcon})),o.a.createElement(c.a,{item:!0},o.a.createElement(i.a,{onClick:function(){Object(B.getParent)(a,2).removeColumnFilter(a)},title:"remove filter",color:"secondary"},o.a.createElement(Ee.a,null)),o.a.createElement(k.a,{className:l.columnName,component:"span"},s.name)," ",o.a.createElement(Ce,{filterModel:a})))})),ye=Object(l.a)((function(e){return{root:{position:"relative",marginBottom:e.spacing(1),background:"white",overflow:"hidden"},header:{overflow:"hidden",whiteSpace:"nowrap",boxSizing:"border-box",height:52,paddingLeft:e.spacing(1)},contentArea:{overflow:"auto"},columnFilter:{overflow:"hidden",whiteSpace:"nowrap",boxSizing:"border-box",height:52,paddingLeft:e.spacing(1)},viewControls:{margin:0},rowCount:{marginLeft:e.spacing(1)},statusBar:{position:"absolute",background:e.palette.background.light,left:0,bottom:0,height:40,width:"100%",boxSizing:"border-box",borderTop:"1px outset #b1b1b1",paddingLeft:e.spacing(1)},verticallyCenter:{display:"flex",justifyContent:"center",flexDirection:"column"},spacer:{flexGrow:1},textFilterControlAdornment:{marginRight:"-18px"}}})),Me=Object(u.observer)((function(e){var t=e.model,a=ye();return o.a.createElement(c.a,{className:a.viewControls,container:!0,spacing:1,direction:"row",alignItems:"center"},o.a.createElement(c.a,{item:!0},o.a.createElement(i.a,{onClick:function(){return t.setImportMode()},className:a.iconButton,title:"open a tabular file","data-testid":"spreadsheet_view_open",color:"secondary"},o.a.createElement(b.a,null))))})),Se=Object(u.observer)((function(e){var t=e.spreadsheet;if(t&&t.rowSet.isLoaded){var a,n=t.rowSet,r=n.passingFiltersCount,o=n.count,l=n.selectedCount,c=n.selectedAndPassingFiltersCount;if(r!==o){if(a="".concat(t.rowSet.passingFiltersCount," rows of ").concat(t.rowSet.count," total"),l){a+=", ".concat(c," selected");var i=l-c;i&&(a+=" (".concat(i," selected rows do not pass filters)"))}}else a="".concat(t.rowSet.count," rows"),l&&(a+=", ".concat(l," selected"));return a}return null})),Oe=Object(u.observer)((function(e){var t=e.model,a=ye(),r=t.spreadsheet,l=t.filterControls.columnFilters.length,i=o.a.useState(0),u=Object(n.a)(i,2),p=u[0],b=u[1],f=o.a.useState(100),g=Object(n.a)(f,2),h=g[0],v=g[1];return o.a.createElement("div",{className:a.root,style:{height:t.height,width:t.width},"data-testid":t.id},o.a.createElement(c.a,{container:!0,direction:"row",className:a.header},t.hideViewControls?null:o.a.createElement(c.a,{item:!0},o.a.createElement(Me,{model:t})),"display"!==t.mode||t.hideFilterControls?null:o.a.createElement(c.a,{item:!0},o.a.createElement(he,{model:t}))),"display"!==t.mode||t.hideFilterControls?null:t.filterControls.columnFilters.map((function(e,a){return o.a.createElement(Ne,{key:"".concat(e.columnNumber,"-").concat(a),viewModel:t,filterModel:e,columnNumber:e.columnNumber,height:46})})),o.a.createElement("div",{className:a.contentArea,style:{height:t.height-52}},"import"!==t.mode?null:o.a.createElement(T,{model:t.importWizard}),o.a.createElement("div",{style:{position:"relative",display:"display"===t.mode?void 0:"none"}},o.a.createElement(ue,{page:p,rowsPerPage:h,model:r,height:t.height-52-46*l-40}))),o.a.createElement("div",{className:a.statusBar,style:{display:"display"===t.mode?void 0:"none"}},r?o.a.createElement(s.a,{row:!0},o.a.createElement("div",{className:a.verticallyCenter},o.a.createElement(Se,{spreadsheet:r})),o.a.createElement("div",{className:a.spacer}),o.a.createElement(m.a,{rowsPerPageOptions:[10,25,100,1e3],count:r.rowSet.count,component:"div",rowsPerPage:h,page:p,onPageChange:function(e,t){b(t)},onRowsPerPageChange:function(e){v(+e.target.value),b(0)}}),o.a.createElement("div",{className:a.spacer})):null),t.hideVerticalResizeHandle?null:o.a.createElement(d.ResizeHandle,{onDrag:t.resizeHeight,style:{height:t.dragHandleHeight,position:"absolute",bottom:0,left:0,background:"#ccc",boxSizing:"border-box",borderTop:"1px solid #fafafa"}}))}));t.default=Oe},832:function(e,t,a){"use strict";var n=a(86),r=a(97);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(1)),l=(0,n(a(98)).default)(o.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");t.default=l},855:function(e,t,a){"use strict";var n=a(86),r=a(97);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(1)),l=(0,n(a(98)).default)(o.createElement("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),"FilterList");t.default=l}}]);
//# sourceMappingURL=22.fbb8ac83.chunk.js.map