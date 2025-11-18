// Funções utilitárias
function minutosParaHoraMinuto(minutos) {
  const sinal = minutos < 0 ? '-' : '';
  minutos = Math.abs(minutos);
  const h = Math.floor(minutos / 60);
  const m = minutos % 60;
  return `${sinal}${h}h${m.toString().padStart(2, '0')}m`;
}

// Objeto 'escala' (MANTIDO DO CÓDIGO ORIGINAL)
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


// ----------------------------------------------------------------------
// LÓGICA DE INTERFACE E PERSISTÊNCIA DOS FERIADOS (MANTIDA)
// ----------------------------------------------------------------------

function setupFeriadosInterface() {
  const container = document.getElementById('feriados-controls');
  // Se o container não for encontrado, a interface não é exibida
  if (!container) return; 

  const feriadosRaw = localStorage.getItem('feriados') || '';

  let html = `
    <div style="margin-bottom: 15px; padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
      <label for="feriados-input" style="font-weight: bold; display: block; margin-bottom: 5px;">
        Adicionar Feriados do Mês (Dias do Mês, separados por vírgula):
      </label>
      <input type="text" id="feriados-input" 
             placeholder="Ex: 1, 15, 20" 
             value="${feriadosRaw}"
             style="width: 200px; padding: 5px; margin-right: 10px; border: 1px solid #aaa;">
      <button id="salvar-feriados" 
              style="padding: 5px 10px; cursor: pointer; background-color: #007bff; color: white; border: none; border-radius: 3px;">
              Salvar Feriados
      </button>
      <p style="font-size: 0.8em; margin-top: 5px;">
        Os dias definidos como feriado não aumentarão nem diminuirão o saldo de banco de horas.
      </p>
    </div>
  `;
  container.innerHTML = html;

  const input = document.getElementById('feriados-input');
  const button = document.getElementById('salvar-feriados');

  button.addEventListener('click', () => {
    const feriadosTexto = input.value.trim();
    
    // Validação básica: só permite números e vírgulas
    if (!/^[0-9, ]*$/.test(feriadosTexto)) {
        alert('Por favor, insira apenas números (dias do mês) e vírgulas.');
        return;
    }
    
    localStorage.setItem('feriados', feriadosTexto);
    alert('Feriados salvos com sucesso. A página será recarregada para aplicar o cálculo.');
    location.reload();
  });
}

// ----------------------------------------------------------------------
// FUNÇÃO PRINCIPAL DE CÁLCULO (MANTIDA)
// ----------------------------------------------------------------------

