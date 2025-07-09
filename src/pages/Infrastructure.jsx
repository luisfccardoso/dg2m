import React, { useState } from 'react';
import { NavLink, Link, Routes, Route, useLocation } from 'react-router-dom';
import './Main.css';

const dimensions = [
  {
    id: 'infrastructure',
    title: 'Infraestrutura para Dados',
    description:
      'Esta dimensão avalia a capacidade do ambiente tecnológica (hardware, software e arquitetura) da organização e sua adequação para armazenar, processar e integrar dados de forma eficiente. O foco está na prontidão e adequação das plataformas e ferramentas de TI ao ambiente tecnológico que a organização usa (se seja on-premises, nuvem pública, privada ou híbrida), incluindo a consideração de arquiteturas distribuídas em borda, visando suportar efetivamente a governança e o uso estratégico dos dados dentro do contexto do negócio. A avaliação abrange aspectos relacionados à escalabilidade, segurança e conformidade da infraestrutura de TI utilizada na gestão de dados. Além disso, inclui a avaliação da prontidão da infraestrutura, agilidade, escalabilidade, consistência arquitetural, uso de plataformas em nuvem (quando necessário), adoção de padrões de metadados e mecanismos de registro e relatórios. Considerações sobre segurança, gestão de riscos e capacidades de integração também são essenciais para garantir robustez e alinhamento regulatório ao ambiente tecnológico.',
    people:
      'Capacidade técnica das equipes para projetar, implementar, gerenciar, evoluir e otimizar a infraestrutura de dados, garantindo sua conformidade com os requisitos da arquitetura e a habilitação proativa dos níveis de serviço (SLAs) acordados para a gestão e o uso seguro e eficiente dos dados.',
    policies:
      'Existência de diretrizes que garantam a especificação e implementação da infraestrutura para suportar escalabilidade, segurança, integração e conformidade com padrões internos e externos.',
    capabilities:
      'Disponibilidade, prontidão e adequação das tecnologias e plataformas de TI. Inclui a existência e a funcionalidade de ferramentas para a operacionalização dos processos de gestão de dados e para a implementação de controles técnicos que visam atender aos requisitos de qualidade de dados e aos níveis de serviço (SLAs).',
    levels: [
      {
        title: 'Nível 0: Não Iniciado',
        content:
          'Neste nível, a infraestrutura é fragmentada, desatualizada e incapaz de lidar com grandes volumes de dados. Não há prontidão, integração ou consistência arquitetural para sustentar operações escaláveis com dados.',
        people:
          'Falta de conhecimento sobre ferramentas de dados, plataformas e boas práticas arquiteturais.',
        policies:
          'Não existem políticas formais para governança de TI, integração ou prontidão da infraestrutura.',
        capabilities:
          'Infraestrutura fragmentada com múltiplas fontes de dados isoladas, ausência de mecanismos de registro/relatórios e tecnologias desatualizadas.',
        improvement:
          'Promover workshops para aumentar a conscientização técnica sobre governança de dados e prontidão da infraestrutura. Mapear os recursos tecnológicos existentes e identificar lacunas críticas em escalabilidade e integração.',
      },
      {
        title: 'Nível 1: Inicial – Ad Hoc, Não Estruturado e/ou em Aprendizado',
        content:
          'Neste estágio, a organização começa a experimentar componentes básicos de infraestrutura de forma reativa e exploratória, sem consistência arquitetural.',
        people:
          'Algumas equipes técnicas experimentam soluções de armazenamento, análise e serviços em nuvem ou "on premises".',
        policies:
          'Diretrizes rudimentares existem para uso de ferramentas, mas sem padronização ou cobertura adequada de requisitos técnicos mínimos de segurança e resiliência, com pouca consideração à adequação para diferentes ambientes de implantação.',
        capabilities:
          'Soluções isoladas e localizadas são implementadas com integração ou escalabilidade limitadas.',
        improvement:
          'Estabelecer um comitê inicial para definir diretrizes de uso de ferramentas. Documentar práticas relacionadas à infraestrutura e definir o propósito e uso dos logs coletados, incluindo a definição de alertas e ações a serem tomadas com base neles. Explorar práticas iniciais de gestão de metadados e controles de segurança.',
      },
      {
        title: 'Nível 2: Emergente – Iniciativas Incipientes,  Transformação de Ativos e Processos Repetíveis',
        content:
          'Além das melhorias dos níveis anteriores, a infraestrutura começa a amadurecer. Plataformas de dados, padrões de metadados e controles de risco são introduzidos para apoiar uma integração mais ampla.',
        people:
          'As equipes recebem treinamentos sobre plataformas de dados.',
        policies:
          'Diretrizes e políticas técnicas básicas para a infraestrutura são adotadas, focando na integração de dados, na implementação de controles de segurança iniciais e na capacidade de recuperação inicial, para os modelos de implantação da organização (on-premises/nuvem).',
        capabilities:
          'Ferramentas de análise gerenciadas centralmente e soluções de metadados são introduzidas. O registro e relatório de logs começam a ser implementados, com controles básicos de integridade e retenção dos logs para futuras auditorias e investigações de incidentes.',
        improvement:
          'Investir em plataformas de dados e infraestrutura integrada para análise, buscando a adequação da infraestrutura para suportar necessidades da organização por dados e integração, considerando o ambiente tecnológico institucional. Definir padrões para consistência arquitetural e registro/relatórios. Reforçar práticas de risco e segurança, incluindo o estabelecimento de processos iniciais para o tratamento de incidentes de segurança da infraestrutura, começando a mapear a relação entre desempenho da infraestrutura e requisitos de nível de serviço.',
      },
      {
        title: 'Nível 3: Definido – Estruturado e Padronizado',
        content:
          'Além das melhorias dos níveis anteriores, a infraestrutura torna-se padronizada e alinhada à arquitetura corporativa, requisitos de privacidade e padrões de desempenho.',
        people:
          'As equipes colaboram proativamente no monitoramento de desempenho e no alinhamento arquitetural.',
        policies:
          'Políticas e diretrizes técnicas para a infraestrutura de dados são definidas e formalmente estabelecidas, garantindo a implementação de controles para escalabilidade, segurança e recuperabilidade de desastres. Essas políticas visam suportar os requisitos organizacionais de proteção de dados e o cumprimento dos Acordos de Nível de Serviço (SLAs) da infraestrutura.',
        capabilities:
          'Uso de plataformas de dados, registro e relatórios centralizados e gestão de metadados sustentam a consistência em nível corporativo.',
        improvement:
          'Implementar KPIs para monitoramento da agilidade, disponibilidade e desempenho da infraestrutura, avaliando sua adequação aos objetivos de negócio. Realizar auditorias regulares sobre conformidade, privacidade e controles de risco. Alinhar a infraestrutura com estratégias de continuidade de negócios, com foco em garantir o atendimento aos SLAs da infraestrutura e de dados.',
      },
      {
        title: 'Nível 4: Gerenciado – Medido e Preditivo',
        content:
          'Além das melhorias dos níveis anteriores, a infraestrutura é monitorada por métricas preditivas. Agilidade, gestão de riscos e capacidades de integração são continuamente avaliadas.',
        people:
          'As equipes utilizam dashboards para acompanhar desempenho, registros e indicadores de risco em tempo real ou quase real.',
        policies:
          'As políticas técnicas da infraestrutura de dados são dinamicamente atualizadas com base em métricas de desempenho, avaliações de segurança e revisões de conformidade. Elas são otimizadas para adequar ao contexto da infraestrutura organizacional.',
        capabilities:
          'Uma infraestrutura de dados suporta operações seguras e escaláveis. Controles obrigatórios de segurança e ingestão de dados são automatizados. Mecanismos garantem a persistência e proteção dos logs de transações, usuários e infraestrutura contra destruição ou falsificação, garantindo o atendimento proativo dos SLAs da infraestrutura.',
        improvement:
          'Otimizar sistemas de monitoramento preditivo e de alertas, buscando a antecipação de falhas e a otimização de custos. Refinar estratégias de integração com plataformas e serviços de terceiros, quando necessário. Automatizar fluxos de trabalho de segurança, conformidade e mitigação de riscos, incluindo a resposta automatizada a ameaças e a gestão proativa de vulnerabilidades e riscos de conformidade na infraestrutura, com foco contínuo na garantia e otimização dos SLAs da infraestrutura.',
      },
      {
        title: 'Nível 5: Otimizado – Inovação e Melhoria Contínua',
        content:
          'Além das melhorias dos níveis anteriores, a infraestrutura é tratada como um habilitador estratégico dinâmico de inovação. Integra-se perfeitamente com operações e suporta escalabilidade autônoma e conformidade.',
        people:
          'As equipes de infraestrutura e engenharia de dados avaliam e adotam tecnologias e práticas emergentes de infraestrutura, promovendo inovação e otimização contínua.',
        policies:
          'As políticas técnicas da infraestrutura de dados são adaptativas e proativas, quando necessário, governando atualizações de infraestrutura, integração e a implementação de mecanismos avançados de segurança em tempo real. Elas impulsionam a inovação tecnológica e asseguram a conformidade da infraestrutura com padrões e regulamentações escolhidas pela organização.',
        capabilities:
          'Soluções otimizam os serviços computacionais com agilidade, escalabilidade e desempenho; os sistemas de metadados, logs e registros são totalmente automatizados, quando necessário. Controles de segurança da infraestrutura são dinâmicos e auto-ajustáveis, utilizando IA para detecção e mitigação autônoma de ameaças, quando aplicávels, garantindo a superação ou excelência nos SLAs da infraestrutura.',
        improvement:
          'Realizar benchmarking com líderes em agilidade, segurança e integração de infraestrutura. Investir em ferramentas de orquestração e gerenciamento de infraestrutura com tecnologias adequadas à organização para garantir auto-organização, auto-recuperação e entrega de valor do dado ao negócio, buscando a superação contínua dos SLAs e a inovação em níveis de serviço. Promover aprendizado contínuo e pesquisa em tecnologias de infraestrutura e DevOps, com foco em inovações em segurança, arquiteturas de dados e eficiência operacional.',
      },
    ],
  },
];

