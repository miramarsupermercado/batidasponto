// =================================================================
// CONFIGURAÇÕES DA API DO GOOGLE DRIVE
// O CLIENT_ID deve ser definido AQUI, uma única vez.
// =================================================================
const CLIENT_ID = '731386227384-f2l438m4a3rdfhf5kuaj76f6rdiqrdn.apps.googleusercontent.com';
const SCOPES = 'https://www.googleapis.com/auth/drive.file';
const DATA_FILE_NAME = 'pontoData.json'; // Nome do arquivo a ser salvo no Drive
let dataFileId = null; // Armazena o ID do arquivo no Drive após o primeiro salvamento

// =================================================================
// DADOS DE PIS PARA NOME (MANTIDO)
// =================================================================
const pisToName = {
  "013253304190": "ZEZINHO",
  "016053553973": "WELDO",
  "013427752274": "VANEIDE",
  "016542625438": "VALTERCIO",
  "013106959648": "ROBERTO",
  "021002001341": "RICARDO",
  "016659462989": "RAYSSA",
  "020626048316": "PATRICIA",
  "013741825459": "NATALIA",
  "020677804355": "MESSIAS",
  "016490400554": "MELQUE",
  "021002003530": "MAURICIO",
  "016466583857": "MARIA MARIANO",
  "020052062729": "MARIA JOSE",
  "016566499181": "MARCIO",
  "021001997761": "MARAIZA",
  "016322125185": "LUCAS",
  "020336741019": "LUANDERSON",
  "016359747171": "LIDIANE",
  "012781168647": "LENILDO",
  "016367173723": "LEANDRO",
  "016073698136": "LEANDRO",
  "020165323099": "LAYNE",
  "016217132193": "JULIANA",
  "013213001642": "JOSE CARLOS",
  "013183480645": "JOSE ALVES",
  "023779420909": "JOANDERSON",
  "013358352853": "JOANA",
  "013200275641": "JEFET",
  "016320187663": "JACIELE",
  "014499373235": "ISAC",
  "016216279557": "ISABELE",
  "016310799682": "IGOR",
  "016216258037": "GUTENBERG",
  "016297716219": "GUILHERME",
  "016189103880": "GISELE",
  "016217577764": "GEFLY",
  "027313287823": "FELIPE",
  "020422161491": "FABIO",
  "013425142274": "ERINALDO",
  "013415979694": "ELTON",
  "021201799637": "DZIANY",
  "021419697465": "DIEGO",
  "021236198508": "DENILSON",
  "021218009731": "DAVID",
  "013224914644": "DANILO",
  "016563596755": "CESAR",
  "020975819342": "CELSO",
  "020462936001": "BRUNO",
  "020387110660": "ARTHUR",
  "016284007338": "ANTENOR",
  "027256808521": "ANE ISABELLE",
  "016885988058": "ANDREZA",
  "016158593258": "ANDREWS",
  "020197581344": "ALICIA",
  "016084227717": "ADEMIR",
  "016478355951": "MARIA EDUARDA"
};

// =================================================================
// FUNÇÕES DE PARSING E EXIBIÇÃO (MANTIDAS)
// =================================================================
function parseRegistro(reg) {
  if (reg.length < 38) return null;

  const dataStr = reg.substring(10, 18);
  const dia = dataStr.substring(0,2);
  const mes = dataStr.substring(2,4);
  const ano = dataStr.substring(4,8);

  const horaStr = reg.substring(18, 22);
  const hora = horaStr.substring(0, 2);
  const minuto = horaStr.substring(2, 4);

  const pis = reg.substring(22, 34);

  const nome = pisToName[pis] || null;

  const dataFormatada = `${dia}/${mes}/${ano}`;
  const horaFormatada = `${hora}:${minuto}`;

  return {
    nome,
    pis,
    data: dataFormatada,
    hora: horaFormatada,
    diaNum: parseInt(dia, 10),
    mesNum: parseInt(mes, 10),
    anoNum: parseInt(ano, 10),
    horaNum: parseInt(hora, 10),
    minutoNum: parseInt(minuto, 10),
    horaMinuto: `${hora}:${minuto}`
  };
}

function exibirRegistros(registros) {
  let tabela = '<h2>Registros Extraídos</h2><table><thead><tr><th>Nome</th><th>PIS</th><th>Data (DD/MM/AAAA)</th><th>Hora</th><th>Reconhecido?</th></tr></thead><tbody>';
  for (const r of registros) {
    const reconhecido = r.nome ? "Sim" : "Não";
    const classe = r.nome ? "" : "unknown-pis";
    tabela += `<tr class="${classe}"><td>${r.nome || '-'}</td><td>${r.pis}</td><td>${r.data}</td><td>${r.hora}</td><td>${reconhecido}</td></tr>`;
  }
  tabela += '</tbody></table>';
  return tabela;
}

