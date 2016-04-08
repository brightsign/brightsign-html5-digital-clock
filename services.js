'use strict'

/*
 Expecting a string from Tightrope like:

 "format": "format=h:mm tt;font=Arial Black;seconds=false;color=ffffff;size=54;caption=;offsetx=-28;offsety=24;timezone=420;alignment=center;opacity=255;face=/Public/WebDisplay/Clock.aspx?ClockID=ebc99a9f-5e99-42ba-9973-5d6cdfc6ea8f&ZoneID=44",
 */
bsApp.factory('clockFormat', function ($location) {
    var ret = {};
    var myFormatArg = undefined;
    var myArgs = $location.search();
    if (myArgs && myArgs.length > 0) {
        myFormatArg = myArgs;
    } else {
        // Use the string after the hash as a backoff in case search() doesn't work
        var re = /[\/\?]*(.*)/;
        myArgs = $location.hash();
        myFormatArg  = myArgs.replace(re, "$1");
    }

    console.log(JSON.stringify(myArgs));
    if (! myFormatArg) {
        return ret;
    }
    var myArgsAry = myFormatArg.split(';');
    angular.forEach(myArgsAry, function (arg) {
        var myArgAry = arg.split('=');
        ret[myArgAry[0]] = myArgAry[1];
    });
    return ret;
});
