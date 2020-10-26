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
