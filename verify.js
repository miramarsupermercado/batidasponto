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

function temDuplicidade(horarios) {
  if (horarios.length <= 1) return false;
  const minutos = horarios.map(h => {
    const [hStr, mStr] = h.horaMinuto.split(":");
    return parseInt(hStr, 10)*60 + parseInt(mStr, 10);
  }).sort((a,b) => a-b);

  for (let i = 1; i < minutos.length; i++) {
    if (minutos[i] === minutos[i-1]) return true;
  }
  for (let i = 1; i < minutos.length; i++) {
    if (minutos[i] - minutos[i-1] <= 5) return true;
  }
  return false;
}

function encontrarMaiorDia(pontoPorFuncionarioData) {
  let maiorDia = 0;
  for (const func in pontoPorFuncionarioData) {
    for (const diaStr in pontoPorFuncionarioData[func]) {
      const dia = parseInt(diaStr, 10);
      if (dia > maiorDia) maiorDia = dia;
    }
  }
  return maiorDia;
}

function exibirVerificacao(pontoPorFuncionarioData) {
  const maiorDia = encontrarMaiorDia(pontoPorFuncionarioData) || 30;

  let html = '<table><thead><tr><th>Funcionário</th>';
  for(let d = 1; d <= maiorDia; d++) {
    html += `<th>${d}</th>`;
  }
  html += '</tr></thead><tbody>';

  for (const func in escala) {
    html += `<tr><td>${func}</td>`;
    const diasEscala = escala[func];
    const pontoDias = pontoPorFuncionarioData[func] || {};

    for (let d = 1; d <= maiorDia; d++) {
      if (!diasEscala.includes(d)) {
        html += '<td></td>';
        continue;
      }
      const registrosDia = pontoDias[d] || [];
      const qtd = registrosDia.length;

      if (qtd === 4) {
        if (temDuplicidade(registrosDia)) {
          html += `<td class="duplicate" title="Horários duplicados ou próximos (<= 5 minutos)">Duplicidade</td>`;
        } else {
          html += '<td class="present">OK</td>';
        }
      } else if (qtd < 4) {
        html += `<td class="absent" title="Faltam ${4 - qtd} marcação(ões)">Faltam</td>`;
      } else if (qtd > 4) {
        html += `<td class="warning" title="Excesso de ${qtd - 4} marcação(ões)">Excesso</td>`;
      }
    }
    html += '</tr>';
  }
  html += '</tbody></table>';
  return html;
}

document.getElementById("btnCorrecao").addEventListener("click", () => {
  window.open("correcao.html", "_blank");
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("verificacaoResultado");
  const raw = localStorage.getItem('pontoData');
  if (!raw) {
    container.innerHTML = '<p class="message">Nenhum dado carregado. Volte para a página principal.</p>';
    return;
  }

  let registros;
  try {
    registros = JSON.parse(raw);
  } catch {
    container.innerHTML = '<p class="message">Erro ao carregar os dados. Volte para a página principal.</p>';
    return;
  }

  const pontoPorFuncionarioData = {};
  for (const reg of registros) {
    if (!reg.nome) continue;
    if (reg.mesNum !== 11) continue; // Novembro fixo
    if (!pontoPorFuncionarioData[reg.nome]) pontoPorFuncionarioData[reg.nome] = {};
    if (!pontoPorFuncionarioData[reg.nome][reg.diaNum]) pontoPorFuncionarioData[reg.nome][reg.diaNum] = [];
    pontoPorFuncionarioData[reg.nome][reg.diaNum].push(reg);
  }

  container.innerHTML = '<h2>Verificação da Escala (Novembro) - 4 horários por dia + Duplicidades</h2>' + exibirVerificacao(pontoPorFuncionarioData);
});