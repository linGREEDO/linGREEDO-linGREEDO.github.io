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
"flutter_bootstrap.js": "aa8db90059c3798513aba13f38b46cba",
"index.html": "54016948d36c8ac761bf72e8338fbba7",
"/": "54016948d36c8ac761bf72e8338fbba7",
"main.dart.js": "085babf2abb0774ccae01811a1d76556",
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
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "36006a2aee699bab11e4562e9bd81963",
"assets/fonts/MaterialIcons-Regular.otf": "dc73510b774f55267227fd11c86449c3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "eb24b4d6e73bab7b52844124aeec9cef",
"assets/AssetManifest.bin": "53caa71b85ea00e9445ad5b8d5cd2da6",
"assets/AssetManifest.bin.json": "557ba496fc81a72200a4f50f08f8e435",
"assets/FontManifest.json": "76400b0155e15cd4d435911cfc665477",
"assets/NOTICES": "49af69dba95028a0345f0a8d8fe3d219",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "ae1176120be2ac7c51c4c18d7a658ba0",
"README.md": "4461eec6abdbf394b14b804e31a40301",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "793e9910c55aaae7c206a638a09913a2",
".git/refs/remotes/origin/main": "793e9910c55aaae7c206a638a09913a2",
".git/objects/97/92b857f9e6b8654134a22eeb52482d24951988": "c85d1ec1ed2a5424f417959c5f6e5e15",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/23901b8e5c26670b078e5b77a6f47258557893": "aef9d0b358b265574358c27e764175c2",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "2d3cb4c006727ec22ffe6b5e256f11be",
".git/objects/6b/890e09ec24706e6a893f749da75a49cc0f5840": "cb7d99c922b77688ba03b7024c51df36",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "19c83c216c79cd222aa36e4cf574d6e9",
".git/objects/d4/7a9a0a278b185ea0d4d915236c9bda677b857d": "6e8969d1ea47706470812141087b7c16",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9e0a7dce91540443aeee8c8cd1dcd7df",
".git/objects/d4/a3584a0e3f5e7e7c5a2fe077229f1811a9b38e": "36bf7164ea1a7360bb1a7e3476fcb2de",
".git/objects/c3/cba078c67e633d39c5b7ccf510278f28e29cb2": "9257290cad00e43bde92074d8891a1df",
".git/objects/32/9eeb07a80af61f43cf01ea287339f7221ac4c9": "acb014573bd0e558c5697682d695e409",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "9ff8dee52c3533599720f244d08b3c8d",
".git/objects/75/d5e80e44bd72998886e2b85e22c1705e9f0b37": "9b8511647fc92f70ae56ea7972b540b9",
".git/objects/1b/43d422d0091f65ff6dfa3ef185a0a1b22cd9b0": "bf21caa698a3d03ab749dc94cca675e9",
".git/objects/1b/fc677d2d4a222a190d1ea642bbdf8e256e02bc": "b6e0fce63757078455a454bbb34901dc",
".git/objects/a6/866a14d897af0cdab443d8017ac33853515d49": "dca100ac544746f07b58901c35bffe69",
".git/objects/a6/2198f8823fe4f952b1754c544a78237068b164": "bb4b2d2a934cf627c8ac56b92bf8d340",
".git/objects/1a/99247b03bb42bb07aed3e31244ba84b1b5809a": "46bde3759f868d22a41907a8e04c6da4",
".git/objects/9d/d0eb70891289a75f82273279d7d24ed73cff88": "1c52f3c6fa268be36dc222b9bfe06d5d",
".git/objects/9d/5f026e8a1efceedc15fc2822db2d84a64d62ce": "4ac35af86a22df884cdd6522bb4ffe87",
".git/objects/ef/d3bc42013b1500a1300b54439826c902f1cfd7": "7747feeac908d51d987354268070b187",
".git/objects/6f/431b2849c745b8273f523866653a206cebcf2e": "4f55e5d80399bb32a7b340394bd4906a",
".git/objects/79/da93c708ac2db67a9ae7962569c0c8492cce6d": "c292e0e98fe3e115f18c4769a18a6546",
".git/objects/4e/8ae6d2275646ab3cf3302ca36b0e13ac5aaef4": "adb7e9cdcf6f7b2bfc246587ea4f0749",
".git/objects/78/691875ef891614aedc862315bd1cb8ac646005": "21948fda256aac48345a834280555253",
".git/objects/3e/c2605a05bfce24b02621e37b3521f60bdb4cf2": "c020f986f4c031214aea8ba69db40cd2",
".git/objects/77/455f048cd267a67947534f790d9c4d475d22e9": "d41d96e133608e82db997ef77483bbc4",
".git/objects/f5/c38f877ede58439d60335d57c751f648f2a8bd": "cec80e28713805a295f2a58f3a5179b5",
".git/objects/0e/b0609acb15988de418e50d42616a908cc46076": "5fe13d3e9620f88a34202890ab6b19f1",
".git/objects/14/156c80679fc99d2ec8f44752eedaab5afb9079": "66099359c9eb9f66d856a91ec28053b4",
".git/objects/f9/bea17c22b5b1ea9adc9604e3ee3eeab719da72": "716df897d3b33328a1eeb1ef8fccd056",
".git/objects/47/5b5f4af146c0568072aa9fd9736401750b86b2": "3943354606ea59d2fa6ea4defb8e1a36",
".git/objects/de/00db9fa0a3f4ba57f92a4cf3ed0ac65a8bb512": "a25418f25ad30cc0b26c901d9528a002",
".git/objects/30/e08deb3b0647ce90d6e2a1dd57fac96f71efd0": "77da7e0501e712719c39d89cf8aa2ab4",
".git/objects/cb/5989d0f9d6fb77a281945cf3431be840fa002a": "8e8119d12843e2d3001825d2a2448ad1",
".git/objects/a1/b3bec7be407106733322fefbe9dbb09c845d3c": "85df68921f3b130852361d2b36fe6235",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "b24518acf094043bed11644ea265916d",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "183bf4b3a56fdbe79aa6c040ca9f6cc8",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "64d2ffa66a619205e9d390871393b37b",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "941287122b448dfdd25c128dafcbfd3f",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "7d812a9716446f933132eecbcadbe614",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "fb5f2cbf07573bf90e92b8f95b04a46f",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "84c23f4faa5f9fd3683de35a99111703",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "57b834eb43d2a80039910daa4f1ab930",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "af85c278711e6c817f328f12fc54f4bc",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "2f0572a4762dec02d21fd7477d5da794",
".git/objects/70/612a3bdff918dc54d29483670e8c9f28ac6b19": "cd4657cd78ff40fcd7da4b7a0b8776bd",
".git/objects/cd/089af35c9c04a5fe593875c4572d134da1b344": "0fe5660dd8329f139b813d53996f0367",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "03dc7c3b440d9d36b3e1dc2ab06f364c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "38c08fdc0dbc026fb372f8f06543db01",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "36264bdfab0a32a2aefdc668e36d971d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3a663110118a15ba1de956e30344cd34",
".git/objects/4c/719b7127714518a049ef930d4f2babb9d8e09d": "041d3e20f442d0d4c7aa730ee6ce7d25",
".git/objects/49/e6d0d8ad4d0b95aa0667a69bbf44a9409730b0": "1d64c2941c352f5f523fa556b0c0d48d",
".git/objects/df/2efd039731a42e894da0a05d5b1ad579b8b00b": "08fd00be12e92f1e95e3d8ab1577ec65",
".git/objects/db/aaede1ca1ddcf544e7333da50e062a0bb6170b": "b324feb2d3eed7d7be0b5db803e238a2",
".git/objects/0c/b4e18fa75f7c180f1ce1153cf39c5e13fc0b44": "f9682c15186f44e50262910494312820",
".git/objects/37/aee4e43b13e2ae37a3f55000db7bbd3068872e": "f9cd0cf1f5206838af9ca9b4031bbcc1",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "4ba5049701e9e6e00afdca46425ffebf",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "9990d82bad6b4193908bf9c374094ba4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ff/b2b26be68ec8ea54a72240da0e5a778bf36737": "6b192584869a77ed1640fa8ca7b57a06",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "edd0918c4d4fb50b3be1d7c331ab5946",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/07/1c4bdda6bf059c5ba2075652fce55d225afb34": "0d17485d2b5264e04becc1e000c7d215",
".git/index": "834fe299abeab85994ad2f9d69f51246",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/logs/HEAD": "0cc0722b9a1914f40f79b69fa46defec",
".git/logs/refs/heads/main": "ad6ecc069d07ac19ebc674ccc53e0f81",
".git/logs/refs/remotes/origin/main": "245206941c2c8f25213b6d727c0e4d36",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "d6376b02faf0d109daffe98e4d8b125d"};
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
