/*

************************
QuantumultX :
************************

[rewrite_remote]
https://raw.githubusercontent.com/sex4096/haijiao_vip_vpn/master/haijiao.conf, tag=Haijiao Vip, update-interval=3600, opt-parser=false, enabled=true

*/

let headers = $response.headers;
let url = $request.url;
const dependencies = [
  "https://cdn.jsdelivr.net/npm/react@18.3.0/umd/react.production.min.js",
  "https://cdn.jsdelivr.net/npm/react-dom@18.3.0/umd/react-dom.production.min.js",
  "https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js",
  "https://cdn.jsdelivr.net/npm/antd@5.16.4/dist/antd.min.js",
  "https://cdn.jsdelivr.net/npm/@ant-design/icons@5.3.6/dist/index.umd.min.js",
  "https://cdn.jsdelivr.net/npm/@ant-design/icons@5.3.6/dist/index.umd.min.js",
  "https://cdn.jsdelivr.net/gh/sex4096/haijiao_vip@master/haijiao.js"
];
// 在返回页面中添加js
let body = $response.body;
if (headers["Content-Type"].indexOf("text/html") != -1) {
  let parser = new DOMParser();
  let doc = parser.parseFromString(body, "text/html");
  dependencies.forEach((url) => {
    let script = doc.createElement("script");
    script.src = url;
    script.crossOrigin = "anonymous";
    doc.body.appendChild(script);
  });

  body = doc.documentElement.outerHTML;
}
$done({ headers, body });
