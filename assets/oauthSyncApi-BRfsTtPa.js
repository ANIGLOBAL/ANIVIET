import{c as s,r as n,ao as e}from"./index-DAVxq_ev.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=s("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=s("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]),c={anilist:"AniList",mal:"MyAnimeList",kitsu:"Kitsu"};function o(t){return c[t]||t}async function l(t){return(await n(e,`/api/oauth/${t}/auth-url`)).url}async function y(){return(await n(e,"/api/accounts")).accounts||[]}async function p(t){return n(e,`/api/accounts/${t}`,{method:"DELETE"})}async function h(t){return t?(await n(e,`/api/sync/status?contentId=${t}`)).tracking||[]:[]}async function d(t){return n(e,"/api/sync/push",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contentId:t.contentId??null,provider:t.provider,progress:t.progress,status:t.status,score:t.score??null,title:t.title??null,type:t.type??null,externalId:t.externalId??null})})}export{i as C,u as E,h as a,l as b,o as c,p as d,y as g,d as p};
