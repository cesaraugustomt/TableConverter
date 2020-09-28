var Reader = require("./Class/Reader");
var Writer = require("./Class/Writer");
var Processor = require("./Class/Processor");
var Table = require("./Class/Table");
var HtmlParser = require("./Class/HtmlParser");
var PDFWriter = require("./Class/PDFWriter");

var leitor = new Reader();
var escritor = new Writer();

async function main() {
  var dados = await leitor.Read("./vendas.csv");
  var dadosProcessados = Processor.Process(dados);

  var usuarios = new Table(dadosProcessados);

  var html = await HtmlParser.Parse(usuarios);

  escritor.Write(Date.now() + ".html", html);
  PDFWriter.WritePDF(Date.now() + ".PDF", html);
  // adicionando nova categôria
  // usuarios.rows.push("Joao Joao", "Formacao PHP", "PHP", "32")
}

main();