function calculaBancoHoras() {
  const raw = localStorage.getItem('pontoData');
  if (!raw) {
    return null;
  }

  let registros;
  try {
    registros = JSON.parse(raw);
  } catch {
    return null;
  }

  // NOVO: Carregar e processar feriados
  const feriadosRaw = localStorage.getItem('feriados') || '';
  const feriados = feriadosRaw.split(',')
                              .map(d => parseInt(d.trim(), 10))
                              .filter(d => !isNaN(d) && d > 0);
  
  const cargaSegSab = 440; // 7h20 min
  const cargaDom = 360;    // 6h

  // Mapear funcionários para setores conforme fornecido
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

  // Carregar justificativas (folga abonada e horários justificados)
  let bancoHoras = {};
  const bancoRaw = localStorage.getItem('bancoHoras');
  if (bancoRaw) {
    try {
      bancoHoras = JSON.parse(bancoRaw);
    } catch {
      bancoHoras = {};
    }
  }

  const horasPorFuncionarioDia = {};
  let maiorDia = 0;

  for (const reg of registros) {
    if (!reg.nome) continue;
    if (reg.mesNum !== 11) continue; // Fix November only

    if (!horasPorFuncionarioDia[reg.nome]) horasPorFuncionarioDia[reg.nome] = {};
    if (!horasPorFuncionarioDia[reg.nome][reg.diaNum]) horasPorFuncionarioDia[reg.nome][reg.diaNum] = [];

    const [hStr, mStr] = reg.horaMinuto.split(':');
    const minutos = parseInt(hStr, 10) * 60 + parseInt(mStr, 10);
    horasPorFuncionarioDia[reg.nome][reg.diaNum].push(minutos);

    if (reg.diaNum > maiorDia) {
      maiorDia = reg.diaNum;
    }
  }

  function eDomingoEspecial(dia) {
    const domingos = [2, 9, 16, 23, 30];
    return domingos.includes(dia);
  }

  const saldoPorFuncionario = {};
  const saldoPorFuncionarioDia = {};

  // Processar por setor e funcionário na ordem dos setores
  for (const setor of Object.keys(setores)) {
    for (const func of setores[setor]) {
      saldoPorFuncionario[func] = 0;
      saldoPorFuncionarioDia[func] = {};
      
      const diasEscala = escala[func] || []; // Pega a escala do funcionário

      for (let dia = 1; dia <= maiorDia; dia++) {
        
        // NOVO: 0. Verificar se é Feriado. Se for, ignora o cálculo e apenas marca.
        const eFeriado = feriados.includes(dia);
        if (eFeriado) {
          saldoPorFuncionarioDia[func][dia] = 'FERIADO';
          continue; 
        }

        // 1. Verificar se o funcionário estava escalado para o dia
        const estaEscalado = diasEscala.includes(dia);
        
        if (!estaEscalado) {
          saldoPorFuncionarioDia[func][dia] = null; // Dia fora da escala
          continue;
        }

        const pontos = horasPorFuncionarioDia[func]?.[dia]
          ? horasPorFuncionarioDia[func][dia].sort((a, b) => a - b)
          : [];
          
        const cargaDiaria = eDomingoEspecial(dia) ? cargaDom : cargaSegSab;
        
        // LÓGICA DE JUSTIFICATIVA DO DIA
        const justificativaDia = bancoHoras[func]?.[dia];
        const eJustificadoDiaTodo = justificativaDia && (
            justificativaDia.folgaAbonada === true ||
            justificativaDia.horariosJustificados === 'BH_all' ||
            justificativaDia.horariosJustificados === 'AM_all'
        );
        // FIM DA LÓGICA DE JUSTIFICATIVA DO DIA


        // 2. Tratar dias escalados sem pontos (Falta)
        if (pontos.length < 2) {
          let saldoDia = 0;
          
          if (eJustificadoDiaTodo) {
            saldoDia = 0; // Falta justificada: zera o saldo
          } else {
            saldoDia = -cargaDiaria; // Falta injustificada: penaliza com a carga horária
          }
          
          saldoPorFuncionarioDia[func][dia] = saldoDia;
          saldoPorFuncionario[func] += saldoDia;
          continue; 
        }

        // 3. Lógica para dias com pontos (original)
        let minutosTrabalhados = 0;

        if (pontos.length === 4) {
          minutosTrabalhados = (pontos[1] - pontos[0]) + (pontos[3] - pontos[2]);
        } else {
          // Lógica para pontos diferentes de 4 (se for > 1)
          minutosTrabalhados = pontos[pontos.length - 1] - pontos[0];
        }

        const diff = minutosTrabalhados - cargaDiaria;

        let saldoDia = 0;
        // Se o dia está totalmente justificado E o saldo é negativo (débito), zera o débito.
        if (eJustificadoDiaTodo && diff < 0) {
          saldoDia = 0;
        } else if (diff > 20 || diff < -20) {
          saldoDia = diff;
        } else {
          saldoDia = 0;
        }

        saldoPorFuncionarioDia[func][dia] = saldoDia;
        saldoPorFuncionario[func] += saldoDia;
      }
    }
  }

  return { saldoPorFuncionario, saldoPorFuncionarioDia, maiorDia, setores };
}

