import{c as r,r as n,ar as e}from"./index-GjfeL4Lt.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=r("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),c={anilist:"AniList",mal:"MyAnimeList",kitsu:"Kitsu"};function a(t){return c[t]||t}async function o(t){return(await n(e,`/api/oauth/${t}/auth-url`)).url}async function l(){return(await n(e,"/api/accounts")).accounts||[]}async function y(t){return n(e,`/api/accounts/${t}`,{method:"DELETE"})}async function p(t){return t?(await n(e,`/api/sync/status?contentId=${t}`)).tracking||[]:[]}async function d(t){return n(e,"/api/sync/push",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contentId:t.contentId??null,provider:t.provider,progress:t.progress,status:t.status,score:t.score??null,title:t.title??null,type:t.type??null,externalId:t.externalId??null})})}export{u as C,p as a,o as b,a as c,y as d,l as g,d as p};
