document.addEventListener("DOMContentLoaded", () => {
    const formCadastro = document.getElementById('formCadastro');
    const formContato = document.getElementById('formContato');

    if (formCadastro) {
        formCadastro.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Cadastro realizado com sucesso!');
            formCadastro.reset();
        });
    }

    if (formContato) {
        formContato.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensagem enviada com sucesso!');
            formContato.reset();
        });
    }
});
