/*Exemplo 01
    console.log("Introdução ao Node.js");
*/

/*Exemplo 02
var nome = "Joel";
function exibirMensagem(nome) {
	console.log("Olá, ", nome);
}
*/

/*Exemplo 03
var clc = require("cli-color");
console.log(clc.green("Mensagem verde"));
*/

/*Exemplo 04

exibirMensagem(nome);

var functions = require("./functions.js");

var resultado = functions.validate("joel","123");

console.log(resultado);
*/

/*Exemplo 05 Criando a primeira aplicação web
var http = require("http");

http.createServer(function(request, response){
	response.write("Primeiros passos com Node.js");
	response.end();
}).listen(8081);
console.log("Servidor rodando em http://localhost:8081");
*/

var http = require("http");
var fs = require("fs");/*Ler arquivo*/

http.createServer(function(request, response){
	fs.readFile("index.html", function(erro, conteudo){
		if(erro){
			console.log(erro);
		}
		else {
			response.write(conteudo);
		}
		response.end();
	})
}).listen(8081);

console.log("Servidor rodando em http://localhost:8081");

