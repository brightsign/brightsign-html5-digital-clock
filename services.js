'use strict'

/*
 Expecting a string from Tightrope like:

 "format": "format=h:mm tt;font=Arial Black;seconds=false;color=ffffff;size=54;caption=;offsetx=-28;offsety=24;timezone=420;alignment=center;opacity=255;face=/Public/WebDisplay/Clock.aspx?ClockID=ebc99a9f-5e99-42ba-9973-5d6cdfc6ea8f&ZoneID=44",
 */
bsApp.factory('clockFormat', function ($location) {
    var ret = {};
    var myArgs = $location.search();
    var myFormatArg = myArgs.format;
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
