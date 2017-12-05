chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      ga('send', 'event', 'redirect', details.url,details.url);
      var part1 = details.url.substr(0,details.url.indexOf("wi"));
      var part2 = details.url.substr(details.url.indexOf("wi"),details.url.length -1);
      var host = part1.concat("0").concat(part2);
      return {redirectUrl: host};
    },
    {
        urls: [
            "*://wikipedia.org/*",
            "*://*.wikipedia.org/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
)

chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var userLang = navigator.language || navigator.userLanguage;
    ga('send', 'event', 'wikiMainPage', userLang, userLang);
    var newURL = "https://".concat(userLang).concat(".0wikipedia.org");
    chrome.tabs.create({ url: newURL });
});

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
};

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-71464712-2', 'auto');
ga('set', 'checkProtocolTask', function(){});
ga('require', 'displayfeatures');
ga('send', 'pageview','background.html');
