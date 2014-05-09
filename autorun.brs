Sub Main()
	rect=CreateObject("roRectangle", 0, 0, 1920, 1080)
	htmlWidget = CreateObject("roHtmlWidget", rect)
	htmlWidget.EnableSecurity(false)
	htmlWidget.SetUrl("file:/index.html#?format=format%3Dhh:mm:ss%20yyyy%20z%3Bfont%3DArial%20Black%3Bcolor%3Dred%3Bsize%3D45%3Bcaption%3Dfoo:%20%3Boffsetx%3D0%3Boffsety%3D0%3Bheight%3D371px%3Bwidth%3D1920px%3Btimezone%3D420%3Balignment%3Dcenter%3Bopacity%3D0.5%3Bpath%3Ddigital-clock-face.jpeg")
	htmlWidget.EnableJavascript(true)
	htmlWidget.Show()
	while true
		' Do nothing
	end while
End Sub
