const botaoTest = document.querySelector('#testarProjeto');
const statusProjeto = document.querySelector('#statusProjeto');

botaoTeste.addEventiListener('click', () => {
    statusProjeto.textContent = 'Projeto verificado: HTML, CSS e JavaScrivt estão conectados.';
    statusProjeto.classList.add('Sucesso');
    botaoTeste.textCOntent = 'Ambiente verificado';
});