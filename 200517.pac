// update: 2020.5.17
// 鉴于《刑法》、《网络安全法》等法律的有关条款，仅支持少量学术、科研网站，请谅解
function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
function FindProxyForURL(url, host) {
return "SOCKS5 127.0.0.1:2020";
}
