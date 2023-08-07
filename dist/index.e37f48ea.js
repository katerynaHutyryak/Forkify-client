// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aD7Zm":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _webImmediateJs = require("core-js/modules/web.immediate.js");
var _auth0SpaJs = require("@auth0/auth0-spa-js");
var _modelJs = require("./model.js");
var _recipeViewJs = require("./views/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _resultsViewJs = require("./views/resultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _bookmarksViewJs = require("./views/bookmarksView.js");
var _bookmarksViewJsDefault = parcelHelpers.interopDefault(_bookmarksViewJs);
var _addRecipeViewJs = require("./views/addRecipeView.js");
var _addRecipeViewJsDefault = parcelHelpers.interopDefault(_addRecipeViewJs);
var _authView = require("./views/authView");
var _authViewDefault = parcelHelpers.interopDefault(_authView);
var _runtime = require("regenerator-runtime/runtime");
let auth0Client = null;
const controlAuthentication = async ()=>{
    auth0Client = await (0, _auth0SpaJs.createAuth0Client)({
        domain: "dev-5hwndgvebevysof6.eu.auth0.com",
        clientId: "Ks6wUNCpcoNJzejw9JC5yNupXMK183Qm",
        authorizationParams: {
            audience: "https://forkify-fvelk.ondigitalocean.app/api/v1"
        }
    });
    const query = window.location.search;
    if (query.includes("code=") && query.includes("state=")) {
        // Process the login state
        await auth0Client.handleRedirectCallback();
        // Use replaceState to redirect the user away and remove the querystring parameters
        window.history.replaceState({}, document.title, "/");
    }
    const isAuthenticated = await auth0Client.isAuthenticated();
    if (isAuthenticated) _modelJs.state.user = await auth0Client.getUser();
    Object.keys(_modelJs.state.user).length ? (0, _authViewDefault.default).renderLogout() : (0, _authViewDefault.default).renderLogin();
};
const controlRecipes = async function() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        (0, _recipeViewJsDefault.default).renderSpinner();
        (0, _resultsViewJsDefault.default).update(_modelJs.getSearchResultsPage());
        (0, _bookmarksViewJsDefault.default).update(_modelJs.state.bookmarks);
        await _modelJs.loadRecipe(id);
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
    } catch (err) {
        (0, _recipeViewJsDefault.default).renderError();
        console.error(err);
    }
};
const controlSearchResults = async function() {
    try {
        (0, _resultsViewJsDefault.default).renderSpinner();
        const query = (0, _searchViewJsDefault.default).getQuery();
        if (!query) return;
        await _modelJs.loadSearchResults(query);
        (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage());
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (err) {
        console.log(err);
    }
};
const controlPagination = function(goToPage) {
    (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage(goToPage));
    (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
};
const controlServings = function(newServings) {
    _modelJs.updateServings(newServings);
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
};
const controlAddBookmark = function() {
    if (!_modelJs.state.recipe.bookmarked) _modelJs.addBookmark(_modelJs.state.recipe);
    else _modelJs.deleteBookmark(_modelJs.state.recipe.id);
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const controlBookmarks = function() {
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const controlAddRecipe = async function(newRecipe) {
    try {
        (0, _addRecipeViewJsDefault.default).renderSpinner();
        await _modelJs.uploadRecipe(auth0Client, newRecipe);
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
        (0, _addRecipeViewJsDefault.default).renderMessage();
        (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
        window.history.pushState(null, "", `#${_modelJs.state.recipe.id}`);
    } catch (err) {
        console.error("\uD83D\uDCA5", err);
        (0, _addRecipeViewJsDefault.default).renderError(err.message);
    }
};
const controllLogin = async ()=>{
    await auth0Client.loginWithRedirect({
        authorizationParams: {
            redirect_uri: window.location.origin
        }
    });
};
const controllLogout = ()=>{
    auth0Client.logout({
        logoutParams: {
            returnTo: window.location.origin
        }
    });
};
const controlDeleteRecipe = async ()=>{
    const id = window.location.hash.slice(1);
    if (!id) throw Error("Can not delete recipe. Recipe id is missing");
    (0, _recipeViewJsDefault.default).renderSpinner();
    await _modelJs.deleteRecipe(auth0Client, id);
    window.history.replaceState(null, "", location.origin);
    _modelJs.state.search.results = _modelJs.state.search.results.filter((recipe)=>recipe.id !== id);
    if (_modelJs.state.search.results.length) (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage());
    else (0, _recipeViewJsDefault.default).renderMessage("");
    (0, _recipeViewJsDefault.default).renderMessage("Recipe is deleted. </br> Search for a recipe or an ingredient.");
};
const init = async ()=>{
    (0, _bookmarksViewJsDefault.default).addHandlerRender(controlBookmarks);
    (0, _recipeViewJsDefault.default).addHandlerRender(controlRecipes);
    (0, _recipeViewJsDefault.default).addHandlerUpdateServings(controlServings);
    (0, _recipeViewJsDefault.default).addHandlerAddBookmark(controlAddBookmark);
    (0, _recipeViewJsDefault.default).addHandlerDeleteRecipe(controlDeleteRecipe);
    (0, _searchViewJsDefault.default).addHandlerSearch(controlSearchResults);
    (0, _paginationViewJsDefault.default).addHandlerClick(controlPagination);
    (0, _addRecipeViewJsDefault.default).addHandlerUpload(controlAddRecipe);
    (0, _authViewDefault.default).addHandlerRender(controlAuthentication);
    (0, _authViewDefault.default).addHandlerLogin(controllLogin);
    (0, _authViewDefault.default).addHandlerLogout(controllLogout);
};
init();

},{"core-js/modules/web.immediate.js":"49tUX","@auth0/auth0-spa-js":"eAczX","./model.js":"Y4A21","./views/recipeView.js":"l60JC","./views/searchView.js":"9OQAM","./views/resultsView.js":"cSbZE","./views/paginationView.js":"6z7bi","./views/bookmarksView.js":"4Lqzq","./views/addRecipeView.js":"i6DNj","./views/authView":"il2FP","regenerator-runtime/runtime":"dXNgZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"49tUX":[function(require,module,exports) {
var $ = require("57bd5d59693d84cf");
var global = require("aa05a0a922f6ca2e");
var task = require("7a2807c700a427d7");
var FORCED = !global.setImmediate || !global.clearImmediate;
// http://w3c.github.io/setImmediate/
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: FORCED
}, {
    // `setImmediate` method
    // http://w3c.github.io/setImmediate/#si-setImmediate
    setImmediate: task.set,
    // `clearImmediate` method
    // http://w3c.github.io/setImmediate/#si-clearImmediate
    clearImmediate: task.clear
});

},{"57bd5d59693d84cf":"dIGt4","aa05a0a922f6ca2e":"i8HOC","7a2807c700a427d7":"7jDg7"}],"dIGt4":[function(require,module,exports) {
var global = require("6643b6592ad59b23");
var getOwnPropertyDescriptor = require("2ec751f39e500b85").f;
var createNonEnumerableProperty = require("b4567636b28a3b3a");
var redefine = require("10edb5de5c8774b1");
var setGlobal = require("63fb8d99c14c1b2a");
var copyConstructorProperties = require("566a383894c688bc");
var isForced = require("f0e2e697f04e8ad9");
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || setGlobal(TARGET, {});
    else target = (global[TARGET] || {}).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.noTargetGet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty === typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
        // extend global
        redefine(target, key, sourceProperty, options);
    }
};

},{"6643b6592ad59b23":"i8HOC","2ec751f39e500b85":"lk5NI","b4567636b28a3b3a":"8CL42","10edb5de5c8774b1":"1ZKnU","63fb8d99c14c1b2a":"ldqR5","566a383894c688bc":"9Z12i","f0e2e697f04e8ad9":"6uTCZ"}],"i8HOC":[function(require,module,exports) {
var global = arguments[3];
var check = function(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line no-undef
check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func
Function("return this")();

},{}],"lk5NI":[function(require,module,exports) {
var DESCRIPTORS = require("c04e6fb248689dba");
var propertyIsEnumerableModule = require("bbc5e69071aa2fbd");
var createPropertyDescriptor = require("1d2ffbfd99e01f41");
var toIndexedObject = require("c4ea69a78a643d87");
var toPrimitive = require("9e01c6cba5997a77");
var has = require("43af9285074de610");
var IE8_DOM_DEFINE = require("c4dfcc26308f1b4a");
var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPrimitive(P, true);
    if (IE8_DOM_DEFINE) try {
        return nativeGetOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

},{"c04e6fb248689dba":"92ZIi","bbc5e69071aa2fbd":"7SuiS","1d2ffbfd99e01f41":"1lpav","c4ea69a78a643d87":"jLWwQ","9e01c6cba5997a77":"a2mK1","43af9285074de610":"luSTT","c4dfcc26308f1b4a":"qS9uN"}],"92ZIi":[function(require,module,exports) {
var fails = require("735b783268fd06c0");
// Thank's IE8 for his funny defineProperty
module.exports = !fails(function() {
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] != 7;
});

},{"735b783268fd06c0":"hL6D2"}],"hL6D2":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"7SuiS":[function(require,module,exports) {
"use strict";
var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

},{}],"1lpav":[function(require,module,exports) {
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"jLWwQ":[function(require,module,exports) {
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("9d8f8f50ac9468eb");
var requireObjectCoercible = require("f7224aed72953ac4");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"9d8f8f50ac9468eb":"kPk5h","f7224aed72953ac4":"fOR0B"}],"kPk5h":[function(require,module,exports) {
var fails = require("df551e12a7c872dd");
var classof = require("1d34ea813cebff9c");
var split = "".split;
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins
    return !Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) == "String" ? split.call(it, "") : Object(it);
} : Object;

},{"df551e12a7c872dd":"hL6D2","1d34ea813cebff9c":"bdfmm"}],"bdfmm":[function(require,module,exports) {
var toString = {}.toString;
module.exports = function(it) {
    return toString.call(it).slice(8, -1);
};

},{}],"fOR0B":[function(require,module,exports) {
// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
};

},{}],"a2mK1":[function(require,module,exports) {
var isObject = require("46fb53dace408c8e");
// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(input, PREFERRED_STRING) {
    if (!isObject(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == "function" && !isObject(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
};

},{"46fb53dace408c8e":"Z0pBo"}],"Z0pBo":[function(require,module,exports) {
module.exports = function(it) {
    return typeof it === "object" ? it !== null : typeof it === "function";
};

},{}],"luSTT":[function(require,module,exports) {
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
};

},{}],"qS9uN":[function(require,module,exports) {
var DESCRIPTORS = require("9b4278b13c076bf");
var fails = require("8aee5d88a5f9b6b5");
var createElement = require("1db4d60148afcf21");
// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    return Object.defineProperty(createElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"9b4278b13c076bf":"92ZIi","8aee5d88a5f9b6b5":"hL6D2","1db4d60148afcf21":"4bOHl"}],"4bOHl":[function(require,module,exports) {
var global = require("f5891d48afd7ec83");
var isObject = require("824df78b2e007250");
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"f5891d48afd7ec83":"i8HOC","824df78b2e007250":"Z0pBo"}],"8CL42":[function(require,module,exports) {
var DESCRIPTORS = require("a8753383ef98ee18");
var definePropertyModule = require("189ab650b8f71085");
var createPropertyDescriptor = require("1168c8162aa30435");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"a8753383ef98ee18":"92ZIi","189ab650b8f71085":"iJR4w","1168c8162aa30435":"1lpav"}],"iJR4w":[function(require,module,exports) {
var DESCRIPTORS = require("ca50eb9163928400");
var IE8_DOM_DEFINE = require("d482f9e5478795e8");
var anObject = require("16365a73399e7fe7");
var toPrimitive = require("3176700f5d7e17f3");
var nativeDefineProperty = Object.defineProperty;
// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return nativeDefineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"ca50eb9163928400":"92ZIi","d482f9e5478795e8":"qS9uN","16365a73399e7fe7":"4isCr","3176700f5d7e17f3":"a2mK1"}],"4isCr":[function(require,module,exports) {
var isObject = require("2b6c6258a0a6082f");
module.exports = function(it) {
    if (!isObject(it)) throw TypeError(String(it) + " is not an object");
    return it;
};

},{"2b6c6258a0a6082f":"Z0pBo"}],"1ZKnU":[function(require,module,exports) {
var global = require("ad29211ac7a99cf3");
var createNonEnumerableProperty = require("fb5c982780275e5e");
var has = require("b9d32f00dddbcd95");
var setGlobal = require("1111dde9b567f8a1");
var inspectSource = require("3e459da4f22431a3");
var InternalStateModule = require("78b34e0c633bdce7");
var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split("String");
(module.exports = function(O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    if (typeof value == "function") {
        if (typeof key == "string" && !has(value, "name")) createNonEnumerableProperty(value, "name", key);
        enforceInternalState(value).source = TEMPLATE.join(typeof key == "string" ? key : "");
    }
    if (O === global) {
        if (simple) O[key] = value;
        else setGlobal(key, value);
        return;
    } else if (!unsafe) delete O[key];
    else if (!noTargetGet && O[key]) simple = true;
    if (simple) O[key] = value;
    else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, "toString", function toString() {
    return typeof this == "function" && getInternalState(this).source || inspectSource(this);
});

},{"ad29211ac7a99cf3":"i8HOC","fb5c982780275e5e":"8CL42","b9d32f00dddbcd95":"luSTT","1111dde9b567f8a1":"ldqR5","3e459da4f22431a3":"9jh7O","78b34e0c633bdce7":"7AMlF"}],"ldqR5":[function(require,module,exports) {
var global = require("4785828acf653da3");
var createNonEnumerableProperty = require("e7fc5aa3c97c7024");
module.exports = function(key, value) {
    try {
        createNonEnumerableProperty(global, key, value);
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"4785828acf653da3":"i8HOC","e7fc5aa3c97c7024":"8CL42"}],"9jh7O":[function(require,module,exports) {
var store = require("485d48d6f4c6739e");
var functionToString = Function.toString;
// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != "function") store.inspectSource = function(it) {
    return functionToString.call(it);
};
module.exports = store.inspectSource;

},{"485d48d6f4c6739e":"l4ncH"}],"l4ncH":[function(require,module,exports) {
var global = require("8756de416b94afec");
var setGlobal = require("bde9d812c43e928");
var SHARED = "__core-js_shared__";
var store = global[SHARED] || setGlobal(SHARED, {});
module.exports = store;

},{"8756de416b94afec":"i8HOC","bde9d812c43e928":"ldqR5"}],"7AMlF":[function(require,module,exports) {
var NATIVE_WEAK_MAP = require("f0a2bf6263225aee");
var global = require("ca46b44b6201ccd7");
var isObject = require("f82e6cc0ac249fa5");
var createNonEnumerableProperty = require("c0ae163eea4ef97");
var objectHas = require("794ab95aefff0489");
var sharedKey = require("88d6ccc27e779e5a");
var hiddenKeys = require("d40b9b3abdbb956e");
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if (NATIVE_WEAK_MAP) {
    var store = new WeakMap();
    var wmget = store.get;
    var wmhas = store.has;
    var wmset = store.set;
    set = function(it, metadata) {
        wmset.call(store, it, metadata);
        return metadata;
    };
    get = function(it) {
        return wmget.call(store, it) || {};
    };
    has = function(it) {
        return wmhas.call(store, it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return objectHas(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return objectHas(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"f0a2bf6263225aee":"7LdJl","ca46b44b6201ccd7":"i8HOC","f82e6cc0ac249fa5":"Z0pBo","c0ae163eea4ef97":"8CL42","794ab95aefff0489":"luSTT","88d6ccc27e779e5a":"eAjGz","d40b9b3abdbb956e":"661m4"}],"7LdJl":[function(require,module,exports) {
var global = require("6e8e91a63fc6bed5");
var inspectSource = require("b3ae89ce7d946b9c");
var WeakMap = global.WeakMap;
module.exports = typeof WeakMap === "function" && /native code/.test(inspectSource(WeakMap));

},{"6e8e91a63fc6bed5":"i8HOC","b3ae89ce7d946b9c":"9jh7O"}],"eAjGz":[function(require,module,exports) {
var shared = require("dbc8182adeb8c92f");
var uid = require("90b4ffb58508a6e5");
var keys = shared("keys");
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"dbc8182adeb8c92f":"i1mHK","90b4ffb58508a6e5":"a3SEE"}],"i1mHK":[function(require,module,exports) {
var IS_PURE = require("fe5f96cb4b2826a2");
var store = require("84eeed9891aafe14");
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
})("versions", []).push({
    version: "3.6.5",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xa9 2020 Denis Pushkarev (zloirock.ru)"
});

},{"fe5f96cb4b2826a2":"5ZsyC","84eeed9891aafe14":"l4ncH"}],"5ZsyC":[function(require,module,exports) {
module.exports = false;

},{}],"a3SEE":[function(require,module,exports) {
var id = 0;
var postfix = Math.random();
module.exports = function(key) {
    return "Symbol(" + String(key === undefined ? "" : key) + ")_" + (++id + postfix).toString(36);
};

},{}],"661m4":[function(require,module,exports) {
module.exports = {};

},{}],"9Z12i":[function(require,module,exports) {
var has = require("fc3b84318bcd1bca");
var ownKeys = require("88cb809f98beddc6");
var getOwnPropertyDescriptorModule = require("10ea642aad5f7c21");
var definePropertyModule = require("39ff598ce822187e");
module.exports = function(target, source) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"fc3b84318bcd1bca":"luSTT","88cb809f98beddc6":"1CX1A","10ea642aad5f7c21":"lk5NI","39ff598ce822187e":"iJR4w"}],"1CX1A":[function(require,module,exports) {
var getBuiltIn = require("3cc1e4329d869e34");
var getOwnPropertyNamesModule = require("d703bcb62fcda216");
var getOwnPropertySymbolsModule = require("157674bad2772c6d");
var anObject = require("a09e060b9cae3c6c");
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

},{"3cc1e4329d869e34":"6ZUSY","d703bcb62fcda216":"fjY04","157674bad2772c6d":"4DWO3","a09e060b9cae3c6c":"4isCr"}],"6ZUSY":[function(require,module,exports) {
var path = require("f5e1863bda0e8d90");
var global = require("dd9e9ae04e8684f7");
var aFunction = function(variable) {
    return typeof variable == "function" ? variable : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

},{"f5e1863bda0e8d90":"gKjqB","dd9e9ae04e8684f7":"i8HOC"}],"gKjqB":[function(require,module,exports) {
var global = require("70f8eb6067a24c7e");
module.exports = global;

},{"70f8eb6067a24c7e":"i8HOC"}],"fjY04":[function(require,module,exports) {
var internalObjectKeys = require("6d8591e17a49376c");
var enumBugKeys = require("2c933f93dd98f385");
var hiddenKeys = enumBugKeys.concat("length", "prototype");
// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"6d8591e17a49376c":"hl5T1","2c933f93dd98f385":"9RnJm"}],"hl5T1":[function(require,module,exports) {
var has = require("692585591dbbd574");
var toIndexedObject = require("28192ac12e934672");
var indexOf = require("a5f9c5d8e993ccd6").indexOf;
var hiddenKeys = require("57775908f1581bc6");
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!has(hiddenKeys, key) && has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (has(O, key = names[i++])) ~indexOf(result, key) || result.push(key);
    return result;
};

},{"692585591dbbd574":"luSTT","28192ac12e934672":"jLWwQ","a5f9c5d8e993ccd6":"n5IsC","57775908f1581bc6":"661m4"}],"n5IsC":[function(require,module,exports) {
var toIndexedObject = require("d5dcbcd68ac5acd0");
var toLength = require("b3dca7bf74909620");
var toAbsoluteIndex = require("212b13aecfa48226");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"d5dcbcd68ac5acd0":"jLWwQ","b3dca7bf74909620":"fU04N","212b13aecfa48226":"5yh27"}],"fU04N":[function(require,module,exports) {
var toInteger = require("1ae03ba64cf9f0ad");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"1ae03ba64cf9f0ad":"iQHvX"}],"iQHvX":[function(require,module,exports) {
var ceil = Math.ceil;
var floor = Math.floor;
// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function(argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

},{}],"5yh27":[function(require,module,exports) {
var toInteger = require("2c5803846a6c0358");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toInteger(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"2c5803846a6c0358":"iQHvX"}],"9RnJm":[function(require,module,exports) {
// IE8- don't enum bug keys
module.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];

},{}],"4DWO3":[function(require,module,exports) {
exports.f = Object.getOwnPropertySymbols;

},{}],"6uTCZ":[function(require,module,exports) {
var fails = require("10299561ea0c7870");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == "function" ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = "N";
var POLYFILL = isForced.POLYFILL = "P";
module.exports = isForced;

},{"10299561ea0c7870":"hL6D2"}],"7jDg7":[function(require,module,exports) {
var global = require("1e8ed58235e9956a");
var fails = require("b8bf5434d2248ca7");
var classof = require("f78690da3387f35d");
var bind = require("df212787338802d3");
var html = require("731f9370cc21fc3b");
var createElement = require("907adb6d219da7a3");
var IS_IOS = require("fdfdeccf85e81d4f");
var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var defer, channel, port;
var run = function(id) {
    // eslint-disable-next-line no-prototype-builtins
    if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var listener = function(event) {
    run(event.data);
};
var post = function(id) {
    // old engines have not location.origin
    global.postMessage(id + "", location.protocol + "//" + location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(fn) {
        var args = [];
        var i = 1;
        while(arguments.length > i)args.push(arguments[i++]);
        queue[++counter] = function() {
            // eslint-disable-next-line no-new-func
            (typeof fn == "function" ? fn : Function(fn)).apply(undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (classof(process) == "process") defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = bind(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && typeof postMessage == "function" && !global.importScripts && !fails(post) && location.protocol !== "file:") {
        defer = post;
        global.addEventListener("message", listener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement("script")) defer = function(id) {
        html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"1e8ed58235e9956a":"i8HOC","b8bf5434d2248ca7":"hL6D2","f78690da3387f35d":"bdfmm","df212787338802d3":"7vpmS","731f9370cc21fc3b":"2pze4","907adb6d219da7a3":"4bOHl","fdfdeccf85e81d4f":"bzGah"}],"7vpmS":[function(require,module,exports) {
var aFunction = require("a55e50f41805cb8b");
// optional / simple context binding
module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch(length){
        case 0:
            return function() {
                return fn.call(that);
            };
        case 1:
            return function(a) {
                return fn.call(that, a);
            };
        case 2:
            return function(a, b) {
                return fn.call(that, a, b);
            };
        case 3:
            return function(a, b, c) {
                return fn.call(that, a, b, c);
            };
    }
    return function() {
        return fn.apply(that, arguments);
    };
};

},{"a55e50f41805cb8b":"kFQu0"}],"kFQu0":[function(require,module,exports) {
module.exports = function(it) {
    if (typeof it != "function") throw TypeError(String(it) + " is not a function");
    return it;
};

},{}],"2pze4":[function(require,module,exports) {
var getBuiltIn = require("14cb391fa4a0dda8");
module.exports = getBuiltIn("document", "documentElement");

},{"14cb391fa4a0dda8":"6ZUSY"}],"bzGah":[function(require,module,exports) {
var userAgent = require("d96985a79ddda108");
module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);

},{"d96985a79ddda108":"73xBt"}],"73xBt":[function(require,module,exports) {
var getBuiltIn = require("16054ed539401f1");
module.exports = getBuiltIn("navigator", "userAgent") || "";

},{"16054ed539401f1":"6ZUSY"}],"eAczX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Auth0Client", ()=>te);
parcelHelpers.export(exports, "AuthenticationError", ()=>u);
parcelHelpers.export(exports, "CacheKey", ()=>C);
parcelHelpers.export(exports, "GenericError", ()=>d);
parcelHelpers.export(exports, "InMemoryCache", ()=>x);
parcelHelpers.export(exports, "LocalStorageCache", ()=>z);
parcelHelpers.export(exports, "MfaRequiredError", ()=>m);
parcelHelpers.export(exports, "MissingRefreshTokenError", ()=>f);
parcelHelpers.export(exports, "PopupCancelledError", ()=>p);
parcelHelpers.export(exports, "PopupTimeoutError", ()=>h);
parcelHelpers.export(exports, "TimeoutError", ()=>l);
parcelHelpers.export(exports, "User", ()=>ie);
parcelHelpers.export(exports, "createAuth0Client", ()=>oe);
var global = arguments[3];
function e(e, t) {
    var i = {};
    for(var o in e)Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (i[o] = e[o]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var n = 0;
        for(o = Object.getOwnPropertySymbols(e); n < o.length; n++)t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (i[o[n]] = e[o[n]]);
    }
    return i;
}
var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function i(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function o(e, t) {
    return e(t = {
        exports: {}
    }, t.exports), t.exports;
}
var n = o(function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {
            var e = this;
            this.locked = new Map, this.addToLocked = function(t, i) {
                var o = e.locked.get(t);
                void 0 === o ? void 0 === i ? e.locked.set(t, []) : e.locked.set(t, [
                    i
                ]) : void 0 !== i && (o.unshift(i), e.locked.set(t, o));
            }, this.isLocked = function(t) {
                return e.locked.has(t);
            }, this.lock = function(t) {
                return new Promise(function(i, o) {
                    e.isLocked(t) ? e.addToLocked(t, i) : (e.addToLocked(t), i());
                });
            }, this.unlock = function(t) {
                var i = e.locked.get(t);
                if (void 0 !== i && 0 !== i.length) {
                    var o = i.pop();
                    e.locked.set(t, i), void 0 !== o && setTimeout(o, 0);
                } else e.locked.delete(t);
            };
        }
        return e.getInstance = function() {
            return void 0 === e.instance && (e.instance = new e), e.instance;
        }, e;
    }();
    t.default = function() {
        return i.getInstance();
    };
});
i(n);
var a = i(o(function(e, i) {
    var o = t && t.__awaiter || function(e, t, i, o) {
        return new (i || (i = Promise))(function(n, a) {
            function s(e) {
                try {
                    c(o.next(e));
                } catch (e) {
                    a(e);
                }
            }
            function r(e) {
                try {
                    c(o.throw(e));
                } catch (e) {
                    a(e);
                }
            }
            function c(e) {
                e.done ? n(e.value) : new i(function(t) {
                    t(e.value);
                }).then(s, r);
            }
            c((o = o.apply(e, t || [])).next());
        });
    }, a = t && t.__generator || function(e, t) {
        var i, o, n, a, s = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1];
            },
            trys: [],
            ops: []
        };
        return a = {
            next: r(0),
            throw: r(1),
            return: r(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this;
        }), a;
        function r(a) {
            return function(r) {
                return function(a) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for(; s;)try {
                        if (i = 1, o && (n = 2 & a[0] ? o.return : a[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, a[1])).done) return n;
                        switch(o = 0, n && (a = [
                            2 & a[0],
                            n.value
                        ]), a[0]){
                            case 0:
                            case 1:
                                n = a;
                                break;
                            case 4:
                                return s.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, o = a[1], a = [
                                    0
                                ];
                                continue;
                            case 7:
                                a = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(n = s.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                    s = 0;
                                    continue;
                                }
                                if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                                    s.label = a[1];
                                    break;
                                }
                                if (6 === a[0] && s.label < n[1]) {
                                    s.label = n[1], n = a;
                                    break;
                                }
                                if (n && s.label < n[2]) {
                                    s.label = n[2], s.ops.push(a);
                                    break;
                                }
                                n[2] && s.ops.pop(), s.trys.pop();
                                continue;
                        }
                        a = t.call(e, s);
                    } catch (e) {
                        a = [
                            6,
                            e
                        ], o = 0;
                    } finally{
                        i = n = 0;
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    };
                }([
                    a,
                    r
                ]);
            };
        }
    };
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var s = "browser-tabs-lock-key";
    function r(e) {
        return new Promise(function(t) {
            return setTimeout(t, e);
        });
    }
    function c(e) {
        for(var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", i = "", o = 0; o < e; o++)i += t[Math.floor(Math.random() * t.length)];
        return i;
    }
    var d = function() {
        function e() {
            this.acquiredIatSet = new Set, this.id = Date.now().toString() + c(15), this.acquireLock = this.acquireLock.bind(this), this.releaseLock = this.releaseLock.bind(this), this.releaseLock__private__ = this.releaseLock__private__.bind(this), this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this), this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this), void 0 === e.waiters && (e.waiters = []);
        }
        return e.prototype.acquireLock = function(t, i) {
            return void 0 === i && (i = 5e3), o(this, void 0, void 0, function() {
                var o, n, d, u, l, h;
                return a(this, function(a) {
                    switch(a.label){
                        case 0:
                            o = Date.now() + c(4), n = Date.now() + i, d = s + "-" + t, u = window.localStorage, a.label = 1;
                        case 1:
                            return Date.now() < n ? [
                                4,
                                r(30)
                            ] : [
                                3,
                                8
                            ];
                        case 2:
                            return a.sent(), null !== u.getItem(d) ? [
                                3,
                                5
                            ] : (l = this.id + "-" + t + "-" + o, [
                                4,
                                r(Math.floor(25 * Math.random()))
                            ]);
                        case 3:
                            return a.sent(), u.setItem(d, JSON.stringify({
                                id: this.id,
                                iat: o,
                                timeoutKey: l,
                                timeAcquired: Date.now(),
                                timeRefreshed: Date.now()
                            })), [
                                4,
                                r(30)
                            ];
                        case 4:
                            return a.sent(), null !== (h = u.getItem(d)) && (h = JSON.parse(h)).id === this.id && h.iat === o ? (this.acquiredIatSet.add(o), this.refreshLockWhileAcquired(d, o), [
                                2,
                                !0
                            ]) : [
                                3,
                                7
                            ];
                        case 5:
                            return e.lockCorrector(), [
                                4,
                                this.waitForSomethingToChange(n)
                            ];
                        case 6:
                            a.sent(), a.label = 7;
                        case 7:
                            return o = Date.now() + c(4), [
                                3,
                                1
                            ];
                        case 8:
                            return [
                                2,
                                !1
                            ];
                    }
                });
            });
        }, e.prototype.refreshLockWhileAcquired = function(e, t) {
            return o(this, void 0, void 0, function() {
                var i = this;
                return a(this, function(s) {
                    return setTimeout(function() {
                        return o(i, void 0, void 0, function() {
                            var i, o;
                            return a(this, function(a) {
                                switch(a.label){
                                    case 0:
                                        return [
                                            4,
                                            n.default().lock(t)
                                        ];
                                    case 1:
                                        return a.sent(), this.acquiredIatSet.has(t) ? (i = window.localStorage, null === (o = i.getItem(e)) ? (n.default().unlock(t), [
                                            2
                                        ]) : ((o = JSON.parse(o)).timeRefreshed = Date.now(), i.setItem(e, JSON.stringify(o)), n.default().unlock(t), this.refreshLockWhileAcquired(e, t), [
                                            2
                                        ])) : (n.default().unlock(t), [
                                            2
                                        ]);
                                }
                            });
                        });
                    }, 1e3), [
                        2
                    ];
                });
            });
        }, e.prototype.waitForSomethingToChange = function(t) {
            return o(this, void 0, void 0, function() {
                return a(this, function(i) {
                    switch(i.label){
                        case 0:
                            return [
                                4,
                                new Promise(function(i) {
                                    var o = !1, n = Date.now(), a = !1;
                                    function s() {
                                        if (a || (window.removeEventListener("storage", s), e.removeFromWaiting(s), clearTimeout(r), a = !0), !o) {
                                            o = !0;
                                            var t = 50 - (Date.now() - n);
                                            t > 0 ? setTimeout(i, t) : i();
                                        }
                                    }
                                    window.addEventListener("storage", s), e.addToWaiting(s);
                                    var r = setTimeout(s, Math.max(0, t - Date.now()));
                                })
                            ];
                        case 1:
                            return i.sent(), [
                                2
                            ];
                    }
                });
            });
        }, e.addToWaiting = function(t) {
            this.removeFromWaiting(t), void 0 !== e.waiters && e.waiters.push(t);
        }, e.removeFromWaiting = function(t) {
            void 0 !== e.waiters && (e.waiters = e.waiters.filter(function(e) {
                return e !== t;
            }));
        }, e.notifyWaiters = function() {
            void 0 !== e.waiters && e.waiters.slice().forEach(function(e) {
                return e();
            });
        }, e.prototype.releaseLock = function(e) {
            return o(this, void 0, void 0, function() {
                return a(this, function(t) {
                    switch(t.label){
                        case 0:
                            return [
                                4,
                                this.releaseLock__private__(e)
                            ];
                        case 1:
                            return [
                                2,
                                t.sent()
                            ];
                    }
                });
            });
        }, e.prototype.releaseLock__private__ = function(t) {
            return o(this, void 0, void 0, function() {
                var i, o, r;
                return a(this, function(a) {
                    switch(a.label){
                        case 0:
                            return i = window.localStorage, o = s + "-" + t, null === (r = i.getItem(o)) ? [
                                2
                            ] : (r = JSON.parse(r)).id !== this.id ? [
                                3,
                                2
                            ] : [
                                4,
                                n.default().lock(r.iat)
                            ];
                        case 1:
                            a.sent(), this.acquiredIatSet.delete(r.iat), i.removeItem(o), n.default().unlock(r.iat), e.notifyWaiters(), a.label = 2;
                        case 2:
                            return [
                                2
                            ];
                    }
                });
            });
        }, e.lockCorrector = function() {
            for(var t = Date.now() - 5e3, i = window.localStorage, o = Object.keys(i), n = !1, a = 0; a < o.length; a++){
                var r = o[a];
                if (r.includes(s)) {
                    var c = i.getItem(r);
                    null !== c && (void 0 === (c = JSON.parse(c)).timeRefreshed && c.timeAcquired < t || void 0 !== c.timeRefreshed && c.timeRefreshed < t) && (i.removeItem(r), n = !0);
                }
            }
            n && e.notifyWaiters();
        }, e.waiters = void 0, e;
    }();
    i.default = d;
}));
const s = {
    timeoutInSeconds: 60
}, r = {
    name: "auth0-spa-js",
    version: "2.0.8"
}, c = ()=>Date.now();
class d extends Error {
    constructor(e, t){
        super(t), this.error = e, this.error_description = t, Object.setPrototypeOf(this, d.prototype);
    }
    static fromPayload({ error: e, error_description: t }) {
        return new d(e, t);
    }
}
class u extends d {
    constructor(e, t, i, o = null){
        super(e, t), this.state = i, this.appState = o, Object.setPrototypeOf(this, u.prototype);
    }
}
class l extends d {
    constructor(){
        super("timeout", "Timeout"), Object.setPrototypeOf(this, l.prototype);
    }
}
class h extends l {
    constructor(e){
        super(), this.popup = e, Object.setPrototypeOf(this, h.prototype);
    }
}
class p extends d {
    constructor(e){
        super("cancelled", "Popup closed"), this.popup = e, Object.setPrototypeOf(this, p.prototype);
    }
}
class m extends d {
    constructor(e, t, i){
        super(e, t), this.mfa_token = i, Object.setPrototypeOf(this, m.prototype);
    }
}
class f extends d {
    constructor(e, t){
        super("missing_refresh_token", `Missing Refresh Token (audience: '${g(e, [
            "default"
        ])}', scope: '${g(t)}')`), this.audience = e, this.scope = t, Object.setPrototypeOf(this, f.prototype);
    }
}
function g(e, t = []) {
    return e && !t.includes(e) ? e : "";
}
const w = ()=>window.crypto, y = ()=>{
    const e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.";
    let t = "";
    return Array.from(w().getRandomValues(new Uint8Array(43))).forEach((i)=>t += e[i % e.length]), t;
}, k = (e)=>btoa(e), b = (t)=>{
    var { clientId: i } = t, o = e(t, [
        "clientId"
    ]);
    return new URLSearchParams(((e)=>Object.keys(e).filter((t)=>void 0 !== e[t]).reduce((t, i)=>Object.assign(Object.assign({}, t), {
                [i]: e[i]
            }), {}))(Object.assign({
        client_id: i
    }, o))).toString();
}, v = (e)=>((e)=>decodeURIComponent(atob(e).split("").map((e)=>"%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)).join("")))(e.replace(/_/g, "/").replace(/-/g, "+")), _ = async (e, t)=>{
    const i = await fetch(e, t);
    return {
        ok: i.ok,
        json: await i.json()
    };
}, I = async (e, t, i)=>{
    const o = new AbortController;
    let n;
    return t.signal = o.signal, Promise.race([
        _(e, t),
        new Promise((e, t)=>{
            n = setTimeout(()=>{
                o.abort(), t(new Error("Timeout when executing 'fetch'"));
            }, i);
        })
    ]).finally(()=>{
        clearTimeout(n);
    });
}, S = async (e, t, i, o, n, a, s)=>{
    var r, c;
    return r = {
        auth: {
            audience: t,
            scope: i
        },
        timeout: n,
        fetchUrl: e,
        fetchOptions: o,
        useFormData: s
    }, c = a, new Promise(function(e, t) {
        const i = new MessageChannel;
        i.port1.onmessage = function(o) {
            o.data.error ? t(new Error(o.data.error)) : e(o.data), i.port1.close();
        }, c.postMessage(r, [
            i.port2
        ]);
    });
}, T = async (e, t, i, o, n, a, s = 1e4)=>n ? S(e, t, i, o, s, n, a) : I(e, o, s);
async function O(t, i) {
    var { baseUrl: o, timeout: n, audience: a, scope: s, auth0Client: c, useFormData: u } = t, l = e(t, [
        "baseUrl",
        "timeout",
        "audience",
        "scope",
        "auth0Client",
        "useFormData"
    ]);
    const h = u ? b(l) : JSON.stringify(l);
    return await async function(t, i, o, n, a, s, r) {
        let c, u = null;
        for(let e = 0; e < 3; e++)try {
            c = await T(t, o, n, a, s, r, i), u = null;
            break;
        } catch (e) {
            u = e;
        }
        if (u) throw u;
        const l = c.json, { error: h, error_description: p } = l, g = e(l, [
            "error",
            "error_description"
        ]), { ok: w } = c;
        if (!w) {
            const e = p || `HTTP error. Unable to fetch ${t}`;
            if ("mfa_required" === h) throw new m(h, e, g.mfa_token);
            if ("missing_refresh_token" === h) throw new f(o, n);
            throw new d(h || "request_error", e);
        }
        return g;
    }(`${o}/oauth/token`, n, a || "default", s, {
        method: "POST",
        body: h,
        headers: {
            "Content-Type": u ? "application/x-www-form-urlencoded" : "application/json",
            "Auth0-Client": btoa(JSON.stringify(c || r))
        }
    }, i, u);
}
const j = (...e)=>{
    var t;
    return (t = e.filter(Boolean).join(" ").trim().split(/\s+/), Array.from(new Set(t))).join(" ");
};
class C {
    constructor(e, t = "@@auth0spajs@@", i){
        this.prefix = t, this.suffix = i, this.clientId = e.clientId, this.scope = e.scope, this.audience = e.audience;
    }
    toKey() {
        return [
            this.prefix,
            this.clientId,
            this.audience,
            this.scope,
            this.suffix
        ].filter(Boolean).join("::");
    }
    static fromKey(e) {
        const [t, i, o, n] = e.split("::");
        return new C({
            clientId: i,
            scope: n,
            audience: o
        }, t);
    }
    static fromCacheEntry(e) {
        const { scope: t, audience: i, client_id: o } = e;
        return new C({
            scope: t,
            audience: i,
            clientId: o
        });
    }
}
class z {
    set(e, t) {
        localStorage.setItem(e, JSON.stringify(t));
    }
    get(e) {
        const t = window.localStorage.getItem(e);
        if (t) try {
            return JSON.parse(t);
        } catch (e) {
            return;
        }
    }
    remove(e) {
        localStorage.removeItem(e);
    }
    allKeys() {
        return Object.keys(window.localStorage).filter((e)=>e.startsWith("@@auth0spajs@@"));
    }
}
class x {
    constructor(){
        this.enclosedCache = function() {
            let e = {};
            return {
                set (t, i) {
                    e[t] = i;
                },
                get (t) {
                    const i = e[t];
                    if (i) return i;
                },
                remove (t) {
                    delete e[t];
                },
                allKeys: ()=>Object.keys(e)
            };
        }();
    }
}
class P {
    constructor(e, t, i){
        this.cache = e, this.keyManifest = t, this.nowProvider = i || c;
    }
    async setIdToken(e, t, i) {
        var o;
        const n = this.getIdTokenCacheKey(e);
        await this.cache.set(n, {
            id_token: t,
            decodedToken: i
        }), await (null === (o = this.keyManifest) || void 0 === o ? void 0 : o.add(n));
    }
    async getIdToken(e) {
        const t = await this.cache.get(this.getIdTokenCacheKey(e.clientId));
        if (!t && e.scope && e.audience) {
            const t = await this.get(e);
            if (!t) return;
            if (!t.id_token || !t.decodedToken) return;
            return {
                id_token: t.id_token,
                decodedToken: t.decodedToken
            };
        }
        if (t) return {
            id_token: t.id_token,
            decodedToken: t.decodedToken
        };
    }
    async get(e, t = 0) {
        var i;
        let o = await this.cache.get(e.toKey());
        if (!o) {
            const t = await this.getCacheKeys();
            if (!t) return;
            const i = this.matchExistingCacheKey(e, t);
            i && (o = await this.cache.get(i));
        }
        if (!o) return;
        const n = await this.nowProvider(), a = Math.floor(n / 1e3);
        return o.expiresAt - t < a ? o.body.refresh_token ? (o.body = {
            refresh_token: o.body.refresh_token
        }, await this.cache.set(e.toKey(), o), o.body) : (await this.cache.remove(e.toKey()), void await (null === (i = this.keyManifest) || void 0 === i ? void 0 : i.remove(e.toKey()))) : o.body;
    }
    async set(e) {
        var t;
        const i = new C({
            clientId: e.client_id,
            scope: e.scope,
            audience: e.audience
        }), o = await this.wrapCacheEntry(e);
        await this.cache.set(i.toKey(), o), await (null === (t = this.keyManifest) || void 0 === t ? void 0 : t.add(i.toKey()));
    }
    async clear(e) {
        var t;
        const i = await this.getCacheKeys();
        i && (await i.filter((t)=>!e || t.includes(e)).reduce(async (e, t)=>{
            await e, await this.cache.remove(t);
        }, Promise.resolve()), await (null === (t = this.keyManifest) || void 0 === t ? void 0 : t.clear()));
    }
    async wrapCacheEntry(e) {
        const t = await this.nowProvider();
        return {
            body: e,
            expiresAt: Math.floor(t / 1e3) + e.expires_in
        };
    }
    async getCacheKeys() {
        var e;
        return this.keyManifest ? null === (e = await this.keyManifest.get()) || void 0 === e ? void 0 : e.keys : this.cache.allKeys ? this.cache.allKeys() : void 0;
    }
    getIdTokenCacheKey(e) {
        return new C({
            clientId: e
        }, "@@auth0spajs@@", "@@user@@").toKey();
    }
    matchExistingCacheKey(e, t) {
        return t.filter((t)=>{
            var i;
            const o = C.fromKey(t), n = new Set(o.scope && o.scope.split(" ")), a = (null === (i = e.scope) || void 0 === i ? void 0 : i.split(" ")) || [], s = o.scope && a.reduce((e, t)=>e && n.has(t), !0);
            return "@@auth0spajs@@" === o.prefix && o.clientId === e.clientId && o.audience === e.audience && s;
        })[0];
    }
}
class Z {
    constructor(e, t, i){
        this.storage = e, this.clientId = t, this.cookieDomain = i, this.storageKey = `a0.spajs.txs.${this.clientId}`;
    }
    create(e) {
        this.storage.save(this.storageKey, e, {
            daysUntilExpire: 1,
            cookieDomain: this.cookieDomain
        });
    }
    get() {
        return this.storage.get(this.storageKey);
    }
    remove() {
        this.storage.remove(this.storageKey, {
            cookieDomain: this.cookieDomain
        });
    }
}
const K = (e)=>"number" == typeof e, L = [
    "iss",
    "aud",
    "exp",
    "nbf",
    "iat",
    "jti",
    "azp",
    "nonce",
    "auth_time",
    "at_hash",
    "c_hash",
    "acr",
    "amr",
    "sub_jwk",
    "cnf",
    "sip_from_tag",
    "sip_date",
    "sip_callid",
    "sip_cseq_num",
    "sip_via_branch",
    "orig",
    "dest",
    "mky",
    "events",
    "toe",
    "txn",
    "rph",
    "sid",
    "vot",
    "vtm"
], U = (e)=>{
    if (!e.id_token) throw new Error("ID token is required but missing");
    const t = ((e)=>{
        const t = e.split("."), [i, o, n] = t;
        if (3 !== t.length || !i || !o || !n) throw new Error("ID token could not be decoded");
        const a = JSON.parse(v(o)), s = {
            __raw: e
        }, r = {};
        return Object.keys(a).forEach((e)=>{
            s[e] = a[e], L.includes(e) || (r[e] = a[e]);
        }), {
            encoded: {
                header: i,
                payload: o,
                signature: n
            },
            header: JSON.parse(v(i)),
            claims: s,
            user: r
        };
    })(e.id_token);
    if (!t.claims.iss) throw new Error("Issuer (iss) claim must be a string present in the ID token");
    if (t.claims.iss !== e.iss) throw new Error(`Issuer (iss) claim mismatch in the ID token; expected "${e.iss}", found "${t.claims.iss}"`);
    if (!t.user.sub) throw new Error("Subject (sub) claim must be a string present in the ID token");
    if ("RS256" !== t.header.alg) throw new Error(`Signature algorithm of "${t.header.alg}" is not supported. Expected the ID token to be signed with "RS256".`);
    if (!t.claims.aud || "string" != typeof t.claims.aud && !Array.isArray(t.claims.aud)) throw new Error("Audience (aud) claim must be a string or array of strings present in the ID token");
    if (Array.isArray(t.claims.aud)) {
        if (!t.claims.aud.includes(e.aud)) throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${e.aud}" but was not one of "${t.claims.aud.join(", ")}"`);
        if (t.claims.aud.length > 1) {
            if (!t.claims.azp) throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");
            if (t.claims.azp !== e.aud) throw new Error(`Authorized Party (azp) claim mismatch in the ID token; expected "${e.aud}", found "${t.claims.azp}"`);
        }
    } else if (t.claims.aud !== e.aud) throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${e.aud}" but found "${t.claims.aud}"`);
    if (e.nonce) {
        if (!t.claims.nonce) throw new Error("Nonce (nonce) claim must be a string present in the ID token");
        if (t.claims.nonce !== e.nonce) throw new Error(`Nonce (nonce) claim mismatch in the ID token; expected "${e.nonce}", found "${t.claims.nonce}"`);
    }
    if (e.max_age && !K(t.claims.auth_time)) throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");
    if (null == t.claims.exp || !K(t.claims.exp)) throw new Error("Expiration Time (exp) claim must be a number present in the ID token");
    if (!K(t.claims.iat)) throw new Error("Issued At (iat) claim must be a number present in the ID token");
    const i = e.leeway || 60, o = new Date(e.now || Date.now()), n = new Date(0);
    if (n.setUTCSeconds(t.claims.exp + i), o > n) throw new Error(`Expiration Time (exp) claim error in the ID token; current time (${o}) is after expiration time (${n})`);
    if (null != t.claims.nbf && K(t.claims.nbf)) {
        const e = new Date(0);
        if (e.setUTCSeconds(t.claims.nbf - i), o < e) throw new Error(`Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${o}) is before ${e}`);
    }
    if (null != t.claims.auth_time && K(t.claims.auth_time)) {
        const n = new Date(0);
        if (n.setUTCSeconds(parseInt(t.claims.auth_time) + e.max_age + i), o > n) throw new Error(`Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (${o}) is after last auth at ${n}`);
    }
    if (e.organizationId) {
        if (!t.claims.org_id) throw new Error("Organization ID (org_id) claim must be a string present in the ID token");
        if (e.organizationId !== t.claims.org_id) throw new Error(`Organization ID (org_id) claim mismatch in the ID token; expected "${e.organizationId}", found "${t.claims.org_id}"`);
    }
    return t;
};
var E = o(function(e, i) {
    var o = t && t.__assign || function() {
        return o = Object.assign || function(e) {
            for(var t, i = 1, o = arguments.length; i < o; i++)for(var n in t = arguments[i])Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
        }, o.apply(this, arguments);
    };
    function n(e, t) {
        if (!t) return "";
        var i = "; " + e;
        return !0 === t ? i : i + "=" + t;
    }
    function a(e, t, i) {
        return encodeURIComponent(e).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/\(/g, "%28").replace(/\)/g, "%29") + "=" + encodeURIComponent(t).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent) + function(e) {
            if ("number" == typeof e.expires) {
                var t = new Date;
                t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), e.expires = t;
            }
            return n("Expires", e.expires ? e.expires.toUTCString() : "") + n("Domain", e.domain) + n("Path", e.path) + n("Secure", e.secure) + n("SameSite", e.sameSite);
        }(i);
    }
    function s(e) {
        for(var t = {}, i = e ? e.split("; ") : [], o = /(%[\dA-F]{2})+/gi, n = 0; n < i.length; n++){
            var a = i[n].split("="), s = a.slice(1).join("=");
            '"' === s.charAt(0) && (s = s.slice(1, -1));
            try {
                t[a[0].replace(o, decodeURIComponent)] = s.replace(o, decodeURIComponent);
            } catch (e) {}
        }
        return t;
    }
    function r() {
        return s(document.cookie);
    }
    function c(e, t, i) {
        document.cookie = a(e, t, o({
            path: "/"
        }, i));
    }
    i.__esModule = !0, i.encode = a, i.parse = s, i.getAll = r, i.get = function(e) {
        return r()[e];
    }, i.set = c, i.remove = function(e, t) {
        c(e, "", o(o({}, t), {
            expires: -1
        }));
    };
});
i(E), E.encode, E.parse, E.getAll;
var W = E.get, X = E.set, D = E.remove;
const N = {
    get (e) {
        const t = W(e);
        if (void 0 !== t) return JSON.parse(t);
    },
    save (e, t, i) {
        let o = {};
        "https:" === window.location.protocol && (o = {
            secure: !0,
            sameSite: "none"
        }), (null == i ? void 0 : i.daysUntilExpire) && (o.expires = i.daysUntilExpire), (null == i ? void 0 : i.cookieDomain) && (o.domain = i.cookieDomain), X(e, JSON.stringify(t), o);
    },
    remove (e, t) {
        let i = {};
        (null == t ? void 0 : t.cookieDomain) && (i.domain = t.cookieDomain), D(e, i);
    }
}, R = {
    get (e) {
        const t = N.get(e);
        return t || N.get(`_legacy_${e}`);
    },
    save (e, t, i) {
        let o = {};
        "https:" === window.location.protocol && (o = {
            secure: !0
        }), (null == i ? void 0 : i.daysUntilExpire) && (o.expires = i.daysUntilExpire), (null == i ? void 0 : i.cookieDomain) && (o.domain = i.cookieDomain), X(`_legacy_${e}`, JSON.stringify(t), o), N.save(e, t, i);
    },
    remove (e, t) {
        let i = {};
        (null == t ? void 0 : t.cookieDomain) && (i.domain = t.cookieDomain), D(e, i), N.remove(e, t), N.remove(`_legacy_${e}`, t);
    }
}, V = {
    get (e) {
        if ("undefined" == typeof sessionStorage) return;
        const t = sessionStorage.getItem(e);
        return null != t ? JSON.parse(t) : void 0;
    },
    save (e, t) {
        sessionStorage.setItem(e, JSON.stringify(t));
    },
    remove (e) {
        sessionStorage.removeItem(e);
    }
};
function J(e, t, i) {
    var o = void 0 === t ? null : t, n = function(e, t) {
        var i = atob(e);
        if (t) {
            for(var o = new Uint8Array(i.length), n = 0, a = i.length; n < a; ++n)o[n] = i.charCodeAt(n);
            return String.fromCharCode.apply(null, new Uint16Array(o.buffer));
        }
        return i;
    }(e, void 0 !== i && i), a = n.indexOf("\n", 10) + 1, s = n.substring(a) + (o ? "//# sourceMappingURL=" + o : ""), r = new Blob([
        s
    ], {
        type: "application/javascript"
    });
    return URL.createObjectURL(r);
}
var F, H, G, M, A = (F = "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9Y29uc3Qgcz1lPT57dmFye2NsaWVudElkOnR9PWUscj1mdW5jdGlvbihlLHQpe3ZhciByPXt9O2Zvcih2YXIgcyBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHMpJiZ0LmluZGV4T2Yocyk8MCYmKHJbc109ZVtzXSk7aWYobnVsbCE9ZSYmImZ1bmN0aW9uIj09dHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBvPTA7Zm9yKHM9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtvPHMubGVuZ3RoO28rKyl0LmluZGV4T2Yoc1tvXSk8MCYmT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGUsc1tvXSkmJihyW3Nbb11dPWVbc1tvXV0pfXJldHVybiByfShlLFsiY2xpZW50SWQiXSk7cmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMoKGU9Pk9iamVjdC5rZXlzKGUpLmZpbHRlcigodD0+dm9pZCAwIT09ZVt0XSkpLnJlZHVjZSgoKHQscik9Pk9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSx0KSx7W3JdOmVbcl19KSkse30pKShPYmplY3QuYXNzaWduKHtjbGllbnRfaWQ6dH0scikpKS50b1N0cmluZygpfTtsZXQgbz17fTtjb25zdCBuPShlLHQpPT5gJHtlfXwke3R9YDthZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwoYXN5bmMoe2RhdGE6e3RpbWVvdXQ6ZSxhdXRoOnIsZmV0Y2hVcmw6aSxmZXRjaE9wdGlvbnM6Yyx1c2VGb3JtRGF0YTphfSxwb3J0czpbZl19KT0+e2xldCBwO2NvbnN0e2F1ZGllbmNlOmwsc2NvcGU6dX09cnx8e307dHJ5e2NvbnN0IHI9YT8oZT0+e2NvbnN0IHQ9bmV3IFVSTFNlYXJjaFBhcmFtcyhlKSxyPXt9O3JldHVybiB0LmZvckVhY2goKChlLHQpPT57clt0XT1lfSkpLHJ9KShjLmJvZHkpOkpTT04ucGFyc2UoYy5ib2R5KTtpZighci5yZWZyZXNoX3Rva2VuJiYicmVmcmVzaF90b2tlbiI9PT1yLmdyYW50X3R5cGUpe2NvbnN0IGU9KChlLHQpPT5vW24oZSx0KV0pKGwsdSk7aWYoIWUpdGhyb3cgbmV3IHQobCx1KTtjLmJvZHk9YT9zKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxyKSx7cmVmcmVzaF90b2tlbjplfSkpOkpTT04uc3RyaW5naWZ5KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxyKSx7cmVmcmVzaF90b2tlbjplfSkpfWxldCBkLGc7ImZ1bmN0aW9uIj09dHlwZW9mIEFib3J0Q29udHJvbGxlciYmKGQ9bmV3IEFib3J0Q29udHJvbGxlcixjLnNpZ25hbD1kLnNpZ25hbCk7dHJ5e2c9YXdhaXQgUHJvbWlzZS5yYWNlKFsoaD1lLG5ldyBQcm9taXNlKChlPT5zZXRUaW1lb3V0KGUsaCkpKSksZmV0Y2goaSxPYmplY3QuYXNzaWduKHt9LGMpKV0pfWNhdGNoKGUpe3JldHVybiB2b2lkIGYucG9zdE1lc3NhZ2Uoe2Vycm9yOmUubWVzc2FnZX0pfWlmKCFnKXJldHVybiBkJiZkLmFib3J0KCksdm9pZCBmLnBvc3RNZXNzYWdlKHtlcnJvcjoiVGltZW91dCB3aGVuIGV4ZWN1dGluZyAnZmV0Y2gnIn0pO3A9YXdhaXQgZy5qc29uKCkscC5yZWZyZXNoX3Rva2VuPygoKGUsdCxyKT0+e29bbih0LHIpXT1lfSkocC5yZWZyZXNoX3Rva2VuLGwsdSksZGVsZXRlIHAucmVmcmVzaF90b2tlbik6KChlLHQpPT57ZGVsZXRlIG9bbihlLHQpXX0pKGwsdSksZi5wb3N0TWVzc2FnZSh7b2s6Zy5vayxqc29uOnB9KX1jYXRjaChlKXtmLnBvc3RNZXNzYWdlKHtvazohMSxqc29uOntlcnJvcjplLmVycm9yLGVycm9yX2Rlc2NyaXB0aW9uOmUubWVzc2FnZX19KX12YXIgaH0pKX0oKTsKCg==", H = null, G = !1, function(e) {
    return M = M || J(F, H, G), new Worker(M, e);
});
const Y = {};
class B {
    constructor(e, t){
        this.cache = e, this.clientId = t, this.manifestKey = this.createManifestKeyFrom(this.clientId);
    }
    async add(e) {
        var t;
        const i = new Set((null === (t = await this.cache.get(this.manifestKey)) || void 0 === t ? void 0 : t.keys) || []);
        i.add(e), await this.cache.set(this.manifestKey, {
            keys: [
                ...i
            ]
        });
    }
    async remove(e) {
        const t = await this.cache.get(this.manifestKey);
        if (t) {
            const i = new Set(t.keys);
            return i.delete(e), i.size > 0 ? await this.cache.set(this.manifestKey, {
                keys: [
                    ...i
                ]
            }) : await this.cache.remove(this.manifestKey);
        }
    }
    get() {
        return this.cache.get(this.manifestKey);
    }
    clear() {
        return this.cache.remove(this.manifestKey);
    }
    createManifestKeyFrom(e) {
        return `@@auth0spajs@@::${e}`;
    }
}
const $ = {
    memory: ()=>(new x).enclosedCache,
    localstorage: ()=>new z
}, q = (e)=>$[e], Q = (t)=>{
    const { openUrl: i, onRedirect: o } = t, n = e(t, [
        "openUrl",
        "onRedirect"
    ]);
    return Object.assign(Object.assign({}, n), {
        openUrl: !1 === i || i ? i : o
    });
}, ee = new a;
class te {
    constructor(e){
        let t, i;
        if (this.userCache = (new x).enclosedCache, this.defaultOptions = {
            authorizationParams: {
                scope: "openid profile email"
            },
            useRefreshTokensFallback: !1,
            useFormData: !0
        }, this._releaseLockOnPageHide = async ()=>{
            await ee.releaseLock("auth0.lock.getTokenSilently"), window.removeEventListener("pagehide", this._releaseLockOnPageHide);
        }, this.options = Object.assign(Object.assign(Object.assign({}, this.defaultOptions), e), {
            authorizationParams: Object.assign(Object.assign({}, this.defaultOptions.authorizationParams), e.authorizationParams)
        }), "undefined" != typeof window && (()=>{
            if (!w()) throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");
            if (void 0 === w().subtle) throw new Error("\n      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n    ");
        })(), e.cache && e.cacheLocation && console.warn("Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."), e.cache) i = e.cache;
        else {
            if (t = e.cacheLocation || "memory", !q(t)) throw new Error(`Invalid cache location "${t}"`);
            i = q(t)();
        }
        this.httpTimeoutMs = e.httpTimeoutInSeconds ? 1e3 * e.httpTimeoutInSeconds : 1e4, this.cookieStorage = !1 === e.legacySameSiteCookie ? N : R, this.orgHintCookieName = `auth0.${this.options.clientId}.organization_hint`, this.isAuthenticatedCookieName = ((e)=>`auth0.${e}.is.authenticated`)(this.options.clientId), this.sessionCheckExpiryDays = e.sessionCheckExpiryDays || 1;
        const o = e.useCookiesForTransactions ? this.cookieStorage : V;
        var n;
        this.scope = j("openid", this.options.authorizationParams.scope, this.options.useRefreshTokens ? "offline_access" : ""), this.transactionManager = new Z(o, this.options.clientId, this.options.cookieDomain), this.nowProvider = this.options.nowProvider || c, this.cacheManager = new P(i, i.allKeys ? void 0 : new B(i, this.options.clientId), this.nowProvider), this.domainUrl = (n = this.options.domain, /^https?:\/\//.test(n) ? n : `https://${n}`), this.tokenIssuer = ((e, t)=>e ? e.startsWith("https://") ? e : `https://${e}/` : `${t}/`)(this.options.issuer, this.domainUrl), "undefined" != typeof window && window.Worker && this.options.useRefreshTokens && "memory" === t && (this.worker = new A);
    }
    _url(e) {
        const t = encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client || r)));
        return `${this.domainUrl}${e}&auth0Client=${t}`;
    }
    _authorizeUrl(e) {
        return this._url(`/authorize?${b(e)}`);
    }
    async _verifyIdToken(e, t, i) {
        const o = await this.nowProvider();
        var n;
        return U({
            iss: this.tokenIssuer,
            aud: this.options.clientId,
            id_token: e,
            nonce: t,
            organizationId: i,
            leeway: this.options.leeway,
            max_age: (n = this.options.authorizationParams.max_age, "string" != typeof n ? n : parseInt(n, 10) || void 0),
            now: o
        });
    }
    _processOrgIdHint(e) {
        e ? this.cookieStorage.save(this.orgHintCookieName, e, {
            daysUntilExpire: this.sessionCheckExpiryDays,
            cookieDomain: this.options.cookieDomain
        }) : this.cookieStorage.remove(this.orgHintCookieName, {
            cookieDomain: this.options.cookieDomain
        });
    }
    async _prepareAuthorizeUrl(e, t, i) {
        const o = k(y()), n = k(y()), a = y(), s = ((e)=>{
            const t = new Uint8Array(e);
            return ((e)=>{
                const t = {
                    "+": "-",
                    "/": "_",
                    "=": ""
                };
                return e.replace(/[+/=]/g, (e)=>t[e]);
            })(window.btoa(String.fromCharCode(...Array.from(t))));
        })(await (async (e)=>{
            const t = w().subtle.digest({
                name: "SHA-256"
            }, (new TextEncoder).encode(e));
            return await t;
        })(a)), r = ((e, t, i, o, n, a, s, r)=>Object.assign(Object.assign(Object.assign({
                client_id: e.clientId
            }, e.authorizationParams), i), {
                scope: j(t, i.scope),
                response_type: "code",
                response_mode: r || "query",
                state: o,
                nonce: n,
                redirect_uri: s || e.authorizationParams.redirect_uri,
                code_challenge: a,
                code_challenge_method: "S256"
            }))(this.options, this.scope, e, o, n, s, e.redirect_uri || this.options.authorizationParams.redirect_uri || i, null == t ? void 0 : t.response_mode), c = this._authorizeUrl(r);
        return {
            nonce: n,
            code_verifier: a,
            scope: r.scope,
            audience: r.audience || "default",
            redirect_uri: r.redirect_uri,
            state: o,
            url: c
        };
    }
    async loginWithPopup(e, t) {
        var i;
        if (e = e || {}, !(t = t || {}).popup && (t.popup = ((e)=>{
            const t = window.screenX + (window.innerWidth - 400) / 2, i = window.screenY + (window.innerHeight - 600) / 2;
            return window.open(e, "auth0:authorize:popup", `left=${t},top=${i},width=400,height=600,resizable,scrollbars=yes,status=1`);
        })(""), !t.popup)) throw new Error("Unable to open a popup for loginWithPopup - window.open returned `null`");
        const o = await this._prepareAuthorizeUrl(e.authorizationParams || {}, {
            response_mode: "web_message"
        }, window.location.origin);
        t.popup.location.href = o.url;
        const n = await ((e)=>new Promise((t, i)=>{
                let o;
                const n = setInterval(()=>{
                    e.popup && e.popup.closed && (clearInterval(n), clearTimeout(a), window.removeEventListener("message", o, !1), i(new p(e.popup)));
                }, 1e3), a = setTimeout(()=>{
                    clearInterval(n), i(new h(e.popup)), window.removeEventListener("message", o, !1);
                }, 1e3 * (e.timeoutInSeconds || 60));
                o = function(s) {
                    if (s.data && "authorization_response" === s.data.type) {
                        if (clearTimeout(a), clearInterval(n), window.removeEventListener("message", o, !1), e.popup.close(), s.data.response.error) return i(d.fromPayload(s.data.response));
                        t(s.data.response);
                    }
                }, window.addEventListener("message", o);
            }))(Object.assign(Object.assign({}, t), {
            timeoutInSeconds: t.timeoutInSeconds || this.options.authorizeTimeoutInSeconds || 60
        }));
        if (o.state !== n.state) throw new d("state_mismatch", "Invalid state");
        const a = (null === (i = e.authorizationParams) || void 0 === i ? void 0 : i.organization) || this.options.authorizationParams.organization;
        await this._requestToken({
            audience: o.audience,
            scope: o.scope,
            code_verifier: o.code_verifier,
            grant_type: "authorization_code",
            code: n.code,
            redirect_uri: o.redirect_uri
        }, {
            nonceIn: o.nonce,
            organizationId: a
        });
    }
    async getUser() {
        var e;
        const t = await this._getIdTokenFromCache();
        return null === (e = null == t ? void 0 : t.decodedToken) || void 0 === e ? void 0 : e.user;
    }
    async getIdTokenClaims() {
        var e;
        const t = await this._getIdTokenFromCache();
        return null === (e = null == t ? void 0 : t.decodedToken) || void 0 === e ? void 0 : e.claims;
    }
    async loginWithRedirect(t = {}) {
        var i;
        const o = Q(t), { openUrl: n, fragment: a, appState: s } = o, r = e(o, [
            "openUrl",
            "fragment",
            "appState"
        ]), c = (null === (i = r.authorizationParams) || void 0 === i ? void 0 : i.organization) || this.options.authorizationParams.organization, d = await this._prepareAuthorizeUrl(r.authorizationParams || {}), { url: u } = d, l = e(d, [
            "url"
        ]);
        this.transactionManager.create(Object.assign(Object.assign(Object.assign({}, l), {
            appState: s
        }), c && {
            organizationId: c
        }));
        const h = a ? `${u}#${a}` : u;
        n ? await n(h) : window.location.assign(h);
    }
    async handleRedirectCallback(e = window.location.href) {
        const t = e.split("?").slice(1);
        if (0 === t.length) throw new Error("There are no query params available for parsing.");
        const { state: i, code: o, error: n, error_description: a } = ((e)=>{
            e.indexOf("#") > -1 && (e = e.substring(0, e.indexOf("#")));
            const t = new URLSearchParams(e);
            return {
                state: t.get("state"),
                code: t.get("code") || void 0,
                error: t.get("error") || void 0,
                error_description: t.get("error_description") || void 0
            };
        })(t.join("")), s = this.transactionManager.get();
        if (!s) throw new d("missing_transaction", "Invalid state");
        if (this.transactionManager.remove(), n) throw new u(n, a || n, i, s.appState);
        if (!s.code_verifier || s.state && s.state !== i) throw new d("state_mismatch", "Invalid state");
        const r = s.organizationId, c = s.nonce, l = s.redirect_uri;
        return await this._requestToken(Object.assign({
            audience: s.audience,
            scope: s.scope,
            code_verifier: s.code_verifier,
            grant_type: "authorization_code",
            code: o
        }, l ? {
            redirect_uri: l
        } : {}), {
            nonceIn: c,
            organizationId: r
        }), {
            appState: s.appState
        };
    }
    async checkSession(e) {
        if (!this.cookieStorage.get(this.isAuthenticatedCookieName)) {
            if (!this.cookieStorage.get("auth0.is.authenticated")) return;
            this.cookieStorage.save(this.isAuthenticatedCookieName, !0, {
                daysUntilExpire: this.sessionCheckExpiryDays,
                cookieDomain: this.options.cookieDomain
            }), this.cookieStorage.remove("auth0.is.authenticated");
        }
        try {
            await this.getTokenSilently(e);
        } catch (e) {}
    }
    async getTokenSilently(e = {}) {
        var t;
        const i = Object.assign(Object.assign({
            cacheMode: "on"
        }, e), {
            authorizationParams: Object.assign(Object.assign(Object.assign({}, this.options.authorizationParams), e.authorizationParams), {
                scope: j(this.scope, null === (t = e.authorizationParams) || void 0 === t ? void 0 : t.scope)
            })
        }), o = await ((e, t)=>{
            let i = Y[t];
            return i || (i = e().finally(()=>{
                delete Y[t], i = null;
            }), Y[t] = i), i;
        })(()=>this._getTokenSilently(i), `${this.options.clientId}::${i.authorizationParams.audience}::${i.authorizationParams.scope}`);
        return e.detailedResponse ? o : null == o ? void 0 : o.access_token;
    }
    async _getTokenSilently(t) {
        const { cacheMode: i } = t, o = e(t, [
            "cacheMode"
        ]);
        if ("off" !== i) {
            const e = await this._getEntryFromCache({
                scope: o.authorizationParams.scope,
                audience: o.authorizationParams.audience || "default",
                clientId: this.options.clientId
            });
            if (e) return e;
        }
        if ("cache-only" !== i) {
            if (!await (async (e, t = 3)=>{
                for(let i = 0; i < t; i++)if (await e()) return !0;
                return !1;
            })(()=>ee.acquireLock("auth0.lock.getTokenSilently", 5e3), 10)) throw new l;
            try {
                if (window.addEventListener("pagehide", this._releaseLockOnPageHide), "off" !== i) {
                    const e = await this._getEntryFromCache({
                        scope: o.authorizationParams.scope,
                        audience: o.authorizationParams.audience || "default",
                        clientId: this.options.clientId
                    });
                    if (e) return e;
                }
                const e = this.options.useRefreshTokens ? await this._getTokenUsingRefreshToken(o) : await this._getTokenFromIFrame(o), { id_token: t, access_token: n, oauthTokenScope: a, expires_in: s } = e;
                return Object.assign(Object.assign({
                    id_token: t,
                    access_token: n
                }, a ? {
                    scope: a
                } : null), {
                    expires_in: s
                });
            } finally{
                await ee.releaseLock("auth0.lock.getTokenSilently"), window.removeEventListener("pagehide", this._releaseLockOnPageHide);
            }
        }
    }
    async getTokenWithPopup(e = {}, t = {}) {
        var i;
        const o = Object.assign(Object.assign({}, e), {
            authorizationParams: Object.assign(Object.assign(Object.assign({}, this.options.authorizationParams), e.authorizationParams), {
                scope: j(this.scope, null === (i = e.authorizationParams) || void 0 === i ? void 0 : i.scope)
            })
        });
        t = Object.assign(Object.assign({}, s), t), await this.loginWithPopup(o, t);
        return (await this.cacheManager.get(new C({
            scope: o.authorizationParams.scope,
            audience: o.authorizationParams.audience || "default",
            clientId: this.options.clientId
        }))).access_token;
    }
    async isAuthenticated() {
        return !!await this.getUser();
    }
    _buildLogoutUrl(t) {
        null !== t.clientId ? t.clientId = t.clientId || this.options.clientId : delete t.clientId;
        const i = t.logoutParams || {}, { federated: o } = i, n = e(i, [
            "federated"
        ]), a = o ? "&federated" : "";
        return this._url(`/v2/logout?${b(Object.assign({
            clientId: t.clientId
        }, n))}`) + a;
    }
    async logout(t = {}) {
        const i = Q(t), { openUrl: o } = i, n = e(i, [
            "openUrl"
        ]);
        null === t.clientId ? await this.cacheManager.clear() : await this.cacheManager.clear(t.clientId || this.options.clientId), this.cookieStorage.remove(this.orgHintCookieName, {
            cookieDomain: this.options.cookieDomain
        }), this.cookieStorage.remove(this.isAuthenticatedCookieName, {
            cookieDomain: this.options.cookieDomain
        }), this.userCache.remove("@@user@@");
        const a = this._buildLogoutUrl(n);
        o ? await o(a) : !1 !== o && window.location.assign(a);
    }
    async _getTokenFromIFrame(e) {
        const t = Object.assign(Object.assign({}, e.authorizationParams), {
            prompt: "none"
        }), i = this.cookieStorage.get(this.orgHintCookieName);
        i && !t.organization && (t.organization = i);
        const { url: o, state: n, nonce: a, code_verifier: s, redirect_uri: r, scope: c, audience: u } = await this._prepareAuthorizeUrl(t, {
            response_mode: "web_message"
        }, window.location.origin);
        try {
            if (window.crossOriginIsolated) throw new d("login_required", "The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.");
            const t = e.timeoutInSeconds || this.options.authorizeTimeoutInSeconds, i = await ((e, t, i = 60)=>new Promise((o, n)=>{
                    const a = window.document.createElement("iframe");
                    a.setAttribute("width", "0"), a.setAttribute("height", "0"), a.style.display = "none";
                    const s = ()=>{
                        window.document.body.contains(a) && (window.document.body.removeChild(a), window.removeEventListener("message", r, !1));
                    };
                    let r;
                    const c = setTimeout(()=>{
                        n(new l), s();
                    }, 1e3 * i);
                    r = function(e) {
                        if (e.origin != t) return;
                        if (!e.data || "authorization_response" !== e.data.type) return;
                        const i = e.source;
                        i && i.close(), e.data.response.error ? n(d.fromPayload(e.data.response)) : o(e.data.response), clearTimeout(c), window.removeEventListener("message", r, !1), setTimeout(s, 2e3);
                    }, window.addEventListener("message", r, !1), window.document.body.appendChild(a), a.setAttribute("src", e);
                }))(o, this.domainUrl, t);
            if (n !== i.state) throw new d("state_mismatch", "Invalid state");
            const h = await this._requestToken(Object.assign(Object.assign({}, e.authorizationParams), {
                code_verifier: s,
                code: i.code,
                grant_type: "authorization_code",
                redirect_uri: r,
                timeout: e.authorizationParams.timeout || this.httpTimeoutMs
            }), {
                nonceIn: a
            });
            return Object.assign(Object.assign({}, h), {
                scope: c,
                oauthTokenScope: h.scope,
                audience: u
            });
        } catch (e) {
            throw "login_required" === e.error && this.logout({
                openUrl: !1
            }), e;
        }
    }
    async _getTokenUsingRefreshToken(e) {
        const t = await this.cacheManager.get(new C({
            scope: e.authorizationParams.scope,
            audience: e.authorizationParams.audience || "default",
            clientId: this.options.clientId
        }));
        if (!(t && t.refresh_token || this.worker)) {
            if (this.options.useRefreshTokensFallback) return await this._getTokenFromIFrame(e);
            throw new f(e.authorizationParams.audience || "default", e.authorizationParams.scope);
        }
        const i = e.authorizationParams.redirect_uri || this.options.authorizationParams.redirect_uri || window.location.origin, o = "number" == typeof e.timeoutInSeconds ? 1e3 * e.timeoutInSeconds : null;
        try {
            const n = await this._requestToken(Object.assign(Object.assign(Object.assign({}, e.authorizationParams), {
                grant_type: "refresh_token",
                refresh_token: t && t.refresh_token,
                redirect_uri: i
            }), o && {
                timeout: o
            }));
            return Object.assign(Object.assign({}, n), {
                scope: e.authorizationParams.scope,
                oauthTokenScope: n.scope,
                audience: e.authorizationParams.audience || "default"
            });
        } catch (t) {
            if ((t.message.indexOf("Missing Refresh Token") > -1 || t.message && t.message.indexOf("invalid refresh token") > -1) && this.options.useRefreshTokensFallback) return await this._getTokenFromIFrame(e);
            throw t;
        }
    }
    async _saveEntryInCache(t) {
        const { id_token: i, decodedToken: o } = t, n = e(t, [
            "id_token",
            "decodedToken"
        ]);
        this.userCache.set("@@user@@", {
            id_token: i,
            decodedToken: o
        }), await this.cacheManager.setIdToken(this.options.clientId, t.id_token, t.decodedToken), await this.cacheManager.set(n);
    }
    async _getIdTokenFromCache() {
        const e = this.options.authorizationParams.audience || "default", t = await this.cacheManager.getIdToken(new C({
            clientId: this.options.clientId,
            audience: e,
            scope: this.scope
        })), i = this.userCache.get("@@user@@");
        return t && t.id_token === (null == i ? void 0 : i.id_token) ? i : (this.userCache.set("@@user@@", t), t);
    }
    async _getEntryFromCache({ scope: e, audience: t, clientId: i }) {
        const o = await this.cacheManager.get(new C({
            scope: e,
            audience: t,
            clientId: i
        }), 60);
        if (o && o.access_token) {
            const { access_token: e, oauthTokenScope: t, expires_in: i } = o, n = await this._getIdTokenFromCache();
            return n && Object.assign(Object.assign({
                id_token: n.id_token,
                access_token: e
            }, t ? {
                scope: t
            } : null), {
                expires_in: i
            });
        }
    }
    async _requestToken(e, t) {
        const { nonceIn: i, organizationId: o } = t || {}, n = await O(Object.assign({
            baseUrl: this.domainUrl,
            client_id: this.options.clientId,
            auth0Client: this.options.auth0Client,
            useFormData: this.options.useFormData,
            timeout: this.httpTimeoutMs
        }, e), this.worker), a = await this._verifyIdToken(n.id_token, i, o);
        return await this._saveEntryInCache(Object.assign(Object.assign(Object.assign(Object.assign({}, n), {
            decodedToken: a,
            scope: e.scope,
            audience: e.audience || "default"
        }), n.scope ? {
            oauthTokenScope: n.scope
        } : null), {
            client_id: this.options.clientId
        })), this.cookieStorage.save(this.isAuthenticatedCookieName, !0, {
            daysUntilExpire: this.sessionCheckExpiryDays,
            cookieDomain: this.options.cookieDomain
        }), this._processOrgIdHint(a.claims.org_id), Object.assign(Object.assign({}, n), {
            decodedToken: a
        });
    }
}
class ie {
}
async function oe(e) {
    const t = new te(e);
    return await t.checkSession(), t;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults);
parcelHelpers.export(exports, "getSearchResultsPage", ()=>getSearchResultsPage);
parcelHelpers.export(exports, "updateServings", ()=>updateServings);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "deleteBookmark", ()=>deleteBookmark);
parcelHelpers.export(exports, "uploadRecipe", ()=>uploadRecipe);
parcelHelpers.export(exports, "deleteRecipe", ()=>deleteRecipe);
var _configJs = require("./config.js");
var _helpersJs = require("./helpers.js");
const state = {
    recipe: {},
    search: {
        query: "",
        results: [],
        page: 1,
        resultsPerPage: (0, _configJs.RES_PER_PAGE)
    },
    bookmarks: [],
    user: {}
};
const createRecipeObject = function(data) {
    const { recipe } = data.data;
    return {
        id: recipe._id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image,
        servings: recipe.servings,
        cookingTime: recipe.cookingTime,
        ingredients: recipe.ingredients,
        cookingDirections: recipe.cookingDirections,
        ...recipe.userID && {
            userID: recipe.userID
        }
    };
};
const loadRecipe = async function(id) {
    try {
        const data = await (0, _helpersJs.AJAX)({
            url: `${(0, _configJs.RECIPES_URL)}/${id}`,
            method: "GET"
        });
        state.recipe = createRecipeObject(data);
        if (state.bookmarks.some((bookmark)=>bookmark.id === id)) state.recipe.bookmarked = true;
        else state.recipe.bookmarked = false;
    } catch (err) {
        console.error(`${err} 💥💥💥💥`);
        throw err;
    }
};
const loadSearchResults = async function(query) {
    try {
        state.search.query = query;
        const data = await (0, _helpersJs.AJAX)({
            url: `${(0, _configJs.RECIPES_URL)}?search=${query}`,
            method: "GET"
        });
        state.search.results = data.data.recipes.map((rec)=>{
            return {
                id: rec._id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
                ...rec.userID && {
                    userID: rec.userID
                }
            };
        });
        state.search.page = 1;
    } catch (err) {
        console.error(`${err} 💥💥💥💥`);
        throw err;
    }
};
const getSearchResultsPage = function(page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;
    return state.search.results.slice(start, end);
};
const updateServings = function(newServings) {
    state.recipe.ingredients.forEach((ing)=>{
        ing.quantity = ing.quantity * newServings / state.recipe.servings;
    });
    state.recipe.servings = newServings;
};
const persistBookmarks = function() {
    localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};
