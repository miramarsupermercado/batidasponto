const escala = {
  "LENILDO": [1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
  "GEFLY": [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 25, 27, 28, 29, 30],
  "LUANDERSON": [1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27, 29],
  "JOSE CARLOS": [1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 25, 26, 27, 28, 29, 30],
  "CELSO": [1, 3, 4, 5, 6, 7, 8, 10, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29],
  "BRUNO": [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 27, 28, 29, 30],
  "ANTENOR": [1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
  "LAYNE": [1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30],
  "MAURICIO": [1, 3, 4, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 20, 21, 22, 24, 25, 26, 27, 28, 29],
  "ALICIA": [1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
  "MARAIZA": [1, 2, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30],
  "NATALIA": [1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 25, 26, 27, 28, 29, 30],
  "RAYSSA": [1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 26, 27, 28, 29, 30],
  "GUILHERME": [1, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 24, 25, 26, 27, 28, 29],
  "DAVID": [1, 2, 3, 4, 6, 7, 8, 9, 10, 11],
  "IGOR": [1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27, 29],
  "MARIA MARIANO": [1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27, 29],
  "JACIELE": [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 15, 17, 18, 19, 20, 21, 22, 24, 25, 26, 28, 29, 30],
  "VANEIDE": [1, 2],
  "MESSIAS": [1, 3, 4, 5, 6, 7, 8, 11, 12, 14, 15, 16, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29],
  "ISABELE": [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 25, 27, 28, 29, 30],
  "JEFET": [1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 28, 29],
  "CESAR": [1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 26, 27, 28, 29, 30],
  "ELTON": [1, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 15, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 29, 30],
  "JOANDERSON": [1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
  "WELDO": [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 30],
  "LIDIANE": [1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 26, 27, 28, 29, 30],
  "ANE ISABELLE": [1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 25, 26, 27, 28, 29, 30],
  "ROBERTO": [1, 3, 4, 5, 6, 7, 8, 10, 11, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 27, 28, 29],
  "GISELE": [1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 28, 29],
  "ERINALDO": [1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27, 29],
  "ISAC": [1, 2, 3, 8],
  "LUCAS": [1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
  "FELIPE": [1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
  "ARTHUR": [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 21, 22, 23, 24, 25, 26, 28, 29, 30],
  "VALTERCIO": [1, 3, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
  "ADEMIR": [1, 3, 4, 5, 7, 8, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
  "ZEZINHO": [1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
  "RICARDO": [1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
  "MARCIO": [1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
  "FABIO": [1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
  "GUTENBERG": [1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
  "JOSE ALVES": [5, 6, 7, 8, 10, 11, 12, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 28, 29],
  "DENILSON": [8, 10, 11, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23, 24, 25, 27, 28, 29, 30],
  "MARIA JOSE": [8, 10, 11, 12, 14, 15, 16, 17, 18, 19, 21, 22, 24, 25, 26, 28, 29, 30],
  "JOANA": [3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 24, 25, 26, 27, 28]
};

// Mapeamento de funcionários para setores
const setores = {
  "AÇOUGUE E FRIOS": ["BRUNO", "CELSO", "GEFLY", "ANTENOR", "JOSE ALVES", "JOSE CARLOS", "LENILDO", "LUANDERSON"],
  "ASG": ["ZEZINHO"],
  "FRENTE DE LOJA": ["ALICIA", "DAVID", "DENILSON", "GUILHERME", "IGOR", "JACIELE", "JOANA", "MARAIZA", "MARIA JOSE", "LAYNE", "MARIA MARIANO", "MAURICIO", "NATALIA", "RAYSSA"],
  "HORTIFRUT": ["ARTHUR", "VALTERCIO"],
  "JOVEM APRENDIZ": ["LUCAS", "FELIPE"],
  "MOTORISTAS": ["RICARDO"],
  "OPERADOR DE LOJA": ["ELTON", "ISABELE", "JEFET", "JOANDERSON", "MESSIAS", "CESAR", "VANEIDE"],
  "PADARIA": ["ADEMIR", "ANE ISABELLE", "ERINALDO", "GISELE", "ISAC", "LIDIANE", "ROBERTO", "WELDO"],
  "PREVENÇÃO": ["GUTENBERG"],
  "RECEBIMENTO E DEPOSITO": ["FABIO", "MARCIO"]
};


function temDuplicidade(horarios) {
  if (horarios.length <= 1) return false;
  const minutos = horarios.map(h => {
    const [hStr, mStr] = h.horaMinuto.split(":");
    return parseInt(hStr, 10) * 60 + parseInt(mStr, 10);
  }).sort((a, b) => a - b);

  for (let i = 1; i < minutos.length; i++) {
    if (minutos[i] === minutos[i - 1]) return true;
  }
  for (let i = 1; i < minutos.length; i++) {
    if (minutos[i] - minutos[i - 1] <= 5) return true;
  }
  return false;
}

function statusDia(registrosDia) {
  const qtd = registrosDia.length;
  if (qtd === 4) {
    if (temDuplicidade(registrosDia)) return "duplicate";
    else return "ok";
  } else if (qtd < 4) return "absent";
  else return "excess";
}

function carregarDadosParaCorrecao() {
  const raw = localStorage.getItem('pontoData');
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function agruparRegistros(registros) {
  const agrupado = {};
  for (const reg of registros) {
    if (!reg.nome) continue;
    if (reg.mesNum !== 11) continue;
    if (!agrupado[reg.nome]) agrupado[reg.nome] = {};
    if (!agrupado[reg.nome][reg.diaNum]) agrupado[reg.nome][reg.diaNum] = [];
    agrupado[reg.nome][reg.diaNum].push(reg);
  }
  return agrupado;
}

// Captura quais toggles de funcionários estão abertos
function getOpenToggles() {
    const openState = {};
    document.querySelectorAll('.funcionario-section').forEach(section => {
        const func = section.dataset.funcionario;
        const toggleInput = section.querySelector('input[type="checkbox"]');
        if (func && toggleInput && toggleInput.checked) {
            openState[func] = true;
        }
    });
    return openState;
}

// NOVO CÁLCULO: Encontra a última data de registro de todos os funcionários.
function getUltimaDataRegistrada(pontoPorFuncionarioData) {
    let ultimaData = 0;
    for (const func in pontoPorFuncionarioData) {
        for (const dia in pontoPorFuncionarioData[func]) {
            const diaNum = parseInt(dia, 10);
            if (diaNum > ultimaData) {
                ultimaData = diaNum;
            }
        }
    }
    return ultimaData;
}

// renderizarCorrecao aceita o estado dos toggles abertos
function renderizarCorrecao(pontoPorFuncionarioData, openToggles = {}) {
  const container = document.getElementById("correcaoConteudo");
  container.innerHTML = '';

  const funcionariosComEscala = Object.keys(escala);

  if (funcionariosComEscala.length === 0) {
    container.innerHTML = '<p class="message">Nenhum funcionário encontrado.</p>';
    document.getElementById('btnSalvar').disabled = true;
    return;
  }

  // Define a última data a ser exibida (baseado no último ponto batido por qualquer funcionário)
  const ultimaDataGlobal = getUltimaDataRegistrada(pontoPorFuncionarioData); 
  if (ultimaDataGlobal === 0) {
    container.innerHTML = '<p class="message">Nenhum registro de ponto encontrado para o mês 11/2023.</p>';
    document.getElementById('btnSalvar').disabled = true;
    return;
  }

  // Carregar bancoHoras do localStorage
  let bancoHoras = {};
  const bancoRaw = localStorage.getItem('bancoHoras');
  if (bancoRaw) {
    try {
      bancoHoras = JSON.parse(bancoRaw);
    } catch {
      bancoHoras = {};
    }
  }

  for (const setor of Object.keys(setores)) {

    const setorContainer = document.createElement('div');
    setorContainer.className = 'setor-container';

    const setorHeader = document.createElement('h2');
    setorHeader.textContent = setor;
    setorHeader.style.marginTop = '20px';
    setorContainer.appendChild(setorHeader);

    let temFuncionarioParaMostrar = false;

    for (const func of setores[setor]) {
      if (!escala[func]) continue;

      const diasEscala = escala[func];
      const pontoDias = pontoPorFuncionarioData[func] || {};

      // Filtra os dias da escala do funcionário até a última data global registrada
      const diasParaMostrar = diasEscala.filter(dia => dia <= ultimaDataGlobal);

      if (diasParaMostrar.length === 0) continue;

      temFuncionarioParaMostrar = true;

      const funcSection = document.createElement('section');
      funcSection.className = 'funcionario-section';
      funcSection.dataset.funcionario = func; 

      // Criar toggle para mostrar/ocultar os dados do funcionário
      const toggleLabel = document.createElement('label');
      toggleLabel.style.fontWeight = 'bold';
      toggleLabel.style.cursor = 'pointer';
      toggleLabel.style.display = 'block';

      const toggleInput = document.createElement('input');
      toggleInput.type = 'checkbox';
      
      // Verifica se deve começar aberto
      const isChecked = openToggles[func] || false;
      toggleInput.checked = isChecked; 
      
      toggleInput.style.marginRight = '8px';

      toggleLabel.appendChild(toggleInput);
      toggleLabel.appendChild(document.createTextNode(func));
      funcSection.appendChild(toggleLabel);

      const tabela = document.createElement('table');
      tabela.style.marginTop = '8px';
      // Esconde/mostra a tabela com base no estado salvo
      tabela.style.display = isChecked ? '' : 'none'; 

      const thead = document.createElement('thead');
      thead.innerHTML = `<tr>
        <th>Dia</th>
        <th>Horários Registrados</th>
        <th>Status</th>
        <th>Ações</th>
        <th>Folga Abonada</th>
        <th>Horários Justificados</th>
        <th>Justificativa (Texto)</th>
      </tr>`;
      tabela.appendChild(thead);

      const tbody = document.createElement('tbody');

      for (const dia of diasParaMostrar) {
        const registrosDia = pontoDias[dia] || [];
        const st = statusDia(registrosDia);

        const tr = document.createElement('tr');
        tr.dataset.funcionario = func;
        tr.dataset.dia = dia;

        const tdDia = document.createElement('td');
        tdDia.textContent = dia;
        tr.appendChild(tdDia);

        const tdHorarios = document.createElement('td');

        for (let idx = 0; idx < registrosDia.length; idx++) {
          const reg = registrosDia[idx];

          const inputHora = document.createElement('input');
          inputHora.type = 'time';
          inputHora.value = reg.horaMinuto;
          inputHora.title = 'Editar horário';
          inputHora.style.marginRight = '6px';

          inputHora.addEventListener('change', e => {
            reg.horaMinuto = e.target.value;
            const [h, m] = e.target.value.split(':');
            reg.hora = h;
            reg.minuto = m;
            reg.horaNum = parseInt(h, 10);
            reg.minutoNum = parseInt(m, 10);
          });

          tdHorarios.appendChild(inputHora);

          ((remIndex) => {
            const btnExcluir = document.createElement('button');
            btnExcluir.textContent = 'Excluir';
            btnExcluir.className = 'btn-excluir';
            btnExcluir.title = 'Excluir esta marcação';
            btnExcluir.addEventListener('click', () => {
              // Captura o estado antes de re-renderizar
              const openState = getOpenToggles();

              registrosDia.splice(remIndex, 1);
              // Passa o estado para manter a tela aberta
              renderizarCorrecao(pontoPorFuncionarioData, openState);
            });
            tdHorarios.appendChild(btnExcluir);
            tdHorarios.appendChild(document.createElement('br'));
          })(idx);
        }

        const btnAdicionar = document.createElement('button');
        btnAdicionar.textContent = 'Adicionar Horário';
        btnAdicionar.className = 'btn-adicionar';
        btnAdicionar.addEventListener('click', () => {
          // Captura o estado antes de re-renderizar
          const openState = getOpenToggles();

          if (!pontoPorFuncionarioData[func]) pontoPorFuncionarioData[func] = {};
          if (!pontoPorFuncionarioData[func][dia]) pontoPorFuncionarioData[func][dia] = [];

          const novoReg = {
            nome: func,
            pis: '',
            data: `${dia.toString().padStart(2,'0')}/11/2023`,
            hora: '08',
            minuto: '00',
            diaNum: dia,
            mesNum: 11,
            anoNum: 2023,
            horaNum: 8,
            minutoNum: 0,
            horaMinuto: '08:00'
          };
          pontoPorFuncionarioData[func][dia].push(novoReg);
          
          // Passa o estado para manter a tela aberta
          renderizarCorrecao(pontoPorFuncionarioData, openState);
        });
        tdHorarios.appendChild(btnAdicionar);

        tr.appendChild(tdHorarios);

        const tdStatus = document.createElement('td');
        let statusTexto = '';
        let classeStatus = '';
        switch(st) {
          case 'absent':
            statusTexto = 'Faltam marcações';
            classeStatus = 'absent';
            break;
          case 'duplicate':
            statusTexto = 'Duplicidade';
            classeStatus = 'duplicate';
            break;
          case 'excess':
            statusTexto = 'Excesso de marcações';
            classeStatus = 'excess';
            break;
          case 'ok':
            statusTexto = 'OK';
            classeStatus = 'present';
            break;
        }
        tdStatus.textContent = statusTexto;
        tdStatus.className = classeStatus;
        tr.appendChild(tdStatus);

        // Coluna para seleção de Folga Abonada (checkbox)
        const tdFolga = document.createElement('td');
        const chkFolga = document.createElement('input');
        chkFolga.type = 'checkbox';
        chkFolga.dataset.funcionario = func;
        chkFolga.dataset.dia = dia;
        chkFolga.checked = bancoHoras[func]?.[dia]?.folgaAbonada || false;
        chkFolga.title = 'Folga Abonada';
        tdFolga.appendChild(chkFolga);
        tr.appendChild(tdFolga);

        // Coluna para seleção de horários justificados (select) - COM NOVAS OPÇÕES
        const tdHorariosJustificados = document.createElement('td');
        const selectHorarios = document.createElement('select');
        selectHorarios.dataset.funcionario = func;
        selectHorarios.dataset.dia = dia;

        const options = [
          {value: '', text: 'Nenhum'},
          // Opções BH
          {value: 'BH_1', text: 'BH - 1º Horário'},
          {value: 'BH_2', text: 'BH - 2º Horário'},
          {value: 'BH_all', text: 'BH - O dia todo'},
          // Novas Opções Atestado Médico
          {value: 'AM_all', text: 'Atestado Médico'},
          {value: 'AM_1', text: 'Atestado Médico - 1º Horário'},
          {value: 'AM_2', text: 'Atestado Médico - 2º Horário'}
        ];

        options.forEach(opt => {
          const optionElem = document.createElement('option');
          optionElem.value = opt.value;
          optionElem.textContent = opt.text;
          selectHorarios.appendChild(optionElem);
        });
        if (bancoHoras[func]?.[dia]?.horariosJustificados) {
          selectHorarios.value = bancoHoras[func][dia].horariosJustificados;
        } else {
          selectHorarios.value = '';
        }
        tdHorariosJustificados.appendChild(selectHorarios);
        tr.appendChild(tdHorariosJustificados);

        // Coluna para justificativa (textarea)
        const tdJustificativa = document.createElement('td');
        tdJustificativa.className = 'justificativa-container';
        const textareaJustificativa = document.createElement('textarea');
        textareaJustificativa.rows = 3;
        textareaJustificativa.placeholder = 'Detalhes da justificativa';
        textareaJustificativa.dataset.funcionario = func;
        textareaJustificativa.dataset.dia = dia;
        if (window.justificativas && window.justificativas[func] && window.justificativas[func][dia]) {
          textareaJustificativa.value = window.justificativas[func][dia];
        }
        tdJustificativa.appendChild(textareaJustificativa);
        tr.appendChild(tdJustificativa);

        tbody.appendChild(tr);
      }

      tabela.appendChild(tbody);
      funcSection.appendChild(tabela);
      setorContainer.appendChild(funcSection);

      // Toggle para mostrar/ocultar tabela
      toggleInput.addEventListener('change', () => {
        tabela.style.display = toggleInput.checked ? '' : 'none';
      });
    }

    if (temFuncionarioParaMostrar) {
      container.appendChild(setorContainer);
    }
  }

  document.getElementById('btnSalvar').disabled = false;
}

function salvarCorrecoes(pontoPorFuncionarioData) {
  let registrosCorrigidos = [];

  for (const func in pontoPorFuncionarioData) {
    for (const dia in pontoPorFuncionarioData[func]) {
      if (Array.isArray(pontoPorFuncionarioData[func][dia]) && pontoPorFuncionarioData[func][dia].length > 0) {
        registrosCorrigidos = registrosCorrigidos.concat(pontoPorFuncionarioData[func][dia]);
      }
    }
  }

  window.justificativas = window.justificativas || {};
  document.querySelectorAll('.justificativa-container textarea').forEach(textarea => {
    const func = textarea.dataset.funcionario;
    const dia = parseInt(textarea.dataset.dia, 10);
    if (!window.justificativas[func]) window.justificativas[func] = {};
    window.justificativas[func][dia] = textarea.value.trim();
  });

  localStorage.setItem('pontoData', JSON.stringify(registrosCorrigidos));
  localStorage.setItem('justificativas', JSON.stringify(window.justificativas));

  const bancoHoras = {};

  document.querySelectorAll('input[type=checkbox][title="Folga Abonada"]').forEach(chk => {
    const func = chk.dataset.funcionario;
    const dia = parseInt(chk.dataset.dia, 10);
    if (!bancoHoras[func]) bancoHoras[func] = {};
    if (!bancoHoras[func][dia]) bancoHoras[func][dia] = { folgaAbonada: false, horariosJustificados: '' };
    bancoHoras[func][dia].folgaAbonada = chk.checked;
  });

  document.querySelectorAll('select').forEach(select => {
    if (!select.dataset.funcionario || !select.dataset.dia) return;
    const func = select.dataset.funcionario;
    const dia = parseInt(select.dataset.dia, 10);
    if (!bancoHoras[func]) bancoHoras[func] = {};
    if (!bancoHoras[func][dia]) bancoHoras[func][dia] = { folgaAbonada: false, horariosJustificados: '' };
    bancoHoras[func][dia].horariosJustificados = select.value;
  });

  localStorage.setItem('bancoHoras', JSON.stringify(bancoHoras));

  const msg = document.getElementById('msgStatus');
  msg.textContent = 'Correções salvas com sucesso!';
  msg.style.color = 'green';
}

document.addEventListener('DOMContentLoaded', () => {
  const registros = carregarDadosParaCorrecao();
  if (!registros) {
    document.getElementById('correcaoConteudo').innerHTML = '<p class="message">Nenhum dado encontrado para correção. Volte para a página principal e processe os dados.</p>';
    document.getElementById('btnSalvar').disabled = true;
    return;
  }

  const justRaw = localStorage.getItem('justificativas');
  if (justRaw) {
    try {
      window.justificativas = JSON.parse(justRaw);
    } catch {
      window.justificativas = {};
    }
  } else {
    window.justificativas = {};
  }

  const pontoPorFuncionarioData = agruparRegistros(registros);
  renderizarCorrecao(pontoPorFuncionarioData);

  // Adicionar botões Exportar e Importar acima do conteúdo
  const container = document.getElementById('correcaoConteudo').parentElement;
  const containerBotoes = document.createElement('div');
  containerBotoes.style.marginBottom = '15px';

  const btnExportar = document.createElement('button');
  btnExportar.textContent = 'Exportar Correções';
  btnExportar.style.marginRight = '10px';

  const btnImportar = document.createElement('button');
  btnImportar.textContent = 'Importar Correções';

  const inputArquivo = document.createElement('input');
  inputArquivo.type = 'file';
  inputArquivo.accept = 'application/json';
  inputArquivo.style.display = 'none';

  containerBotoes.appendChild(btnExportar);
  containerBotoes.appendChild(btnImportar);
  containerBotoes.appendChild(inputArquivo);
  container.insertBefore(containerBotoes, document.getElementById('correcaoConteudo'));

  btnExportar.addEventListener('click', () => {
    const pontoData = localStorage.getItem('pontoData') || '[]';
    const justificativas = localStorage.getItem('justificativas') || '{}';
    const bancoHoras = localStorage.getItem('bancoHoras') || '{}';

    const dadosExportar = {
      pontoData: JSON.parse(pontoData),
      justificativas: JSON.parse(justificativas),
      bancoHoras: JSON.parse(bancoHoras),
    };

    const blob = new Blob([JSON.stringify(dadosExportar, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'correcoes_exportadas.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  btnImportar.addEventListener('click', () => {
    inputArquivo.click();
  });

  inputArquivo.addEventListener('change', (event) => {
    const arquivo = event.target.files[0];
    if (!arquivo) return;

    const leitor = new FileReader();
    leitor.onload = (e) => {
      try {
        const dados = JSON.parse(e.target.result);

        if (dados.pontoData && dados.justificativas && dados.bancoHoras) {
          localStorage.setItem('pontoData', JSON.stringify(dados.pontoData));
          localStorage.setItem('justificativas', JSON.stringify(dados.justificativas));
          localStorage.setItem('bancoHoras', JSON.stringify(dados.bancoHoras));

          location.reload();
        } else {
          alert('Arquivo inválido: dados faltando.');
        }
      } catch {
        alert('Erro ao ler o arquivo. Verifique se o arquivo é um JSON válido exportado pelo sistema.');
      }
    };
    leitor.readAsText(arquivo);
  });

  document.getElementById('btnSalvar').addEventListener('click', () => salvarCorrecoes(pontoPorFuncionarioData));
});
