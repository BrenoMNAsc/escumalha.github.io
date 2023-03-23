'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"manifest.json": "cc46981f73a1117282b46aabf50fba8d",
".git/refs/remotes/origin/main": "5e83399725993444e120028814e9d75c",
".git/refs/heads/main": "5e83399725993444e120028814e9d75c",
".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/config": "32f97a530372fdfe1b7a7564fb9b66f6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "b2cfeef7461a15759e982ee4c6f36573",
".git/logs/refs/remotes/origin/main": "7fcfd15d9249785c7cf6e2bd53ca945b",
".git/logs/refs/heads/main": "6614b98e8af6b6a14604240cc145ea83",
".git/logs/HEAD": "557bde115e9506863cb3a080e3906e83",
".git/objects/86/d607387df9fa7936fc1bd689b36b6c07b6c9fe": "0b2a056a7bd5b13dfa022e44c24e2a83",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/ee/e9739842e8ea6788f048d5c66322832a66d984": "dfdbfac28d2af86a501a6457529350fd",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f9/e17f37eed25de863a964e0cffa863f39a9c27c": "fdc1acac502cb762f45a6daa9d34fea2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/b4af28dc4a9cb46de183349e70ede293ab06a3": "43909f5edcfc4d859b89da437b4809b8",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/44/275323e8294333524c96ca3a19b62b77c4783f": "69f5ea815e101782074d89b97e9d2ea0",
".git/objects/5a/6e78be17cbb207aa6051b59d4e044718a9f51e": "a7ca9e22173612b57f3f6d0a5599214c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/5b/be557eea5ac82047aa848593030619bd6fbebb": "d6c6523cd58b211debafa2f45419f0b1",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/42/27e2acf4745b923c4289f323a665026c0d745e": "58814cf3aa78a42729062338480e8878",
".git/objects/87/a9fb848c5d5100e2f25b4d0297765c22675cd8": "d2c38ac13941369b3e9951dbb00b9d2a",
".git/objects/bc/6981459c8528a77fe57261aef54af355a00d7d": "f288b4279e81cad403ad98b78844217e",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/f6/44d745f9c0482b6556c49a24a16d1094c43d90": "573b45b8500f858e7a26a0d32da3cbb2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/c7/9c773f1b8720b9f20fef6b49cafa0451f23e75": "4df3d4aee8c254fbe88eb9a3f2cc746c",
".git/objects/03/e736613a750cdd8d4f54bca28844e2d13257cb": "bd840ac16c281d81f004822f55e1db62",
".git/objects/19/2f1b2d589c94a31d8a3134387e80db5903a8ff": "e60f8a4b8bc1a8dd2354a00a9859b186",
".git/objects/76/8496f6038a2028fdf1267c4edcc06074796b2c": "a5a246f714a19122faa15f2a7a9b36e9",
".git/objects/1d/c07a87fbe3582d0bcc46e47b1b89199cd40c06": "736438af9e672c9fcdc7cf5965192650",
".git/objects/64/48de1091df7c2e1226fbbe46529207f172a283": "bcae6a7ed07c20ed2ffa115ea791da8c",
".git/objects/4d/1f1bab767ff66db178a0bc7af4f1294a111a7e": "b41f67087c5967b1ad0b75c6b7bd33d8",
".git/objects/a8/a78c9bbabfed33da4343f6387e226b6c7e50f8": "a92adf81db88857701be36db7601a49e",
".git/objects/28/7b91747caf728b53b0f913ee3cf6ca995a4385": "32a7941826dc938efcfec03800d9520d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "040d585693401f5733069f2aa30b35b2",
"index.html": "eb54242fce21ef8357156364b02d5f5f",
"/": "eb54242fce21ef8357156364b02d5f5f",
"assets/AssetManifest.json": "8630dd2c443e4eceb24d8bc0105bcf48",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "c03c70e1ec31ca795738574e2e2db170",
"assets/FontManifest.json": "48d716ab12b97c6652c62fc5b4c954e4",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/imgs/imgProfile.png": "458d646aedda2b7f7ddb8614ea2e75c4",
"assets/assets/imgs/insta.png": "fa90e1e7734e5bef1193daca074ad67c",
"assets/assets/imgs/github.png": "43ce87609eb221d09d4832a9c0e709d0",
"assets/assets/imgs/placeHolder.png": "21fb9082192c36247402f88d260f1c24",
"assets/assets/imgs/iconHeader.png": "750cc6411995576c256cc2a8deccf240",
"assets/assets/imgs/linkedin.png": "dda499d8edb884a5bab16b08c2a716cd",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"version.json": "245fefb4a0cc0ef0eee8d25320227a84"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
