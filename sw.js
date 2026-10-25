var C='zero-v2',F=["index.html", "about.html", "community.html", "merch.html", "media.html", "projects.html", "schedule.html", "archives.html", "becoming.html", "404.html", "style.css", "zero-loader.js", "zero-countdown.js", "manifest.json", "icon.svg"];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}));self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}))}))});
self.addEventListener('fetch',function(e){if(e.request.method!=='GET'||new URL(e.request.url).pathname.indexOf('/echo-admin/')===0)return;
  e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open(C).then(function(x){x.put(e.request,c)});return r}).catch(function(){return caches.match(e.request).then(function(r){return r||caches.match('404.html')})}))});
