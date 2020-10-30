function logar(){
    const email = document.getElementById('email').value;
    const senha = document.getElementById('email').value;

    if(email == 'admin' && senha == 'admin') {
        alert('login efetuado com sucesso')
        window.location.href = 'escolha-usuario.html'
    }else {
        alert('Usuário ou senha inválidos')
    } 
}
logar()


function solicitar() {
    const nome = document.getElementById('nome').value
    const sobrenome = document.getElementById('sobrenome').value
    const endereco = document.getElementById('endereco').value
    const identidade = document.getElementById('identidade').value
    const sintomas = document.getElementById('sintomas').value
    
    
    document.getElementById('root').innerHTML = `PACIÊNTE: ${nome} ${sobrenome} <br> ENDEREÇO:${endereco} <br> RG:${identidade} <br> SINTOMAS:${sintomas}`
    
    }
   
   
