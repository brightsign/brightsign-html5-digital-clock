tightrope-digital-clock
=======================
A digital clock component that can be used for any application, but was developed for Tightrope.

The API is:

<digital-clock date-format="{{dateFormat}}" clock-style="clockStyle"
               timezone-in-minutes="{{timezoneInMinutes}}" face="{{face}}" caption="{{caption}}"></digital-clock>

All of the parameters, namely date-format, clock-style, timezone-in-minutes, face, and caption are typically supplied as a querystring, for example:

http://localhost:63342/digital-clock/app/index.html#?format=format%3Dhh:mm:ss%20yyyy%20z%3Bfont%3DArial%20Black%3Bcolor%3Dred%3Bsize%3D45%3Bcaption%3Dfoo:%20%3Boffsetx%3D0%3Boffsety%3D0%3Bheight%3D371px%3Bwidth%3D950px%3Btimezone%3D420%3Balignment%3Dcenter%3Bopacity%3D0.5%3Bpath%3Dimages%2Fdigital-clock-face.jpeg

date-format: In the URL, supply this as the "format" parameter:
- format: Required for digital clocks. The date format for the digital clock. See https://docs.angularjs.org/api/ng/filter/date for details. Default: hh:mm a.

clock-style: In the URL, supply the following parameter, which get concatenated as clock-style:
     - font: Optional. This is the font family. If used, the font file must be supplied. Default: ?
     - color: Optional. The text color (digital clock) and hand color (analog clock). Default: black.
     - size: Optional. The font size (digital clock). If no units specified, use points; if -1, size is automatic. Default: ?
     - width, height: Required. In pixesl. Required for centering of text or hands
     - alignment: Optional. Text or hand alignment: left or near, center, right or far. Default: center. Note: vertical alignment is always centered.
     - offsetx, offsety: Optional. In pixesl. Offset of text (digital clock) and hands (analog clock) relative to the alignment. Default: 0,0.
     - opacity: Optional. Range: 0-1.0. Opacity of text or hands. Default: 1.0.

timezone-in-minutes: In the URL, supply this as the "timezone" parameter:
     - timezone: Optional. In minutes relative to UTC. This overrides the time on the BS player. Default: same as the player's timezone.

face: In the URL, supply this as the "path" parameter:
     - path: Optional. Path or URL to the clock background image. Default: none.

caption:
     - caption: Optional. Text that appears before the time in a digital clock. Default: none.
