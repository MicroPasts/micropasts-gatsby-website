"use strict";(self.webpackChunkmicropasts_blog_gatsby=self.webpackChunkmicropasts_blog_gatsby||[]).push([[678],{2405:function(e,a,t){t.r(a),t.d(a,{Head:function(){return Q},default:function(){return K}});var c=t(7294),s=t(1985),i=t(1832);var n=()=>c.createElement("div",{className:"py-8 bg-purple"},c.createElement("div",{className:"container"},c.createElement("div",{className:"row"},c.createElement("div",{className:"offset-lg-2 col-lg-8 col-md-12 col-12 text-center"},c.createElement("span",{className:"fs-4 text-white ls-md text-uppercase fw-semi-bold"},"Power high quality research"),c.createElement("h2",{className:"display-3 mt-4 mb-3 text-white fw-bold"},"Help us fuel the research of museums and heritage institutions"),c.createElement("p",{className:"lead text-white px-lg-8 mb-6"},"A collaborative opensource citizen science powered project, built on a partnership between volunteers and professionals"))))),o=t(682),r=t(4051),l=t(1555),d=t(4184),m=t.n(d),f=t(6792),b=/-(.)/g;var p=t(5893);const g=e=>{return e[0].toUpperCase()+(a=e,a.replace(b,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function w(e,{displayName:a=g(e),Component:t,defaultProps:s}={}){const i=c.forwardRef((({className:a,bsPrefix:c,as:s=t||"div",...i},n)=>{const o=(0,f.vE)(c,e);return(0,p.jsx)(s,{ref:n,className:m()(a,o),...i})}));return i.defaultProps=s,i.displayName=a,i}var u=e=>c.forwardRef(((a,t)=>(0,p.jsx)("div",{...a,ref:t,className:m()(a.className,e)})));const h=c.forwardRef((({bsPrefix:e,className:a,variant:t,as:c="img",...s},i)=>{const n=(0,f.vE)(e,"card-img");return(0,p.jsx)(c,{ref:i,className:m()(t?`${n}-${t}`:n,a),...s})}));h.displayName="CardImg";var x=h;const y=c.createContext(null);y.displayName="CardHeaderContext";var v=y;const N=c.forwardRef((({bsPrefix:e,className:a,as:t="div",...s},i)=>{const n=(0,f.vE)(e,"card-header"),o=(0,c.useMemo)((()=>({cardHeaderBsPrefix:n})),[n]);return(0,p.jsx)(v.Provider,{value:o,children:(0,p.jsx)(t,{ref:i,...s,className:m()(a,n)})})}));N.displayName="CardHeader";var E=N;const _=u("h5"),S=u("h6"),k=w("card-body"),z=w("card-title",{Component:_}),O=w("card-subtitle",{Component:S}),j=w("card-link",{Component:"a"}),Z=w("card-text",{Component:"p"}),L=w("card-footer"),D=w("card-img-overlay"),q=c.forwardRef((({bsPrefix:e,className:a,bg:t,text:c,border:s,body:i,children:n,as:o="div",...r},l)=>{const d=(0,f.vE)(e,"card");return(0,p.jsx)(o,{ref:l,...r,className:m()(a,d,t&&`bg-${t}`,c&&`text-${c}`,s&&`border-${s}`),children:i?(0,p.jsx)(k,{children:n}):n})}));q.displayName="Card",q.defaultProps={body:!1};var P=Object.assign(q,{Img:x,Title:z,Subtitle:O,Body:k,Link:j,Text:Z,Header:E,Footer:L,ImgOverlay:D}),F=t(3723);var C=e=>{let{post:a}=e;return c.createElement(l.Z,{lg:4,md:6,className:"d-flex align-items-stretch",key:a.id},c.createElement(P,{className:"border-0 mb-2"},c.createElement("a",{href:a.frontmatter.link},c.createElement(P.Img,{variant:"top",as:F.G,image:(0,F.c)(a.frontmatter.image),alt:a.frontmatter.alt})),c.createElement(P.Body,null,c.createElement(P.Title,{className:"fw-bold text-success"},a.frontmatter.title),c.createElement(P.Text,null,a.rawMarkdownBody))))},B=t(1883);var J=()=>{const e=(0,B.useStaticQuery)("1183436197").allMarkdownRemark.edges.map((e=>c.createElement(C,{key:e.node.id,post:e.node})));return c.createElement("section",{id:"why-us "},c.createElement(o.Z,{fluid:!0,className:"why-us section-bg bg-pastel py-5"},c.createElement(o.Z,null,c.createElement("span",{className:"text-danger mb-3 d-block text-uppercase fw-semi-bold ls-xl text-center"},"Creativity, open research, powered by you"),c.createElement("h2",{className:"display-4 mt-4 mb-3 text-dark fw-bold text-center"},"What have we created with the crowd?"),c.createElement(r.Z,null,e))))};var U=e=>{let{post:a}=e;return c.createElement(l.Z,{md:6,className:"col-12",lg:4,xl:3},c.createElement(P,{className:"border-0 bg-light mb-2"},c.createElement(P.Img,{variant:"top",as:F.G,image:(0,F.c)(a.frontmatter.image),alt:"Object image"}),c.createElement(P.Body,{className:"bg-white border-0 rounded-3"},c.createElement(P.Title,{className:"fw-bold text-dark"},a.frontmatter.title," ",a.frontmatter.name),c.createElement(P.Subtitle,{className:"fw-bold text-dark"},a.frontmatter.institution))))};var T=()=>{const e=(0,B.useStaticQuery)("1253028688").allMarkdownRemark.edges.map((e=>c.createElement(U,{key:e.node.id,post:e.node})));return c.createElement("div",{className:"py-8 bg-pink"},c.createElement("div",{className:"container"},c.createElement("div",{className:"row mb-8 justify-content-center"},c.createElement("div",{className:"col-lg-8 col-md-12 col-12 text-center"},c.createElement("span",{className:"text-dark mb-3 d-block text-uppercase fw-semi-bold ls-xl"},"Who is currently behind this?"),c.createElement("h2",{className:"mb-2 display-4 fw-bold"},"A group of archaeologists"),c.createElement("p",{className:"lead"},"Our team has been working together since 2013, you're welcome to join us..."))),c.createElement(r.Z,null,e)))};const A=["as","disabled"];function M({tagName:e,disabled:a,href:t,target:c,rel:s,role:i,onClick:n,tabIndex:o=0,type:r}){e||(e=null!=t||null!=c||null!=s?"a":"button");const l={tagName:e};if("button"===e)return[{type:r||"button",disabled:a},l];const d=c=>{(a||"a"===e&&function(e){return!e||"#"===e.trim()}(t))&&c.preventDefault(),a?c.stopPropagation():null==n||n(c)};return"a"===e&&(t||(t="#"),a&&(t=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:a?void 0:o,href:t,target:"a"===e?c:void 0,"aria-disabled":a||void 0,rel:"a"===e?s:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},l]}const R=c.forwardRef(((e,a)=>{let{as:t,disabled:c}=e,s=function(e,a){if(null==e)return{};var t,c,s={},i=Object.keys(e);for(c=0;c<i.length;c++)t=i[c],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,A);const[i,{tagName:n}]=M(Object.assign({tagName:t,disabled:c},s));return(0,p.jsx)(n,Object.assign({},s,i,{ref:a}))}));R.displayName="Button";const H=c.forwardRef((({as:e,bsPrefix:a,variant:t,size:c,active:s,className:i,...n},o)=>{const r=(0,f.vE)(a,"btn"),[l,{tagName:d}]=M({tagName:e,...n}),b=d;return(0,p.jsx)(b,{...l,...n,ref:o,className:m()(i,r,s&&"active",t&&`${r}-${t}`,c&&`${r}-${c}`,n.href&&n.disabled&&"disabled")})}));H.displayName="Button",H.defaultProps={variant:"primary",active:!1,disabled:!1};var $=H;var I=()=>c.createElement(r.Z,{className:"py-8 bg-purple"},c.createElement(o.Z,null,c.createElement(r.Z,null,c.createElement(l.Z,{md:12,lg:8,className:"offset-lg-2 col-12 text-center"},c.createElement("span",{className:"fs-4 text-white ls-md text-uppercase fw-semi-bold"},"Can we help you?"),c.createElement("h2",{className:"display-3 mt-4 mb-3 text-white fw-bold"},"Maybe you have a project that needs some citizen science power?"),c.createElement("p",{className:"lead text-white px-lg-8 mb-6"},"Get in touch, we might be able to help you with advice, the use of our platform, our code or maybe some consultancy. We're always willing to chat, and open to new ideas and collaborations. Our project is funded by the core team, so funded research is a high priority."),c.createElement($,{variant:"outline-light",href:"mailto:info@micropasts.org"},"Contact us by email")))));var W=()=>c.createElement(c.Fragment,null,c.createElement("div",{className:"py-8 bg-white"},c.createElement("h2",{className:"display-4 mt-4 mb-5 text-warning fw-bold text-center"},"Who we have worked with"),c.createElement(l.Z,{md:10,className:"mx-auto "},c.createElement(r.Z,{className:"justify-content-center my-3 py-2"},c.createElement(l.Z,{md:2,sm:2,className:"col-md-2 text-center mx-2"},c.createElement(F.S,{src:"../../images/logos/egypt-exploration-society-logo-final-logo.png",alt:"Egypt Exploration Society Logo",className:"img-fluid mx-auto mb-3",width:180,placeholder:"NONE",quality:90,transformOptions:{grayscale:!0},__imageData:t(1472)})),c.createElement(l.Z,{md:2,sm:2,className:"text-center mx-2"},c.createElement(F.S,{src:"../../images/logos/PEF-Logo-Black-Transparent.png",alt:"Palestine Exploration Fund logo",className:"img-fluid mx-auto mb-3",width:70,placeholder:"NONE",quality:90,__imageData:t(2533)})),c.createElement(l.Z,{md:2,sm:2,className:"text-center mx-2"},c.createElement(F.S,{src:"../../images/logos/university-of-stirling.png",alt:"Stirling University logo",className:"img-fluid mx-auto mb-3",width:160,placeholder:"NONE",quality:90,transformOptions:{grayscale:!0},__imageData:t(4275)})),c.createElement(l.Z,{md:2,sm:2,className:"text-center mx-2"},c.createElement(F.S,{src:"../../images/logos/british-museum-logo-vector.png",alt:"British Museum logo",className:"img-fluid mx-auto mb-3",width:160,placeholder:"NONE",quality:90,__imageData:t(9552)}))),c.createElement(r.Z,{className:"justify-content-center my-3"},c.createElement(l.Z,{md:2,sm:2,className:"col-md-2 text-center mx-2"},c.createElement(F.S,{src:"../../images/logos/reading.jpg",alt:"Reading University Logo",className:"img-fluid mx-auto mb-3",width:180,placeholder:"NONE",quality:90,transformOptions:{grayscale:!0},__imageData:t(4730)})),c.createElement(l.Z,{md:2,sm:2,className:"text-center mx-2"},c.createElement(F.S,{src:"../../images/logos/oxford.png",alt:"Oxford University logo",className:"img-fluid mx-auto mb-3",width:100,placeholder:"NONE",quality:90,__imageData:t(8966)})),c.createElement(l.Z,{md:2,sm:2,className:"text-center mx-2"},c.createElement(F.S,{src:"../../images/logos/nms.png",alt:"National Museum of Scotland logo",transformOptions:{grayscale:!0},className:"img-fluid mx-auto mb-3",width:160,placeholder:"NONE",quality:90,__imageData:t(9551)})),c.createElement(l.Z,{md:2,sm:2,className:"text-center mx-2"},c.createElement(F.S,{src:"../../images/logos/english-heritage-vector-logo.png",alt:"English Heritage logo",transformOptions:{grayscale:!0},className:"img-fluid mx-auto mb-3",width:160,placeholder:"NONE",quality:90,__imageData:t(9290)})),c.createElement(l.Z,{md:2,sm:2,className:"text-center mx-2"},c.createElement(F.S,{src:"../../images/logos/denver.png",alt:"Denver Museum logo",transformOptions:{grayscale:!0},className:"img-fluid mx-auto mb-3",height:70,placeholder:"NONE",quality:90,__imageData:t(2934)}))),c.createElement(r.Z,{className:"justify-content-center my-3"},c.createElement(l.Z,{md:2,sm:2,className:"col-md-2 text-center mx-2"},c.createElement(F.S,{src:"../../images/logos/Durham_University_Logo.png",alt:"Durham University Logo",className:"img-fluid mx-auto mb-3",width:180,placeholder:"NONE",quality:90,transformOptions:{grayscale:!0},__imageData:t(1824)})),c.createElement(l.Z,{md:2,sm:2,className:"text-center mx-2"},c.createElement(F.S,{src:"../../images/logos/manchester.png",alt:"Manchester University logo",transformOptions:{grayscale:!0},className:"img-fluid mx-auto mb-3",width:120,placeholder:"NONE",quality:90,__imageData:t(6962)})),c.createElement(l.Z,{md:2,sm:2,className:"text-center mx-2"},c.createElement(F.S,{src:"../../images/logos/montpelier.jpg",alt:"Montpelier Archaeology logo",transformOptions:{grayscale:!0},className:"img-fluid mx-auto mb-3",width:160,placeholder:"NONE",quality:90,__imageData:t(5279)})),c.createElement(l.Z,{md:2,sm:2,className:"text-center mx-2"},c.createElement(F.S,{src:"../../images/logos/fortSnelling.png",alt:"Historic Fort Snelling logo",transformOptions:{grayscale:!0},className:"img-fluid mx-auto mb-3",width:100,placeholder:"NONE",quality:90,__imageData:t(9986)})),c.createElement(l.Z,{md:2,sm:2,className:"text-center mx-2"},c.createElement(F.S,{src:"../../images/logos/cua.png",alt:"Catholic University Americalogo",transformOptions:{grayscale:!0},className:"img-fluid mx-auto mb-3",height:70,placeholder:"NONE",quality:90,__imageData:t(8851)}))),c.createElement(r.Z,{className:"justify-content-center my-3"},c.createElement(l.Z,{md:2,sm:2,className:"col-md-2 text-center mx-2"},c.createElement(F.S,{src:"../../images/logos/Society_of_Antiquaries_of_London_logomark.png",alt:"Society of Antiquaries Logo",className:"img-fluid mx-auto mb-3",width:180,placeholder:"NONE",quality:90,transformOptions:{grayscale:!0},__imageData:t(5648)})),c.createElement(l.Z,{md:2,sm:2,className:"text-center mx-2"},c.createElement(F.S,{src:"../../images/logos/mary-rose.jpg",alt:"Mary Rose Trust logo",transformOptions:{grayscale:!0},className:"img-fluid mx-auto mb-3",width:120,placeholder:"NONE",quality:90,__imageData:t(2738)})),c.createElement(l.Z,{md:2,sm:2,className:"text-center mx-2"},c.createElement(F.S,{src:"../../images/logos/logo-museo-egizio.jpg",alt:"Museo Egizio   logo",transformOptions:{grayscale:!0},className:"img-fluid mx-auto mb-3",width:160,placeholder:"NONE",quality:90,__imageData:t(3344)})),c.createElement(l.Z,{md:2,sm:2,className:"text-center mx-2"},c.createElement(F.S,{src:"../../images/logos/Fitz_logo.jpg",alt:"Fitzwilliam Museum logo",className:"img-fluid mx-auto mb-3",height:70,transformOptions:{grayscale:!0},placeholder:"NONE",quality:90,__imageData:t(424)})),c.createElement(l.Z,{md:2,sm:2,className:"text-center mx-2"},c.createElement(F.S,{src:"../../images/logos/spalogocmykpaths-290x300.png",alt:"Scottish Political Archives logo",className:"img-fluid mx-auto mb-3",height:70,transformOptions:{grayscale:!0},placeholder:"NONE",quality:90,__imageData:t(7871)}))))));var G=()=>c.createElement(o.Z,{fluid:!0,className:"bg-white py-3 mb-3",style:{backgroundColor:"rgba(0, 0, 0, 0.1)",minHeight:"600px",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:"url("+(0,B.withPrefix)("/50691296886_2ffa2cd2e2_c.jpg")+")"}},c.createElement(o.Z,null,c.createElement("h2",{className:"display-4 mt-5 mb-5 fw-bold "},c.createElement("span",{className:"text-dark"},"Featured project:")," ",c.createElement("span",{className:"text-white"},"Faces of Corbridge")),c.createElement(l.Z,{md:8,className:"p-3 text-dark rounded-3 bg-success-subtle text-bg-success bg-transparent"},c.createElement("p",null,"Excavations at Corbridge between 1906 and 1914 uncovered the spectacular remains of the most northerly town in Roman Britain. The names of the lead excavators are well known, however much (if not all) of the hard graft of moving the tonnes of earth was carried out by local labourers. Unfortunately these men remain almost completely anonymous other than one or two names."),c.createElement("p",null,"Photographs from the excavations show many of the faces and we would love to be able to identify these men. Putting names to these faces would add to our archive, and might also lead to further information about the work on site, as well as finally giving credit to those men who excavated this wonderful site."),c.createElement($,{variant:"dark",href:"https://crowdsourced.micropasts.org"},"Find more projects to participate in"))));const Q=()=>c.createElement(i.Z,{title:"Home - MicroPasts",description:"MicroPasts - a crowdfuelled archaeological and heritage citizen science platform"});var K=()=>c.createElement(s.Z,null,c.createElement(n,null),c.createElement(J,null),c.createElement(G,null),c.createElement(W,null),c.createElement(T,null),c.createElement(I,null))},1824:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/fd07f246f2767cc13eae7e37134158e5/0fb49/Durham_University_Logo.png","srcSet":"/static/fd07f246f2767cc13eae7e37134158e5/f39cf/Durham_University_Logo.png 45w,\\n/static/fd07f246f2767cc13eae7e37134158e5/f82d6/Durham_University_Logo.png 90w,\\n/static/fd07f246f2767cc13eae7e37134158e5/0fb49/Durham_University_Logo.png 180w,\\n/static/fd07f246f2767cc13eae7e37134158e5/86dd8/Durham_University_Logo.png 360w","sizes":"(min-width: 180px) 180px, 100vw"},"sources":[{"srcSet":"/static/fd07f246f2767cc13eae7e37134158e5/40341/Durham_University_Logo.webp 45w,\\n/static/fd07f246f2767cc13eae7e37134158e5/4270e/Durham_University_Logo.webp 90w,\\n/static/fd07f246f2767cc13eae7e37134158e5/3705f/Durham_University_Logo.webp 180w,\\n/static/fd07f246f2767cc13eae7e37134158e5/7b3de/Durham_University_Logo.webp 360w","type":"image/webp","sizes":"(min-width: 180px) 180px, 100vw"}]},"width":180,"height":78}')},424:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/07f27fac3a3817aa49035936e28cef6b/a3719/Fitz_logo.jpg","srcSet":"/static/07f27fac3a3817aa49035936e28cef6b/9a5d2/Fitz_logo.jpg 19w,\\n/static/07f27fac3a3817aa49035936e28cef6b/43260/Fitz_logo.jpg 38w,\\n/static/07f27fac3a3817aa49035936e28cef6b/a3719/Fitz_logo.jpg 76w,\\n/static/07f27fac3a3817aa49035936e28cef6b/7548c/Fitz_logo.jpg 152w","sizes":"(min-width: 76px) 76px, 100vw"},"sources":[{"srcSet":"/static/07f27fac3a3817aa49035936e28cef6b/3fb44/Fitz_logo.webp 19w,\\n/static/07f27fac3a3817aa49035936e28cef6b/2221f/Fitz_logo.webp 38w,\\n/static/07f27fac3a3817aa49035936e28cef6b/f435d/Fitz_logo.webp 76w,\\n/static/07f27fac3a3817aa49035936e28cef6b/02cec/Fitz_logo.webp 152w","type":"image/webp","sizes":"(min-width: 76px) 76px, 100vw"}]},"width":76,"height":70}')},5279:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/e2dd736694c0647ebb80edc0a7421a17/56922/montpelier.jpg","srcSet":"/static/e2dd736694c0647ebb80edc0a7421a17/49edb/montpelier.jpg 40w,\\n/static/e2dd736694c0647ebb80edc0a7421a17/b77f8/montpelier.jpg 80w,\\n/static/e2dd736694c0647ebb80edc0a7421a17/56922/montpelier.jpg 160w","sizes":"(min-width: 160px) 160px, 100vw"},"sources":[{"srcSet":"/static/e2dd736694c0647ebb80edc0a7421a17/7392f/montpelier.webp 40w,\\n/static/e2dd736694c0647ebb80edc0a7421a17/2a1a4/montpelier.webp 80w,\\n/static/e2dd736694c0647ebb80edc0a7421a17/c59f6/montpelier.webp 160w","type":"image/webp","sizes":"(min-width: 160px) 160px, 100vw"}]},"width":160,"height":107}')},8966:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/fa78b1ba572f34bde4abcc02ff949ce6/e06f2/oxford.png","srcSet":"/static/fa78b1ba572f34bde4abcc02ff949ce6/2d088/oxford.png 25w,\\n/static/fa78b1ba572f34bde4abcc02ff949ce6/2b3ff/oxford.png 50w,\\n/static/fa78b1ba572f34bde4abcc02ff949ce6/e06f2/oxford.png 100w,\\n/static/fa78b1ba572f34bde4abcc02ff949ce6/abe50/oxford.png 200w","sizes":"(min-width: 100px) 100px, 100vw"},"sources":[{"srcSet":"/static/fa78b1ba572f34bde4abcc02ff949ce6/340fc/oxford.webp 25w,\\n/static/fa78b1ba572f34bde4abcc02ff949ce6/b8a94/oxford.webp 50w,\\n/static/fa78b1ba572f34bde4abcc02ff949ce6/2367f/oxford.webp 100w,\\n/static/fa78b1ba572f34bde4abcc02ff949ce6/11d28/oxford.webp 200w","type":"image/webp","sizes":"(min-width: 100px) 100px, 100vw"}]},"width":100,"height":100}')},9986:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/9e8b6c33bc929231d2edb1502a83e94f/d1bf9/fortSnelling.png","srcSet":"/static/9e8b6c33bc929231d2edb1502a83e94f/85c86/fortSnelling.png 25w,\\n/static/9e8b6c33bc929231d2edb1502a83e94f/9b8f8/fortSnelling.png 50w,\\n/static/9e8b6c33bc929231d2edb1502a83e94f/d1bf9/fortSnelling.png 100w,\\n/static/9e8b6c33bc929231d2edb1502a83e94f/69223/fortSnelling.png 200w","sizes":"(min-width: 100px) 100px, 100vw"},"sources":[{"srcSet":"/static/9e8b6c33bc929231d2edb1502a83e94f/6427f/fortSnelling.webp 25w,\\n/static/9e8b6c33bc929231d2edb1502a83e94f/d374f/fortSnelling.webp 50w,\\n/static/9e8b6c33bc929231d2edb1502a83e94f/75ea4/fortSnelling.webp 100w,\\n/static/9e8b6c33bc929231d2edb1502a83e94f/0af2f/fortSnelling.webp 200w","type":"image/webp","sizes":"(min-width: 100px) 100px, 100vw"}]},"width":100,"height":100}')},1472:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/e7a235d5e5250e9518f0b7929712331a/95139/egypt-exploration-society-logo-final-logo.png","srcSet":"/static/e7a235d5e5250e9518f0b7929712331a/898d2/egypt-exploration-society-logo-final-logo.png 45w,\\n/static/e7a235d5e5250e9518f0b7929712331a/69214/egypt-exploration-society-logo-final-logo.png 90w,\\n/static/e7a235d5e5250e9518f0b7929712331a/95139/egypt-exploration-society-logo-final-logo.png 180w,\\n/static/e7a235d5e5250e9518f0b7929712331a/579b0/egypt-exploration-society-logo-final-logo.png 360w","sizes":"(min-width: 180px) 180px, 100vw"},"sources":[{"srcSet":"/static/e7a235d5e5250e9518f0b7929712331a/690f4/egypt-exploration-society-logo-final-logo.webp 45w,\\n/static/e7a235d5e5250e9518f0b7929712331a/9d414/egypt-exploration-society-logo-final-logo.webp 90w,\\n/static/e7a235d5e5250e9518f0b7929712331a/1d9fc/egypt-exploration-society-logo-final-logo.webp 180w,\\n/static/e7a235d5e5250e9518f0b7929712331a/dcf51/egypt-exploration-society-logo-final-logo.webp 360w","type":"image/webp","sizes":"(min-width: 180px) 180px, 100vw"}]},"width":180,"height":69}')},2738:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/b34914208a51d8e207e126f6ccba63b2/c3972/mary-rose.jpg","srcSet":"/static/b34914208a51d8e207e126f6ccba63b2/04d31/mary-rose.jpg 30w,\\n/static/b34914208a51d8e207e126f6ccba63b2/325a2/mary-rose.jpg 60w,\\n/static/b34914208a51d8e207e126f6ccba63b2/c3972/mary-rose.jpg 120w,\\n/static/b34914208a51d8e207e126f6ccba63b2/82dcb/mary-rose.jpg 240w","sizes":"(min-width: 120px) 120px, 100vw"},"sources":[{"srcSet":"/static/b34914208a51d8e207e126f6ccba63b2/2ff49/mary-rose.webp 30w,\\n/static/b34914208a51d8e207e126f6ccba63b2/dd220/mary-rose.webp 60w,\\n/static/b34914208a51d8e207e126f6ccba63b2/593e6/mary-rose.webp 120w,\\n/static/b34914208a51d8e207e126f6ccba63b2/7057c/mary-rose.webp 240w","type":"image/webp","sizes":"(min-width: 120px) 120px, 100vw"}]},"width":120,"height":120}')},2934:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/3a569582d947aa85a3f8061420cd7f3a/f0ef8/denver.png","srcSet":"/static/3a569582d947aa85a3f8061420cd7f3a/cfa0b/denver.png 51w,\\n/static/3a569582d947aa85a3f8061420cd7f3a/f92fc/denver.png 102w,\\n/static/3a569582d947aa85a3f8061420cd7f3a/f0ef8/denver.png 203w","sizes":"(min-width: 203px) 203px, 100vw"},"sources":[{"srcSet":"/static/3a569582d947aa85a3f8061420cd7f3a/df47f/denver.webp 51w,\\n/static/3a569582d947aa85a3f8061420cd7f3a/15081/denver.webp 102w,\\n/static/3a569582d947aa85a3f8061420cd7f3a/bbee5/denver.webp 203w","type":"image/webp","sizes":"(min-width: 203px) 203px, 100vw"}]},"width":203,"height":70}')},9551:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/f29e0bdbc44a67129c1437a4d4114b28/d006c/nms.png","srcSet":"/static/f29e0bdbc44a67129c1437a4d4114b28/ea546/nms.png 40w,\\n/static/f29e0bdbc44a67129c1437a4d4114b28/1f174/nms.png 80w,\\n/static/f29e0bdbc44a67129c1437a4d4114b28/d006c/nms.png 160w,\\n/static/f29e0bdbc44a67129c1437a4d4114b28/b616b/nms.png 320w","sizes":"(min-width: 160px) 160px, 100vw"},"sources":[{"srcSet":"/static/f29e0bdbc44a67129c1437a4d4114b28/65c55/nms.webp 40w,\\n/static/f29e0bdbc44a67129c1437a4d4114b28/716fe/nms.webp 80w,\\n/static/f29e0bdbc44a67129c1437a4d4114b28/a4dec/nms.webp 160w,\\n/static/f29e0bdbc44a67129c1437a4d4114b28/c9a73/nms.webp 320w","type":"image/webp","sizes":"(min-width: 160px) 160px, 100vw"}]},"width":160,"height":45}')},3344:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/d2e0d6f2b1ca55189c98b1a9c56f10ad/8a631/logo-museo-egizio.jpg","srcSet":"/static/d2e0d6f2b1ca55189c98b1a9c56f10ad/da4eb/logo-museo-egizio.jpg 40w,\\n/static/d2e0d6f2b1ca55189c98b1a9c56f10ad/04ead/logo-museo-egizio.jpg 80w,\\n/static/d2e0d6f2b1ca55189c98b1a9c56f10ad/8a631/logo-museo-egizio.jpg 160w,\\n/static/d2e0d6f2b1ca55189c98b1a9c56f10ad/70ba0/logo-museo-egizio.jpg 320w","sizes":"(min-width: 160px) 160px, 100vw"},"sources":[{"srcSet":"/static/d2e0d6f2b1ca55189c98b1a9c56f10ad/f43d3/logo-museo-egizio.webp 40w,\\n/static/d2e0d6f2b1ca55189c98b1a9c56f10ad/31591/logo-museo-egizio.webp 80w,\\n/static/d2e0d6f2b1ca55189c98b1a9c56f10ad/26ba9/logo-museo-egizio.webp 160w,\\n/static/d2e0d6f2b1ca55189c98b1a9c56f10ad/9bd86/logo-museo-egizio.webp 320w","type":"image/webp","sizes":"(min-width: 160px) 160px, 100vw"}]},"width":160,"height":51}')},8851:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/a42536fb60a9334538850f5514e790bb/43e0b/cua.png","srcSet":"/static/a42536fb60a9334538850f5514e790bb/8db24/cua.png 28w,\\n/static/a42536fb60a9334538850f5514e790bb/2b0a6/cua.png 56w,\\n/static/a42536fb60a9334538850f5514e790bb/43e0b/cua.png 112w,\\n/static/a42536fb60a9334538850f5514e790bb/db07e/cua.png 224w","sizes":"(min-width: 112px) 112px, 100vw"},"sources":[{"srcSet":"/static/a42536fb60a9334538850f5514e790bb/cb16e/cua.webp 28w,\\n/static/a42536fb60a9334538850f5514e790bb/b5baf/cua.webp 56w,\\n/static/a42536fb60a9334538850f5514e790bb/72ce5/cua.webp 112w,\\n/static/a42536fb60a9334538850f5514e790bb/35011/cua.webp 224w","type":"image/webp","sizes":"(min-width: 112px) 112px, 100vw"}]},"width":112,"height":70}')},5648:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/66abfabe8ef5256fa7cfac56a0344367/7e0d8/Society_of_Antiquaries_of_London_logomark.png","srcSet":"/static/66abfabe8ef5256fa7cfac56a0344367/f0394/Society_of_Antiquaries_of_London_logomark.png 45w,\\n/static/66abfabe8ef5256fa7cfac56a0344367/4d7dd/Society_of_Antiquaries_of_London_logomark.png 90w,\\n/static/66abfabe8ef5256fa7cfac56a0344367/7e0d8/Society_of_Antiquaries_of_London_logomark.png 180w,\\n/static/66abfabe8ef5256fa7cfac56a0344367/fba32/Society_of_Antiquaries_of_London_logomark.png 360w","sizes":"(min-width: 180px) 180px, 100vw"},"sources":[{"srcSet":"/static/66abfabe8ef5256fa7cfac56a0344367/04ece/Society_of_Antiquaries_of_London_logomark.webp 45w,\\n/static/66abfabe8ef5256fa7cfac56a0344367/7ae65/Society_of_Antiquaries_of_London_logomark.webp 90w,\\n/static/66abfabe8ef5256fa7cfac56a0344367/d5758/Society_of_Antiquaries_of_London_logomark.webp 180w,\\n/static/66abfabe8ef5256fa7cfac56a0344367/dfdac/Society_of_Antiquaries_of_London_logomark.webp 360w","type":"image/webp","sizes":"(min-width: 180px) 180px, 100vw"}]},"width":180,"height":51}')},9290:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/3b6ec97696309c0d16ca100078fd13eb/d0f40/english-heritage-vector-logo.png","srcSet":"/static/3b6ec97696309c0d16ca100078fd13eb/39ed1/english-heritage-vector-logo.png 40w,\\n/static/3b6ec97696309c0d16ca100078fd13eb/4d5e1/english-heritage-vector-logo.png 80w,\\n/static/3b6ec97696309c0d16ca100078fd13eb/d0f40/english-heritage-vector-logo.png 160w,\\n/static/3b6ec97696309c0d16ca100078fd13eb/88475/english-heritage-vector-logo.png 320w","sizes":"(min-width: 160px) 160px, 100vw"},"sources":[{"srcSet":"/static/3b6ec97696309c0d16ca100078fd13eb/fe947/english-heritage-vector-logo.webp 40w,\\n/static/3b6ec97696309c0d16ca100078fd13eb/25e5f/english-heritage-vector-logo.webp 80w,\\n/static/3b6ec97696309c0d16ca100078fd13eb/3ee9b/english-heritage-vector-logo.webp 160w,\\n/static/3b6ec97696309c0d16ca100078fd13eb/632ff/english-heritage-vector-logo.webp 320w","type":"image/webp","sizes":"(min-width: 160px) 160px, 100vw"}]},"width":160,"height":64}')},6962:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/66a0a50399394c77cef76cf332e7e028/2ae6c/manchester.png","srcSet":"/static/66a0a50399394c77cef76cf332e7e028/dbd12/manchester.png 30w,\\n/static/66a0a50399394c77cef76cf332e7e028/d03d3/manchester.png 60w,\\n/static/66a0a50399394c77cef76cf332e7e028/2ae6c/manchester.png 120w,\\n/static/66a0a50399394c77cef76cf332e7e028/d5ed1/manchester.png 240w","sizes":"(min-width: 120px) 120px, 100vw"},"sources":[{"srcSet":"/static/66a0a50399394c77cef76cf332e7e028/e5c57/manchester.webp 30w,\\n/static/66a0a50399394c77cef76cf332e7e028/3a4ba/manchester.webp 60w,\\n/static/66a0a50399394c77cef76cf332e7e028/d9c4c/manchester.webp 120w,\\n/static/66a0a50399394c77cef76cf332e7e028/c1211/manchester.webp 240w","type":"image/webp","sizes":"(min-width: 120px) 120px, 100vw"}]},"width":120,"height":37}')},7871:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/2f4f9780e98b52c0bd9ad223449565a0/13f90/spalogocmykpaths-290x300.png","srcSet":"/static/2f4f9780e98b52c0bd9ad223449565a0/6d6b9/spalogocmykpaths-290x300.png 17w,\\n/static/2f4f9780e98b52c0bd9ad223449565a0/8d2cf/spalogocmykpaths-290x300.png 34w,\\n/static/2f4f9780e98b52c0bd9ad223449565a0/13f90/spalogocmykpaths-290x300.png 68w,\\n/static/2f4f9780e98b52c0bd9ad223449565a0/80c2a/spalogocmykpaths-290x300.png 136w","sizes":"(min-width: 68px) 68px, 100vw"},"sources":[{"srcSet":"/static/2f4f9780e98b52c0bd9ad223449565a0/14839/spalogocmykpaths-290x300.webp 17w,\\n/static/2f4f9780e98b52c0bd9ad223449565a0/5fa38/spalogocmykpaths-290x300.webp 34w,\\n/static/2f4f9780e98b52c0bd9ad223449565a0/d6dee/spalogocmykpaths-290x300.webp 68w,\\n/static/2f4f9780e98b52c0bd9ad223449565a0/83f15/spalogocmykpaths-290x300.webp 136w","type":"image/webp","sizes":"(min-width: 68px) 68px, 100vw"}]},"width":68,"height":70}')},9552:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/b1668858ac8d11b20826b30b41a0cda0/811b8/british-museum-logo-vector.png","srcSet":"/static/b1668858ac8d11b20826b30b41a0cda0/a573e/british-museum-logo-vector.png 40w,\\n/static/b1668858ac8d11b20826b30b41a0cda0/db9cf/british-museum-logo-vector.png 80w,\\n/static/b1668858ac8d11b20826b30b41a0cda0/811b8/british-museum-logo-vector.png 160w","sizes":"(min-width: 160px) 160px, 100vw"},"sources":[{"srcSet":"/static/b1668858ac8d11b20826b30b41a0cda0/578d5/british-museum-logo-vector.webp 40w,\\n/static/b1668858ac8d11b20826b30b41a0cda0/66ecf/british-museum-logo-vector.webp 80w,\\n/static/b1668858ac8d11b20826b30b41a0cda0/26c95/british-museum-logo-vector.webp 160w","type":"image/webp","sizes":"(min-width: 160px) 160px, 100vw"}]},"width":160,"height":72}')},4730:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/6441b9edcf37bcc71be3d85b5a7555a0/da3cc/reading.jpg","srcSet":"/static/6441b9edcf37bcc71be3d85b5a7555a0/daa26/reading.jpg 45w,\\n/static/6441b9edcf37bcc71be3d85b5a7555a0/ff323/reading.jpg 90w,\\n/static/6441b9edcf37bcc71be3d85b5a7555a0/da3cc/reading.jpg 180w,\\n/static/6441b9edcf37bcc71be3d85b5a7555a0/9592d/reading.jpg 360w","sizes":"(min-width: 180px) 180px, 100vw"},"sources":[{"srcSet":"/static/6441b9edcf37bcc71be3d85b5a7555a0/40341/reading.webp 45w,\\n/static/6441b9edcf37bcc71be3d85b5a7555a0/7ad58/reading.webp 90w,\\n/static/6441b9edcf37bcc71be3d85b5a7555a0/a6dfd/reading.webp 180w,\\n/static/6441b9edcf37bcc71be3d85b5a7555a0/5526a/reading.webp 360w","type":"image/webp","sizes":"(min-width: 180px) 180px, 100vw"}]},"width":180,"height":76}')},2533:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/88b2d5d23c28b21633374b00464ca206/2f0e7/PEF-Logo-Black-Transparent.png","srcSet":"/static/88b2d5d23c28b21633374b00464ca206/c02fb/PEF-Logo-Black-Transparent.png 18w,\\n/static/88b2d5d23c28b21633374b00464ca206/29b14/PEF-Logo-Black-Transparent.png 35w,\\n/static/88b2d5d23c28b21633374b00464ca206/2f0e7/PEF-Logo-Black-Transparent.png 70w,\\n/static/88b2d5d23c28b21633374b00464ca206/8a9be/PEF-Logo-Black-Transparent.png 140w","sizes":"(min-width: 70px) 70px, 100vw"},"sources":[{"srcSet":"/static/88b2d5d23c28b21633374b00464ca206/59181/PEF-Logo-Black-Transparent.webp 18w,\\n/static/88b2d5d23c28b21633374b00464ca206/00465/PEF-Logo-Black-Transparent.webp 35w,\\n/static/88b2d5d23c28b21633374b00464ca206/01eac/PEF-Logo-Black-Transparent.webp 70w,\\n/static/88b2d5d23c28b21633374b00464ca206/f78da/PEF-Logo-Black-Transparent.webp 140w","type":"image/webp","sizes":"(min-width: 70px) 70px, 100vw"}]},"width":70,"height":86}')},4275:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/4dfa70d438a1e489f7ff8e83faaf63dc/16743/university-of-stirling.png","srcSet":"/static/4dfa70d438a1e489f7ff8e83faaf63dc/6bd67/university-of-stirling.png 40w,\\n/static/4dfa70d438a1e489f7ff8e83faaf63dc/301d3/university-of-stirling.png 80w,\\n/static/4dfa70d438a1e489f7ff8e83faaf63dc/16743/university-of-stirling.png 160w,\\n/static/4dfa70d438a1e489f7ff8e83faaf63dc/17f77/university-of-stirling.png 320w","sizes":"(min-width: 160px) 160px, 100vw"},"sources":[{"srcSet":"/static/4dfa70d438a1e489f7ff8e83faaf63dc/7693c/university-of-stirling.webp 40w,\\n/static/4dfa70d438a1e489f7ff8e83faaf63dc/8a3fd/university-of-stirling.webp 80w,\\n/static/4dfa70d438a1e489f7ff8e83faaf63dc/eea62/university-of-stirling.webp 160w,\\n/static/4dfa70d438a1e489f7ff8e83faaf63dc/3d745/university-of-stirling.webp 320w","type":"image/webp","sizes":"(min-width: 160px) 160px, 100vw"}]},"width":160,"height":40}')}}]);
//# sourceMappingURL=component---src-pages-index-js-c3a9f1d903fe8780db9e.js.map