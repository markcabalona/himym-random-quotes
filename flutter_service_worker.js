'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "0bc7b8905a913e381d9ba81a0e6512a6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "338bf0fd82cde82f2a73d0d4c080dffe",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9a9a6e9fac6e71dbd56089122cbeab7c",
".git/logs/refs/heads/main": "40f3258e80dc50649d4b506d436d0419",
".git/logs/refs/remotes/origin/main": "a9d8286782909640239e9dc43a4c70c7",
".git/objects/00/24394acd77fbeea606d096597149fa844a8de4": "3fa1e09e4f87a0c43441a7af0a34e59d",
".git/objects/00/5891e726c7dce915e267d104bb109d0955d640": "a9002e73ddc757d876eaebb0774e1550",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/1b/ab1bffb13ee277d9a6aeaa55f1af5cf3b7517b": "9015b6ddbf558c1f0a9e40ac3d9e6bb1",
".git/objects/24/07cf556e5473f5447db3a644093df6fa6a8735": "110bd5ec58f55d402aea249f293c5408",
".git/objects/24/f87e37f59376e4c158bedc930238e9e08be4ec": "41828f719c54c92b26e02ea8cc10cf70",
".git/objects/2e/a04a8435c137045df23372bfff67fa5180a612": "1638c3ef16af326bd42a56dc26de5ba7",
".git/objects/30/e0b74704f1b74ccdcf50e6060192d858d04ad5": "8254df4010e07c70616c856d3464b560",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/18577ee9c7c069c0eb15f1572bce85c3173cae": "ac69abdcff2ae27858c73b5f8495f22b",
".git/objects/34/52fd511c242c5b490f2e3aa67ccb33603e4e35": "c91843e94c73ff7b646da86a395dc132",
".git/objects/3a/544040f27542132cb937e80dad91e35409b51e": "bc356a12d7b57d6201d9b927bfef50ed",
".git/objects/3c/3e0065f22b5f1eae8450058baa32ab98318b70": "31bb12c74938484e2b30bddefae33722",
".git/objects/3c/44b6d0efadd9d13d091d56695eff32561e2c84": "63a9eb4fb780cec15f74014961d17510",
".git/objects/43/fdd134ff92a790eb87a1099dbd3ff9c9e584dc": "03ab726b743e72e078874e3a3396f4be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/c2dd587d7253c9b3c98c956c666243f1d0d948": "615461f0a07b24d1beb825484189a081",
".git/objects/50/3fefddef8e4b4c14c0169622cbe9a623e62c42": "ee783262c539ce5d7f9b734cdd62eb4e",
".git/objects/50/70ac6ef81d9d0f9be539b9a50c1c405b30320d": "b17909837f6b686f200f0e9803d671fc",
".git/objects/53/4f60b204e11151009679aeb37473795608b19a": "5c02f7265c3701b739f9a3c91af2cdfd",
".git/objects/5a/7ba813bf36ecb1091cc81242c9967b26fd9cd8": "dc51261a5cb803a659a20fe018f7a6c0",
".git/objects/5a/ef12a75352190a6f331863acae0f47cc1e1fd1": "b97bf93437ceaa26a7e13383a2e9daec",
".git/objects/5c/6f6816e7563465d2ac6404fcde025638825969": "463f27e68736784746312e3139a4f4be",
".git/objects/5e/d4752021cd83af203523a02c2e940b56c1f6d0": "f46a418adb415995713d0b6bff75b379",
".git/objects/61/98e90151dd12542e16d140d752724a7352ac97": "8ec6a8c4d09ada310aa22cbdf9820cfa",
".git/objects/65/13dca42b651de82b6669bffb079320f8ad570a": "86a48dac5e909f928f6ca26e725e7e3d",
".git/objects/6c/bf2717246eaac2beb71b69ff7bea04af2dd4cd": "3ffdcf253f140de26724254fa27c843c",
".git/objects/6f/8cb9dd70589ba22f2abb4441ab369f0e2d498c": "e87827bb766e3d14ee17e2429c896e5c",
".git/objects/70/d9d4a58e794af2326cc423f257c0e76c6bffc8": "48ec8c26a16132bbbeb17923ee210b68",
".git/objects/72/ac3cd09aaba99291a805f2897f8d6fe7f23904": "04be2e093dffc9a87e2682428dd9ea39",
".git/objects/77/e4561506761a77ad23a0800b12161ea7c66b63": "c4a502e73bc71b67c9d24d18169c8b27",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/0ca42cd82bc2f038739cd12483af7d3987cc25": "6e2fc41176a0743a8b4c32ef509c7efc",
".git/objects/80/015725031159cc99a8ade8680457b6097c67ae": "32361325d3be2409ad96b7b83dbac6e4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9e/d12bb7ef5f47066721419b5e927072e7873175": "6bbdfab6b2f9e7e8417040f922097899",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/c5a8534df344fabecfe7d73cf32dabbfdabfac": "20cc4c1b0dd1fe67d2b67385dc5eb6db",
".git/objects/a4/70ca88df30a21d43d0280978042ecb6ed71914": "c58c3473ffb1999a408d84d380d0ef35",
".git/objects/a7/274b2aef14b4e347d0a721ece51937bfabf20f": "3c1787f5aaa3d95bc102c6d950695c9b",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/07af2b6227e4135637c6ccd7c6fddb1d3d0c50": "df647abd9793bba1b082d9719fae1e13",
".git/objects/ae/6122f03bb63d746713dba31b916ec6501f2a78": "08f85fb8dc101026858f099c03927310",
".git/objects/ae/9ca235207b875d1beb5c6f881f19fd8707e8d7": "be71d1412c85530536352b6a0373ed80",
".git/objects/b1/ad1c747e7f62567a3ab0c809370b8c4d678f64": "fc0d9ca1a6ae02cdda8c5e6a6f796a56",
".git/objects/b4/822346f91534675a04cbef03fd0d514d77f28f": "3f7428cd4b106a3c13370dc38ec873a7",
".git/objects/b6/3e16a5caeff68c8e7938987452373f9fdc1bf0": "b224b05c71b2861063ca84aebf427aed",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/e651051bc4d4fbc7283ac166c3554e19962224": "50fdd7c9483e63e2b75d0e5188df1f6b",
".git/objects/c2/757e5ceb58ce318f31d1d1af3c42b611ea63d0": "f089c19a299ab0fce00fa121d4add44b",
".git/objects/ce/c46b5b13915431161e3a48d76a0c65e2632a9f": "e9838b8aa98bd968ffce949459f77c27",
".git/objects/d0/334d08c4339e1c48c5294a5ce776ed2090c1f6": "853f6874e29cd75abd6718c01f5db038",
".git/objects/d1/571234d394c699a49b4df2ec53f93f8eeb8c08": "372fff3220afc8a5bed701943a0a4ef9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/b04c39f63ba98046f3af557e7cf3103d804a32": "6b0201440837189033fbb70dd6519d7a",
".git/objects/d9/d87e8756e882d24cbc102b83c34566b6ddf864": "2055807d49c4f479772fc6c4533a2ede",
".git/objects/dd/46fb8ed0d94d36b0590b549a89bd22659fbd9a": "fb5f8e4383d3b8f42e9594e3ea498765",
".git/objects/e0/1a38e4f7bd60ba2e0629084c1250671f88c749": "31c7f1bad9ddfc48c6d3e12072008cad",
".git/objects/e3/56ecdfbda25258b4b5669635e436a00d50b5b5": "6bd3c998da2300e599c1c75de34048b5",
".git/objects/e4/60f1b06f058afdd2378e0a6a2baf12fc76bda5": "63afee6a0a0b5cd723898c11f194ff64",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/4b97072f0e81fd66852f1a6d51f63b73b54b4c": "f97ede25c381b05f256db11d93851cee",
".git/objects/e9/4ef1a93c714df8fbcf6a2bebcf66152c0cfc01": "b609ce1c4a17a8c746417804cdd7abad",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/bfb9ade6b9c9d63b43adb57e61c6a3a6beed31": "6f482c4d6c8b213737b5274e458dc4bd",
".git/objects/f7/66c020bcfd3b38d6226d94cfb362546f821ffb": "3f232b2d2f865344ec2b486a68a2700e",
".git/objects/f9/a4d84ce07620b86ea9dd49e755a5a838419bc6": "b5fe87031d2683bddf40375d1e09684f",
".git/objects/fd/784c74cff411ec8708e0ce74be249e3769abc5": "04b7b3391dd01f91c0e295649da7516c",
".git/objects/fd/dfd30e11369fbcb781d8f2153b84b57409a279": "0a70ddcf6d925d2c35df1cb60d63e170",
".git/objects/fe/cbf6ac9d2e4b2142ce043e17dcf754c1f53804": "384ea4f3d04f2a15c29a51c88f870547",
".git/refs/heads/main": "3c1d6fcea5eb9ed8561f51e3337c1c0f",
".git/refs/remotes/origin/main": "3c1d6fcea5eb9ed8561f51e3337c1c0f",
"assets/AssetManifest.json": "2254cc7b1dbe36e5bccfe94ca3bb98db",
"assets/assets/himym_bg.jpg": "98ebb3b2350d5de893f40b88d211a3b7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "4a1bc58843c9656d2b09123395f6e68f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "378212677875da596a930afd3b9b2301",
"/": "378212677875da596a930afd3b9b2301",
"main.dart.js": "7667796fa9206e3602302ce1b5893cc8",
"manifest.json": "fb8f09b770cfb8e06dd48dbd1d92aab4",
"version.json": "b9d91a79bd81d136d27d96cda377197a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