const addBookmark = function(recipe) {
    state.bookmarks.push(recipe);
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
    persistBookmarks();
};
const deleteBookmark = function(id) {
    const index = state.bookmarks.findIndex((el)=>el.id === id);
    state.bookmarks.splice(index, 1);
    if (id === state.recipe.id) state.recipe.bookmarked = false;
    persistBookmarks();
};
const init = function() {
    const storage = localStorage.getItem("bookmarks");
    if (storage) state.bookmarks = JSON.parse(storage);
};
init();
const uploadRecipe = async function(auth0Client, newRecipe) {
    const ingredients = Object.entries(newRecipe).filter((entry)=>entry[0].startsWith("ingredient") && entry[1] !== "").map((ing)=>{
        const ingArr = ing[1].split(",").map((el)=>el.trim());
        if (ingArr.length !== 3) throw new Error("Wrong ingredient fromat! Please use the correct format :)");
        const [quantity, unit, description] = ingArr;
        return {
            quantity: quantity ? +quantity : null,
            unit,
            description
        };
    });
    const cookingDirections = newRecipe.cookingDirections;
    const recipe = {
        title: newRecipe.title,
        image_url: newRecipe.image,
        publisher: newRecipe.publisher,
        cookingTime: +newRecipe.cookingTime,
        servings: +newRecipe.servings,
        ingredients,
        cookingDirections
    };
    const data = await (0, _helpersJs.AJAX)({
        auth0Client,
        url: `${(0, _configJs.RECIPES_URL)}`,
        method: "POST",
        uploadData: recipe
    });
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
};
const deleteRecipe = async function(auth0Client, id) {
    await (0, _helpersJs.AJAX)({
        auth0Client,
        url: `${(0, _configJs.RECIPES_URL)}/${id}`,
        method: "DELETE"
    });
};

},{"./config.js":"k5Hzs","./helpers.js":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RECIPES_URL", ()=>RECIPES_URL);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE);
parcelHelpers.export(exports, "KEY", ()=>KEY);
const PROD_BASE_URL = "https://forkify-fvelk.ondigitalocean.app/api/v1";
const DEV_BASE_URL = "http://localhost:8080/api/v1";
const BASE_URL = PROD_BASE_URL;
const RECIPES_URL = `${BASE_URL}/recipes`;
const TIMEOUT_SEC = 10;
const RES_PER_PAGE = 10;
const KEY = "83badf7c-20a7-4f77-97a5-d38647c7e44b";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAX", ()=>AJAX);
var _configJs = require("./config.js");
const timeout = function(s) {
    return new Promise(function(_resolve, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const AJAX = async function({ auth0Client, url, method, uploadData }) {
    const headers = {};
    let body;
    if (auth0Client) {
        const token = await auth0Client.getTokenSilently();
        headers.Authorization = `Bearer ${token}`;
    }
    if (uploadData) {
        headers["Content-Type"] = "application/json";
        body = JSON.stringify(uploadData);
    }
    const fetchPro = fetch(url, {
        method,
        headers,
        body
    });
    const res = await Promise.race([
        fetchPro,
        timeout((0, _configJs.TIMEOUT_SEC))
    ]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
};

},{"./config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l60JC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _modelJs = require("../model.js");
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _fractional = require("fractional");
class RecipeView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".recipe");
    _errorMessage = "We could not find that recipe. Please try another one!";
    _message = "";
    addHandlerRender(handler) {
        [
            "hashchange",
            "load"
        ].forEach((ev)=>window.addEventListener(ev, handler));
    }
    addHandlerUpdateServings(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--update-servings");
            if (!btn) return;
            const { updateTo } = btn.dataset;
            if (+updateTo > 0) handler(+updateTo);
        });
    }
    addHandlerAddBookmark(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--bookmark");
            if (!btn) return;
            handler();
        });
    }
    addHandlerDeleteRecipe(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--delete");
            if (!btn) return;
            handler();
        });
    }
    _generateMarkup() {
        const userID = _modelJs.state.user.sub;
        const recipe = this._data;
        return `
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings - 1}">
              <svg>
                <use href="${0, _iconsSvgDefault.default}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings + 1}">
              <svg>
                <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${0, _iconsSvgDefault.default}#icon-bookmark${this._data.bookmarked ? "-fill" : ""}"></use>
          </svg>
        </button>

        <button class="btn btn--delete ${userID && userID === recipe.userID ? "" : "hidden"}">
          Delete
        </button>

        <button class="btn btn--edit ${userID && userID === recipe.userID ? "" : "hidden"}">
        Edit
      </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
        ${this._data.cookingDirections}
        </p>
      </div>
    `;
    }
    _generateMarkupIngredient(ing) {
        return `
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${ing.quantity ? new (0, _fractional.Fraction)(ing.quantity).toString() : ""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${ing.unit}</span>
        ${ing.description}
      </div>
    </li>
  `;
    }
}
exports.default = new RecipeView();

},{"./View.js":"5cUXS","../model.js":"Y4A21","url:../../img/icons.svg":"loVOp","fractional":"3SU56","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cUXS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _data;
    render(data, render = true) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();
        if (!render) return markup;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll("*"));
        const curElements = Array.from(this._parentElement.querySelectorAll("*"));
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== "") curEl.textContent = newEl.textContent;
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((attr)=>curEl.setAttribute(attr.name, attr.value));
        });
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
    renderSpinner() {
        const markup = `
      <div class="spinner">
        <svg>
          <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
        </svg>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderError(message = this._errorMessage) {
        const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderMessage(message = this._message) {
        const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = View;

},{"url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"loVOp":[function(require,module,exports) {
module.exports = require("9bcc84ee5d265e38").getBundleURL("hWUTQ") + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"9bcc84ee5d265e38":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"3SU56":[function(require,module,exports) {
/*
fraction.js
A Javascript fraction library.

Copyright (c) 2009  Erik Garrison <erik@hypervolu.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/ /* Fractions */ /* 
 *
 * Fraction objects are comprised of a numerator and a denomenator.  These
 * values can be accessed at fraction.numerator and fraction.denomenator.
 *
 * Fractions are always returned and stored in lowest-form normalized format.
 * This is accomplished via Fraction.normalize.
 *
 * The following mathematical operations on fractions are supported:
 *
 * Fraction.equals
 * Fraction.add
 * Fraction.subtract
 * Fraction.multiply
 * Fraction.divide
 *
 * These operations accept both numbers and fraction objects.  (Best results
 * are guaranteed when the input is a fraction object.)  They all return a new
 * Fraction object.
 *
 * Usage:
 *
 * TODO
 *
 */ /*
 * The Fraction constructor takes one of:
 *   an explicit numerator (integer) and denominator (integer),
 *   a string representation of the fraction (string),
 *   or a floating-point number (float)
 *
 * These initialization methods are provided for convenience.  Because of
 * rounding issues the best results will be given when the fraction is
 * constructed from an explicit integer numerator and denomenator, and not a
 * decimal number.
 *
 *
 * e.g. new Fraction(1, 2) --> 1/2
 *      new Fraction('1/2') --> 1/2
 *      new Fraction('2 3/4') --> 11/4  (prints as 2 3/4)
 *
 */ Fraction = function(numerator, denominator) {
    /* double argument invocation */ if (typeof numerator !== "undefined" && denominator) {
        if (typeof numerator === "number" && typeof denominator === "number") {
            this.numerator = numerator;
            this.denominator = denominator;
        } else if (typeof numerator === "string" && typeof denominator === "string") {
            // what are they?
            // hmm....
            // assume they are ints?
            this.numerator = parseInt(numerator);
            this.denominator = parseInt(denominator);
        }
    /* single-argument invocation */ } else if (typeof denominator === "undefined") {
        num = numerator; // swap variable names for legibility
        if (typeof num === "number") {
            this.numerator = num;
            this.denominator = 1;
        } else if (typeof num === "string") {
            var a, b; // hold the first and second part of the fraction, e.g. a = '1' and b = '2/3' in 1 2/3
            // or a = '2/3' and b = undefined if we are just passed a single-part number
            var arr = num.split(" ");
            if (arr[0]) a = arr[0];
            if (arr[1]) b = arr[1];
            /* compound fraction e.g. 'A B/C' */ //  if a is an integer ...
            if (a % 1 === 0 && b && b.match("/")) return new Fraction(a).add(new Fraction(b));
            else if (a && !b) {
                /* simple fraction e.g. 'A/B' */ if (typeof a === "string" && a.match("/")) {
                    // it's not a whole number... it's actually a fraction without a whole part written
                    var f = a.split("/");
                    this.numerator = f[0];
                    this.denominator = f[1];
                /* string floating point */ } else if (typeof a === "string" && a.match(".")) return new Fraction(parseFloat(a));
                else {
                    this.numerator = parseInt(a);
                    this.denominator = 1;
                }
            } else return undefined; // could not parse
        }
    }
    this.normalize();
};
Fraction.prototype.clone = function() {
    return new Fraction(this.numerator, this.denominator);
};
/* pretty-printer, converts fractions into whole numbers and fractions */ Fraction.prototype.toString = function() {
    if (this.denominator === "NaN") return "NaN";
    var wholepart = this.numerator / this.denominator > 0 ? Math.floor(this.numerator / this.denominator) : Math.ceil(this.numerator / this.denominator);
    var numerator = this.numerator % this.denominator;
    var denominator = this.denominator;
    var result = [];
    if (wholepart != 0) result.push(wholepart);
    if (numerator != 0) result.push((wholepart === 0 ? numerator : Math.abs(numerator)) + "/" + denominator);
    return result.length > 0 ? result.join(" ") : 0;
};
/* destructively rescale the fraction by some integral factor */ Fraction.prototype.rescale = function(factor) {
    this.numerator *= factor;
    this.denominator *= factor;
    return this;
};
Fraction.prototype.add = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone();
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator += b.numerator;
    return a.normalize();
};
Fraction.prototype.subtract = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone(); // we scale our argument destructively, so clone
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator -= b.numerator;
    return a.normalize();
};
Fraction.prototype.multiply = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.numerator;
        a.denominator *= b.denominator;
    } else if (typeof b === "number") a.numerator *= b;
    else return a.multiply(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.divide = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.denominator;
        a.denominator *= b.numerator;
    } else if (typeof b === "number") a.denominator *= b;
    else return a.divide(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.equals = function(b) {
    if (!(b instanceof Fraction)) b = new Fraction(b);
    // fractions that are equal should have equal normalized forms
    var a = this.clone().normalize();
    var b = b.clone().normalize();
    return a.numerator === b.numerator && a.denominator === b.denominator;
};
/* Utility functions */ /* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */ Fraction.prototype.normalize = function() {
    var isFloat = function(n) {
        return typeof n === "number" && (n > 0 && n % 1 > 0 && n % 1 < 1 || n < 0 && n % -1 < 0 && n % -1 > -1);
    };
    var roundToPlaces = function(n, places) {
        if (!places) return Math.round(n);
        else {
            var scalar = Math.pow(10, places);
            return Math.round(n * scalar) / scalar;
        }
    };
    return function() {
        // XXX hackish.  Is there a better way to address this issue?
        //
        /* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */ if (isFloat(this.denominator)) {
            var rounded = roundToPlaces(this.denominator, 9);
            var scaleup = Math.pow(10, rounded.toString().split(".")[1].length);
            this.denominator = Math.round(this.denominator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.numerator *= scaleup;
        }
        if (isFloat(this.numerator)) {
            var rounded = roundToPlaces(this.numerator, 9);
            var scaleup = Math.pow(10, rounded.toString().split(".")[1].length);
            this.numerator = Math.round(this.numerator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.denominator *= scaleup;
        }
        var gcf = Fraction.gcf(this.numerator, this.denominator);
        this.numerator /= gcf;
        this.denominator /= gcf;
        if (this.numerator < 0 && this.denominator < 0 || this.numerator > 0 && this.denominator < 0) {
            this.numerator *= -1;
            this.denominator *= -1;
        }
        return this;
    };
}();
/* Takes two numbers and returns their greatest common factor.
 */ Fraction.gcf = function(a, b) {
    var common_factors = [];
    var fa = Fraction.primeFactors(a);
    var fb = Fraction.primeFactors(b);
    // for each factor in fa
    // if it's also in fb
    // put it into the common factors
    fa.forEach(function(factor) {
        var i = fb.indexOf(factor);
        if (i >= 0) {
            common_factors.push(factor);
            fb.splice(i, 1); // remove from fb
        }
    });
    if (common_factors.length === 0) return 1;
    var gcf = function() {
        var r = common_factors[0];
        var i;
        for(i = 1; i < common_factors.length; i++)r = r * common_factors[i];
        return r;
    }();
    return gcf;
};
// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors = function(n) {
    var num1 = Math.abs(n);
    var factors = [];
    var _factor = 2; // first potential prime factor
    while(_factor * _factor <= num1)if (num1 % _factor === 0) {
        factors.push(_factor); // so keep it
        num1 = num1 / _factor; // and divide our search point by it
    } else _factor++; // and increment
    if (num1 != 1) factors.push(num1); //    so it too should be recorded
    return factors; // Return the prime factors
};
module.exports.Fraction = Fraction;

},{}],"9OQAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    _parentEl = document.querySelector(".search");
    getQuery() {
        const query = this._parentEl.querySelector(".search__field").value;
        this._clearInput();
        return query;
    }
    _clearInput() {
        this._parentEl.querySelector(".search__field").value = "";
    }
    addHandlerSearch(handler) {
        this._parentEl.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSbZE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _previewViewJs = require("./previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
class ResultsView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".results");
    _errorMessage = "No recipes found for your query! Please try again ;)";
    _message = "";
    _generateMarkup() {
        return this._data.map((result)=>(0, _previewViewJsDefault.default).render(result, false)).join("");
    }
}
exports.default = new ResultsView();

},{"./View.js":"5cUXS","./previewView.js":"1FDQ6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1FDQ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PreviewView extends (0, _viewJsDefault.default) {
    _parentElement = "";
    _generateMarkup() {
        const id = window.location.hash.slice(1);
        return `
      <li class="preview">
        <a class="preview__link ${this._data.id === id ? "preview__link--active" : ""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key ? "" : "hidden"}">
              <svg>
              <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
    }
}
exports.default = new PreviewView();

},{"./View.js":"5cUXS","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z7bi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PaginationView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".pagination");
    addHandlerClick(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        if (curPage === 1 && numPages > 1) return `
        <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
        if (curPage === numPages && numPages > 1) return `
        <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
      `;
        if (curPage < numPages) return `
        <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
        <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
        return "";
    }
}
exports.default = new PaginationView();

},{"./View.js":"5cUXS","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Lqzq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _previewViewJs = require("./previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
class BookmarksView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".bookmarks__list");
    _errorMessage = "No bookmarks yet. Find a nice recipe and bookmark it ;)";
    _message = "";
    addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }
    _generateMarkup() {
        return this._data.map((bookmark)=>(0, _previewViewJsDefault.default).render(bookmark, false)).join("");
    }
}
exports.default = new BookmarksView();

},{"./View.js":"5cUXS","./previewView.js":"1FDQ6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6DNj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class AddRecipeView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".upload");
    _message = "Recipe was successfully uploaded :)";
    _window = document.querySelector(".add-recipe-window");
    _overlay = document.querySelector(".overlay");
    _btnOpen = document.querySelector(".nav__btn--add-recipe");
    _btnClose = document.querySelector(".btn--close-modal");
    constructor(){
        super();
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();
    }
    toggleWindow() {
        this._overlay.classList.toggle("hidden");
        this._window.classList.toggle("hidden");
    }
    _addHandlerShowWindow() {
        this._btnOpen.addEventListener("click", this.toggleWindow.bind(this));
    }
    _addHandlerHideWindow() {
        this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
        this._overlay.addEventListener("click", this.toggleWindow.bind(this));
    }
    addHandlerUpload(handler) {
        this._parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            const dataArr = [
                ...new FormData(this)
            ];
            const data = Object.fromEntries(dataArr);
            handler(data);
        });
    }
    _generateMarkup() {}
}
exports.default = new AddRecipeView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"il2FP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class AuthView {
    _btnLogin = document.querySelector(".nav__btn--login");
    _btnLogout = document.querySelector(".nav__btn--logout");
    addHandlerLogin(handler) {
        this._btnLogin.addEventListener("click", function(e) {
            e.preventDefault();
            handler();
        });
    }
    addHandlerLogout(handler) {
        this._btnLogout.addEventListener("click", function(e) {
            e.preventDefault();
            handler();
        });
    }
    renderLogin() {
        this._btnLogout.classList.add("hidden");
        this._btnLogin.classList.remove("hidden");
    }
    renderLogout() {
        this._btnLogin.classList.add("hidden");
        this._btnLogout.classList.remove("hidden");
    }
    addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }
}
exports.default = new AuthView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dXNgZ":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function() {
        return this;
    };
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function() {
        return this;
    };
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;
            if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function() {
        return this;
    };
    Gp.toString = function() {
        return "[object Generator]";
    };
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(object) {
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, module.exports));
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
}

},{}]},["aD7Zm","aenu9"], "aenu9", "parcelRequire3a11")

//# sourceMappingURL=index.e37f48ea.js.map
