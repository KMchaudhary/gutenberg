"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[9475],{"./packages/components/src/text/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _ui_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/ui/context/context-connect.ts"),_view__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/view/component.tsx"),_hook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/text/hook.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Text(props,forwardedRef){const textProps=(0,_hook__WEBPACK_IMPORTED_MODULE_1__.Z)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_view__WEBPACK_IMPORTED_MODULE_2__.Z,{as:"span",...textProps,ref:forwardedRef})}Text.displayName="Text";const __WEBPACK_DEFAULT_EXPORT__=(0,_ui_context__WEBPACK_IMPORTED_MODULE_3__.Iq)(Text,"Text");Text.__docgenInfo={description:"@param {import('../ui/context').WordPressComponentProps<import('./types').Props, 'span'>} props\n@param {import('react').ForwardedRef<any>}                                                forwardedRef",methods:[],displayName:"Text"}},"./packages/components/src/ui/context/constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cT:()=>COMPONENT_NAMESPACE,_3:()=>CONNECTED_NAMESPACE,rE:()=>CONNECT_STATIC_NAMESPACE});const COMPONENT_NAMESPACE="data-wp-component",CONNECTED_NAMESPACE="data-wp-c16t",CONNECT_STATIC_NAMESPACE="__contextSystemKey__"},"./packages/components/src/ui/context/context-connect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Iq:()=>contextConnect,Kc:()=>contextConnectWithoutRef,H:()=>hasConnectNamespace});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/warning/build-module/index.js"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/ui/context/constants.js"),_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/ui/context/get-styled-class-name-from-key.ts");function contextConnect(Component,namespace){return _contextConnect(Component,namespace,{forwardsRef:!0})}function contextConnectWithoutRef(Component,namespace){return _contextConnect(Component,namespace)}function _contextConnect(Component,namespace,options){const WrappedComponent=options?.forwardsRef?(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Component):Component;void 0===namespace&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__.Z)("contextConnect: Please provide a namespace");let mergedNamespace=WrappedComponent[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]||[namespace];return Array.isArray(namespace)&&(mergedNamespace=[...mergedNamespace,...namespace]),"string"==typeof namespace&&(mergedNamespace=[...mergedNamespace,namespace]),Object.assign(WrappedComponent,{[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]:[...new Set(mergedNamespace)],displayName:namespace,selector:`.${(0,_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_3__.l)(namespace)}`})}function getConnectNamespace(Component){if(!Component)return[];let namespaces=[];return Component[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]&&(namespaces=Component[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]),Component.type&&Component.type[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]&&(namespaces=Component.type[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]),namespaces}function hasConnectNamespace(Component,match){return!!Component&&("string"==typeof match?getConnectNamespace(Component).includes(match):!!Array.isArray(match)&&match.some((result=>getConnectNamespace(Component).includes(result))))}},"./packages/components/src/ui/context/context-system-provider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eb:()=>useComponentsContext,G8:()=>ContextSystemProvider});var deepmerge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/deepmerge/dist/cjs.js"),deepmerge__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fast-deep-equal/es6/index.js"),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__),is_plain_object__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/is-plain-object/dist/is-plain-object.mjs"),_wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_wordpress_warning__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/warning/build-module/index.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/utils/hooks/use-update-effect.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ComponentsContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createContext)({}),useComponentsContext=()=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useContext)(ComponentsContext);const BaseContextSystemProvider=({children,value})=>{const contextValue=function useContextSystemBridge({value}){const parentContext=useComponentsContext(),valueRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(value);return(0,_utils__WEBPACK_IMPORTED_MODULE_4__.Z)((()=>{fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default()(valueRef.current,value)&&valueRef.current!==value&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_5__.Z)(`Please memoize your context: ${JSON.stringify(value)}`)}),[value]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)((()=>deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(null!=parentContext?parentContext:{},null!=value?value:{},{isMergeableObject:is_plain_object__WEBPACK_IMPORTED_MODULE_6__.P})),[parentContext,value])}({value});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ComponentsContext.Provider,{value:contextValue,children})};BaseContextSystemProvider.displayName="BaseContextSystemProvider";const ContextSystemProvider=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.memo)(BaseContextSystemProvider);BaseContextSystemProvider.__docgenInfo={description:"A Provider component that can modify props for connected components within\nthe Context system.\n\n@example\n```jsx\n<ContextSystemProvider value={{ Button: { size: 'small' }}}>\n  <Button>...</Button>\n</ContextSystemProvider>\n```\n\n@template {Record<string, any>} T\n@param {Object}                    options\n@param {import('react').ReactNode} options.children Children to render.\n@param {T}                         options.value    Props to render into connected components.\n@return {JSX.Element} A Provider wrapped component.",methods:[],displayName:"BaseContextSystemProvider"}},"./packages/components/src/ui/context/get-styled-class-name-from-key.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>getStyledClassNameFromKey});var change_case__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/param-case/dist.es2015/index.js");const getStyledClassNameFromKey=(0,__webpack_require__("./node_modules/memize/dist/index.js").Z)((function getStyledClassName(namespace){return`components-${(0,change_case__WEBPACK_IMPORTED_MODULE_0__.o)(namespace)}`}))},"./packages/components/src/ui/context/use-context-system.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>useContextSystem});var build_module=__webpack_require__("./packages/warning/build-module/index.js"),context_system_provider=__webpack_require__("./packages/components/src/ui/context/context-system-provider.js"),constants=__webpack_require__("./packages/components/src/ui/context/constants.js");var get_styled_class_name_from_key=__webpack_require__("./packages/components/src/ui/context/get-styled-class-name-from-key.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");function useContextSystem(props,namespace){const contextSystemProps=(0,context_system_provider.eb)();void 0===namespace&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,build_module.Z)("useContextSystem: Please provide a namespace");const contextProps=contextSystemProps?.[namespace]||{},finalComponentProps={[constants._3]:!0,...(componentName=namespace,{[constants.cT]:componentName})};var componentName;const{_overrides:overrideProps,...otherContextProps}=contextProps,initialMergedProps=Object.entries(otherContextProps).length?Object.assign({},otherContextProps,props):props,classes=(0,use_cx.I)()((0,get_styled_class_name_from_key.l)(namespace),props.className),rendered="function"==typeof initialMergedProps.renderChildren?initialMergedProps.renderChildren(initialMergedProps):initialMergedProps.children;for(const key in initialMergedProps)finalComponentProps[key]=initialMergedProps[key];for(const key in overrideProps)finalComponentProps[key]=overrideProps[key];return void 0!==rendered&&(finalComponentProps.children=rendered),finalComponentProps.className=classes,finalComponentProps}},"./packages/components/src/ui/utils/space.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>space});const GRID_BASE="4px";function space(value){if(void 0===value)return;if(!value)return"0";const asInt="number"==typeof value?value:Number(value);return"undefined"!=typeof window&&window.CSS?.supports?.("margin",value.toString())||Number.isNaN(asInt)?value.toString():`calc(${GRID_BASE} * ${value})`}},"./packages/components/src/utils/hooks/use-update-effect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useUpdateEffect(effect,deps){const mounted=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(mounted.current)return effect();mounted.current=!0}),deps)}},"./packages/components/src/view/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const View=(0,__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js").Z)("div",{target:"e19lxcc00"})("");View.selector=".components-view",View.displayName="View";const __WEBPACK_DEFAULT_EXPORT__=View;try{View.displayName="View",View.__docgenInfo={description:"`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.\n\n```jsx\nimport { View } from `@wordpress/components`;\n\nfunction Example() {\n\treturn (\n\t\t<View>\n\t\t\t Code is Poetry\n\t\t</View>\n\t);\n}\n```",displayName:"View",props:{as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | ... 515 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/view/component.tsx#View"]={docgenInfo:View.__docgenInfo,name:"View",path:"packages/components/src/view/component.tsx#View"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/text/stories/index.story.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,_default:()=>_default,Truncate:()=>Truncate,Highlight:()=>Highlight,__namedExportsOrder:()=>__namedExportsOrder});var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/text/component.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_1__.Z,title:"Components (Experimental)/Text",parameters:{sourceLink:"packages/components/src/text"}},_default=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{children:"Hello"});_default.displayName="_default";const Truncate=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{numberOfLines:2,truncate:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis dictum tortor, eu tincidunt justo scelerisque tincidunt. Duis semper dui id augue malesuada, ut feugiat nisi aliquam. Vestibulum venenatis diam sem, finibus dictum massa semper in. Nulla facilisi. Nunc vulputate faucibus diam, in lobortis arcu ornare vel. In dignissim nunc sed facilisis finibus. Etiam imperdiet mattis arcu, sed rutrum sapien blandit gravida. Aenean sollicitudin neque eget enim blandit, sit amet rutrum leo vehicula. Nunc malesuada ultricies eros ut faucibus. Aliquam erat volutpat. Nulla nec feugiat risus. Vivamus iaculis dui aliquet ante ultricies feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus nec pretium velit, sit amet consectetur ante. Praesent porttitor ex eget fermentum mattis."});Truncate.displayName="Truncate";const Highlight=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{highlightWords:["con"],children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis dictum tortor, eu tincidunt justo scelerisque tincidunt. Duis semper dui id augue malesuada, ut feugiat nisi aliquam. Vestibulum venenatis diam sem, finibus dictum massa semper in. Nulla facilisi. Nunc vulputate faucibus diam, in lobortis arcu ornare vel. In dignissim nunc sed facilisis finibus. Etiam imperdiet mattis arcu, sed rutrum sapien blandit gravida. Aenean sollicitudin neque eget enim blandit, sit amet rutrum leo vehicula. Nunc malesuada ultricies eros ut faucibus. Aliquam erat volutpat. Nulla nec feugiat risus. Vivamus iaculis dui aliquet ante ultricies feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus nec pretium velit, sit amet consectetur ante. Praesent porttitor ex eget fermentum mattis."});Highlight.displayName="Highlight",_default.parameters={..._default.parameters,docs:{..._default.parameters?.docs,source:{originalSource:"() => {\n  return <Text>Hello</Text>;\n}",..._default.parameters?.docs?.source}}},Truncate.parameters={...Truncate.parameters,docs:{...Truncate.parameters?.docs,source:{originalSource:"() => {\n  return <Text numberOfLines={2} truncate>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut\n            facilisis dictum tortor, eu tincidunt justo scelerisque tincidunt.\n            Duis semper dui id augue malesuada, ut feugiat nisi aliquam.\n            Vestibulum venenatis diam sem, finibus dictum massa semper in. Nulla\n            facilisi. Nunc vulputate faucibus diam, in lobortis arcu ornare vel.\n            In dignissim nunc sed facilisis finibus. Etiam imperdiet mattis\n            arcu, sed rutrum sapien blandit gravida. Aenean sollicitudin neque\n            eget enim blandit, sit amet rutrum leo vehicula. Nunc malesuada\n            ultricies eros ut faucibus. Aliquam erat volutpat. Nulla nec feugiat\n            risus. Vivamus iaculis dui aliquet ante ultricies feugiat.\n            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices\n            posuere cubilia curae; Vivamus nec pretium velit, sit amet\n            consectetur ante. Praesent porttitor ex eget fermentum mattis.\n        </Text>;\n}",...Truncate.parameters?.docs?.source}}},Highlight.parameters={...Highlight.parameters,docs:{...Highlight.parameters?.docs,source:{originalSource:"() => {\n  return <Text highlightWords={['con']}>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut\n            facilisis dictum tortor, eu tincidunt justo scelerisque tincidunt.\n            Duis semper dui id augue malesuada, ut feugiat nisi aliquam.\n            Vestibulum venenatis diam sem, finibus dictum massa semper in. Nulla\n            facilisi. Nunc vulputate faucibus diam, in lobortis arcu ornare vel.\n            In dignissim nunc sed facilisis finibus. Etiam imperdiet mattis\n            arcu, sed rutrum sapien blandit gravida. Aenean sollicitudin neque\n            eget enim blandit, sit amet rutrum leo vehicula. Nunc malesuada\n            ultricies eros ut faucibus. Aliquam erat volutpat. Nulla nec feugiat\n            risus. Vivamus iaculis dui aliquet ante ultricies feugiat.\n            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices\n            posuere cubilia curae; Vivamus nec pretium velit, sit amet\n            consectetur ante. Praesent porttitor ex eget fermentum mattis.\n        </Text>;\n}",...Highlight.parameters?.docs?.source}}};const __namedExportsOrder=["_default","Truncate","Highlight"];_default.__docgenInfo={description:"",methods:[],displayName:"_default"},Truncate.__docgenInfo={description:"",methods:[],displayName:"Truncate"},Highlight.__docgenInfo={description:"",methods:[],displayName:"Highlight"}}}]);