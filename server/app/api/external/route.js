"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/external/route";
exports.ids = ["app/api/external/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fexternal%2Froute&page=%2Fapi%2Fexternal%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fexternal%2Froute.ts&appDir=C%3A%5CUsers%5Csrt%5CDesktop%5Cexternalapi%5Cexternalfetch%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csrt%5CDesktop%5Cexternalapi%5Cexternalfetch&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fexternal%2Froute&page=%2Fapi%2Fexternal%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fexternal%2Froute.ts&appDir=C%3A%5CUsers%5Csrt%5CDesktop%5Cexternalapi%5Cexternalfetch%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csrt%5CDesktop%5Cexternalapi%5Cexternalfetch&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_srt_Desktop_externalapi_externalfetch_src_app_api_external_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/external/route.ts */ \"(rsc)/./src/app/api/external/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/external/route\",\n        pathname: \"/api/external\",\n        filename: \"route\",\n        bundlePath: \"app/api/external/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\srt\\\\Desktop\\\\externalapi\\\\externalfetch\\\\src\\\\app\\\\api\\\\external\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_srt_Desktop_externalapi_externalfetch_src_app_api_external_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/external/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZleHRlcm5hbCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZXh0ZXJuYWwlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZleHRlcm5hbCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNzcnQlNUNEZXNrdG9wJTVDZXh0ZXJuYWxhcGklNUNleHRlcm5hbGZldGNoJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNzcnQlNUNEZXNrdG9wJTVDZXh0ZXJuYWxhcGklNUNleHRlcm5hbGZldGNoJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNzQztBQUNuSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4dGVybmFsZmV0Y2gvP2FjMGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcc3J0XFxcXERlc2t0b3BcXFxcZXh0ZXJuYWxhcGlcXFxcZXh0ZXJuYWxmZXRjaFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxleHRlcm5hbFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZXh0ZXJuYWwvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9leHRlcm5hbFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZXh0ZXJuYWwvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxzcnRcXFxcRGVza3RvcFxcXFxleHRlcm5hbGFwaVxcXFxleHRlcm5hbGZldGNoXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGV4dGVybmFsXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9leHRlcm5hbC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fexternal%2Froute&page=%2Fapi%2Fexternal%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fexternal%2Froute.ts&appDir=C%3A%5CUsers%5Csrt%5CDesktop%5Cexternalapi%5Cexternalfetch%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csrt%5CDesktop%5Cexternalapi%5Cexternalfetch&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/external/route.ts":
/*!***************************************!*\
  !*** ./src/app/api/external/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n// app/api/external/route.ts\n\nasync function GET() {\n    try {\n        // Fetching posts from the JSONPlaceholder API\n        const response = await fetch(\"https://jsonplaceholder.typicode.com/posts\");\n        const posts = await response.json();\n        // Fetching images from the JSONPlaceholder photos API\n        const imageResponse = await fetch(\"https://jsonplaceholder.typicode.com/photos?_limit=10\"); // Limit to 10 images for better performance\n        const images = await imageResponse.json();\n        // Assigning a random image to each post\n        const postsWithImages = posts.map((post)=>{\n            // Random image logic: Assign a random image from the fetched list of images\n            const randomImage = images[Math.floor(Math.random() * images.length)];\n            return {\n                ...post,\n                imageUrl: randomImage.url\n            };\n        });\n        // Returning posts with image URLs\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(postsWithImages);\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch posts and images\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9leHRlcm5hbC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRCQUE0QjtBQUNlO0FBRXBDLGVBQWVDO0lBQ3BCLElBQUk7UUFDRiw4Q0FBOEM7UUFDOUMsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1FBQzdCLE1BQU1DLFFBQVEsTUFBTUYsU0FBU0csSUFBSTtRQUVqQyxzREFBc0Q7UUFDdEQsTUFBTUMsZ0JBQWdCLE1BQU1ILE1BQU0sMERBQTBELDRDQUE0QztRQUN4SSxNQUFNSSxTQUFTLE1BQU1ELGNBQWNELElBQUk7UUFFdkMsd0NBQXdDO1FBQ3hDLE1BQU1HLGtCQUFrQkosTUFBTUssR0FBRyxDQUFDLENBQUNDO1lBQ2pDLDRFQUE0RTtZQUM1RSxNQUFNQyxjQUFjSixNQUFNLENBQUNLLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLUCxPQUFPUSxNQUFNLEVBQUU7WUFDckUsT0FBTztnQkFDTCxHQUFHTCxJQUFJO2dCQUNQTSxVQUFVTCxZQUFZTSxHQUFHO1lBQzNCO1FBQ0Y7UUFFQSxrQ0FBa0M7UUFDbEMsT0FBT2pCLHFEQUFZQSxDQUFDSyxJQUFJLENBQUNHO0lBQzNCLEVBQUUsT0FBT1UsT0FBTztRQUNkLE9BQU9sQixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO1lBQUVhLE9BQU87UUFBbUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDeEY7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4dGVybmFsZmV0Y2gvLi9zcmMvYXBwL2FwaS9leHRlcm5hbC9yb3V0ZS50cz9kNDI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9hcGkvZXh0ZXJuYWwvcm91dGUudHNcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICB0cnkge1xyXG4gICAgLy8gRmV0Y2hpbmcgcG9zdHMgZnJvbSB0aGUgSlNPTlBsYWNlaG9sZGVyIEFQSVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJyk7XHJcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAvLyBGZXRjaGluZyBpbWFnZXMgZnJvbSB0aGUgSlNPTlBsYWNlaG9sZGVyIHBob3RvcyBBUElcclxuICAgIGNvbnN0IGltYWdlUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bob3Rvcz9fbGltaXQ9MTAnKTsgLy8gTGltaXQgdG8gMTAgaW1hZ2VzIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcclxuICAgIGNvbnN0IGltYWdlcyA9IGF3YWl0IGltYWdlUmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIC8vIEFzc2lnbmluZyBhIHJhbmRvbSBpbWFnZSB0byBlYWNoIHBvc3RcclxuICAgIGNvbnN0IHBvc3RzV2l0aEltYWdlcyA9IHBvc3RzLm1hcCgocG9zdDogYW55KSA9PiB7XHJcbiAgICAgIC8vIFJhbmRvbSBpbWFnZSBsb2dpYzogQXNzaWduIGEgcmFuZG9tIGltYWdlIGZyb20gdGhlIGZldGNoZWQgbGlzdCBvZiBpbWFnZXNcclxuICAgICAgY29uc3QgcmFuZG9tSW1hZ2UgPSBpbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaW1hZ2VzLmxlbmd0aCldO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnBvc3QsXHJcbiAgICAgICAgaW1hZ2VVcmw6IHJhbmRvbUltYWdlLnVybCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJldHVybmluZyBwb3N0cyB3aXRoIGltYWdlIFVSTHNcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihwb3N0c1dpdGhJbWFnZXMpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBwb3N0cyBhbmQgaW1hZ2VzJyB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiR0VUIiwicmVzcG9uc2UiLCJmZXRjaCIsInBvc3RzIiwianNvbiIsImltYWdlUmVzcG9uc2UiLCJpbWFnZXMiLCJwb3N0c1dpdGhJbWFnZXMiLCJtYXAiLCJwb3N0IiwicmFuZG9tSW1hZ2UiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJpbWFnZVVybCIsInVybCIsImVycm9yIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/external/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fexternal%2Froute&page=%2Fapi%2Fexternal%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fexternal%2Froute.ts&appDir=C%3A%5CUsers%5Csrt%5CDesktop%5Cexternalapi%5Cexternalfetch%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csrt%5CDesktop%5Cexternalapi%5Cexternalfetch&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();