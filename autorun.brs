Sub Main()
	rect=CreateObject("roRectangle", 0, 0, 1920, 1080)
	htmlWidget = CreateObject("roHtmlWidget", rect)
	htmlWidget.EnableSecurity(false)
	htmlWidget.SetUrl("file:/index.html#?format=format%3DEEEE%20dd%20MMM.%20yyyy%3Bfont%3DArial%20Black%3Bcolor%3Dff3344%3Bsize%3D-1%3Bcaption%3D%3Boffsetx%3D0%3Boffsety%3D0%3Btimezone%3D300%3Balignment%3Dcenter%3Bopacity%3D0.3941176%3Bwidth%3D829px%3Bheight%3D565px%3Bpath%3Ddigital-clock-face.jpeg")
	htmlWidget.EnableJavascript(true)
	htmlWidget.StartInspectorServer(2999)
	htmlWidget.Show()
	while true
		' Do nothing
	end while
End Sub
