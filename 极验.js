// 504-timeout.js
function onResponse(request) {
    var url = request.url;
    console.log("xghhfh");
    
    if (/^https:\/\/(gcaptcha4\.(geetest\.com|geevisit\.com|gsensebot\.com)|static\.(geetest\.com|geevisit\.com))\/.*/.test(url)) {
        return {
            statusCode: 504,
            headers: { "Content-Type": "text/plain" },
            body: "504 Time-out"
        };
    }

}
