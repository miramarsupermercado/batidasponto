// =========================================================
// 🔑 CONFIGURAÇÕES DE API E PIS/NOME
// =========================================================

// Configurações do Drime Cloud
const API_BASE_URL = 'https://app.drime.cloud/api/v1';
const DRIME_UPLOAD_URL = `${API_BASE_URL}/uploads`;
// ATENÇÃO: Use seu token real aqui.
const DRIME_API_TOKEN = '12101|f70fBFPYbvF8dcojErDgIgK19WPCnYGwvsovVkp61384506a'; 

// Mapeamento PIS para Nome (Original)
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

// =========================================================
// ⚙️ FUNÇÕES DE MANIPULAÇÃO DE DADOS (Inalteradas)
// =========================================================

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

// =========================================================
// 📄 FUNÇÕES DE GERAÇÃO E PERSISTÊNCIA (Adaptadas)
// =========================================================

/**
 * Gera um objeto Blob (arquivo virtual) em formato CSV a partir dos registros.
 */
function generateCsvBlob(registros) {
    const cabecalho = ['Nome', 'PIS', 'Data', 'Hora', 'Reconhecido'];
    const linhas = registros.map(r => [
        r.nome || '',
        r.pis,
        r.data,
        r.hora,
        r.nome ? 'Sim' : 'Não'
    ]);

    const csvContent = [cabecalho, ...linhas]
        .map(e => e.map(v => `"${String(v).replace(/"/g, '""')}"`).join(','))
        .join('\r\n');

    return new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
}

/**
 * 💾 CARREGA REGISTROS DO LOCALSTORAGE (Manter para cache local)
 * @returns {Array<Object>} Array de registros.
 */
function carregarRegistros() {
  const rawExistentes = localStorage.getItem('pontoData');
  if (rawExistentes) {
    try {
      return JSON.parse(rawExistentes);
    } catch {
      return [];
    }
  }
  return [];
}

/**
 * 💾 SALVA REGISTROS NO LOCALSTORAGE E NA API DO DRIME CLOUD
 * @param {Array<Object>} registros - O array de registros a ser salvo.
 * @returns {Promise<boolean>} Promessa que resolve com true se for bem-sucedido.
 */
async function salvarRegistros(registros) {
    // 1. Salva no LocalStorage (para persistência local/cache imediato)
    localStorage.setItem('pontoData', JSON.stringify(registros));

    if (registros.length === 0) return true;

    // 2. Prepara o arquivo CSV para upload
    const csvBlob = generateCsvBlob(registros);
    const fileName = `registros_ponto_${new Date().toISOString().slice(0, 10)}.csv`;

    const formData = new FormData();
    formData.append('file', csvBlob, fileName); 
    // Opcional: Adicionar um parentId ou descrição se necessário
    // formData.append('description', 'Registros consolidados de ponto');

    try {
        const response = await fetch(DRIME_UPLOAD_URL, {
            method: 'POST',
            headers: {
                // Autenticação Bearer Token
                'Authorization': `Bearer ${DRIME_API_TOKEN}` 
            },
            body: formData 
        });

        const data = await response.json();

        if (!response.ok) {
            const errorMessage = data.message || response.statusText;
            throw new Error(`Erro ${response.status} ao salvar no Drime: ${errorMessage}`);
        }

        console.log("Upload para Drime Cloud bem-sucedido. Arquivo salvo em:", data.fileEntry.url);
        alert(`Registros sincronizados! Arquivo salvo no Drime Cloud como: ${data.fileEntry.name}`);
        return true;

    } catch (error) {
        console.error("Falha ao salvar registros no Drime Cloud:", error);
        alert(`ATENÇÃO: Registros salvos localmente, mas ERRO ao sincronizar com o Drime Cloud. Detalhe: ${error.message}`);
        // Retorna true pois a persistência local foi bem-sucedida, mas alerta sobre o erro na nuvem.
        return true; 
    }
}


// =========================================================
// 🔄 FUNÇÕES DE EXIBIÇÃO E PROCESSAMENTO (Adaptadas para async)
// =========================================================

/**
 * Atualiza a tabela na tela com os dados salvos localmente.
 */
function atualizarExibicao() {
  const registrosSalvos = carregarRegistros();
  document.getElementById("resultado").innerHTML = exibirRegistros(registrosSalvos);
  document.getElementById("btnVerificacao").disabled = registrosSalvos.length === 0;
}


/**
 * 📤 EXPORTA REGISTROS (Função de download local inalterada)
 */
function exportarRegistros() {
  const registros = carregarRegistros();
  if (registros.length === 0) {
    alert('Não há registros para exportar.');
    return;
  }
  
  // Usa a função de geração de CSV
  const blob = generateCsvBlob(registros);
  
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'registros_ponto_local.csv';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}


/**
 * 🏭 PROCESSAMENTO PRINCIPAL E SINCRONIZAÇÃO
 */
async function processarDados() { // Tornada assíncrona
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

  let registrosExistentes = carregarRegistros();

  // Mescla registros
  const registrosCompletos = mergeRegistrosPreservandoOrdem(registrosExistentes, registrosNovos);
  
  // 🚨 Salva LCL e sincroniza com o Drime Cloud (aguardando a operação)
  await salvarRegistros(registrosCompletos);

  // Atualiza exibição com todos os registros (antigos + novos)
  atualizarExibicao();

  // Opcional: Limpar o campo
  // document.getElementById("pontoData").value = '';
}

/**
 * Limpa todos os registros salvos
 */
function limparRegistros() {
  if (confirm("Tem certeza que deseja excluir TODOS os registros (Locais e da Nuvem)? Esta ação não pode ser desfeita.")) {
    localStorage.removeItem('pontoData');
    // Poderia adicionar uma chamada de API aqui para deletar o arquivo na nuvem,
    // mas isso exigiria o endpoint de exclusão do Drime.
    atualizarExibicao();
  }
}


// =========================================================
// 🚀 EVENT LISTENERS E INICIALIZAÇÃO
// =========================================================

document.getElementById("btnProcessar").addEventListener("click", processarDados);
document.getElementById("btnVerificacao").addEventListener("click", () => {
  window.open("verificacao.html", "_blank");
});

// Cria botão de exportação e adiciona evento
const btnExportar = document.createElement('button');
btnExportar.id = 'btnExportar';
btnExportar.textContent = 'Exportar Registros CSV (Local)';
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

// Ao carregar a página, exibe os registros salvos
window.addEventListener('load', () => {
  atualizarExibicao();
});