function mergeRegistrosPreservandoOrdem(existing, incoming) {
  // Preserva a ordem dos incoming, adicionando apenas os que não existem em existing
  const chavesExistentes = new Set(existing.map(reg => `${reg.nome}|${reg.pis}|${reg.data}|${reg.hora}`));
  const resultado = [...existing];

  for (const reg of incoming) {
    const chave = `${reg.nome}|${reg.pis}|${reg.data}|${reg.hora}`;
    if (!chavesExistentes.has(chave)) {
      resultado.push(reg);
      chavesExistentes.add(chave);
    }
  }

  return resultado;
}

// =================================================================
// NOVAS FUNÇÕES DE AUTENTICAÇÃO E DRIVE
// =================================================================

/**
 * Lida com o processo de login / permissão (OAuth).
 * @returns {Promise<boolean>} Retorna true se autenticado.
 */
function handleAuthClick() {
  const GoogleAuth = gapi.auth2.getAuthInstance();
  if (GoogleAuth.isSignedIn.get()) {
    return Promise.resolve(true); // Já logado
  }
  
  // Inicia o fluxo de login
  return GoogleAuth.signIn().then(() => true).catch(error => {
    console.error("Login falhou:", error);
    return false;
  });
}

/**
 * Tenta carregar os registros do Google Drive.
 * @returns {Promise<Array>} Lista de registros.
 */
async function carregarRegistros() {
  // Não forçamos o login aqui, a menos que seja para salvar/processar
  if (!gapi.auth2 || !gapi.auth2.getAuthInstance().isSignedIn.get()) {
      return []; // Não logado, retorna vazio
  }
  
  try {
    // 1. Tenta encontrar o arquivo pelo nome
    const response = await gapi.client.drive.files.list({
      q: `name='${DATA_FILE_NAME}' and trashed=false`,
      spaces: 'drive',
      fields: 'files(id, name)',
      pageSize: 1
    });

    const files = response.result.files;

    if (files.length > 0) {
      dataFileId = files[0].id; // Salva o ID do arquivo
      
      // 2. Baixa o conteúdo do arquivo
      const mediaResponse = await gapi.client.drive.files.get({
        fileId: dataFileId,
        alt: 'media' 
      });

      return JSON.parse(mediaResponse.body);
    }
    
    // Arquivo não encontrado
    dataFileId = null; 
    return [];

  } catch (error) {
    console.warn("Nenhum registro encontrado no Drive ou login expirado.", error);
    return [];
  }
}

/**
 * Salva os registros no Google Drive (cria ou atualiza).
 */
async function salvarRegistros(registros) {
  const isAuth = await handleAuthClick(); // Garante que o usuário esteja logado
  if (!isAuth) {
    alert("Você precisa fazer login no Google para salvar os registros.");
    return;
  }
  
  const jsonContent = JSON.stringify(registros);
  const metadata = {
    name: DATA_FILE_NAME,
    mimeType: 'application/json'
  };

  try {
    if (dataFileId) {
      // ATUALIZAÇÃO (PATCH)
      await gapi.client.request({
        path: `/upload/drive/v3/files/${dataFileId}`,
        method: 'PATCH',
        params: { uploadType: 'media' },
        headers: {
          'Content-Type': 'application/json'
        },
        body: jsonContent
      });
      console.log('Registros atualizados no Drive.');

    } else {
      // CRIAÇÃO (POST)
      const form = new FormData();
      form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
      form.append('file', new Blob([jsonContent], { type: 'application/json' }));

      const response = await gapi.client.request({
        path: '/upload/drive/v3/files',
        method: 'POST',
        params: { uploadType: 'multipart' },
        body: form
      });
      dataFileId = response.result.id;
      console.log('Arquivo de registros criado no Drive.');
    }
  } catch (error) {
    console.error("Erro ao salvar dados no Google Drive.", error);
    alert("Erro ao salvar dados no Drive. Verifique a console e tente fazer login novamente.");
  }
}

/**
 * ATUALIZADA: Agora é assíncrona e carrega do Drive.
 */
async function atualizarExibicao() {
  const registrosSalvos = await carregarRegistros();
  document.getElementById("resultado").innerHTML = exibirRegistros(registrosSalvos);
  document.getElementById("btnVerificacao").disabled = registrosSalvos.length === 0;
}

/**
 * ATUALIZADA: Agora é assíncrona e carrega do Drive antes de exportar.
 */
