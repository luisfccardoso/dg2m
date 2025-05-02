import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div className="main-page">
      <header className="main-header">
        <h1>Modelo de Maturidade de Governança de Dados (DG2M): O Framework</h1>
        <p>Orientando Organizações para o Uso Estratégico de Dados</p>
      </header>

      <section className="main-section" id="overview">
        <h2>Sobre</h2>
        <p>
          Para operacionalizar oDG2M, é necessária uma metodologia, que permita medir o nível atual de maturidade de uma organização nas dimensões e aspectos definidos. A metodologia  tem caráter tanto diagnóstico—voltada à identificação de lacunas existentes—quanto desenvolvimental—com o objetivo de orientar melhorias estratégicas ao longo do tempo.
        </p>
        <p>
        O modelo é composto por seis níveis de maturidade, que vão do Nível 0 (Não Iniciado) ao Nível 5 (Otimizado). A maturidade organizacional é avaliada a partir de seis dimensões centrais: Estratégia e Governança de Dados, Equipes, Pessoas e Estrutura Organizacional, Formalização e Processos de Gestão de Dados, Qualidade dos Dados, Infraestrutura de Dados e Dados Abertos (opcional). 
        </p>
      </section>

      <section className="main-section" id="overview">
        <h2>Detalhes</h2>
        <p>
          O modelo de maturidade em governança de dados avalia cada uma das seis dimensões com base em três aspectos analíticos: Pessoas, Políticas e Capacidades.
        </p>

        <ul>
          <li>
            O aspecto Pessoas analisa o envolvimento dos profissionais na gestão de dados, incluindo conhecimento técnico, engajamento das equipes e clareza nas responsabilidades.
          </li>
          <li>
            O aspecto Políticas examina as diretrizes, normas e processos institucionais relacionados ao uso e à gestão de dados, como segurança, privacidade e conformidade com legislações.
          </li>
          <li>
            O aspecto Capacidades considera os recursos técnicos disponíveis, como ferramentas, tecnologias e infraestrutura voltadas ao processamento, análise e integração de dados.
          </li>
        </ul>
        <p>
          A combinação desses três aspectos permite uma avaliação da maturidade em governança de dados, cobrindo desde o engajamento humano até os recursos técnicos utilizados na prática. Cada resposta da avaliação é associada a um nível de maturidade conforme critérios predefinidos. A maturidade de cada dimensão é determinada pela Regra do Nível Mínimo, ou seja, considera-se o menor nível entre os três aspectos, destacando possíveis gargalos.
        </p>
      </section>

    </div>
  );
};

export default Main;
