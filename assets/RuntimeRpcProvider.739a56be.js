import{r as n,j as s,R as i,b as a}from"./index.71483fd3.js";class c{get store(){return globalThis.__VITE_PLUGIN_BOOK__}async getConfig(){return Promise.resolve(this.store.config)}async getFile(r){let e=r;r.length===0&&(e="index"),this.store.mapping[e]||(e+="/index");const o=this.store.mapping[e];if(!o)throw new Error;return(await o()).default.replaceAll("$META_ENV$","meta.env")}getFiles(){throw new Error}writeFile(){throw new Error}writeConfig(){throw new Error}createFile(){throw new Error}deleteFile(){throw new Error}sort(){throw new Error}}const u=({children:t})=>{const r=n.exports.useRef(new c),[e]=n.exports.useState("connected");return s(i.Provider,{value:e,children:s(a.Provider,{value:r.current,children:t})})};export{u as RuntimeRpcProvider};
