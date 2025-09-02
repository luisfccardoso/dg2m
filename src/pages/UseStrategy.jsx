import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div className="main-page">
      <header className="main-header">
        <h1>Estratégia de Uso do DG2M</h1>
        <p>Sugestão de Uso do DG2M</p>
      </header>

      <section class="main-section" id="overview">
        <p>
          Para utilizar o DG2M, é importante que a organização adote uma abordagem estruturada para diagnosticar seu nível de maturidade em Governança de Dados (GD) e planejar sua evolução contínua. A estratégia de uso sugerida pode ser dividida nas seguintes etapas principais:
        </p>
        <ol>
          <li>
            <strong>Adaptação do Modelo à Realidade da Organização:</strong>
            <ul>
              <li>A equipe de avaliação deve analisar as dimensões, níveis, papéis e aspectos do modelo DG2M e realizar as adaptações necessárias para que ele se ajuste à realidade da organização.</li>
              <li>É fundamental ajustar a linguagem e os termos do modelo para que se alinhem à realidade e ao contexto institucional, garantindo sua aplicabilidade, sem alterar o que é exigido em cada nível ou dimensão.</li>
              <li>Além disso, é importante determinar se a dimensão de Dados Abertos, que é opcional e relevante para organizações que buscam transparência ou são do setor público, deve ser incluída na avaliação.</li>
            </ul>
          </li>
          <br />
          <li>
            <strong>Definição de Papéis e Responsabilidades:</strong> <ul>
              <li>Para garantir a implementação eficaz das iniciativas de governança, a organização deve estabelecer de forma clara os papéis e suas responsabilidades.</li>
              <li>A organização pode usar, como base, os papéis e responsabilidades presentes no modelo, fazendo adaptações, se necessário.</li>
            </ul>
          </li>
          <br />
          <li>
            <strong>Diagnóstico da Maturidade Organizacional:</strong> <ul>
              <li>Essa etapa consiste em selecionar profissionais-chave da organização, em particular aqueles que exercem os papéis ligados à GD, como visto no modelo.</li>
              <li>As dimensões, os níveis e os aspectos do modelo devem ser apresentados a esses indivíduos, por meio de um formulário ou ferramenta de avaliação, para que possam diagnosticar o nível atual para cada dimensão e seus aspectos.</li>
            </ul>
          </li>
          <br />
          <li>
            <strong>Identificação do Nível Atual:</strong> <ul>
              <li>As respostas dos avaliadores devem ser analisadas e consolidadas para determinar o nível de maturidade da organização em cada dimensão.</li>
              <li>Dentro de cada dimensão, a avaliação se baseia em três aspectos: Pessoas, Políticas e Capacidades.</li>
              <li>O nível de maturidade de uma dimensão pode ser considerado o do aspecto com o menor nível, pois isso reflete o ponto de maior limitação da organização naquela dimensão.</li>
              <li>Com o valor de nível da dimensão definido para cada avaliador, faça a média para cada dimensão e encontre o nível atual de cada uma das dimensões.</li>
            </ul>
          </li>
          <br />
          <li>
            <strong>Planejamento e Execução das Melhorias:</strong> 
            <ul>
              <li>Com os níveis diagnosticados para cada dimensão, a equipe deve analisar o conjunto de práticas sugeridas oferecidas pelo modelo para cada nível, indicando as próximas etapas para avançar sua GD.</li>
              <li>O planejamento e a execução das melhorias devem ser priorizados com base nos objetivos de cada organização, bem como em sua realidade e benefícios que podem ser alcançados.</li>
              <li>É importante que as ações sejam associadas aos papéis e responsabilidades definidos anteriormente.</li>
            </ul>
          </li>
          <br />
          <li>
            <strong>Acompanhamento e Melhoria Contínua:</strong> <ul>
              <li>O processo de maturidade é cíclico. Após a implementação das melhorias ou em momento oportuno, a organização pode refazer a avaliação para medir o progresso e planejar os próximos ciclos de aprimoramento, buscando alcançar níveis de maturidade mais elevados e a inovação contínua.</li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="main-section" id="overview">
        <h2>Regra do Nível Mínimo</h2>
        <p>
          A maturidade de cada dimensão é determinada pela <strong>Regra do Nível Mínimo</strong>, ou seja, considera-se o menor nível entre os três aspectos, destacando possíveis gargalos.
        </p>
      </section>

    </div>
  );
};

export default Main;
