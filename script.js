function clicou() {
  let nome = document.getElementById("nome").value
  let email = document.getElementById("email").value
  let cpfCnpj = document.getElementById("cpfCnpj").value
  let telefone = document.getElementById("telefone").value
  let cep = document.getElementById("cep").value
  let logradouro = document.getElementById("logradouro").value
  let numero = document.getElementById("numero").value
  let bairro = document.getElementById("bairro").value
  let cidade = document.getElementById("cidade").value
  let estado = document.getElementById("estado").value

  let todaLista = [nome, email, cpfCnpj, telefone, cep, logradouro, numero, bairro, cidade, estado]
  console.log(todaLista)

  let res = document.getElementById("res")
  res.innerHTML = todaLista

  // tudo certo

  // 

  //apagar item da lista
  let removedItem = todaLista.splice(1, 1)
  console.log(removedItem)
  
  let res2 = document.getElementById("res2")
  res2.innerHTML = todaLista 
}