// ----------------------------------------------------------------------
// FUNÇÃO DE EXIBIÇÃO MODIFICADA (NOVA LÓGICA DE ORDENAÇÃO)
// ----------------------------------------------------------------------

function exibirResumoBancoHoras({ saldoPorFuncionario, saldoPorFuncionarioDia, maiorDia, setores }) {
  const container = document.getElementById('resumoHoras');
  if (!saldoPorFuncionario) {
    container.innerHTML = '<p class="message">Nenhum dado encontrado para cálculo do banco de horas.</p>';
    return;
  }

  // 1. Mapear todos os funcionários com seus saldos e setores
  const listaDeFuncionarios = [];
  for (const setor of Object.keys(setores)) {
    for (const func of setores[setor]) {
      listaDeFuncionarios.push({
        nome: func,
        setor: setor,
        saldo: saldoPorFuncionario[func] || 0 // Garante que o saldo seja numérico
      });
    }
  }

  // 2. ORDENAR a lista de funcionários pelo saldo em ordem crescente
  // Saldo crescente: -100 (maior débito) -> 0 -> +100 (maior crédito)
  listaDeFuncionarios.sort((a, b) => a.saldo - b.saldo); 
  
  // 3. Reagrupar a lista ordenada pelo setor, mantendo a ordem interna
  const funcionariosOrdenadosPorSetor = {};
  for (const item of listaDeFuncionarios) {
    if (!funcionariosOrdenadosPorSetor[item.setor]) {
      funcionariosOrdenadosPorSetor[item.setor] = [];
    }
    funcionariosOrdenadosPorSetor[item.setor].push(item);
  }
  

  let html = '';

  // 4. Renderizar a saída
  for (const setor of Object.keys(funcionariosOrdenadosPorSetor)) {
    html += `<h2>${setor}</h2>`;
    html += '<table><thead><tr><th>Funcionário</th>';

    for (let dia = 1; dia <= maiorDia; dia++) {
      html += `<th>${dia}</th>`;
    }
    html += '<th>Saldo Total</th></tr></thead><tbody>';

    // Itera sobre a lista JÁ ORDENADA do setor
    for (const { nome: func } of funcionariosOrdenadosPorSetor[setor]) {
      html += `<tr><td>${func}</td>`;

      for (let dia = 1; dia <= maiorDia; dia++) {
        const saldoDia = saldoPorFuncionarioDia[func]?.[dia];
        
        // NOVO: Verifica se é Feriado
        if (saldoDia === 'FERIADO') {
            html += `<td class="holiday">FERIADO</td>`;
        } else if (saldoDia === null || saldoDia === undefined) {
          html += '<td></td>';
        } else {
          let classe = '';
          if (saldoDia > 0) classe = 'present';
          else if (saldoDia < 0) classe = 'absent';
          html += `<td class="${classe}">${minutosParaHoraMinuto(saldoDia)}</td>`;
        }
      }

      const saldoTotal = saldoPorFuncionario[func];
      let classeTotal = '';
      if (saldoTotal > 0) classeTotal = 'present';
      else if (saldoTotal < 0) classeTotal = 'absent';

      html += `<td class="${classeTotal}"><strong>${minutosParaHoraMinuto(saldoTotal)}</strong></td>`;
      html += '</tr>';
    }

    html += '</tbody></table>';
  }

  container.innerHTML = html;
}

// ----------------------------------------------------------------------
// EVENTO DE CARREGAMENTO (MANTIDO)
// ----------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  // 1. Configura a interface de feriados (PROCURA PELO ID 'feriados-controls')
  setupFeriadosInterface();
    
  // 2. Roda o cálculo e exibe o resultado
  const resultado = calculaBancoHoras();
  if (resultado) {
    exibirResumoBancoHoras(resultado);
  } else {
    const container = document.getElementById('resumoHoras');
    container.innerHTML = '<p class="message">Nenhum dado encontrado para cálculo do banco de horas.</p>';
  }
});
