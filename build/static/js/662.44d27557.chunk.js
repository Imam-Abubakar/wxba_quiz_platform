"use strict";(self.webpackChunkwxb=self.webpackChunkwxb||[]).push([[662],{662:function(r,t,e){e.r(t),e.d(t,{Edition:function(){return l}});var n=e(74165),a=e(15861),c=e(15671),u=e(43144),i=e(97326),o=e(60136),s=e(29388),p=e(41739),f=e(2617),h=e(68624),l=(e(80518),e(25025),e(70332),e(8455),e(97143),e(84255),e(62555),e(26219),e(61303),e(49242),e(94317),e(13670),e(79120),e(97604),e(8187),e(19362),e(54730),e(36250),e(85725),e(38730),e(237),e(65609),e(77208),e(86841),e(49561),e(40553),e(26),e(69392),e(31583),e(61156),e(82037),e(20737),e(78262),e(34161),e(50266),e(98839),e(51375),e(43320),e(65815),e(59189),e(18281),e(24601),e(46878),e(20583),e(92355),e(84194),e(51121),e(32484),e(78435),function(r){(0,o.Z)(e,r);var t=(0,s.Z)(e);function e(r,n,a){var u;(0,c.Z)(this,e);var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,h=arguments.length>5?arguments[5]:void 0,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new f.cm(r,n,s,o);return u=t.call(this,l,a,h),(0,p._)((0,i.Z)(u),"abi",void 0),(0,p._)((0,i.Z)(u),"metadata",void 0),(0,p._)((0,i.Z)(u),"roles",void 0),(0,p._)((0,i.Z)(u),"sales",void 0),(0,p._)((0,i.Z)(u),"platformFees",void 0),(0,p._)((0,i.Z)(u),"encoder",void 0),(0,p._)((0,i.Z)(u),"estimator",void 0),(0,p._)((0,i.Z)(u),"events",void 0),(0,p._)((0,i.Z)(u),"royalties",void 0),(0,p._)((0,i.Z)(u),"signature",void 0),(0,p._)((0,i.Z)(u),"interceptor",void 0),(0,p._)((0,i.Z)(u),"erc1155",void 0),(0,p._)((0,i.Z)(u),"owner",void 0),u.abi=s,u.metadata=new f.ag(u.contractWrapper,f.co,u.storage),u.roles=new f.ah(u.contractWrapper,e.contractRoles),u.royalties=new f.ai(u.contractWrapper,u.metadata),u.sales=new f.aj(u.contractWrapper),u.encoder=new f.af(u.contractWrapper),u.estimator=new f.aQ(u.contractWrapper),u.events=new f.aR(u.contractWrapper),u.platformFees=new f.aT(u.contractWrapper),u.interceptor=new f.aS(u.contractWrapper),u.signature=new f.aJ(u.contractWrapper,u.storage,u.roles),u.erc1155=new f.aF(u.contractWrapper,u.storage,h),u.owner=new f.aV(u.contractWrapper),u}return(0,u.Z)(e,[{key:"onNetworkUpdated",value:function(r){this.contractWrapper.updateSignerOrProvider(r)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"getAll",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.getAll(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"getOwned",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.getOwned(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"getTotalCount",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.totalCount());case 1:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"isTransferRestricted",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){var t;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.contractWrapper.readContract.hasRole((0,f.br)("transfer"),h.d);case 2:return t=r.sent,r.abrupt("return",!t);case 4:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"mint",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.mint(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"mintTo",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.mintTo(t,e));case 1:case"end":return r.stop()}}),r,this)})));return function(t,e){return r.apply(this,arguments)}}()},{key:"mintAdditionalSupply",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.mintAdditionalSupply(t,e));case 1:case"end":return r.stop()}}),r,this)})));return function(t,e){return r.apply(this,arguments)}}()},{key:"mintAdditionalSupplyTo",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e,a){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.mintAdditionalSupplyTo(t,e,a));case 1:case"end":return r.stop()}}),r,this)})));return function(t,e,n){return r.apply(this,arguments)}}()},{key:"mintBatch",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.mintBatch(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"mintBatchTo",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.mintBatchTo(t,e));case 1:case"end":return r.stop()}}),r,this)})));return function(t,e){return r.apply(this,arguments)}}()},{key:"burn",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.burn(t,e));case 1:case"end":return r.stop()}}),r,this)})));return function(t,e){return r.apply(this,arguments)}}()},{key:"call",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var e,a,c,u,i=arguments;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(a=i.length,c=new Array(a>1?a-1:0),u=1;u<a;u++)c[u-1]=i[u];return r.abrupt("return",(e=this.contractWrapper).call.apply(e,[t].concat(c)));case 2:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()}]),e}(f.aM));(0,p._)(l,"contractRoles",["admin","minter","transfer"])}}]);
//# sourceMappingURL=662.44d27557.chunk.js.map