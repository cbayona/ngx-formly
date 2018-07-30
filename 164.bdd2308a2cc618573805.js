(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{k7XU:function(t,e,i){"use strict";i.r(e),i.d(e,"IonAnimationController",function(){return p});var s,n,r,o,a=(s=document.documentElement,n=["webkitTransform","-webkit-transform","webkit-transform","transform"].find(function(t){return void 0!==s.style[t]})||"transform",{transitionDurationProp:(o=(r=["webkitTransition","transition"].find(function(t){return void 0!==s.style[t]})||"transition").indexOf("webkit")>-1?"-webkit-":"")+"transition-duration",transitionTimingFnProp:o+"transition-timing-function",transformProp:n,transitionProp:r}),h=/(^-?\d*\.?\d*)(.*)/,l={translateX:1,translateY:1,translateZ:1,scale:1,scaleX:1,scaleY:1,scaleZ:1,rotate:1,rotateX:1,rotateY:1,rotateZ:1,skewX:1,skewY:1,perspective:1},f=window.requestAnimationFrame||function(t){return t()},_=function(){function t(){this._hasDur=!1,this._hasTweenEffect=!1,this._isAsync=!1,this._isReverse=!1,this._destroyed=!1,this.hasChildren=!1,this.isPlaying=!1,this.hasCompleted=!1}return t.prototype.addElement=function(t){if(t)if(t.length)for(var e=0;e<t.length;e++)this._addEl(t[e]);else this._addEl(t);return this},t.prototype._addEl=function(t){1===t.nodeType&&(this._elements=this._elements||[]).push(t)},t.prototype.add=function(t){return t.parent=this,this.hasChildren=!0,(this._childAnimations=this._childAnimations||[]).push(t),this},t.prototype.getDuration=function(t){return t&&null!=t.duration?t.duration:null!=this._duration?this._duration:this.parent?this.parent.getDuration():0},t.prototype.isRoot=function(){return!this.parent},t.prototype.duration=function(t){return this._duration=t,this},t.prototype.getEasing=function(){return this._isReverse&&this._reversedEasingName?this._reversedEasingName:null!=this._easingName?this._easingName:this.parent&&this.parent.getEasing()||null},t.prototype.easing=function(t){return this._easingName=t,this},t.prototype.easingReverse=function(t){return this._reversedEasingName=t,this},t.prototype.from=function(t,e){return this._addProp("from",t,e),this},t.prototype.to=function(t,e,i){var s=this._addProp("to",t,e);return i&&this.afterClearStyles([s.trans?a.transformProp:t]),this},t.prototype.fromTo=function(t,e,i,s){return this.from(t,e).to(t,i,s)},t.prototype._getProp=function(t){if(this._fxProperties)return this._fxProperties.find(function(e){return e.effectName===t})},t.prototype._addProp=function(t,e,i){var s=this._getProp(e);if(!s){var n=1===l[e];s={effectName:e,trans:n,wc:n?a.transformProp:e},(this._fxProperties=this._fxProperties||[]).push(s)}var r={val:i,num:0,effectUnit:""};if(s[t]=r,"string"==typeof i&&i.indexOf(" ")<0){var o=i.match(h);if(o){var f=parseFloat(o[1]);isNaN(f)||(r.num=f),r.effectUnit=o[0]!==o[2]?o[2]:""}}else"number"==typeof i&&(r.num=i);return s},t.prototype.beforeAddClass=function(t){return(this._beforeAddClasses=this._beforeAddClasses||[]).push(t),this},t.prototype.beforeRemoveClass=function(t){return(this._beforeRemoveClasses=this._beforeRemoveClasses||[]).push(t),this},t.prototype.duringAddClass=function(t){return this.beforeAddClass(t),this.afterRemoveClass(t),this},t.prototype.beforeStyles=function(t){return this._beforeStyles=t,this},t.prototype.beforeClearStyles=function(t){this._beforeStyles=this._beforeStyles||{};for(var e=0;e<t.length;e++)this._beforeStyles[t[e]]="";return this},t.prototype.beforeAddRead=function(t){return(this._readCallbacks=this._readCallbacks||[]).push(t),this},t.prototype.beforeAddWrite=function(t){return(this._writeCallbacks=this._writeCallbacks||[]).push(t),this},t.prototype.afterAddClass=function(t){return(this._afterAddClasses=this._afterAddClasses||[]).push(t),this},t.prototype.afterRemoveClass=function(t){return(this._afterRemoveClasses=this._afterRemoveClasses||[]).push(t),this},t.prototype.afterStyles=function(t){return this._afterStyles=t,this},t.prototype.afterClearStyles=function(t){this._afterStyles=this._afterStyles||{};for(var e=0;e<t.length;e++)this._afterStyles[t[e]]="";return this},t.prototype.play=function(t){var e=this;e._destroyed||(e._isAsync=e._hasDuration(t),e._clearAsync(),e._playInit(t),f(function(){f(function(){e._playDomInspect(t)})}))},t.prototype.playAsync=function(t){var e=this;return new Promise(function(i){return e.onFinish(i,{oneTimeCallback:!0,clearExistingCallacks:!0}),e.play(t),e})},t.prototype.playSync=function(){if(!this._destroyed){var t={duration:0};this._isAsync=!1,this._clearAsync(),this._playInit(t),this._playDomInspect(t)}},t.prototype._playInit=function(t){this._hasTweenEffect=!1,this.isPlaying=!0,this.hasCompleted=!1,this._hasDur=this.getDuration(t)>32;var e=this._childAnimations;if(e)for(var i=0;i<e.length;i++)e[i]._playInit(t);this._hasDur&&(this._progress(0),this._willChange(!0))},t.prototype._playDomInspect=function(t){var e=this;e._beforeAnimation();var i=e.getDuration(t);e._isAsync&&e._asyncEnd(i,!0),e._playProgress(t),e._isAsync&&!this._destroyed&&f(function(){e._playToStep(1)})},t.prototype._playProgress=function(t){var e=this._childAnimations;if(e)for(var i=0;i<e.length;i++)e[i]._playProgress(t);this._hasDur?this._setTrans(this.getDuration(t),!1):(this._progress(1),this._setAfterStyles(),this._didFinish(!0))},t.prototype._playToStep=function(t){if(!this._destroyed){var e=this._childAnimations;if(e)for(var i=0;i<e.length;i++)e[i]._playToStep(t);this._hasDur&&this._progress(t)}},t.prototype._asyncEnd=function(t,e){var i=this;i._unregisterTrnsEnd=function(t,e){var i,s={passive:!0};function n(){i&&i()}function r(i){t===i.target&&(n(),e(i))}return t&&(t.addEventListener("webkitTransitionEnd",r,s),t.addEventListener("transitionend",r,s),i=function(){t.removeEventListener("webkitTransitionEnd",r,s),t.removeEventListener("transitionend",r,s)}),n}(i._transEl(),function(){i._clearAsync(),i._playEnd(),i._didFinishAll(e,!0,!1)}),i._timerId=setTimeout(function(){i._timerId=void 0,i._clearAsync(),i._playEnd(e?1:0),i._didFinishAll(e,!0,!1)},t+400)},t.prototype._playEnd=function(t){var e=this._childAnimations;if(e)for(var i=0;i<e.length;i++)e[i]._playEnd(t);this._hasDur&&(null!==t&&void 0!==t&&(this._setTrans(0,!0),this._progress(t)),this._setAfterStyles(),this._willChange(!1))},t.prototype._hasDuration=function(t){if(this.getDuration(t)>32)return!0;var e=this._childAnimations;if(e)for(var i=0;i<e.length;i++)if(e[i]._hasDuration(t))return!0;return!1},t.prototype._hasDomReads=function(){if(this._readCallbacks&&this._readCallbacks.length)return!0;var t=this._childAnimations;if(t)for(var e=0;e<t.length;e++)if(t[e]._hasDomReads())return!0;return!1},t.prototype.stop=function(t){void 0===t&&(t=1),this._clearAsync(),this._hasDur=!0,this._playEnd(t)},t.prototype._clearAsync=function(){this._unregisterTrnsEnd&&this._unregisterTrnsEnd(),this._timerId&&clearTimeout(this._timerId),this._timerId=this._unregisterTrnsEnd=void 0},t.prototype._progress=function(t){var e,i=this._elements,s=this._fxProperties;if(i&&0!==i.length&&s&&!this._destroyed){this._isReverse&&(t=1-t);var n,r=0,o=0,h="";for(r=0;r<s.length;r++)if((n=s[r]).from&&n.to){var l=n.from.num,f=n.to.num,_=l!==f;if(_&&(this._hasTweenEffect=!0),0===t?e=n.from.val:1===t?e=n.to.val:_&&(e=(f-l)*t+l+n.to.effectUnit),null!==e){var p=n.effectName;if(n.trans)h+=p+"("+e+") ";else for(o=0;o<i.length;o++)i[o].style[p]=e}}if(h.length)for((!this._isReverse&&1!==t||this._isReverse&&0!==t)&&(h+="translateZ(0px)"),r=0;r<i.length;r++)i[r].style[a.transformProp]=h}},t.prototype._setTrans=function(t,e){var i=this._elements;if(i&&0!==i.length&&this._fxProperties)for(var s,n=e?"linear":this.getEasing(),r=t+"ms",o=a.transitionProp,h=a.transitionDurationProp,l=a.transitionTimingFnProp,f=0;f<i.length;f++)s=i[f].style,t>0?(s[o]="",s[h]=r,n&&(s[l]=n)):s[o]="none"},t.prototype._beforeAnimation=function(){this._fireBeforeReadFunc(),this._fireBeforeWriteFunc(),this._setBeforeStyles()},t.prototype._setBeforeStyles=function(){var t=this._childAnimations;if(t)for(var e=0;e<t.length;e++)t[e]._setBeforeStyles();var i=this._elements;if(i&&0!==i.length&&!this._isReverse){var s=this._beforeAddClasses,n=this._beforeRemoveClasses;for(e=0;e<i.length;e++){var r=i[e],o=r.classList;if(s)for(var a=0;a<s.length;a++)o.add(s[a]);if(n)for(a=0;a<n.length;a++)o.remove(n[a]);if(this._beforeStyles)for(var h in this._beforeStyles)r.style[h]=this._beforeStyles[h]}}},t.prototype._fireBeforeReadFunc=function(){var t=this._childAnimations;if(t)for(var e=0;e<t.length;e++)t[e]._fireBeforeReadFunc();var i=this._readCallbacks;if(i)for(e=0;e<i.length;e++)i[e]()},t.prototype._fireBeforeWriteFunc=function(){var t=this._childAnimations;if(t)for(var e=0;e<t.length;e++)t[e]._fireBeforeWriteFunc();var i=this._writeCallbacks;if(i)for(e=0;e<i.length;e++)i[e]()},t.prototype._setAfterStyles=function(){var t,e,i,s,n,r=this._elements;if(r)for(t=0;t<r.length;t++)if(s=(i=r[t]).classList,i.style[a.transitionDurationProp]=i.style[a.transitionTimingFnProp]="",this._isReverse){var o=this._beforeAddClasses;if(o)for(e=0;e<o.length;e++)s.remove(o[e]);var h=this._beforeRemoveClasses;if(h)for(e=0;e<h.length;e++)s.add(h[e]);var l=this._beforeStyles;if(l)for(n in l)i.style[n]=""}else{var f=this._afterAddClasses;if(f)for(e=0;e<f.length;e++)s.add(f[e]);var _=this._afterRemoveClasses;if(_)for(e=0;e<_.length;e++)s.remove(_[e]);var p=this._afterStyles;if(p)for(n in p)i.style[n]=p[n]}},t.prototype._willChange=function(t){var e,i,s=this._fxProperties;if(t&&s){e=[];for(var n=0;n<s.length;n++){var r=s[n].wc;"webkitTransform"===r?e.push("transform","-webkit-transform"):r&&e.push(r)}i=e.join(",")}else i="";var o=this._elements;if(o)for(n=0;n<o.length;n++)o[n].style.willChange=i},t.prototype.progressStart=function(){this._clearAsync(),this._beforeAnimation(),this._progressStart()},t.prototype._progressStart=function(){var t=this._childAnimations;if(t)for(var e=0;e<t.length;e++)t[e]._progressStart();this._setTrans(0,!0),this._willChange(!0)},t.prototype.progressStep=function(t){t=Math.min(1,Math.max(0,t));var e=this._childAnimations;if(e)for(var i=0;i<e.length;i++)e[i].progressStep(t);this._progress(t)},t.prototype.progressEnd=function(t,e,i){var s=this;this._isReverse&&(e=1-e);var n=t?1:0,r=Math.abs(e-n);void 0===i&&(i=-1),i<0?i=this._duration||0:r<.05&&(i=0),this._isAsync=i>30,this._progressEnd(t,n,i,this._isAsync),this._isAsync&&(this._asyncEnd(i,t),this._destroyed||f(function(){s._playToStep(n)}))},t.prototype._progressEnd=function(t,e,i,s){var n=this._childAnimations;if(n)for(var r=0;r<n.length;r++)n[r]._progressEnd(t,e,i,s);s?(this.isPlaying=!0,this.hasCompleted=!1,this._hasDur=!0,this._willChange(!0),this._setTrans(i,!1)):(this._progress(e),this._willChange(!1),this._setAfterStyles(),this._didFinish(t))},t.prototype.onFinish=function(t,e){return e&&e.clearExistingCallacks&&(this._onFinishCallbacks=this._onFinishOneTimeCallbacks=void 0),e&&e.oneTimeCallback?(this._onFinishOneTimeCallbacks=this._onFinishOneTimeCallbacks||[],this._onFinishOneTimeCallbacks.push(t)):(this._onFinishCallbacks=this._onFinishCallbacks||[],this._onFinishCallbacks.push(t)),this},t.prototype._didFinishAll=function(t,e,i){var s=this._childAnimations;if(s)for(var n=0;n<s.length;n++)s[n]._didFinishAll(t,e,i);(e&&this._isAsync||i&&!this._isAsync)&&this._didFinish(t)},t.prototype._didFinish=function(t){if(this.isPlaying=!1,this.hasCompleted=t,this._onFinishCallbacks)for(var e=0;e<this._onFinishCallbacks.length;e++)this._onFinishCallbacks[e](this);if(this._onFinishOneTimeCallbacks){for(e=0;e<this._onFinishOneTimeCallbacks.length;e++)this._onFinishOneTimeCallbacks[e](this);this._onFinishOneTimeCallbacks.length=0}},t.prototype.reverse=function(t){void 0===t&&(t=!0);var e=this._childAnimations;if(e)for(var i=0;i<e.length;i++)e[i].reverse(t);return this._isReverse=!!t,this},t.prototype.destroy=function(){this._destroyed=!0;var t=this._childAnimations;if(t)for(var e=0;e<t.length;e++)t[e].destroy();this._clearAsync(),this._elements&&(this._elements.length=0),this._readCallbacks&&(this._readCallbacks.length=0),this._writeCallbacks&&(this._writeCallbacks.length=0),this.parent=void 0,this._childAnimations&&(this._childAnimations.length=0),this._onFinishCallbacks&&(this._onFinishCallbacks.length=0),this._onFinishOneTimeCallbacks&&(this._onFinishOneTimeCallbacks.length=0)},t.prototype._transEl=function(){var t=this._childAnimations;if(t)for(var e=0;e<t.length;e++){var i=t[e]._transEl();if(i)return i}return this._hasTweenEffect&&this._hasDur&&this._elements&&this._elements.length>0?this._elements[0]:null},t}(),p=function(){function t(){}return t.prototype.create=function(t,e,i){return t?t(_,e,i):Promise.resolve(new _)},Object.defineProperty(t,"is",{get:function(){return"ion-animation-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{create:{method:!0}}},enumerable:!0,configurable:!0}),t}()}}]);