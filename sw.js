if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const t=e=>n(e,d),c={module:{uri:d},exports:o,require:t};i[d]=Promise.all(r.map((e=>c[e]||t(e)))).then((e=>(s(...e),o)))}}define(["./workbox-4a57b3f7"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.0ee0d40d.js",revision:null},{url:"assets/index.dc6ec447.css",revision:null},{url:"index.html",revision:"70d1ccc72004398809e73609f6142e7a"},{url:"registerSW.js",revision:"eb7874bfed1cede848f6adbae69e87b7"},{url:"android-chrome-192x192.png",revision:"f7a26f3bce5338a6a5aad59dd53d2dc4"},{url:"android-chrome-512x512.png",revision:"a7bbdefdbc426e674105e5ecd5bc4b4b"},{url:"manifest.webmanifest",revision:"0062c862f0a1d53d8662b55e6c803bc4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));