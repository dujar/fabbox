"use strict";var precacheConfig=[["/fabriciodujardinprofile/index.html","2e0aa7344cdfbe754bc0297da28322b2"],["/fabriciodujardinprofile/static/css/main.e5304dfb.css","e3e7319547d175e3e4bc300cdaea43e9"],["/fabriciodujardinprofile/static/js/main.bc2063db.js","dfc5e4b3906839a38cee1310497f320d"],["/fabriciodujardinprofile/static/media/GraphQL-logo.762edb84.png","762edb84b0bf808c1746d10188ebf04a"],["/fabriciodujardinprofile/static/media/JavaScript-logo.0cded3a3.png","0cded3a3276425911d55a2552bf361bf"],["/fabriciodujardinprofile/static/media/R-logo.060a1e7e.png","060a1e7ed38545d3bb83c1773b579749"],["/fabriciodujardinprofile/static/media/React-logo.638be909.png","638be90904f9f9248d3c69cb2992c562"],["/fabriciodujardinprofile/static/media/Rpackages-logo.a8370f43.png","a8370f43a522b3f1a4d626522df5212f"],["/fabriciodujardinprofile/static/media/Ruby-logo.41cd17c5.png","41cd17c589bea8064bfbbb638e535fae"],["/fabriciodujardinprofile/static/media/Vue-logo.403f583f.png","403f583f6ca2bf50239d21eb85a94d4b"],["/fabriciodujardinprofile/static/media/erasmus-logo.d3c6f840.png","d3c6f8402328ce5be0c09badc10dfada"],["/fabriciodujardinprofile/static/media/mahidol-logo.1722ceb2.png","1722ceb270fdf117dcfb772e16183248"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,r){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=r),t.toString()},cleanResponse=function(r){return r.redirected?("body"in r?Promise.resolve(r.body):r.blob()).then(function(e){return new Response(e,{headers:r.headers,status:r.status,statusText:r.statusText})}):Promise.resolve(r)},createCacheKey=function(e,r,t,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(r)+"="+encodeURIComponent(t)),a.toString()},isPathWhitelisted=function(e,r){if(0===e.length)return!0;var t=new URL(r).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var r=new URL(e);return r.hash="",r.search=r.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(r){return t.every(function(e){return!e.test(r[0])})}).map(function(e){return e.join("=")}).join("&"),r.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var r=e[0],t=e[1],n=new URL(r,self.location),a=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(r){if(!t.has(r)){var e=new Request(r,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+r+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(r,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(r){return r.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return r.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(r){if("GET"===r.request.method){var e,t=stripIgnoredUrlParameters(r.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var a="/fabriciodujardinprofile/index.html";!e&&"navigate"===r.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],r.request.url)&&(t=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&r.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',r.request.url,e),fetch(r.request)}))}});