const Dimensions = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLevel, setActiveLevel] = useState(0);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      <header className="main-header">
        <h1>Dimensões do DG2M</h1>
        <p>
          Para avaliar os níveis de maturidade, foram desenvolvidas seis dimensões as quais estão disponíveis abaixo.
        </p>
      </header>

      <div className="dimensions-wrapper">
        <button className="hamburger" onClick={toggleMenu}>
          ☰ Dimensões
        </button>

        <nav className={`sidebar ${menuOpen ? 'open' : 'closed'}`}>
          <ul className="nav-links1">
            <li><Link to="/strategy">Estratégia e Governança de Dados</Link></li>
            <li><Link to="/people">Cultura, Pessoas e Estrutura Organizacional</Link></li>
            <li><Link to="/formalization">Formalização e Processos de Gestão de Dados</Link></li>
            <li><Link to="/quality">Qualidade dos Dados</Link></li>
            <li>
              <NavLink to="/infrastructure" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Infraestrutura para Dados
              </NavLink>
            </li>
            <li><Link to="/open">Dados Abertos</Link></li>
          </ul>
        </nav>

        <main className="dimension-content">
          {(
            <>
              {dimensions.map((dim) => (
                <section key={dim.id}>
                  <h2>{dim.title}</h2>
                  <p>{dim.description}</p>

                  <p><strong>Aspectos principais avaliados:</strong></p>
                  <ul>
                    <li><strong>Pessoas:</strong> {dim.people}</li>
                    <li><strong>Políticas:</strong> {dim.policies}</li>
                    <li><strong>Capacidades:</strong> {dim.capabilities}</li>
                  </ul>

                  <div className="level-selector">
                    {dim.levels.map((level, index) => (
                      <button
                        key={index}
                        className={index === activeLevel ? 'selected' : ''}
                        onClick={() => setActiveLevel(index)}
                      >
                        {`Nível ${index}`}
                      </button>
                    ))}
                  </div>

                  <div className="level-detail">
                    <h4>{dim.levels[activeLevel].title}</h4>
                    <p>{dim.levels[activeLevel].content}</p>
                    <ul>
                      <li><strong>Pessoas:</strong> {dim.levels[activeLevel].people}</li>
                      <li><strong>Políticas:</strong> {dim.levels[activeLevel].policies}</li>
                      <li><strong>Capacidades:</strong> {dim.levels[activeLevel].capabilities}</li>
                    </ul>
                    <p><strong>Melhorias e práticas recorrentes para o nível:</strong> {dim.levels[activeLevel].improvement}</p>
                  </div>
                </section>
              ))}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dimensions;
