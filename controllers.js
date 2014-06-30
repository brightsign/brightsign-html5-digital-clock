bsApp.controller('bsController', function ($scope, $interval, clockFormat) {

    // See http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    /* Styling
     CSS parameters supported:
     - font: Optional. This is the font family. If used, the font file must be supplied. Default: ?
     - color: Optional. The text color (digital clock) and hand color (analog clock). Default: black.
     - size: Optional. The font size (digital clock). If no units specified, use points; if -1, size is automatic. Default: ?
     - width, height: Required. In pixesl. Required for centering of text or hands
     - alignment: Optional. Text or hand alignment: left or near, center, right or far. Default: center. Note: vertical alignment is always centered.
     - offsetx, offsety: Optional. In pixesl. Offset of text (digital clock) and hands (analog clock) relative to the alignment. Default: 0,0.
     - opacity: Optional. Range: 0-1.0. Opacity of text or hands. Default: 1.0.
     - path: Optional. Path or URL to the clock background image. Default: none.
     - format: Required for digital clocks. The date format for the digital clock. See https://docs.angularjs.org/api/ng/filter/date for details. Default: hh:mm a.
     - timezone: Optional. In minutes relative to UTC. This overrides the time on the BS player. Default: same as the player's timezone.
     - caption: Optional. Text that appears before the time in a digital clock. Default: none.
     */

    function formatClock() {
        if (clockFormat) {
            $scope.clockStyle = {};
            if (clockFormat.font) {
                $scope.clockStyle['font-family'] = clockFormat.font;
            }
            if (clockFormat.color) {
                $scope.clockStyle['color'] = clockFormat.color;
            }
            if (clockFormat.size) {
                var fontSize = clockFormat.size.trim();
                $scope.fontSizeAuto = false;
                if (isNumber(fontSize)) {
                    if (fontSize == -1) {
                        // -1 means size the font to fit
                        $scope.fontSizeAuto = true;
                    }
                    else {
                        // Interpret font sizes as points if units not specified
                        fontSize += 'pt';
                        $scope.clockStyle['font-size'] = fontSize;
                    }
                }
                else if (fontSize === "auto") {
                    // auto means size the font to fit
                    $scope.fontSizeAuto = true;
                }
                else {
                    // User supplied a font size with units
                    $scope.clockStyle['font-size'] = fontSize;
                }
            }
            if ((clockFormat.offsetx || clockFormat.offsety)) {
                $scope.clockStyle['position'] = 'absolute';
                $scope.clockStyle['width'] = '100%';
            }
            if (clockFormat.offsetx) {
                var offsetx = clockFormat.offsetx;
                if (isNumber(offsetx)) {
                    // Interpret offsets as pixels if units not specified
                    offsetx += 'px';
                }
                $scope.clockStyle['left'] = offsetx;
            }
            if (clockFormat.offsety) {
                var offsety = clockFormat.offsety;
                if (isNumber(offsety)) {
                    // Interpret offsets as pixels if units not specified
                    offsety += 'px';
                }
                $scope.clockStyle['top'] = offsety;
            }
            if (clockFormat.alignment) {
                var alignment = clockFormat.alignment;
                // For Tightrope: interpret 'near' as left.
                if (clockFormat.alignment == 'near') {
                    alignment = 'left';
                }
                // For Tightrope: interpret 'far' as right.
                if (clockFormat.alignment == 'far') {
                    alignment = 'right';
                }
                $scope.clockStyle['text-align'] = alignment;
            }
            else {
                $scope.clockStyle['text-align'] = 'center';
            }
            if (clockFormat.opacity) {
                if ($scope.fontSizeAuto) {
                    // Start with zero opacity so that the font doesn't change size before the viewer's eyes
                    $scope.clockStyle['opacity-tmp'] = clockFormat.opacity;
                    $scope.clockStyle['opacity'] = 0.0;
                }
                else {
                    $scope.clockStyle['opacity'] = clockFormat.opacity;
                }
            }
            if (clockFormat.height) {
                $scope.clockStyle['height'] = clockFormat.height;
                // Use the height to center the text vertically
                $scope.clockStyle['line-height'] = clockFormat.height;
            }
            if (clockFormat.width) {
                $scope.clockStyle['width'] = clockFormat.width;
            }

            $scope.faceStyle = {
                'display': 'block'
            };
            if (clockFormat.path) {
                $scope.face = clockFormat.path;
                // Scale the background image
                $scope.faceStyle['width'] = clockFormat.width;
                $scope.faceStyle['height'] = clockFormat.height;
            }
            // Date format
            if (clockFormat.format) {
                $scope.dateFormat = clockFormat.format;
                // E.g. "hh:mm a". Angular date filter only accepts one "a" for am/pm.
                $scope.dateFormat = $scope.dateFormat.replace('tt', 'a');
                $scope.dateFormat = $scope.dateFormat.replace('t', 'a');
                // E.g. "hh:mm zz". Angular date filter only accepts one "Z" for time zone.
                $scope.dateFormat = $scope.dateFormat.replace('zzz', 'Z');
                $scope.dateFormat = $scope.dateFormat.replace('zz', 'Z');
                $scope.dateFormat = $scope.dateFormat.replace('z', 'Z');
            }
            else {
                $scope.dateFormat = "hh:mm a";
            }
            // Timezone
            if (clockFormat.timezone) {
                $scope.timezoneInMinutes = clockFormat.timezone;
            }
            // Caption
            $scope.caption = '';
            if (clockFormat.caption) {
                $scope.caption = clockFormat.caption;
            }
        }
    }

    formatClock();
});