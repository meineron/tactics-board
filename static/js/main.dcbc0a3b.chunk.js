(this["webpackJsonptactics-board"]=this["webpackJsonptactics-board"]||[]).push([[0],{5445:function(e,t,a){e.exports=a(5462)},5460:function(e,t,a){},5461:function(e,t,a){},5462:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),i=a.n(l),o=a(91),c=a(5524),s=a(14),u=a(11),h=a(9),d=a(23),m=a(22),f=a(4),g=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e="player pc"+this.props.color,t="translate("+this.props.x+" "+this.props.y+")";return r.a.createElement("g",{className:e,textAnchor:"middle",transform:t},r.a.createElement("circle",{r:"50",cx:"50",cy:"70",className:"draggable","data-ref":this.props.id}),r.a.createElement("text",{className:"number",x:"50",y:"70",dominantBaseline:"central"},this.props.no),r.a.createElement("text",{x:"50"},this.props.name))}}]),a}(n.Component);g.defaultProps={id:"",x:0,y:0,color:0,no:"",name:""};var p=g,y=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"ballImage",value:function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60",height:"60",viewBox:"0 0 952 952"},r.a.createElement("path",{d:"M813 139A475 475 0 000 476a474 474 0 00476 476 474 474 0 00476-476 474 474 0 00-139-337zm-600-31l12-10a457 457 0 01370-60c-14 6-33 18-65 45a393 393 0 00-182 22c-31 11-55 23-71 33l-74-25c3 1 8-4 10-5zm433 119l-81 222-196 37-161-166c11-76 63-143 63-143s34-25 88-44a403 403 0 01174-20l113 114zM39 460c-5 32-6 66-3 100l-9-20a451 451 0 0136-252c-3 30-2 61 0 85-11 28-19 57-24 87zm40 173a418 418 0 018-239c33-28 77-44 101-52l158 164-16 179-155 52c-39-29-72-68-96-104zm470 260c-34 22-121 28-157 29a451 451 0 01-200-92c0-1-4-49-4-66l156-52 181 78 25 103h-1zm300-158c-27 38-59 75-98 102-36 25-85 34-128 41-3 1-44 8-45 6l-25-103 128-132 168-15 8 89-8 12zm3-135l-2 3-168 16-90-158 82-223 115 7a366 366 0 01118 169 434 434 0 01-55 186zm60-250a396 396 0 00-108-131c-5-25-19-65-57-107l2 2 7 5a459 459 0 01156 230v1z"}))}},{key:"render",value:function(){var e="ball bc"+this.props.color,t="translate("+this.props.x+" "+this.props.y+")",a=4===this.props.color?this.ballImage():null;return r.a.createElement("g",{className:e,transform:t},r.a.createElement("circle",{r:"30",cx:"30",cy:"30",className:"draggable","data-ref":this.props.id}),a)}}]),a}(n.Component);y.defaultProps={id:"",x:0,y:0,color:0};var E=y,v=a(5505),b=a(5513),w=a(5510),_=a(5509),x=a(5514),k=a(5527),O=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={open:!1,player:{id:"",name:"",no:0}},n._refName=r.a.createRef(),n._refNumber=r.a.createRef(),n.openDialog=n.openDialog.bind(Object(h.a)(n)),n.close=n.close.bind(Object(h.a)(n)),n.save=n.save.bind(Object(h.a)(n)),n.remove=n.remove.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"openDialog",value:function(e){this.setState({open:!0,player:e})}},{key:"close",value:function(){this.setState({open:!1})}},{key:"save",value:function(){this.close(),null!==this.props.onEditDone&&this.props.onEditDone({id:this.state.player.id,remove:!1,name:this._refName.current.value,no:this._refNumber.current.value})}},{key:"remove",value:function(){this.close(),null!==this.props.onEditDone&&this.props.onEditDone({id:this.state.player.id,remove:!0})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{open:this.state.open,onClose:this.close,"aria-labelledby":"form-dialog-title"},r.a.createElement(_.a,{id:"form-dialog-title"},"Edit player"),r.a.createElement(w.a,null,r.a.createElement(k.a,{inputRef:this._refNumber,margin:"dense",id:"playerNumber",defaultValue:this.state.player.no,label:"Number",type:"number",fullWidth:!0,autoFocus:!0}),r.a.createElement(k.a,{inputRef:this._refName,margin:"dense",id:"playerName",defaultValue:this.state.player.name,label:"Name",type:"text",fullWidth:!0})),r.a.createElement(b.a,null,r.a.createElement(x.a,{onClick:this.remove,color:"primary"},"Remove"),r.a.createElement(x.a,{onClick:this.close,color:"primary"},"Cancel"),r.a.createElement(x.a,{onClick:this.save,color:"primary"},"Save"))))}}]),a}(n.Component);O.defaultProps={onEditDone:null};var M=O,S=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e))._editRef=r.a.createRef(),n._bgRef=r.a.createRef(),n._playerDialogRef=r.a.createRef(),n._orgWidth=n.props.viewBoxRight-n.props.viewBoxLeft,n._orgHeight=n.props.viewBoxBottom-n.props.viewBoxTop,n._pitch=n.props.pitch,n.state={players:n._pitch.players,balls:n._pitch.balls},n._dragNode=null,n._dragObjectType=-1,n._mouseX=0,n._mouseY=0,n.hContextMenu=n.hContextMenu.bind(Object(h.a)(n)),n.hMouseDown=n.hMouseDown.bind(Object(h.a)(n)),n.hMouseUp=n.hMouseUp.bind(Object(h.a)(n)),n.hMouseMove=n.hMouseMove.bind(Object(h.a)(n)),n.playerEditDone=n.playerEditDone.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"getScale",value:function(){var e=this._bgRef.current.getBoundingClientRect();return{X:this._orgWidth/e.width,Y:this._orgHeight/e.height}}},{key:"playerDrag",value:function(e,t,a){this.setState({players:this._pitch.playerMove(e,t,a)})}},{key:"ballDrag",value:function(e,t,a){this.setState({balls:this._pitch.ballMove(e,t,a)})}},{key:"isDragStarted",value:function(e){return 0===e.button&&(!!e.target.classList.contains("draggable")&&(this._dragNode=e.target.getAttribute("data-ref"),null!==this._dragNode&&(this._dragObjectType=-1,this._dragNode.startsWith("pl")&&(this._dragObjectType=0),this._dragNode.startsWith("bl")&&(this._dragObjectType=1),this._mouseX=e.clientX,this._mouseY=e.clientY,!0)))}},{key:"playerEditStarted",value:function(e){if(!e.startsWith("pl"))return!1;var t=this._pitch.playerEditStart(e);return null!==t&&(this._playerDialogRef.current.openDialog(t),!0)}},{key:"playerEditDone",value:function(e){this.setState({players:this._pitch.playerEditDone(e)})}},{key:"hContextMenu",value:function(e){var t=e.target.getAttribute("data-ref");null!==t&&this.playerEditStarted(t)&&e.preventDefault()}},{key:"hMouseDown",value:function(e){this.isDragStarted(e)&&e.preventDefault()}},{key:"hMouseUp",value:function(e){e.preventDefault(),this._dragNode=null,this._dragObjectType=-1}},{key:"hMouseMove",value:function(e){if(null!=this._dragNode){e.preventDefault();var t=this.getScale(),a=(e.clientX-this._mouseX)*t.X,n=(e.clientY-this._mouseY)*t.Y;switch(this._mouseX=e.clientX,this._mouseY=e.clientY,this._dragObjectType){case 0:this.playerDrag(this._dragNode,a,n);break;case 1:this.ballDrag(this._dragNode,a,n);break;default:console.log("Invalid drag object type",this._dragObjectType,this._dragNode)}}}},{key:"getSVG",value:function(){return{width:this._orgWidth,height:this._orgHeight,svgText:this._editRef.current.children[0].outerHTML}}},{key:"render",value:function(){var e=this.props.viewBoxLeft.toString()+" "+this.props.viewBoxTop.toString()+" "+this.props.viewBoxRight.toString()+" "+this.props.viewBoxBottom.toString(),t=this.state.players.map((function(e,t){return r.a.createElement(p,{key:t.toString(),id:e.id,x:e.x,y:e.y,no:e.no,name:e.name,color:e.color})})),a=this.state.balls.map((function(e,t){return r.a.createElement(E,{key:t.toString(),id:e.id,x:e.x,y:e.y,color:e.color})})),n="pitch "+this.props.classes.offset,l=(this._orgWidth-4e3)/2,i=(this._orgHeight-2e3)/2,o="translate("+l+" "+i+")",c="translate("+l+" "+(i+2e3+50)+")",s="translate("+(l+1050)+" "+(i+2e3+100)+")";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:this._editRef,className:n},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:e,onContextMenu:this.hContextMenu,onMouseDown:this.hMouseDown,onMouseUp:this.hMouseUp,onMouseMove:this.hMouseMove},r.a.createElement("style",null,[".pc0 {\tfill: #8b2323;\t}",".pc0 {\tfill: #8b2323;\t}",".pc1 {\tfill: #e7e739;\t}",".pc2 {\tfill: #912cee;\t}",".pc3 {\tfill: #04b804;\t}",".pc4 {\tfill: #1d4ba0;\t}",".pc5 {\tfill: #ee2c2c;\t}",".pc6 {\tfill: #ff7f50;\t}",".pc7 {\tfill: #56c6eb;\t}",".bc0 { fill: #ffa500; }",".bc1 { fill: #cc3333; }",".bc2 { fill: #222333; }",".bc3 { fill: #0000ff; }",".bc4 { fill: #ffffff; }",".bc4 svg { fill: #000000; }",".player { pointer-events: none; }",".player text { fill: black;\t}",".player text.number { fill: white; }",".draggable { cursor: move; pointer-events: all;}"]),r.a.createElement("pattern",{id:"goal-net",x:"0",y:"0",width:"20",height:"20",stroke:"black",patternUnits:"userSpaceOnUse"},r.a.createElement("line",{x1:"0",x2:"20",y1:"0",y2:"20"}),r.a.createElement("line",{x1:"20",x2:"00",y1:"0",y2:"20"})),r.a.createElement("g",{id:"background",ref:this._bgRef},r.a.createElement("rect",{width:this._orgWidth,height:this._orgHeight,fill:"#b7b7b7",fillOpacity:"0.5"})),r.a.createElement("g",{id:"pitch",transform:o,fill:"#0280c6",stroke:"white",strokeWidth:"8"},r.a.createElement("rect",{width:"4000",height:"2000"}),r.a.createElement("line",{x1:"2000",x2:"2000",y1:"0",y2:"2000"}),r.a.createElement("circle",{r:"300",cx:"2000",cy:"1000",fill:"none"}),r.a.createElement("circle",{r:"12",cx:"2000",cy:"1000",fill:"white",strokeWidth:"0"}),r.a.createElement("g",{id:"corner_marks"},r.a.createElement("path",{fill:"none",d:"M25,0 a25,25 0 0,1 -25,25"}),r.a.createElement("path",{fill:"none",d:"M4000,25 a25,25 0 0,1 -25,-25"}),r.a.createElement("path",{fill:"none",d:"M0,1975 a25,25 0 0,1 25,25"}),r.a.createElement("path",{fill:"none",d:"M3975,2000 a25,25 0 0,1 25,-25"})),r.a.createElement("g",{id:"substitition-zones"},r.a.createElement("line",{x1:"1000",x2:"1000",y1:"-48",y2:"32"}),r.a.createElement("line",{x1:"1500",x2:"1500",y1:"-48",y2:"32"}),r.a.createElement("line",{x1:"2500",x2:"2500",y1:"-48",y2:"32"}),r.a.createElement("line",{x1:"3000",x2:"3000",y1:"-48",y2:"32"})),r.a.createElement("g",{id:"left"},r.a.createElement("line",{x1:"600",x2:"600",y1:"842",y2:"1158"}),r.a.createElement("circle",{r:"12",cx:"600",cy:"1000",fill:"white",strokeWidth:"0"}),r.a.createElement("path",{fill:"none",d:"M0,242 a600,600 0 0,1 600,600"}),r.a.createElement("path",{fill:"none",d:"M600,1158 a600,600 0 0,1 -600,600"}),r.a.createElement("line",{x1:"0",x2:"-40",y1:"500",y2:"500"}),r.a.createElement("line",{x1:"0",x2:"-40",y1:"1500",y2:"1500"}),r.a.createElement("g",{id:"goal-left"},r.a.createElement("rect",{width:"100",height:"300",x:"-100",y:"850",fill:"url(#goal-net)",stroke:"#777777",strokeWidth:"4"}),r.a.createElement("line",{x1:"0",x2:"0",y1:"850",y2:"1150"}),r.a.createElement("line",{x1:"0",x2:"0",y1:"850",y2:"1150",stroke:"red",strokeDasharray:"20"}))),r.a.createElement("g",{id:"left-penalty",fill:"white",strokeWidth:"0"},r.a.createElement("rect",{width:"16",height:"16",x:"992",y:"492"}),r.a.createElement("circle",{r:"12",cx:"1000",cy:"1000"}),r.a.createElement("rect",{width:"16",height:"16",x:"992",y:"1492"})),r.a.createElement("g",{id:"right"},r.a.createElement("line",{x1:"3400",x2:"3400",y1:"842",y2:"1158"}),r.a.createElement("circle",{r:"12",cx:"3400",cy:"1000",fill:"white",strokeWidth:"0"}),r.a.createElement("path",{fill:"none",d:"M3400,842 a600,600 0 0,1 600,-600"}),r.a.createElement("path",{fill:"none",d:"M3400,1158 a600,600 0 0,0 600,600"}),r.a.createElement("line",{x1:"4000",x2:"4040",y1:"500",y2:"500"}),r.a.createElement("line",{x1:"4000",x2:"4040",y1:"1500",y2:"1500"}),r.a.createElement("g",{id:"goal-right"},r.a.createElement("rect",{width:"100",height:"300",x:"4000",y:"850",fill:"url(#goal-net)",stroke:"#777777",strokeWidth:"4"}),r.a.createElement("line",{x1:"4000",x2:"4000",y1:"850",y2:"1150"}),r.a.createElement("line",{x1:"4000",x2:"4000",y1:"850",y2:"1150",stroke:"red",strokeDasharray:"20"}))),r.a.createElement("g",{id:"right-penalty",fill:"white",strokeWidth:"0"},r.a.createElement("rect",{width:"16",height:"16",x:"2992",y:"492"}),r.a.createElement("circle",{r:"12",cx:"3000",cy:"1000"}),r.a.createElement("rect",{width:"16",height:"16",x:"2992",y:"1492"}))),r.a.createElement("g",{id:"players",transform:c,fontSize:"50"},t),r.a.createElement("g",{id:"balls",transform:s},a))),r.a.createElement(M,{ref:this._playerDialogRef,onEditDone:this.playerEditDone}))}}]),a}(n.Component);S.defaultProps={pitch:null,noPlayers:0,viewBoxLeft:0,viewBoxTop:0,viewBoxRight:4500,viewBoxBottom:2500};var D=Object(f.a)((function(e){return{offset:{paddingTop:e.mixins.toolbar.minHeight}}}),{withTheme:!0})(S),j=a(79),C=a(5515),A=a(5516),B=a(44),T=a(5517),R=a(92),F=a(5521),I=a(83),N=a.n(I),W=a(5518),z=a(5522),P=a(89),q=a.n(P),L=a(90),X=a.n(L),Y=a(5530),H=a(5528),U=a(5512),G=a(5465),V=a(5519),J=a(5520),$=a(5523),K=a(5531),Q=a(5529),Z=a(87),ee=a.n(Z),te=a(88),ae=a.n(te),ne=a(82),re=a.n(ne),le=a(81),ie=a.n(le),oe=a(86),ce=a.n(oe),se=a(85),ue=a.n(se),he=a(58),de=a.n(he),me=a(19),fe=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={drawerOpen:!1,drawingMode:"select",drawingMenuOpen:!1,lineArrowsOpen:!1,lineArrowStart:!1,lineArrowEnd:!1,fullScreen:!1},n.toggleDrawer=n.toggleDrawer.bind(Object(h.a)(n)),n.toggleFullScreen=n.toggleFullScreen.bind(Object(h.a)(n)),n.saveImage=n.saveImage.bind(Object(h.a)(n)),n._refOpenDrawingMenu=r.a.createRef(),n.drawingModeIcon=n.drawingModeIcon.bind(Object(h.a)(n)),n.drawingMenuAnchor=n.drawingMenuAnchor.bind(Object(h.a)(n)),n.drawingMenuOpen=n.drawingMenuOpen.bind(Object(h.a)(n)),n.drawingMenuClose=n.drawingMenuClose.bind(Object(h.a)(n)),n.lineArrowsToggle=n.lineArrowsToggle.bind(Object(h.a)(n)),n.lineArrowEndToggle=n.lineArrowEndToggle.bind(Object(h.a)(n)),n.lineArrowStartToggle=n.lineArrowStartToggle.bind(Object(h.a)(n)),n.lineArrowsIcon=n.lineArrowsIcon.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"toggleDrawer",value:function(e){if("keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key){var t=!this.state.drawerOpen;this.setState({drawerOpen:t})}}},{key:"saveImage",value:function(){this.props.pitchEditSaveImage()}},{key:"domFullScreenToggle",value:function(e){if(e){var t=document.documentElement;t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()}else document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}},{key:"toggleFullScreen",value:function(){var e=!this.state.fullScreen;this.domFullScreenToggle(e),this.setState({fullScreen:e})}},{key:"fsIconGet",value:function(){return this.state.fullScreen?r.a.createElement(ie.a,null):r.a.createElement(re.a,null)}},{key:"drawingMenuAnchor",value:function(){return this._refOpenDrawingMenu.current}},{key:"drawingMenuOpen",value:function(){this.setState({drawingMenuOpen:!0})}},{key:"drawingMenuClose",value:function(e){null===e&&this.setState({drawingMenuOpen:!1}),this.setState({drawingMode:e,drawingMenuOpen:!1})}},{key:"drawingModeIcon",value:function(){switch(this.state.drawingMode){case"line":return r.a.createElement(me.h,null);case"square":return r.a.createElement(me.g,null);case"oval":return r.a.createElement(me.f,null);case"text":return r.a.createElement(de.a,null);case"select":default:return r.a.createElement(me.d,null)}}},{key:"lineArrowsToggle",value:function(){this.setState({lineArrowsOpen:!this.state.lineArrowsOpen})}},{key:"lineArrowStartToggle",value:function(){this.setState({lineArrowStart:!this.state.lineArrowStart})}},{key:"lineArrowEndToggle",value:function(){this.setState({lineArrowEnd:!this.state.lineArrowEnd})}},{key:"lineArrowsIcon",value:function(){return this.state.lineArrowStart&&this.state.lineArrowEnd?r.a.createElement(me.b,null):!this.state.lineArrowStart&&this.state.lineArrowEnd?r.a.createElement(me.c,null):this.state.lineArrowStart&&!this.state.lineArrowEnd?r.a.createElement(me.a,null):r.a.createElement(me.e,null)}},{key:"render",value:function(){var e=this,t=this.fsIconGet(),a=this.state.fullScreen?"Exit full screen":"Enter full screen",n=this.drawingModeIcon(),l=this.lineArrowsIcon();return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{position:"fixed"},r.a.createElement(A.a,{variant:"regular"},r.a.createElement(T.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:this.toggleDrawer},r.a.createElement(N.a,null)),r.a.createElement(B.a,{variant:"h6",color:"inherit"},"Futsal tactics board"),r.a.createElement("div",{className:this.props.classes.grow}),r.a.createElement(Q.a,{title:"Selected draw mode"},r.a.createElement(T.a,{ref:this._refOpenDrawingMenu,"aria-label":"Selected draw mode",color:"inherit",onClick:this.drawingMenuOpen},n)),r.a.createElement(Q.a,{title:"Save picture"},r.a.createElement(T.a,{"aria-label":"Save picture",color:"inherit",onClick:this.saveImage},r.a.createElement(ue.a,null))),r.a.createElement(Q.a,{title:"Share link"},r.a.createElement(T.a,{"aria-label":"Share link",color:"inherit"},r.a.createElement(ce.a,null))),r.a.createElement(Q.a,{title:a},r.a.createElement(T.a,{"aria-label":a,color:"inherit",onClick:this.toggleFullScreen},t)))),r.a.createElement(Y.a,{anchor:"left",open:this.state.drawerOpen,onClose:this.toggleDrawer},r.a.createElement(H.a,{p:2},r.a.createElement(B.a,{variant:"h4",component:"h2"},"Tactics board"),r.a.createElement(W.a,null),r.a.createElement(U.a,{component:"nav","aria-label":"main mailbox folders"},r.a.createElement(G.a,{button:!0},r.a.createElement(V.a,null,r.a.createElement(ee.a,null)),r.a.createElement(J.a,{primary:"Create new scheme"})),r.a.createElement(G.a,{button:!0},r.a.createElement(V.a,null,r.a.createElement(ae.a,null)),r.a.createElement(J.a,{primary:"Create new animation"}))))),r.a.createElement(R.a,{id:"drawingMenu",anchorEl:this.drawingMenuAnchor,keepMounted:!0,open:this.state.drawingMenuOpen,onClose:this.drawingMenuClose},r.a.createElement(F.a,{onClick:function(){e.drawingMenuClose("select")}},r.a.createElement(V.a,null,r.a.createElement(me.d,null)),r.a.createElement(J.a,{primary:"Select / Move"})),r.a.createElement(W.a,null),r.a.createElement(F.a,{onClick:function(){e.drawingMenuClose("line")}},r.a.createElement(V.a,null,r.a.createElement(me.h,null)),r.a.createElement(J.a,{primary:"Draw line"})),r.a.createElement(F.a,{onClick:this.lineArrowsToggle},r.a.createElement(V.a,null,l),r.a.createElement(J.a,{primary:"Line arrows"}),this.state.lineArrowsOpen?r.a.createElement(q.a,null):r.a.createElement(X.a,null)),r.a.createElement(z.a,{in:this.state.lineArrowsOpen,timeout:"auto",unmountOnExit:!0},r.a.createElement(U.a,{component:"div",disablePadding:!0},r.a.createElement(F.a,{onClick:this.lineArrowEndToggle},r.a.createElement(V.a,null,r.a.createElement(me.c,null)),r.a.createElement(J.a,{primary:"End"}),r.a.createElement($.a,null,r.a.createElement(K.a,{edge:"end",onChange:this.lineArrowEndToggle,checked:this.state.lineArrowEnd}))),r.a.createElement(F.a,{onClick:this.lineArrowStartToggle},r.a.createElement(V.a,null,r.a.createElement(me.a,null)),r.a.createElement(J.a,{primary:"Start"}),r.a.createElement($.a,null,r.a.createElement(K.a,{edge:"end",onChange:this.lineArrowStartToggle,checked:this.state.lineArrowStart}))))),r.a.createElement(W.a,null),r.a.createElement(F.a,{onClick:function(){e.drawingMenuClose("square")}},r.a.createElement(V.a,null,r.a.createElement(me.g,null)),r.a.createElement(J.a,{primary:"Draw square"})),r.a.createElement(W.a,null),r.a.createElement(F.a,{onClick:function(){e.drawingMenuClose("oval")}},r.a.createElement(V.a,null,r.a.createElement(me.f,null)),r.a.createElement(J.a,{primary:"Draw elipse"})),r.a.createElement(W.a,null),r.a.createElement(F.a,{onClick:function(){e.drawingMenuClose("text")}},r.a.createElement(V.a,null,r.a.createElement(de.a,null)),r.a.createElement(J.a,{primary:"Write text"}))))}}]),a}(n.Component);fe.defaultProps={pitchEditSaveImage:null};var ge=Object(f.a)((function(e){return{grow:{flexGrow:1}}}),{withTheme:!0})(fe),pe=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;Object(s.a)(this,e),this._id=t,this._color=a,this._x=n,this._y=r,this._xDefault=l,this._yDefault=i}return Object(u.a)(e,[{key:"reset",value:function(){this._x=this._xDefault,this._y=this._yDefault}},{key:"id",get:function(){return this._id},set:function(e){this._id=e}},{key:"color",get:function(){return this._color},set:function(e){this._color=e}},{key:"x",get:function(){return this._x},set:function(e){this._x=e}},{key:"y",get:function(){return this._y},set:function(e){this._y=e}},{key:"xDefault",get:function(){return this._xDefault},set:function(e){this._xDefault=e}},{key:"yDefault",get:function(){return this._yDefault},set:function(e){this._yDefault=e}}]),e}(),ye=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,u=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0,h=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"0";Object(s.a)(this,e),this._id=t,this._no=a,this._name=n,this._color=r,this._x=l,this._y=i,this._rotation=o,this._xDefault=c,this._yDefault=u,this._noDefault=h}return Object(u.a)(e,[{key:"reset",value:function(){this._x=this._xDefault,this._y=this._yDefault,this._rotation=0,this._name="",this._no=this._noDefault}},{key:"isPlaced",get:function(){return this._x!==this._xDefault||this._y!==this._yDefault}},{key:"id",get:function(){return this._id},set:function(e){this._id=e}},{key:"no",get:function(){return this._no},set:function(e){this._no=e}},{key:"name",get:function(){return this._name},set:function(e){this._name=e}},{key:"color",get:function(){return this._color},set:function(e){this._color=e}},{key:"x",get:function(){return this._x},set:function(e){this._x=e}},{key:"y",get:function(){return this._y},set:function(e){this._y=e}},{key:"rotation",get:function(){return this._rotation},set:function(e){this._rotation=e}},{key:"xDefault",get:function(){return this._xDefault},set:function(e){this._xDefault=e}},{key:"yDefault",get:function(){return this._yDefault},set:function(e){this._yDefault=e}},{key:"noDefault",get:function(){return this._noDefault},set:function(e){this._noDefault=e}}]),e}(),Ee=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;Object(s.a)(this,e),this._playersIdPrefix="pl",this._noPlayers=t,this._noPlayerColors=a,this._playerSize=n,this._players=[],this._ballsIdPrefix="bl",this._noBalls=r,this._noBallColors=l,this._ballSize=i,this._balls=[],this._initPlayers(),this._initBalls()}return Object(u.a)(e,[{key:"_initPlayers",value:function(){for(var e=Math.floor(this._noPlayers/this._noPlayerColors),t=0;t<this._noPlayers;t++){var a=Math.floor(t/e),n=e-t%e,r=new ye(this._playersIdPrefix+t.toString(),n,"",a,a*this._playerSize,0,0,a*this._playerSize,0,n);this._players.push(r)}}},{key:"_initBalls",value:function(){for(var e=Math.floor(this._noBalls/this._noBallColors),t=0;t<this._noBalls;t++){var a=Math.floor(t/e),n=new pe(this._ballsIdPrefix+t.toString(),a,a*this._ballSize,0,a*this._ballSize,0);this._balls.push(n)}}},{key:"playerMove",value:function(e,t,a){return this.players=this.players.map((function(n){return e===n.id&&(n.x+=t,n.y+=a),n})),this.players}},{key:"playerEditStart",value:function(e){if(!e.startsWith("pl"))return null;var t=this.players.find((function(t){return e===t.id}));return t.isPlaced?{id:t.id,name:t.name,no:t.no}:null}},{key:"playerEditDone",value:function(e){return this.players=this.players.map((function(t){return e.id!==t.id||(e.remove?t.reset():(t.name=e.name,t.no=e.no)),t})),this.players}},{key:"ballMove",value:function(e,t,a){return this.balls=this.balls.map((function(n){return e===n.id&&(n.x+=t,n.y+=a),n})),this.balls}},{key:"players",get:function(){return this._players},set:function(e){this._players=e}},{key:"balls",get:function(){return this._balls},set:function(e){this._balls=e}}]),e}(),ve=(a(5460),Object(o.a)()),be=r.a.createRef(),we=r.a.createRef(),_e=new Ee(200,8,120,100,5,80);function xe(){console.log("App save image");var e=be.current.getSVG();we.current.toImg(e.svgText,e.width,e.height,e.width/2,e.height/2)}var ke=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{theme:ve},r.a.createElement(ge,{pitchEditSaveImage:xe}),r.a.createElement(D,{ref:be,pitch:_e,noPlayers:200,noBalls:100,viewBoxLeft:0,viewBoxTop:0,viewBoxRight:4500,viewBoxBottom:2500}),r.a.createElement(j.a,{ref:we})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe=a(5525);a(5461);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Oe.a,null),r.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,a){"use strict";(function(e){var n=a(14),r=a(11),l=a(23),i=a(22),o=a(0),c=a.n(o),s=a(80),u=a.n(s),h=function(t){Object(l.a)(o,t);var a=Object(i.a)(o);function o(e){var t;return Object(n.a)(this,o),(t=a.call(this,e))._refRenderer=c.a.createRef(),t}return Object(r.a)(o,[{key:"toImg",value:function(t,a,n,r,l){var i=this,o=document.createElement("canvas");o.width=r,o.height=l;var c=o.getContext("2d"),s=document.createElement("img");s.addEventListener("load",(function(e){c.drawImage(s,0,0,a,n,0,0,a,n),o.toBlob((function(e){u.a.saveAs(e,"tactics-board.png")})),i._refRenderer.current.innerHTML=""}));var h="data:image/svg+xml;base64,"+new e(t).toString("base64");s.src=h}},{key:"render",value:function(){return c.a.createElement("div",{ref:this._refRenderer,style:{display:"none"}})}}]),o}(o.Component);t.a=h}).call(this,a(5453).Buffer)}},[[5445,1,2]]]);
//# sourceMappingURL=main.dcbc0a3b.chunk.js.map