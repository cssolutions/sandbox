/*! Copyright Pingdom AB 2015. All rights reserved. */
(function(){!function(window,$){var GuidCookie,Pingdom,ReferralCookie,SiteIdCookie,getCookieDomain,init,tracking;return Pingdom=window.Pingdom=window.Pingdom||{},tracking=Pingdom.tracking=Pingdom.tracking||{},getCookieDomain=function(){var domain;return domain=document.domain.split(".").slice(-2).join("."),"."+domain},init=function(){var cookieDomain;return cookieDomain=getCookieDomain(),new GuidCookie(cookieDomain).create(),new ReferralCookie(cookieDomain).create()},GuidCookie=function(){function GuidCookie(cookieDomain){this.cookieDomain=cookieDomain,this.name="SWI_SiteCatalyst_ID",this.expire=18250}return GuidCookie.prototype.create=function(){return null==$.cookie(this.name)?$.cookie(this.name,this._generateGuid(),{expires:this.expire,path:"/",domain:this.cookieDomain}):void 0},GuidCookie.prototype._generateGuid=function(){return this._p8()+this._p8(!0)+this._p8(!0)+this._p8()},GuidCookie.prototype._p8=function(dash){var p;return p=(Math.random().toString(16)+"000000000").substr(2,8),dash?"-"+p.substr(0,4)+"-"+p.substr(4,4):p},GuidCookie}(),SiteIdCookie=function(){function SiteIdCookie(cookieDomain){this.cookieDomain=cookieDomain,this.name="siteidcookie",this._siteIds={"pingdom.com":33,"dev.pingdom.com":33,"dev.pingdom.loc":33,"my.pingdom.com":34,"dev.my.pingdom.com":34,"dev.my.pingdom.loc":34,"tools.pingdom.com":35,"dev.tools.pingdom.com":35,"dev.tools.pingdom.loc":35,"royal.pingdom.com":36,"dev.royal.pingdom.com":36,"dev.royal.pingdom.loc":36,"pingdom.jobs":37,"support.pingdom.com":38,"dev.support.pingdom.com":38,"dev.support.pingdom.loc":38}}return SiteIdCookie.prototype.create=function(){return null==$.cookie(this.name)?$.cookie(this.name,this._getSiteId(),{expires:this.expire,path:"/",domain:this.cookieDomain}):void 0},SiteIdCookie.prototype._getSiteId=function(){return this._siteIds[document.domain]},SiteIdCookie}(),ReferralCookie=function(){function ReferralCookie(cookieDomain){this.cookieDomain=cookieDomain,this.name="referralcookie",this.searchEngines=["google.com","bing.com","yahoo.com","ask.com","aol.com","duckduckgo.com","baidu.com","haosou.com","yandex.com"]}return ReferralCookie.prototype.create=function(){return this._hasCookie()?this._update():this._create()},ReferralCookie.prototype._update=function(){var campainLink,_ref;return campainLink=this._getCampainLink(),"ORGANIC"!==(_ref=this._getCookie())&&"DIRECT"!==_ref||!campainLink?void 0:this._setCookie(campainLink)},ReferralCookie.prototype._create=function(){var campainLink;return campainLink=this._getCampainLink(),this._setCookie(campainLink?campainLink:this._fromSearchEngine()?"ORGANIC":"DIRECT")},ReferralCookie.prototype._getCampainLink=function(){return this._getUrlVar("CMP")||this._getUrlVar("cmp")},ReferralCookie.prototype._fromSearchEngine=function(){var searchEngine,_i,_len,_ref;for(_ref=this.searchEngines,_i=0,_len=_ref.length;_len>_i;_i++)if(searchEngine=_ref[_i],document.referrer.indexOf(searchEngine)>-1)return!0;return!1},ReferralCookie.prototype._setCookie=function(value){return $.cookie(this.name,value,{path:"/",domain:this.cookieDomain})},ReferralCookie.prototype._getCookie=function(){return $.cookie(this.name)},ReferralCookie.prototype._hasCookie=function(){return null!=this._getCookie()},ReferralCookie.prototype._getUrlVars=function(){var hasQueryParams,hash,hashes,vars,_i,_len;if(hasQueryParams=window.location.href.indexOf("?"),-1===hasQueryParams)return{};for(vars={},hashes=window.location.href.slice(hasQueryParams+1).split("&"),_i=0,_len=hashes.length;_len>_i;_i++)hash=hashes[_i],hash=hash.split("="),vars[hash[0]]=hash[1];return vars},ReferralCookie.prototype._getUrlVar=function(name){return this._getUrlVars()[name]},ReferralCookie}(),init()}(window,jQuery)}).call(this);
