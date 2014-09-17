'use strict';

var hostwebUrl
var appwebUrl;
var web;

// This code runs when the DOM is ready and loads our host script file dynamically
$(document).ready(function () {
    //Host js file located here - https://ryandemo.sharepoint.com/sites/develop/Style%20Library/HostHelloWorld.js
    hostwebUrl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    appwebUrl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    var scriptbase = hostwebUrl + "/Style%20Library/";
    $.getScript(scriptbase + "HostHelloWorld.js");

    //This code runs when the window is ready (after document ready.) 
    //Call helloApp function from host js file
    $(window).load(function () {
        helloApp();
    });
});

function getQueryStringParameter(paramToRetrieve) {
    var params = document.URL.split("?")[1].split("&");
    var strParams = "";
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split("=");
        if (singleParam[0] == paramToRetrieve)
            return singleParam[1];
    }
}