async function exportarRegistros() {
  const registros = await carregarRegistros(); // Carrega do Drive
  
  if (registros.length === 0) {
    alert('Não há registros para exportar.');
    return;
  }
  // Exporta registros para CSV simples
  const cabecalho = ['Nome', 'PIS', 'Data', 'Hora', 'Reconhecido'];
  const linhas = registros.map(r => [
    r.nome || '',
    r.pis,
    r.data,
    r.hora,
    r.nome ? 'Sim' : 'Não'
  ]);

  const csvContent = [cabecalho, ...linhas]
    .map(e => e.map(v => `"${v.replace(/"/g, '""')}"`).join(','))
    .join('\r\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'registros_ponto.csv';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * ATUALIZADA: Agora é assíncrona para chamar carregar/salvar do Drive.
 */
async function processarDados() {
  const rawData = document.getElementById("pontoData").value.trim();
  if (!rawData) {
    alert("Por favor, cole os dados brutos do ponto eletrônico.");
    return;
  }

  const linhas = rawData.split("\n").map(l => l.trim()).filter(l => l.length >= 38);
  const registrosNovos = [];

  for (const linha of linhas) {
    const reg = parseRegistro(linha);
    if (reg) {
      registrosNovos.push(reg);
    }
  }

  if (registrosNovos.length === 0) {
    alert("Nenhum registro válido encontrado.");
    return;
  }

  let registrosExistentes = await carregarRegistros(); // Carrega assincronamente do Drive

  // Mescla registros
  const registrosCompletos = mergeRegistrosPreservandoOrdem(registrosExistentes, registrosNovos);
  
  await salvarRegistros(registrosCompletos); // Salva assincronamente no Drive

  // Atualiza exibição com todos os registros (antigos + novos)
  await atualizarExibicao();

  // document.getElementById("pontoData").value = '';
}

/**
 * ATUALIZADA: Agora é assíncrona e tenta excluir o arquivo do Drive.
 */
async function limparRegistros() {
  if (confirm("Tem certeza que deseja excluir todos os registros? Esta ação não pode ser desfeita e irá DELETAR o arquivo do Google Drive.")) {
    const isAuth = await handleAuthClick();
    if (!isAuth) {
        alert("Você precisa estar logado para excluir o arquivo do Google Drive.");
        return; 
    }
    
    if (dataFileId) {
      try {
        await gapi.client.drive.files.delete({
          fileId: dataFileId
        });
        dataFileId = null; 
        alert("Arquivo de registros excluído do Google Drive.");
      } catch (error) {
        console.error("Erro ao excluir o arquivo do Drive:", error);
        alert("Erro ao excluir o arquivo do Drive. Verifique a console.");
      }
    } else {
        alert("Nenhum arquivo de registro encontrado no Drive para exclusão.");
    }
    // Força a atualização da exibição para limpar a tabela
    await atualizarExibicao(); 
  }
}

// =================================================================
// INICIALIZAÇÃO E EVENTOS
// =================================================================

/**
 * Inicializa a API do Google (gapi) após o carregamento da biblioteca.
 */
function initClient() {
  gapi.client.init({
    clientId: CLIENT_ID,
    scope: SCOPES
  }).then(() => {
    // Tenta carregar os dados ao iniciar (se já estiver logado)
    atualizarExibicao(); 
  }).catch(error => {
    console.error("Erro ao inicializar a API do Google:", error);
    document.getElementById("resultado").innerHTML = "<h2>Erro ao conectar com o Google Drive. Verifique a console.</h2>";
  });
}

document.getElementById("btnProcessar").addEventListener("click", processarDados);
document.getElementById("btnVerificacao").addEventListener("click", () => {
  window.open("verificacao.html", "_blank");
});

// Cria botão de exportação e adiciona evento
const btnExportar = document.createElement('button');
btnExportar.id = 'btnExportar';
btnExportar.textContent = 'Exportar Registros CSV';
btnExportar.style.marginLeft = '10px';
btnExportar.addEventListener('click', exportarRegistros);
document.getElementById('btnVerificacao').insertAdjacentElement('afterend', btnExportar);

// Cria botão para limpar registros e adiciona evento
const btnLimpar = document.createElement('button');
btnLimpar.id = 'btnLimpar';
btnLimpar.textContent = 'Excluir Todos os Registros';
btnLimpar.style.marginLeft = '10px';
btnLimpar.addEventListener('click', limparRegistros);

// Insere o botão limpar após o botão exportar
document.getElementById('btnExportar').insertAdjacentElement('afterend', btnLimpar);

// Ao carregar a página, inicializa a API do Google
window.addEventListener('load', () => {
    gapi.load('client:auth2', initClient); 
});
