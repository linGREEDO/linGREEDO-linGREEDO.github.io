'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "2bb7c4314df76511387fb5696de315c5",
"index.html": "54016948d36c8ac761bf72e8338fbba7",
"/": "54016948d36c8ac761bf72e8338fbba7",
"main.dart.js": "8293ad7a0324f089a5a9c1fbef4052e3",
"version.json": "5f0359e05c3bd24dd2e947e06a17e932",
"assets/assets/images/c.jpg": "1ade8b1cd4cbbd6439415c4478331935",
"assets/assets/images/x.png": "6a0529a3b11180942ab7150b9ccbc13c",
"assets/assets/images/contact_background.jpg": "62138670054475b4e86f0a4866dfeeff",
"assets/assets/images/hero_background.jpg": "dcebb139a87801654f9dcb3eda5e3e03",
"assets/assets/images/l.png": "bbe992e7d9d0eeaa65503368b031a1f2",
"assets/assets/images/soot_sprite.png": "5ffa8b35ac3a5c234adae83b0bba3f92",
"assets/assets/images/ghibli_landscape.jpg": "62068e2f704592aaa236c4eefce9b489",
"assets/assets/images/kodama.png": "7d883eba5a1b9d3991d22aa8f87ccf43",
"assets/assets/images/haku_flying.png": "491fc9409b2c64b8020c4f1268700303",
"assets/assets/images/castle_flying.png": "87d781ead58cdaf427f54d06190615e7",
"assets/assets/images/ghibli_scenery.jpg": "381afd100c22a584b1359a73ae8018a6",
"assets/assets/images/n.webp": "94b2c2887c86ed9e7a657c26abecfff1",
"assets/assets/images/background.gif": "1fe1e162a4899243963e053b5c96f960",
"assets/assets/images/mo.webp": "b1afcbd8f260af8ef69a2babbf80fe3a",
"assets/assets/images/giphy%2520(1).webp": "dae51dc6da0968cd7874307e82ed677a",
"assets/assets/images/giphy%2520(2).webp": "544ac0ad10acb3de3eed4240a45b48ea",
"assets/assets/images/tumblr_cb576de941c5e56b91b071700f94a703_e0eadfec_540.webp": "7539bed8199b02fea969f8954fa2ba9b",
"assets/assets/images/tumblr_eccb7edddaba09d76503723dd331b882_98fee8c0_540.webp": "c863508f4965cd6c102c0a1ebe20cde2",
"assets/assets/images/h.webp": "290a885ba43165d7517a6bb976562e17",
"assets/assets/fonts/Eyad%2520Al-Samman%2520-%2520Ghibli-Bold.otf": "70a63aaa66685e53286d4f3b1a220089",
"assets/assets/fonts/Eyad%2520Al-Samman%2520-%2520Ghibli.otf": "f7dc030ad60ba1de1447cfb26012dc63",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/fonts/MaterialIcons-Regular.otf": "9073420eff1041d736ddc99b1cc71847",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "4c2c0dc93619ca6faf147f8a10e3998e",
"assets/AssetManifest.bin": "55712e0fa62016bbfe6a35a30d5e8277",
"assets/AssetManifest.bin.json": "c874e29686eabf68cce7912d8f8a2abe",
"assets/FontManifest.json": "12a5d251d5715bd7b3aed0fc749d5159",
"assets/NOTICES": "0eb1c6339fd5c256d6c855586571199e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "ae1176120be2ac7c51c4c18d7a658ba0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
