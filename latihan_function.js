var http = require('http')

//ini arrow function
/*const hitung = (angka1,angka2) => angka1*angka2*/

function hitung(angka1,angka2) {
	var hasil = angka1 * angka2
	var result = `${angka1} * ${angka2} = ${hasil}`
	return result;
}

var server = http.createServer(function(req, res) {
	var nama = "babastudio"
	res.end(hitung(5,4))
})

server.listen(5000)

console.log("server di 5000")