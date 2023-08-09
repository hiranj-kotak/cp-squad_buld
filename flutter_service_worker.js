'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4516f84e7b43d263e60a14d1cf686348",
"assets/AssetManifest.json": "a0f5ce4d6b6e1c2daed186047a0f4d03",
"assets/FontManifest.json": "98694b8006d9c05b3d2828ec7ad4b6e4",
"assets/fonts/MaterialIcons-Regular.otf": "d193b9c9d0c77b3c4a4172aa8e7c39af",
"assets/images/Classroom.jpg": "5019baff15d471ae79f9c851f917301f",
"assets/images/codersarcade.jpg": "b8ba9cec07eb930037ab1a0ac8283b92",
"assets/images/codersArcade.webp": "bbbce64aedd582ef4c0ce801c712c3b7",
"assets/images/Contact_us_bg.webp": "4e62afabaae76cf73f8ca38283aa5a3d",
"assets/images/dhvani.webp": "075d06e0b738822c06caa12fcde4cb77",
"assets/images/events1.webp": "3c7d8a8e8fe53f3e244b03948853a515",
"assets/images/events2.webp": "5e554b0ebb1e3a5ea4d05fd75e589765",
"assets/images/events3.webp": "b317a847302d88be3b8e40674cf87c3b",
"assets/images/events4.webp": "c5efd77898fc370cb983e41d3469392c",
"assets/images/events5.webp": "78dfd7285ef58de7b2ecb3f0052b12b3",
"assets/images/Events_img.webp": "76dec73d7dff52db93def00e87495a1b",
"assets/images/geometry1.webp": "845de5ec1927c2636449b4313f6ae5ce",
"assets/images/geometry2.webp": "8f08c9091abd200d600a964802124e33",
"assets/images/github_icon.png": "4d217a552670fbabb364ff8ad7440278",
"assets/images/Hero_Page_BackGround.webp": "c1a5446e34b32d6e08ce9043b69eaab8",
"assets/images/hiranj.jpg": "9a4ffe07bddd17872fb832d4da97f504",
"assets/images/image6.jpg": "a5154ed00854d2698be730a01d1f08a6",
"assets/images/insta_icon.png": "32e65764a43291f867480bfcd3698008",
"assets/images/kushal.webp": "3326de5d8403b7bdd47eb9bec66864da",
"assets/images/linkedin_icon.png": "ed555fe80aca3af5d9bdc951c9da8210",
"assets/images/loacation_icon.png": "068ab4a6b01a1145e083e34db3fc6308",
"assets/images/mail_icon.png": "fcb84ec05ebc0362fdf803ac68a7424e",
"assets/images/NAS_PIC.jpg": "e9ff143e706bad176869e10f839b663e",
"assets/images/ourTeam.webp": "865161434feda45b03a643f34e99dd71",
"assets/images/ourTeambg.webp": "e17783fd07013a5cef462546a649e3e3",
"assets/images/parmesh.webp": "1b1cfee03d2ae8e86bd8f067ce36d039",
"assets/images/parth.webp": "81f2a34e4a8985fb6a46d85c6bf210c3",
"assets/images/pixel.webp": "34d3ded1ec548ffde29532a05b8b7fe7",
"assets/images/raj.webp": "091a4eff29d6cac904afca71a315f0a7",
"assets/images/saral.webp": "e5f47aedded0a076af7a13104a500d08",
"assets/images/session1.webp": "59f2aaaf57cea604b612a4b03092ac77",
"assets/images/session2.webp": "618e7292eeb3ab32339a2ee2e6667dd7",
"assets/images/vatsal.webp": "743eb4e1a66448a09b6281b3b941f1aa",
"assets/images/vishu.webp": "5f845b5c30d26b9673bec825480ffe71",
"assets/images/webinar.png": "48eb05a4de29364fa6dc2e7b5413b827",
"assets/images/what_do_we_do.webp": "974c47a9f73c3fbcccd6c8764cfb7c2c",
"assets/NOTICES": "80657182683f38118c4d153670870122",
"assets/packages/codicon/lib/font/codicon.ttf": "ac14e2f1c79c3d6e4727ff54d2cf0b77",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3dc7581e32789b9d44c8451f4230772f",
"/": "3dc7581e32789b9d44c8451f4230772f",
"main.dart.js": "114ba7e7384c0601806f8f2c0c7d9ac4",
"manifest.json": "22bf6e54a46a2444e06a8639f5727ae7",
"version.json": "b1427ad4cf2529db25ed92faeabecd21"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
