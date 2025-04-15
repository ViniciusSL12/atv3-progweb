function gravarDados() {
  localStorage.setItem('nome', document.getElementById('nome').value);
  localStorage.setItem('endereco', document.getElementById('endereco').value);
  localStorage.setItem('email', document.getElementById('email').value);
  localStorage.setItem('telefone', document.getElementById('telefone').value);
  alert("Dados gravados com sucesso!");
}

function exibirDados() {
  const nome = localStorage.getItem('nome') || '';
  const endereco = localStorage.getItem('endereco') || '';
  const email = localStorage.getItem('email') || '';
  const telefone = localStorage.getItem('telefone') || '';

  const exibicao = `
    <strong>Nome:</strong> ${nome}<br>
    <strong>Endereço:</strong> ${endereco}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Telefone:</strong> ${telefone}
  `;

  document.getElementById('dadosExibidos').innerHTML = exibicao;
}

function enviarWhatsApp() {
  const nome = document.getElementById('nome').value;
  const endereco = document.getElementById('endereco').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;

  const numero = document.getElementById('numeroWhatsApp').value;

  const mensagem = `Nome: ${nome}%0AEndereço: ${endereco}%0AEmail: ${email}%0ATelefone: ${telefone}`;
  const url = `https://api.whatsapp.com/send?phone=${numero}&text=${mensagem}`;

  window.open(url, '_blank');
}

  