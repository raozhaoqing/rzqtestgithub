const http = require('http')

const homePage = `
	<!DOCTYPE html>
	<html>
	<head>
		<meta charset='utf-8'>
		<title>
			raozhaoqing
		</title>
	</head>
		<body>
			<h1>我使用nodejs建的一个服务<h1>
			<h2>mangdb</h2>
		</body>
	</html>

`

http.createServer((req,res) => {
	res.statusCode = 200
	res.setHeader('content-Type','text/html')
	res.end(homePage)
}).
listen(3000,() => {
	console.log("server Running at 3000")
})
