document.addEventListener('DOMContentLoaded', function () {
  const estadoSelect = document.getElementById('estado');
  const cidadeSelect = document.getElementById('cidade');

  function carregarCidades() {
    const estadoSelecionado = estadoSelect.value;


    cidadeSelect.innerHTML = '<option value="">Selecione sua cidade</option>';

  
    let cidades;
    if (estadoSelecionado === 'SP') {
      cidades = [
        { nome: 'São Paulo', valor: 'São Paulo' },
        { nome: 'Guarulhos', valor: 'Guarulhos' },
        { nome: 'São Bernardo do Campo', valor: 'São Bernardo do Campo' },
        { nome: 'Osasco', valor: 'Osasco' }
      ];
    } else if (estadoSelecionado === 'RJ') {
      cidades = [
        { nome: 'Rio de Janeiro', valor: 'Rio de Janeiro' },
        { nome: 'Fluminense', valor: 'Fluminense' },
        { nome: 'Botafogo', valor: 'Botafogo' },
        { nome: 'Resende', valor: 'Resende' }
      ];
    }  else if (estadoSelecionado === 'MG') {
      cidades = [
        { nome: 'Palças de Caldas', valor: 'Poços de Caldas' },
        { nome: 'Belo Horizonte', valor: 'Belo Horizonte' },
        { nome: 'Uberlândia', valor: 'Uberlândia' },
        { nome: 'Juiz de Fora', valor: 'Juiz de Fora' }
      ];
    }  else if (estadoSelecionado === 'RS') {
      cidades = [
        { nome: 'Porto Alegre', valor: 'Porto Alegre' },
        { nome: 'Passo Fundo', valor: 'Passo Fundo' },
        { nome: 'Caxias do Sul', valor: 'Caxias do Sul' },
        { nome: 'Anta Gorda', valor: 'Anta Gorda' }
      ];
    }  else {
      cidades = [];
    }

    
    cidades.forEach(cidade => {
      const option = document.createElement('option');
      option.value = cidade.valor;
      option.textContent = cidade.nome;
      cidadeSelect.appendChild(option);
    });
  }


  estadoSelect.addEventListener('change', carregarCidades);
});
