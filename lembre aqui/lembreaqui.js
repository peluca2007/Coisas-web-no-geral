// Seleciona os elementos do modal de visualização
const viewModal = document.getElementById('viewModal');
const closeViewModalButton = document.getElementById('closeViewModal');
const viewTitulo = document.getElementById('viewTitulo');
const viewDescricao = document.getElementById('viewDescricao');
const viewData = document.getElementById('viewData');
const viewHora = document.getElementById('viewHora');

// Seleciona os elementos do modal de criação
const saveLembreteButton = document.getElementById('saveLembrete');
const closeModalButton = document.getElementById('closeModal');
const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('modal');
const lembretesContainer = document.getElementById('lembretesContainer');

// Função para abrir o modal de visualização
function abrirVisualizacao(titulo, descricao, data, hora) {
  viewTitulo.textContent = titulo;
  viewDescricao.textContent = descricao;
  viewData.textContent = data;
  viewHora.textContent = hora;
  viewModal.classList.remove('hidden');
}

// Função para fechar o modal de visualização
closeViewModalButton.addEventListener('click', () => {
  viewModal.classList.add('hidden');
});

// Função para abrir o modal de criação
openModalButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

// Função para fechar o modal de criação
closeModalButton.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Função para salvar o lembrete
saveLembreteButton.addEventListener('click', () => {
  let titulo = document.getElementById('titulo').value.trim();
  let descricao = document.getElementById('descricao').value.trim();
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;

  // Verifica se todos os campos estão preenchidos
  if (!titulo || !descricao ) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  // Verifica o limite de caracteres do título
  if (titulo.length > 45) {
    alert('O título deve ter no máximo 45 caracteres!');
    return;
  }

  // Trunca a descrição se ultrapassar 50 caracteres
 

  // Cria o cartão de lembrete
  const lembreteCard = document.createElement('div');
  lembreteCard.classList.add('lembrete-card');
  lembreteCard.innerHTML = `
    <h3>${titulo}</h3>
    <p><strong>Descrição:</strong> ${descricao}</p>
    <p><strong>Data:</strong> ${data}</p>
    <p><strong>Hora:</strong> ${hora}</p>
  `;

  // Adiciona evento de clique para abrir o modal de visualização
  lembreteCard.addEventListener('click', () => {
    abrirVisualizacao(titulo, descricao, data, hora);
  });

  // Adiciona o cartão ao contêiner
  lembretesContainer.appendChild(lembreteCard);

  // Fecha o modal de criação
  modal.classList.add('hidden');

  // Limpa os campos do modal
  document.getElementById('titulo').value = '';
  document.getElementById('descricao').value = '';
  document.getElementById('data').value = '';
  document.getElementById('hora').value = '';
});