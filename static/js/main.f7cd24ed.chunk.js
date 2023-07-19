(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(33).concat([function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(27),a=c.n(n),s=c(7),r=c(3),i=c(9),o=c(4),l=c(5),j=c.n(l),d=c(1),u=c.n(d),b=(c(33),c(34),c(6)),O=c.n(b),h=(c(35),c(10)),m=c(8),x=c(17),_=(c(36),c(0)),p=["type","children"],v=function(e){var t=e.type,c=e.children,n=Object(x.a)(e,p);return Object(_.jsx)(s.c,Object(h.a)(Object(h.a)({className:function(e){var c=e.isActive;return O()("NavLinkMain",Object(m.a)({},"NavLinkMain--".concat(t),t),{"is-active":c})}},n),{},{children:c}))},f=(c(38),c.p+"static/media/Logo.2d8d3e42.svg"),g=function(){return Object(_.jsx)(s.b,{to:"/home",className:"Logo",children:Object(_.jsx)("img",{src:f,alt:"logo"})})},N=function(){return Object(_.jsx)("nav",{className:"Navbar",children:Object(_.jsxs)("ul",{className:"Navbar__list",children:[Object(_.jsx)("li",{className:"Navbar__item",children:Object(_.jsx)(g,{})}),Object(_.jsx)("li",{className:"Navbar__item",children:Object(_.jsx)(v,{type:"text",to:"/",children:"Home"})}),Object(_.jsx)("li",{className:"Navbar__item",children:Object(_.jsx)(v,{type:"text",to:"phones",children:"Phones"})}),Object(_.jsx)("li",{className:"Navbar__item",children:Object(_.jsx)(v,{type:"text",to:"tablets",children:"Tablets"})}),Object(_.jsx)("li",{className:"Navbar__item",children:Object(_.jsx)(v,{type:"text",to:"accessories",children:"Accessories"})})]})})};function P(e,t){var c=Object(d.useState)((function(){var c=localStorage.getItem(e);if(null===c)return t;try{return JSON.parse(c)}catch(n){return localStorage.removeItem(e),t}})),n=Object(o.a)(c,2),a=n[0],s=n[1];return[a,function(t){localStorage.setItem(e,JSON.stringify(t)),s(t)}]}var y=u.a.createContext({cart:[],setCart:function(){}}),C=function(e){var t=e.children,c=P("cart",[]),n=Object(o.a)(c,2),a=n[0],s=n[1];return Object(_.jsx)(y.Provider,{value:{cart:a,setCart:s},children:t})},k=u.a.createContext({favourites:[],setFavourites:function(){}}),D=function(e){var t=e.children,c=P("favourite",[]),n=Object(o.a)(c,2),a=n[0],s=n[1];return Object(_.jsx)(k.Provider,{value:{favourites:a,setFavourites:s},children:t})},w=(c(39),function(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1];null===a?c.delete(n):Array.isArray(a)?(c.delete(n),a.forEach((function(e){c.append(n,e)}))):c.set(n,a)})),c.toString()}),S=function(){var e=Object(s.d)(),t=Object(o.a)(e,2),c=t[0],n=t[1],a=c.get("query")||"",i=Object(d.useState)(a),l=Object(o.a)(i,2),j=l[0],u=l[1],b=Object(r.n)(),h=b.pathname.split("/")[1];Object(d.useEffect)((function(){u(a)}),[h]);var m=Object(d.useMemo)((function(){return function(e){var t=e.pathname.split("/");return!(t.length>2)&&["phones","tablets","accessories","favourites"].some((function(e){return t.includes(e)}))}(b)}),[b]),x=Object(d.useCallback)(function(e,t){var c=0;return function(){for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];window.clearTimeout(c),c=window.setTimeout((function(){e.apply(void 0,a)}),t)}}(n,700),[h]);return Object(_.jsxs)("div",{className:O()("Search",{isActive:m}),children:[Object(_.jsx)("input",{type:"text",value:j,className:O()("Search__input",{"has-icon":""===j}),placeholder:"Search in ".concat(h,"..."),onChange:function(e){var t=e.target.value;u(t),x(w(c,{query:t.trim()||null}))}}),Object(_.jsx)("button",{type:"button","data-cy":"searchDelete",className:O()("Search__clear-button",{isActive:""!==j}),onClick:function(){u(""),n(w(c,{query:null}))}})]},h)},F=function(){var e=Object(d.useContext)(y).cart,t=Object(d.useContext)(k).favourites,c=Object(d.useMemo)((function(){return e.reduce((function(e,t){return e+t.quantity}),0)}),[e]),n=Object(d.useMemo)((function(){return t.length}),[t]);return Object(_.jsxs)("header",{className:"Header",children:[Object(_.jsx)("div",{className:"Header__navigation",children:Object(_.jsx)(N,{})}),Object(_.jsxs)("div",{className:"Header__actions",children:[Object(_.jsx)(S,{}),Object(_.jsx)(v,{to:"favourites",type:"favourite",children:Object(_.jsx)("span",{className:O()("Header__items-count",{active:!!n}),children:n})}),Object(_.jsx)(v,{to:"cart",type:"cart",children:Object(_.jsx)("span",{className:O()("Header__items-count",{active:!!c}),children:c})})]})]})},A=(c(40),["className","content","sign","arrowDirection"]),M=function(e){var t=e.className,c=void 0===t?"":t,n=e.content,a=e.sign,s=e.arrowDirection,r=Object(x.a)(e,A);return Object(_.jsx)("button",Object(h.a)({type:"button",className:O()("Button",Object(m.a)({},c,c),Object(m.a)({},"Button--".concat(n),n),Object(m.a)({},"Button--quantity-".concat(a),a),Object(m.a)({},"Button--arrow-".concat(s),s))},r))},I=(c(41),function(){return Object(_.jsx)("footer",{className:"Footer",children:Object(_.jsxs)("div",{className:"Footer__content container",children:[Object(_.jsx)(g,{}),Object(_.jsx)("div",{className:"Footer__info",children:Object(_.jsxs)("ul",{className:"Footer__list",children:[Object(_.jsx)("li",{className:"Footer__list-item",children:Object(_.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/nazarkharkevych/react_phone-catalog",children:"Github"})}),Object(_.jsx)("li",{className:"Footer__list-item",children:Object(_.jsx)("a",{href:"mailto:nkharkevych@gmail.com",children:"Contacts"})}),Object(_.jsx)("li",{className:"Footer__list-item",children:Object(_.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/\nnazarkharkevych/react_phone-catalog/blob/master/LICENSE",children:"Rights"})})]})}),Object(_.jsxs)("div",{className:"Footer__anchor",children:[Object(_.jsx)("span",{className:"Footer__anchor-text",children:"Back to top"}),Object(_.jsx)(M,{content:"arrow",arrowDirection:"top",onClick:function(){return window.scrollTo(0,0)}})]})]})})}),T="https://mate-academy.github.io/react_phone-catalog/api/products";function q(e){return new Promise((function(t){setTimeout(t,e)}))}function B(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={method:t};return c&&(n.body=JSON.stringify(c),n.headers={"Content-Type":"application/json; charset=UTF-8"}),q(500).then((function(){return fetch(T+e,n)})).then((function(e){return e.json()}))}var L=function(e){return B(e)},H=(c(42),function(){return Object(_.jsx)("div",{className:"Loader",children:Object(_.jsx)("div",{className:"Loader__content"})})}),R=function(){var e=Object(d.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(d.useState)(!1),s=Object(o.a)(a,2),l=s[0],u=s[1],b=function(){var e=Object(i.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.prev=1,e.next=4,L(".json");case 4:t=e.sent,n(t),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),new Error("Loading Error");case 11:return e.prev=11,u(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){b()}),[]),Object(_.jsx)(D,{children:Object(_.jsx)(C,{children:Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(F,{}),Object(_.jsx)("main",{className:"App__main",children:l?Object(_.jsx)("div",{className:"App__loader",children:Object(_.jsx)(H,{})}):Object(_.jsx)(r.b,{context:c})}),Object(_.jsx)(I,{})]})})})},E=(c(43),c(44),c.p+"static/media/banner-phones.b4eeda8b.png"),G=c.p+"static/media/banner-tablets.a962057c.png",U=c.p+"static/media/banner-accessories.bdd2e0fc.png",$=function(){var e=Object(d.useState)(0),t=Object(o.a)(e,2),c=t[0],n=t[1],a="translate(-".concat(100*c,"%, 0)"),r=function(){n((function(e){return 2===e?0:e+1}))};return Object(d.useEffect)((function(){var e=setInterval((function(){r()}),5e3);return function(){clearInterval(e)}}),[]),Object(_.jsxs)("div",{className:"Carousel",children:[Object(_.jsxs)("div",{className:"Carousel__container",children:[Object(_.jsx)(M,{content:"arrow",arrowDirection:"left",className:"Carousel__button",onClick:function(){n((function(e){return 0===e?2:e-1}))}}),Object(_.jsx)("div",{className:"Carousel__image-container",children:Object(_.jsxs)("ul",{className:"Carousel__image-list",style:{transform:a},children:[Object(_.jsx)("li",{children:Object(_.jsx)(s.b,{to:"/phones",className:"Carousel__link",children:Object(_.jsx)("img",{src:E,alt:"Phones",className:"Carousel__image"})})}),Object(_.jsx)("li",{children:Object(_.jsx)(s.b,{to:"/tablets",className:"Carousel__link",children:Object(_.jsx)("img",{src:G,alt:"Tablets",className:"Carousel__image"})})}),Object(_.jsx)("li",{children:Object(_.jsx)(s.b,{to:"/accessories",className:"Carousel__link",children:Object(_.jsx)("img",{src:U,alt:"Accessories",className:"Carousel__image"})})})]})}),Object(_.jsx)(M,{content:"arrow",className:"Carousel__button",onClick:r})]}),Object(_.jsxs)("div",{className:"Carousel__badges",children:[Object(_.jsx)("button",{type:"button",className:O()("Carousel__badge",{"Carousel__badge--active":0===c}),onClick:function(){return n(0)}}),Object(_.jsx)("button",{type:"button",className:O()("Carousel__badge",{"Carousel__badge--active":1===c}),onClick:function(){return n(1)}}),Object(_.jsx)("button",{type:"button",className:O()("Carousel__badge",{"Carousel__badge--active":2===c}),onClick:function(){return n(2)}})]})]})},J=c(11),z=(c(45),function(e){var t=e.price;return t-t/100*e.discount}),Y=function(e){var t=e.product,c=t.name,n=t.price,a=t.discount,r=t.screen,i=t.capacity,o=t.ram,l=t.imageUrl,j=Object(d.useContext)(y),u=j.cart,b=j.setCart,h=Object(d.useContext)(k),m=h.favourites,x=h.setFavourites,p=z(t),v=function(e){var t="/";return t+="".concat(e.type,"s/"),t+e.id}(t),f=u.some((function(e){return e.id===t.id})),g=m.includes(t.id);return Object(_.jsx)("div",{className:"ProductCard",children:Object(_.jsxs)("div",{className:"ProductCard__content",children:[Object(_.jsx)("div",{className:"ProductCard__image-container",children:Object(_.jsx)(s.b,{to:v,children:Object(_.jsx)("img",{className:"ProductCard__image",src:l,alt:"product"})})}),Object(_.jsx)("p",{className:"ProductCard__title",children:Object(_.jsx)(s.b,{to:v,children:c})}),Object(_.jsxs)("div",{className:"ProductCard__price",children:[Object(_.jsx)("h2",{className:"ProductCard__price-main",children:"$".concat(p)}),!!a&&Object(_.jsx)("p",{className:"ProductCard__price-discount",children:"$".concat(n)})]}),Object(_.jsx)("table",{className:"ProductCard__specs-table",children:Object(_.jsxs)("tbody",{children:[Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:"Screen"}),Object(_.jsx)("td",{children:r||"-"})]}),Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:"Capacity"}),Object(_.jsx)("td",{children:i||"-"})]}),Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:"RAM"}),Object(_.jsx)("td",{children:o||"-"})]})]})}),Object(_.jsxs)("div",{className:"ProductCard__buttons",children:[Object(_.jsx)(M,{content:"cart",className:O()({active:f}),onClick:function(){f||b([].concat(Object(J.a)(u),[{id:t.id,quantity:1}]))},children:f?"Added to cart":"Add to cart"}),Object(_.jsx)(M,{content:"favourite","data-cy":"addToFavorite",className:O()({active:g}),onClick:function(){x(g?m.filter((function(e){return e!==t.id})):[].concat(Object(J.a)(m),[t.id]))}})]})]})})},Q=(c(46),function(e){var t=e.products,c=Object(d.useState)(0),n=Object(o.a)(c,2),a=n[0],s=n[1],r=t.length,i=272*r+16*(r-1),l="translate(-".concat(272*a+16*a,"px, 0)");return Object(_.jsx)("div",{className:"ProductsSlider",children:Object(_.jsxs)("div",{className:"ProductsSlider__slider",children:[Object(_.jsxs)("div",{className:"ProductsSlider__buttons",children:[Object(_.jsx)(M,{disabled:0===a,content:"arrow",arrowDirection:"left",onClick:function(){s(a-4)}}),Object(_.jsx)(M,{disabled:a===r-4,content:"arrow",onClick:function(){s(a+4)}})]}),Object(_.jsx)("div",{className:"ProductsSlider__content",children:Object(_.jsx)("ul",{className:"ProductsSlider__content-list","data-cy":"cardsContainer",style:{width:i,transform:l},children:t.map((function(e){return Object(_.jsx)("li",{children:Object(_.jsx)(Y,{product:e})},e.id)}))})})]})})}),W=function(){var e=Object(r.r)(),t=Object(d.useMemo)((function(){return e.filter((function(e){return 0!==e.discount})).sort((function(e,t){return z(e)-z(t)}))}),[e]),c=Object(d.useMemo)((function(){return e.filter((function(e){return!e.discount})).sort((function(e,t){return t.price-e.price}))}),[e]);return Object(_.jsxs)("div",{className:"HomePage container",children:[Object(_.jsx)("section",{className:"HomePage__carousel-container",children:Object(_.jsx)($,{})}),Object(_.jsxs)("section",{className:"section",children:[Object(_.jsx)("h1",{className:"section__title",children:"Hot prices"}),Object(_.jsx)(Q,{products:t})]}),Object(_.jsxs)("section",{className:"HomePage__shop-by-category section",children:[Object(_.jsx)("h1",{className:"section__title",children:"Shop by category"}),Object(_.jsxs)("ul",{className:"HomePage__shop-by-category-container","data-cy":"categoryLinksContainer",children:[Object(_.jsxs)("li",{children:[Object(_.jsx)(s.b,{to:"/phones",className:"HomePage__shop-by-category-link",children:Object(_.jsx)("h3",{children:"Mobile phones"})}),Object(_.jsx)("p",{children:"95 models"})]}),Object(_.jsxs)("li",{children:[Object(_.jsx)(s.b,{to:"/tablets",className:"HomePage__shop-by-category-link",children:Object(_.jsx)("h3",{children:"Tablets"})}),Object(_.jsx)("p",{children:"24 models"})]}),Object(_.jsxs)("li",{children:[Object(_.jsx)(s.b,{to:"/accessories",className:"HomePage__shop-by-category-link",children:Object(_.jsx)("h3",{children:"Accessories"})}),Object(_.jsx)("p",{children:"100 models"})]})]})]}),Object(_.jsxs)("section",{className:"HomePage__brand-new section",children:[Object(_.jsx)("h1",{className:"section__title",children:"Brand new models"}),Object(_.jsx)(Q,{products:c})]})]})},K=(c(47),c(48),function(e){var t=e.items;return Object(_.jsx)("div",{className:"ProductsList","data-cy":"productList",children:Object(_.jsx)("ul",{className:"ProductsList__list",children:t.map((function(e){return Object(_.jsx)("li",{className:"ProductsList__item",children:Object(_.jsx)(Y,{product:e})},e.id)}))})})}),V=(c(49),["children","params"]),X=function(e){var t=e.children,c=e.params,n=Object(x.a)(e,V),a=Object(s.d)(),r=Object(o.a)(a,1)[0];return Object(_.jsx)(s.b,Object(h.a)(Object(h.a)({to:{search:w(r,c)}},n),{},{children:t}))},Z=function(e){var t=e.children,c=e.paramName,n=e.label,a=Object(d.useState)(!1),r=Object(o.a)(a,2),i=r[0],l=r[1],j=Object(s.d)(),b=Object(o.a)(j,2),h=b[0],x=b[1],p=h.get(c)||"",v=u.a.Children.toArray(t),f=function(){l(!1)};return Object(_.jsx)("div",{className:O()("DropdownSelect",{"is-active":i}),children:Object(_.jsxs)("label",{htmlFor:c,className:"DropdownSelect__label",children:[n,Object(_.jsx)("select",{name:c,id:c,className:"DropdownSelect__select",value:p,onChange:function(e){x({sort:e.target.value})},onMouseDown:function(e){e.preventDefault(),l((function(e){return!e}))},children:t}),Object(_.jsx)("ul",{children:v.map((function(e){var t,n=e.props;return Object(_.jsx)("li",{children:Object(_.jsx)(X,{params:(t={},Object(m.a)(t,c,n.value),Object(m.a)(t,"page","1"),t),onClick:f,children:n.children})},n.value)}))})]})})};c(50);var ee,te=function(e){var t=e.total,c=e.perPage,n=e.currentPage,a=Math.ceil(t/c),s=function(e,t){for(var c=[],n=e;n<=t;n+=1)c.push(n);return c}(1,a);return Object(_.jsxs)("ul",{className:"Pagination","data-cy":"pagination",children:[Object(_.jsx)("li",{className:O()("Pagination__item",{disabled:1===n}),children:Object(_.jsx)(X,{"data-cy":"paginationLeft",className:"Pagination__link Pagination__link--prev",params:{page:"".concat(n-1)}})}),s.map((function(e){return Object(_.jsx)("li",{className:O()("Pagination__item",{active:n===e}),children:Object(_.jsx)(X,{className:"Pagination__link",params:{page:"".concat(e)},children:e})},e)})),Object(_.jsx)("li",{className:O()("Pagination__item",{disabled:n===a}),children:Object(_.jsx)(X,{"data-cy":"paginationRight",className:"Pagination__link Pagination__link--next",params:{page:"".concat(n+1)}})})]})},ce=(c(51),function(e){var t=e.category;return Object(_.jsx)("div",{className:"NoSearchResults",children:Object(_.jsx)("h2",{children:"No ".concat(t," matching the query found \ud83e\uddd0")})})}),ne=(c(52),function(){var e=Object(r.n)(),t="",c=e.pathname.split("/").filter((function(e){return""!==e})).map((function(e,c,n){t+="/".concat(e);var a=function(e){return e.split("-").map((function(e){return e[0].toUpperCase()+e.slice(1)})).join(" ")}(e);return Object(_.jsx)("li",{className:"Breadcrumbs__item",children:c!==n.length-1?Object(_.jsx)(s.b,{to:t,children:a}):a},e)}));return Object(_.jsx)("div",{className:"Breadcrumbs","data-cy":"breadCrumbs",children:Object(_.jsxs)("ul",{className:"Breadcrumbs__list",children:[Object(_.jsx)("li",{children:Object(_.jsx)(s.b,{to:"/home",className:"Breadcrumbs__home-link"})}),c]})})}),ae=function(e){return e.trim().toLowerCase()},se=(c(53),function(e){var t=e.category,c=t[0].toUpperCase()+t.slice(1);return Object(_.jsx)("div",{className:"NoResults",children:Object(_.jsx)("h2",{children:"".concat(c," not found")})})});!function(e){e.age="age",e.name="name",e.price="price"}(ee||(ee={}));var re,ie=function(e){var t=e.productType,c=Object(r.r)(),n=Object(s.d)(),a=Object(o.a)(n,1)[0],i=a.get("sort")||"",l=a.get("perPage")||"",j=+(a.get("page")||"")||1,u=a.get("query")||"",b=Object(d.useMemo)((function(){return c.filter((function(e){return e.type===t}))}),[c,t]),h=Object(d.useMemo)((function(){return b.filter((function(e){var t=ae(u);return ae(e.name).includes(t)}))}),[b,u]),m=Object(d.useMemo)((function(){var e=Object(J.a)(h);switch(i){case ee.age:return e.sort((function(e,t){return e.age-t.age}));case ee.name:return e.sort((function(e,t){return e.name.localeCompare(t.name)}));case ee.price:return e.sort((function(e,t){return z(e)-z(t)}));default:return h}}),[i,h]),x=m.length,p=function(e,t){switch(e){case"all":return t;case"4":return 4;case"16":return 16;default:return 8}}(l,x),v=p*j-(p-1),f=Math.min(p*j,x),g=Object(d.useMemo)((function(){return m.slice(v-1,f)}),[i,v,f,m]),N=function(e){switch(e){case"phone":return"Mobile phones";case"tablet":return"Tablets";case"accessory":return"Accessories";default:return""}}(t),P=function(e){switch(e){case"phone":return"phones";case"tablet":return"tablets";case"accessory":return"accessories";default:return""}}(t);return Object(_.jsxs)("div",{className:"ProductsPage container",children:[Object(_.jsx)("div",{className:"ProductsPage__breadcrumbs",children:Object(_.jsx)(ne,{})}),Object(_.jsxs)("div",{className:"ProductsPage__title",children:[Object(_.jsx)("h1",{children:N}),Object(_.jsx)("p",{children:"".concat(x," models")})]}),Object(_.jsxs)("div",{className:O()("ProductsPage__actions",{disabled:!x}),children:[Object(_.jsxs)(Z,{paramName:"sort",label:"Sort by",children:[Object(_.jsx)("option",{value:"age",children:"Newest"}),Object(_.jsx)("option",{value:"name",children:"Alphabetically"}),Object(_.jsx)("option",{value:"price",children:"Cheapest"})]}),Object(_.jsxs)(Z,{paramName:"perPage",label:"Items on page",children:[Object(_.jsx)("option",{value:"all",children:"All"}),Object(_.jsx)("option",{value:"4",children:"4"}),Object(_.jsx)("option",{value:"8",children:"8"}),Object(_.jsx)("option",{value:"16",children:"16"})]})]}),!x&&u&&Object(_.jsx)(ce,{category:P}),!x&&!u&&Object(_.jsx)(se,{category:P}),!!x&&Object(_.jsxs)("section",{children:[Object(_.jsx)("div",{className:"ProductsPage__product-list",children:Object(_.jsx)(K,{items:g})}),x>3&&Object(_.jsx)(te,{total:x,perPage:p,currentPage:j})]})]})},oe=(c(54),c(55),function(){var e=Object(r.p)();return Object(_.jsx)("button",{"data-cy":"backButton",type:"button",className:"GoBackButton",onClick:function(){return e(-1)},children:"Back"})});!function(e){e.changedColor="changed_color",e.changedCapacity="changed_capacity",e.changedImage="changed_image"}(re||(re={}));var le={colorId:0,capacityId:0,imageId:0},je=function(e,t){var c=t.type,n=t.value;switch(c){case re.changedColor:return Object(h.a)(Object(h.a)({},e),{},{colorId:n});case re.changedCapacity:return Object(h.a)(Object(h.a)({},e),{},{capacityId:n});case re.changedImage:return Object(h.a)(Object(h.a)({},e),{},{imageId:n});default:return e}},de=function(){var e=Object(r.r)(),t=Object(d.useState)(!0),c=Object(o.a)(t,2),n=c[0],a=c[1],s=Object(d.useState)(!1),l=Object(o.a)(s,2),u=l[0],b=l[1],h=Object(d.useState)(null),m=Object(o.a)(h,2),x=m[0],p=m[1],v=function(){var e=Object(d.useReducer)(je,le),t=Object(o.a)(e,2);return[t[0],t[1]]}(),f=Object(o.a)(v,2),g=f[0],N=g.colorId,P=g.capacityId,C=g.imageId,D=f[1],w=Object(r.s)().productId,S=void 0===w?"":w,F=Object(d.useContext)(y),A=F.cart,I=F.setCart,T=Object(d.useContext)(k),q=T.favourites,B=T.setFavourites,R=A.some((function(e){return e.id===S})),E=q.includes(S),G=Object(d.useMemo)((function(){return e.find((function(e){return e.id===S}))}),[e]),U=Object(d.useMemo)((function(){return G?z(G):0}),[G]),$=Object(d.useMemo)((function(){return e.slice(4,16)}),[e]),Y=function(){var e=Object(i.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,e.next=4,L("/".concat(S,".json"));case 4:t=e.sent,p(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),b(!0);case 11:return e.prev=11,a(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();Object(d.useEffect)((function(){e.length&&Y(),window.scrollTo(0,0)}),[S]);var W=function(e){D({type:re.changedImage,value:e})},K=function(e){D({type:re.changedColor,value:e})},V=function(e){D({type:re.changedCapacity,value:e})};return Object(_.jsxs)("div",{className:"ProductDetailsPage container",children:[Object(_.jsx)("div",{className:"ProductDetailsPage__breadcrumbs",children:Object(_.jsx)(ne,{})}),Object(_.jsx)("div",{className:"ProductDetailsPage__return",children:Object(_.jsx)(oe,{})}),u&&Object(_.jsx)("h1",{className:"ProductDetailsPage__not-found",children:"Product was not found"}),n&&Object(_.jsx)("div",{className:"ProductDetailsPage__loader",children:Object(_.jsx)(H,{})}),!n&&!u&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{className:"ProductDetailsPage__content",children:[Object(_.jsxs)("section",{className:"ProductDetailsPage__main-content grid section",children:[Object(_.jsx)("h1",{className:"ProductDetailsPage__title",children:null===x||void 0===x?void 0:x.name}),Object(_.jsx)("aside",{className:"ProductDetailsPage__thumbnails",children:Object(_.jsx)("ul",{children:null===x||void 0===x?void 0:x.images.map((function(e,t){return Object(_.jsx)("li",{children:Object(_.jsx)("button",{type:"button",onClick:W.bind(null,t),className:O()("ProductDetailsPage__thumbnail-button",{active:C===t}),children:Object(_.jsx)("img",{src:e,alt:"thumbnail",className:"ProductDetailsPage__thumbnail"})})},e)}))})}),Object(_.jsx)("div",{className:"ProductDetailsPage__image-main",children:Object(_.jsx)("img",{src:null===x||void 0===x?void 0:x.images[C],alt:"product"})}),Object(_.jsxs)("div",{className:"ProductDetailsPage__actions",children:[Object(_.jsxs)("div",{className:"ProductDetailsPage__selectors",children:[Object(_.jsx)("p",{children:"Available colors"}),Object(_.jsxs)("ul",{children:[Object(_.jsx)("li",{children:Object(_.jsx)(M,{content:"color",className:O()({active:0===N},"ProductDetailsPage__colorPicker-1"),onClick:function(){return K(0)}})}),Object(_.jsx)("li",{children:Object(_.jsx)(M,{content:"color",className:O()({active:1===N},"ProductDetailsPage__colorPicker-2"),onClick:function(){return K(1)}})}),Object(_.jsx)("li",{children:Object(_.jsx)(M,{content:"color",className:O()({active:2===N},"ProductDetailsPage__colorPicker-3"),onClick:function(){return K(2)}})}),Object(_.jsx)("li",{children:Object(_.jsx)(M,{content:"color",className:O()({active:3===N},"ProductDetailsPage__colorPicker-4"),onClick:function(){return K(3)}})})]})]}),Object(_.jsxs)("div",{className:"ProductDetailsPage__selectors",children:[Object(_.jsx)("p",{children:"Select capacity"}),Object(_.jsxs)("ul",{children:[Object(_.jsx)("li",{children:Object(_.jsx)(M,{content:"text",className:O()({active:0===P}),onClick:function(){return V(0)},children:"64 GB"})}),Object(_.jsx)("li",{children:Object(_.jsx)(M,{content:"text",className:O()({active:1===P}),onClick:function(){return V(1)},children:"256 GB"})}),Object(_.jsx)("li",{children:Object(_.jsx)(M,{content:"text",className:O()({active:2===P}),onClick:function(){return V(2)},children:"512 GB"})})]})]}),Object(_.jsxs)("div",{className:"ProductDetailsPage__actions-container",children:[Object(_.jsxs)("div",{className:"ProductDetailsPage__price",children:[Object(_.jsx)("h2",{className:"ProductDetailsPage__price-sell",children:"$".concat(U)}),!(null===G||void 0===G||!G.discount)&&Object(_.jsx)("p",{className:"ProductDetailsPage__price-full",children:"$".concat(G.price)})]}),Object(_.jsxs)("div",{className:"ProductDetailsPage__buttons",children:[Object(_.jsx)(M,{content:"cart",className:O()("ProductDetailsPage__button-cart",{active:R}),onClick:function(){R||I([].concat(Object(J.a)(A),[{id:S,quantity:1}]))},children:R?"Added to cart":"Add to cart"}),Object(_.jsx)(M,{content:"favourite","data-cy":"addToFavorite",className:O()("ProductDetailsPage__button-favourite",{active:E}),onClick:function(){B(E?q.filter((function(e){return e!==S})):[].concat(Object(J.a)(q),[S]))}})]})]}),Object(_.jsx)("div",{className:"ProductDetailsPage__specs-small",children:Object(_.jsx)("table",{className:"ProductDetailsPage__specs-table",children:Object(_.jsxs)("tbody",{children:[Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:"Screen"}),Object(_.jsx)("td",{children:(null===x||void 0===x?void 0:x.display.screenSize)||"-"})]}),Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:"Resolution"}),Object(_.jsx)("td",{children:(null===x||void 0===x?void 0:x.display.screenResolution)||"-"})]}),Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:"Processor"}),Object(_.jsx)("td",{children:(null===x||void 0===x?void 0:x.hardware.cpu)||"-"})]}),Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:"RAM"}),Object(_.jsx)("td",{children:(null===x||void 0===x?void 0:x.storage.ram)||"-"})]})]})})})]})]}),Object(_.jsxs)("div",{className:"ProductDetailsPage__details grid section",children:[Object(_.jsxs)("section",{className:"ProductDetailsPage__about","data-cy":"productDescription",children:[Object(_.jsx)("p",{className:"ProductDetailsPage__about-subtitle",children:"About"}),Object(_.jsx)("p",{className:"ProductDetailsPage__about-description",children:null===x||void 0===x?void 0:x.description})]}),Object(_.jsxs)("section",{className:"ProductDetailsPage__techspecs",children:[Object(_.jsx)("p",{className:"ProductDetailsPage__about-subtitle",children:"Tech specs"}),Object(_.jsx)("table",{className:"ProductDetailsPage__techspecs-table",children:Object(_.jsxs)("tbody",{children:[Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:"Screen"}),Object(_.jsx)("td",{children:(null===x||void 0===x?void 0:x.display.screenSize)||"-"})]}),Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:"Resolution"}),Object(_.jsx)("td",{children:(null===x||void 0===x?void 0:x.display.screenResolution)||"-"})]}),Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:"Processor"}),Object(_.jsx)("td",{children:(null===x||void 0===x?void 0:x.hardware.cpu)||"-"})]}),Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:"RAM"}),Object(_.jsx)("td",{children:(null===x||void 0===x?void 0:x.storage.ram)||"-"})]}),Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:"Built in memory"}),Object(_.jsx)("td",{children:(null===x||void 0===x?void 0:x.storage.flash)||"-"})]}),Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:"Camera"}),Object(_.jsx)("td",{children:(null===x||void 0===x?void 0:x.camera.primary)||"-"})]}),Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:"Additional Features"}),Object(_.jsx)("td",{children:(null===x||void 0===x?void 0:x.additionalFeatures)||"-"})]}),Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:"Cell"}),Object(_.jsx)("td",{children:(null===x||void 0===x?void 0:x.connectivity.cell)||"-"})]})]})})]})]})]}),Object(_.jsxs)("div",{className:"ProductDetailsPage__suggested",children:[Object(_.jsx)("h2",{children:"You may also like"}),Object(_.jsx)(Q,{products:$})]})]})]})},ue=(c(56),function(){var e=Object(r.r)(),t=Object(d.useContext)(y),c=t.cart,n=t.setCart,a=Object(d.useState)(!1),s=Object(o.a)(a,2),i=s[0],l=s[1],j=Object(d.useState)((function(){return e.length?c.map((function(t){var c=e.find((function(e){return e.id===t.id}));return Object(h.a)(Object(h.a)({},t),{},{product:c})})):[]})),u=Object(o.a)(j,2),b=u[0],m=u[1],x=Object(d.useMemo)((function(){return b.reduce((function(e,t){return e+z(t.product)*t.quantity}),0)}),[b]),p=function(e){m(b.filter((function(t){return t.id!==e}))),n(c.filter((function(t){return t.id!==e})))},v=function(e,t){m(b.map((function(c){return c.id!==e?c:Object(h.a)(Object(h.a)({},c),{},{quantity:c.quantity+t})}))),n(c.map((function(c){return c.id!==e?c:Object(h.a)(Object(h.a)({},c),{},{quantity:c.quantity+t})})))};return Object(_.jsxs)("div",{className:"Cart container",children:[Object(_.jsx)("div",{className:"Cart__breadcrumbs",children:Object(_.jsx)(ne,{})}),Object(_.jsx)("div",{className:"Cart__return",children:Object(_.jsx)(oe,{})}),Object(_.jsx)("div",{className:"Cart__title",children:Object(_.jsx)("h1",{children:"Cart"})}),Object(_.jsx)("div",{className:O()("Cart__checkout-message",{active:i}),children:Object(_.jsx)("h2",{children:"We are sorry, but this feature is not implemented yet"})}),b.length?Object(_.jsxs)("div",{className:"Cart__content grid",children:[Object(_.jsx)("div",{className:"Cart__products",children:Object(_.jsx)("ul",{className:"Cart__products-list",children:b.map((function(e){return Object(_.jsx)("li",{className:"Cart__products-item",children:Object(_.jsxs)("div",{className:"Cart__item",children:[Object(_.jsx)("button",{className:"Cart__item-delete",type:"button","data-cy":"cartDeleteButton",onClick:p.bind(null,e.product.id)}),Object(_.jsx)("div",{className:"Cart__item-image",children:Object(_.jsx)("img",{src:e.product.imageUrl,alt:e.product.name})}),Object(_.jsx)("div",{className:"Cart__item-title",children:e.product.name}),Object(_.jsxs)("div",{className:"Cart__item-quantity",children:[Object(_.jsx)(M,{content:"quantity",sign:"minus",disabled:1===e.quantity,onClick:function(){return v(e.id,-1)}}),Object(_.jsx)("span",{"data-cy":"productQauntity",children:e.quantity}),Object(_.jsx)(M,{content:"quantity",sign:"plus",onClick:function(){return v(e.id,1)}})]}),Object(_.jsx)("div",{className:"Cart__item-price",children:Object(_.jsx)("h2",{children:"$".concat(z(e.product))})})]})},e.id)}))})}),Object(_.jsxs)("div",{className:"Cart__checkout",children:[Object(_.jsx)("h2",{children:"$".concat(x)}),Object(_.jsx)("p",{children:"Total for ".concat(b.length," items")}),Object(_.jsx)(M,{content:"cart",onClick:function(){l(!0),setTimeout((function(){l(!1)}),3e3)},disabled:i,children:"Checkout"})]})]}):Object(_.jsx)("h2",{className:"Cart__no-items-message",children:"Your cart is empty \ud83e\uddd0"})]})}),be=(c(57),function(){var e=Object(d.useContext)(k).favourites,t=Object(r.r)(),c=Object(s.d)(),n=Object(o.a)(c,1)[0].get("query")||"",a=Object(d.useMemo)((function(){return t.filter((function(t){return e.includes(t.id)}))}),[e]),i=Object(d.useMemo)((function(){return a.filter((function(e){var t=ae(n);return ae(e.name).includes(t)}))}),[a,n]),l=i.length,j="".concat(l," item").concat(1===l?"":"s");return Object(_.jsxs)("div",{className:"Favourites container",children:[Object(_.jsx)("div",{className:"Favourites__breadcrumbs",children:Object(_.jsx)(ne,{})}),Object(_.jsx)("div",{className:"Favourites__title",children:Object(_.jsx)("h1",{children:"Favourites"})}),Object(_.jsx)("div",{className:"Favourites__items-count",children:Object(_.jsx)("p",{children:!!l&&j})}),!i.length&&n&&Object(_.jsx)(ce,{category:"favourites"}),a.length||n?Object(_.jsx)(K,{items:i}):Object(_.jsx)("h2",{className:"Favourites__no-items-message",children:"No favourite items"})]})}),Oe=(c(58),function(){return Object(_.jsxs)("div",{className:"NotFoundPage",children:[Object(_.jsx)("div",{className:"NotFoundPage__back",children:Object(_.jsx)(oe,{})}),Object(_.jsx)("div",{className:"NotFoundPage__title",children:Object(_.jsx)("h1",{children:"Page not found..."})})]})});a.a.render(Object(_.jsx)(s.a,{children:Object(_.jsx)(r.e,{children:Object(_.jsxs)(r.c,{path:"/",element:Object(_.jsx)(R,{}),children:[Object(_.jsx)(r.c,{index:!0,element:Object(_.jsx)(W,{})}),Object(_.jsx)(r.c,{path:"home",element:Object(_.jsx)(r.a,{to:"/",replace:!0})}),Object(_.jsxs)(r.c,{path:"phones",children:[Object(_.jsx)(r.c,{index:!0,element:Object(_.jsx)(ie,{productType:"phone"})}),Object(_.jsx)(r.c,{path:":productId",element:Object(_.jsx)(de,{})})]}),Object(_.jsxs)(r.c,{path:"tablets",children:[Object(_.jsx)(r.c,{index:!0,element:Object(_.jsx)(ie,{productType:"tablet"})}),Object(_.jsx)(r.c,{path:":productId",element:Object(_.jsx)(de,{})})]}),Object(_.jsxs)(r.c,{path:"accessories",children:[Object(_.jsx)(r.c,{index:!0,element:Object(_.jsx)(ie,{productType:"accessory"})}),Object(_.jsx)(r.c,{path:":productId",element:Object(_.jsx)(de,{})})]}),Object(_.jsx)(r.c,{path:"cart",element:Object(_.jsx)(ue,{})}),Object(_.jsx)(r.c,{path:"favourites",element:Object(_.jsx)(be,{})}),Object(_.jsx)(r.c,{path:"*",element:Object(_.jsx)(Oe,{})})]})})}),document.getElementById("root"))}]),[[59,1,2]]]);
//# sourceMappingURL=main.f7cd24ed.chunk.js.map