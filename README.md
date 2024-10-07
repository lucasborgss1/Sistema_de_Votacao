# Sistema de Votação

## Objetivo
O projeto consiste em um sistema de votação simples, permitindo que os usuários votem em candidatos posicionados em duas colunas: esquerda e direita. O sistema tem como foco a interação do usuário com a interface, possibilitando a adição de votos até um limite predefinido para cada lado.

## Funcionalidades
 **Adição de Votos:**
   - Os usuários podem votar em candidatos posicionados à esquerda ou à direita.
   - Cada lado tem um limite máximo de 10 votos. Quando o limite é atingido, uma mensagem é exibida, informando que o slot correspondente está cheio.

 **Exibição Dinâmica:**
   - Os votos são exibidos dinamicamente na interface, à medida que os usuários clicam nos botões de votação.
   - Cada voto é representado por uma div estilizada, que exibe o número do voto e a direção (esquerda ou direita).

 **Feedback Visual:**
   - O sistema fornece feedback visual imediato, atualizando a interface com a contagem de votos.
   - Uma mensagem informativa é exibida para o usuário, indicando se o limite de votos foi alcançado para cada lado.

## Tecnologias Utilizadas
- **HTML:** Estruturação da interface do usuário.
- **CSS:** Estilização da interface, incluindo cores, margens, e design responsivo.
- **JavaScript:** Lógica do sistema de votação, gerenciamento de estados (arrays de votos) e manipulação do DOM para exibição dinâmica dos candidatos.

## Design
A interface apresenta um layout simples e intuitivo, dividido em duas seções principais (uma para cada lado da votação). Os botões de votação estão claramente visíveis, facilitando a interação do usuário. As cores são escolhidas para proporcionar uma boa legibilidade e um visual atraente.

## Escalabilidade
Este sistema de votação pode ser expandido para incluir mais funcionalidades, como:
- Persistência de dados (armazenamento em banco de dados para votos).
- Sistema de autenticação para usuários.
- Análise de dados de votação (gráficos e estatísticas).

## Conclusão
O projeto de Sistema de Votação é uma aplicação prática que demonstra conceitos de desenvolvimento web, incluindo manipulação do DOM, interatividade, e design responsivo. Ele pode servir como base para projetos mais complexos que exigem um sistema de votação mais robusto e escalável.
