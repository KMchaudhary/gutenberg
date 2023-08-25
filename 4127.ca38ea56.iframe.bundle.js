(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[4127,9964,52],{"./node_modules/reakit-utils/es/canUseDOM.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>canUseDOM});var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/reakit-utils/es/getWindow.js");var canUseDOM=function checkIsBrowser(){var _window=(0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.J)();return Boolean(void 0!==_window&&_window.document&&_window.document.createElement)}()},"./node_modules/reakit-utils/es/dom.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>isUA});var _canUseDOM_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/reakit-utils/es/canUseDOM.js");function isUA(string){return!!_canUseDOM_js__WEBPACK_IMPORTED_MODULE_0__.N&&-1!==window.navigator.userAgent.indexOf(string)}},"./node_modules/reakit-utils/es/getDocument.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function getDocument(element){return element?element.ownerDocument||element:document}__webpack_require__.d(__webpack_exports__,{M:()=>getDocument})},"./node_modules/reakit-utils/es/getWindow.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>getWindow});var _window,_getDocument_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/reakit-utils/es/getDocument.js");try{_window=window}catch(e){}function getWindow(element){return element&&(0,_getDocument_js__WEBPACK_IMPORTED_MODULE_0__.M)(element).defaultView||_window}},"./node_modules/reakit-utils/es/isSelfTarget.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isSelfTarget(event){return event.target===event.currentTarget}__webpack_require__.d(__webpack_exports__,{U:()=>isSelfTarget})},"./node_modules/reakit-utils/es/useForkRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>useForkRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function setRef(ref,value){void 0===value&&(value=null),ref&&("function"==typeof ref?ref(value):ref.current=value)}function useForkRef(refA,refB){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return null==refA&&null==refB?null:function(value){setRef(refA,value),setRef(refB,value)}}),[refA,refB])}},"./node_modules/reakit-utils/es/useIsomorphicEffect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>useIsomorphicEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useIsomorphicEffect=__webpack_require__("./node_modules/reakit-utils/es/canUseDOM.js").N?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./node_modules/reakit-utils/es/useLiveRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>useLiveRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_useIsomorphicEffect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/reakit-utils/es/useIsomorphicEffect.js");function useLiveRef(value){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return(0,_useIsomorphicEffect_js__WEBPACK_IMPORTED_MODULE_1__.Y)((function(){ref.current=value})),ref}},"./node_modules/reakit-utils/es/useSealedState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>useSealedState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useSealedState(initialState){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState)[0]}},"./node_modules/reakit-warning/es/index.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/react/index.js")},"./node_modules/reakit/es/Id/IdProvider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>unstable_IdContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function generateRandomString(prefix){return void 0===prefix&&(prefix="id"),(prefix?prefix+"-":"")+Math.random().toString(32).substr(2,6)}var unstable_IdContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(generateRandomString)},"./node_modules/reakit/es/Id/IdState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>unstable_useIdState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),reakit_utils_useSealedState__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/reakit-utils/es/useSealedState.js"),_IdProvider_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/reakit/es/Id/IdProvider.js");function unstable_useIdState(initialState){void 0===initialState&&(initialState={});var initialBaseId=(0,reakit_utils_useSealedState__WEBPACK_IMPORTED_MODULE_1__.T)(initialState).baseId,generateId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_IdProvider_js__WEBPACK_IMPORTED_MODULE_2__.U),idCountRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),_React$useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((function(){return initialBaseId||generateId()}));return{baseId:_React$useState[0],setBaseId:_React$useState[1],unstable_idCountRef:idCountRef}}},"./node_modules/reakit/es/Radio/Radio.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>Radio});var _rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/reakit/es/_rollupPluginBabelHelpers-1f0bf8c2.js"),reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/reakit-system/es/createComponent.js"),reakit_system_createHook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/reakit-system/es/createHook.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),reakit_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/reakit-utils/es/useForkRef.js"),reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__("./node_modules/reakit-warning/es/index.js"),__webpack_require__("./node_modules/reakit-utils/es/useLiveRef.js")),reakit_utils_createEvent__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/reakit-utils/es/createEvent.js"),_Composite_CompositeItem_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/reakit/es/Composite/CompositeItem.js"),_keys_d251e56b_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/reakit/es/__keys-d251e56b.js");function getChecked(options){return void 0!==options.checked?options.checked:void 0!==options.value&&options.state===options.value}function fireChange(element,onChange){var event=(0,reakit_utils_createEvent__WEBPACK_IMPORTED_MODULE_2__.y)(element,"change");Object.defineProperties(event,{type:{value:"change"},target:{value:element},currentTarget:{value:element}}),null==onChange||onChange(event)}var useRadio=(0,reakit_system_createHook__WEBPACK_IMPORTED_MODULE_3__.B)({name:"Radio",compose:_Composite_CompositeItem_js__WEBPACK_IMPORTED_MODULE_4__.E,keys:_keys_d251e56b_js__WEBPACK_IMPORTED_MODULE_5__.R,useOptions:function useOptions(_ref,_ref2){var _options$value,value=_ref2.value,checked=_ref2.checked,_ref$unstable_clickOn=_ref.unstable_clickOnEnter,unstable_clickOnEnter=void 0!==_ref$unstable_clickOn&&_ref$unstable_clickOn,_ref$unstable_checkOn=_ref.unstable_checkOnFocus,unstable_checkOnFocus=void 0===_ref$unstable_checkOn||_ref$unstable_checkOn,options=(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_6__._)(_ref,["unstable_clickOnEnter","unstable_checkOnFocus"]);return(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_6__.a)((0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_6__.a)({checked,unstable_clickOnEnter,unstable_checkOnFocus},options),{},{value:null!=(_options$value=options.value)?_options$value:value})},useProps:function useProps(options,_ref3){var htmlRef=_ref3.ref,htmlOnChange=_ref3.onChange,htmlOnClick=_ref3.onClick,htmlProps=(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_6__._)(_ref3,["ref","onChange","onClick"]),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_React$useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),isNativeRadio=_React$useState3[0],setIsNativeRadio=_React$useState3[1],checked=getChecked(options),isCurrentItemRef=(0,reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__.c)(options.currentId===options.id),onChangeRef=(0,reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__.c)(htmlOnChange),onClickRef=(0,reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__.c)(htmlOnClick);!function useInitialChecked(options){var initialChecked=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((function(){return getChecked(options)}))[0],initialCurrentId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(options.currentId)[0],id=options.id,setCurrentId=options.setCurrentId;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){initialChecked&&id&&initialCurrentId!==id&&(null==setCurrentId||setCurrentId(id))}),[initialChecked,id,setCurrentId,initialCurrentId])}(options),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var element=ref.current;element&&("INPUT"===element.tagName&&"radio"===element.type||setIsNativeRadio(!1))}),[]);var onChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(event){var _onChangeRef$current,_options$setState;null===(_onChangeRef$current=onChangeRef.current)||void 0===_onChangeRef$current||_onChangeRef$current.call(onChangeRef,event),event.defaultPrevented||options.disabled||null===(_options$setState=options.setState)||void 0===_options$setState||_options$setState.call(options,options.value)}),[options.disabled,options.setState,options.value]),onClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(event){var _onClickRef$current;null===(_onClickRef$current=onClickRef.current)||void 0===_onClickRef$current||_onClickRef$current.call(onClickRef,event),event.defaultPrevented||isNativeRadio||fireChange(event.currentTarget,onChange)}),[onChange,isNativeRadio]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var element=ref.current;element&&options.unstable_moves&&isCurrentItemRef.current&&options.unstable_checkOnFocus&&fireChange(element,onChange)}),[options.unstable_moves,options.unstable_checkOnFocus,onChange]),(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_6__.a)({ref:(0,reakit_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__.c)(ref,htmlRef),role:isNativeRadio?void 0:"radio",type:isNativeRadio?"radio":void 0,value:isNativeRadio?options.value:void 0,name:isNativeRadio?options.baseId:void 0,"aria-checked":checked,checked,onChange,onClick},htmlProps)}}),Radio=(0,reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_9__.L)({as:"input",memo:!0,useHook:useRadio})},"./node_modules/reakit/es/Radio/RadioGroup.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>RadioGroup});var _rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/reakit/es/_rollupPluginBabelHelpers-1f0bf8c2.js"),reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/reakit-system/es/createComponent.js"),reakit_system_createHook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/reakit-system/es/createHook.js"),reakit_system_useCreateElement__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/reakit-warning/es/index.js"),__webpack_require__("./node_modules/reakit-system/es/useCreateElement.js")),_Composite_Composite_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/reakit/es/Composite/Composite.js"),_keys_d251e56b_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/reakit/es/__keys-d251e56b.js"),useRadioGroup=(0,reakit_system_createHook__WEBPACK_IMPORTED_MODULE_2__.B)({name:"RadioGroup",compose:_Composite_Composite_js__WEBPACK_IMPORTED_MODULE_3__.Q,keys:_keys_d251e56b_js__WEBPACK_IMPORTED_MODULE_4__.a,useProps:function useProps(_,htmlProps){return(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_5__.a)({role:"radiogroup"},htmlProps)}}),RadioGroup=(0,reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_6__.L)({as:"div",useHook:useRadioGroup,useCreateElement:function useCreateElement$1(type,props,children){return(0,reakit_system_useCreateElement__WEBPACK_IMPORTED_MODULE_7__.C)(type,props,children)}})},"./node_modules/reakit/es/Radio/RadioState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>useRadioState});var _rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/reakit/es/_rollupPluginBabelHelpers-1f0bf8c2.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),reakit_utils_useSealedState__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/reakit-utils/es/useSealedState.js"),_Composite_CompositeState_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/reakit/es/Composite/CompositeState.js");function useRadioState(initialState){void 0===initialState&&(initialState={});var _useSealedState=(0,reakit_utils_useSealedState__WEBPACK_IMPORTED_MODULE_1__.T)(initialState),initialValue=_useSealedState.state,_useSealedState$loop=_useSealedState.loop,loop=void 0===_useSealedState$loop||_useSealedState$loop,sealed=(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_2__._)(_useSealedState,["state","loop"]),_React$useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue),state=_React$useState[0],setState=_React$useState[1],composite=(0,_Composite_CompositeState_js__WEBPACK_IMPORTED_MODULE_3__.u)((0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_2__.a)((0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_2__.a)({},sealed),{},{loop}));return(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_2__.a)((0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_2__.a)({},composite),{},{state,setState})}},"./node_modules/reakit/es/__keys-d251e56b.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>RADIO_KEYS,a:()=>RADIO_GROUP_KEYS});var RADIO_STATE_KEYS=["baseId","unstable_idCountRef","unstable_virtual","rtl","orientation","items","groups","currentId","loop","wrap","shift","unstable_moves","unstable_hasActiveWidget","unstable_includesBaseElement","state","setBaseId","registerItem","unregisterItem","registerGroup","unregisterGroup","move","next","previous","up","down","first","last","sort","unstable_setVirtual","setRTL","setOrientation","setCurrentId","setLoop","setWrap","setShift","reset","unstable_setIncludesBaseElement","unstable_setHasActiveWidget","setState"],RADIO_KEYS=[].concat(RADIO_STATE_KEYS,["value","checked","unstable_checkOnFocus"]),RADIO_GROUP_KEYS=RADIO_STATE_KEYS},"./node_modules/remove-accents/index.js":module=>{var characterMap={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ả:"A",Ạ:"A",Ẩ:"A",Ẫ:"A",Ậ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ẻ:"E",Ẽ:"E",Ẹ:"E",Ể:"E",Ễ:"E",Ệ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ỉ:"I",Ị:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ỏ:"O",Ọ:"O",Ổ:"O",Ỗ:"O",Ộ:"O",Ờ:"O",Ở:"O",Ỡ:"O",Ớ:"O",Ợ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ủ:"U",Ụ:"U",Ử:"U",Ữ:"U",Ự:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ả:"a",ạ:"a",ẩ:"a",ẫ:"a",ậ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ẻ:"e",ẽ:"e",ẹ:"e",ể:"e",ễ:"e",ệ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ỉ:"i",ị:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ỏ:"o",ọ:"o",ổ:"o",ỗ:"o",ộ:"o",ờ:"o",ở:"o",ỡ:"o",ớ:"o",ợ:"o",ù:"u",ú:"u",û:"u",ü:"u",ủ:"u",ụ:"u",ử:"u",ữ:"u",ự:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z",й:"и",Й:"И",ё:"е",Ё:"Е"},chars=Object.keys(characterMap).join("|"),allAccents=new RegExp(chars,"g"),firstAccent=new RegExp(chars,"");function matcher(match){return characterMap[match]}var removeAccents=function(string){return string.replace(allAccents,matcher)};module.exports=removeAccents,module.exports.has=function(string){return!!string.match(firstAccent)},module.exports.remove=removeAccents}}]);