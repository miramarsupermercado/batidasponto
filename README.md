# Projeto Verificação de Ponto Eletrônico

## Como usar

1. Abra o arquivo `index.html` no navegador.
2. Cole os dados brutos do ponto eletrônico no campo indicado.
3. Clique em **Processar Dados** para extrair e exibir os registros.
4. Clique em **Ir para Verificação** para abrir a página de verificação.
5. Na página de verificação (`verificacao.html`), verá a tabela com a análise da escala e possíveis problemas:
   - OK: 4 horários corretos sem duplicidades
   - Faltam: menos que 4 marcações
   - Excesso: mais que 4 marcações
   - Duplicidade: marcações iguais ou próximas (intervalo ≤ 5 minutos)

## Observações

- Os dados são armazenados localmente no navegador (sessionStorage).
- Use navegadores modernos com suporte a sessionStorage.
- Para reiniciar, recarregue a página `index.html` e cole novos dados.