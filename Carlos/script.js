function Registre(){

   // console.log("ok");
    let nome =document.getElementById('nome').value
    let cpf =document.getElementById('cpf').value

    localStorage.setItem('meuCpf',cpf.value)
    localStorage.setItem('meuNome',nome.value)
   /*  documento = console.log("nome: "+nome+"\nCPF: "+ cpf) */
   debugger
   console.log(localStorage.getItem("meuNome"))
   console.log(localStorage.getItem("meuCpf"))
}