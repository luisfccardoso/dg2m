import React, { useState } from 'react';
import { NavLink, Link, Routes, Route, useLocation } from 'react-router-dom';
import './Main.css';

const dimensions = [
  {
    id: 'open',
    title: 'Dados Abertos',
    description:
      'Esta dimensão não é obrigatória e é particularmente relevante para organizações do setor público ou empresas que buscam fomentar a transparência, impulsionar a inovação e gerar impacto social positivo. Avalia a maturidade da organização na gestão, publicação e uso estratégico de dados disponibilizados publicamente (dados abertos), seguindo os princípios de serem livremente utilizáveis, reutilizáveis e redistribuíveis. A avaliação considera aspectos essenciais para garantir a reutilização, acessibilidade, interoperabilidade e a devida atribuição da fonte, ao longo de seu ciclo de vida. Abrange áreas políticas, organizacionais e técnicas, incluindo o planejamento, a priorização estratégica, o licenciamento claro, o versionamento, o formato (legível por máquina) e os mecanismos eficazes de engajamento e feedback com a comunidade de usuários.',
    people:
      'Capacitação e engajamento organizacional em práticas e iniciativas de dados abertos.',
    policies:
      'Regras e diretrizes para padronizar, gerenciar, licenciar e disponibilizar dados de forma transparente e responsável. Para órgãos públicos do Brasil, a aplicação e a adequação das políticas e práticas de dados abertos devem estar em estrito alinhamento com a legislação vigente (Lei de Acesso à Informação – LAI, Lei Geral de Proteção de Dados Pessoais – LGPD, Lei de Governo Digital) e as instruções normativas específicas para cada esfera de governo (Federal, Estadual, Municipal) ou Poder (Executivo, Legislativo, Judiciário), bem como os objetivos e gestão específica da organização.',
    capabilities:
      'Infraestrutura e ferramentas que apoiam a governança, o planejamento, o controle de versões e a publicação eficaz dos dados abertos.',
    levels: [
      {
        title: 'Nível 0: Não Iniciado',
        content:
          'Neste nível, não existem práticas ou políticas formais relacionadas a dados abertos. A organização carece de planejamento, priorização e compreensão do valor da transparência ou reutilização de dados.',
        people:
          'Não há papéis, responsabilidades ou treinamentos definidos relacionados a dados abertos.',
        policies:
          'Não existem políticas documentadas, padrões ou mecanismos de licenciamento para governança de dados abertos.',
        capabilities:
          'A infraestrutura é inexistente ou insuficiente para publicação, monitoramento ou promoção da transparência dos dados.',
        improvement:
          'Realizar sessões de treinamento iniciais sobre o valor e os propósitos dos dados abertos, enfatizando o potencial de inovação e impacto social. Iniciar a identificação de conjuntos de dados potenciais para abertura e sua organização básica.',
      },
      {
        title: 'Nível 1: Inicial – Ad Hoc, Não Estruturado e/ou em Aprendizado',
        content:
          'Iniciativas iniciais de dados abertos surgem de forma limitada e sem estrutura, muitas vezes desconectadas de estruturas organizacionais ou políticas mais amplas.',
        people:
          'Alguns papéis começam a ser definidos em áreas isoladas. Atividades de conscientização são realizadas, mas não institucionalizadas.',
        policies:
          'Licenças e diretrizes básicas são adotadas informalmente, mas sem consistência ou clareza sobre atribuição e reutilização, com um reconhecimento incipiente da necessidade de conformidade legal institucional ou regulatória.',
        capabilities:
          'Os dados são publicados de forma esporádica, muitas vezes em formatos não otimizados para leitura por máquina, com ferramentas limitadas para versionamento, feedback ou monitoramento de acesso.',
        improvement:
          'Estruturar e documentar iniciativas e processos existentes, focando em manter a simplicidade e a rapidez. Priorizar conjuntos de dados para publicação com base em impacto e potencial de reutilização, buscando \'começar pequeno, simples e rápido\'. Estabelecer diretrizes mínimas de versionamento e licenciamento, com foco em fácil compreensão da atribuição.',
      },
      {
        title: 'Nível 2: Emergente – Iniciativas Incipientes, Transformação de Ativos e Processos Repetíveis',
        content:
          'Além das melhorias dos níveis anteriores, as práticas de dados abertos começam a se consolidar com responsabilidades organizacionais mais definidas e padrões emergentes de planejamento e publicação.',
        people:
          'Papéis e responsabilidades para dados abertos são estabelecidos nos departamentos relevantes. Programas iniciais de treinamento são implementados.',
        policies:
          'Padrões de metadados, políticas de licenciamento e publicação são introduzidos, incluindo o requisito de formatos legíveis por máquina e a garantia de interoperabilidade básica. Há esforços para alinhar as políticas com aspectos fundamentais da legislação de sua jurisdição.',
        capabilities:
          'Ferramentas são adotadas para apoiar a publicação de dados, coleta de feedback e monitoramento básico do uso e reutilização dos dados. Há um início de disponibilização em formatos legíveis por máquina.',
        improvement:
          'Expandir os programas de treinamento para incluir metodologias de planejamento e priorização. Adotar ferramentas que apoiem fluxos de publicação, versionamento e automação de licenciamento. Iniciar o alinhamento das práticas com padrões reconhecidos de dados abertos.',
      },
      {
        title: 'Nível 3: Definido – Estruturado e Padronizado',
        content:
          'Além das melhorias dos níveis anteriores, a publicação de dados abertos passa a ser sustentada por processos padronizados em toda a organização e alinhada com os objetivos estratégicos.',
        people:
          'As equipes são treinadas e participam consistentemente de iniciativas de dados abertos em diferentes departamentos.',
        policies:
          'As políticas são abrangentes e incorporam padrões nacionais ou internacionais de dados abertos. O planejamento, versionamento e a garantia de qualidade dos metadados e dos dados abertos publicados fazem parte do ciclo de vida dos dados. Essas políticas garantem a conformidade explícita com as normas legais e normativas aplicáveis à instituição.',
        capabilities:
          'A infraestrutura permite publicação contínua de dados abertos em formatos abertos e legíveis por máquina, rastreamento, versionamento e integração com sistemas externos, garantindo a localizabilidade dos conjuntos de dados.',
        improvement:
          'Definir indicadores (KPIs) para medir impacto, reutilização, engajamento da comunidade e conformidade com os princípios de dados abertos. Realizar revisões periódicas de políticas para garantir conformidade com licenciamento e padrões. Promover colaboração interna e planejamento de conjuntos de dados futuros, com foco em publicizar a iniciativa de dados abertos.',
      },
      {
        title: 'Nível 4: Gerenciado – Medido e Preditivo',
        content:
          'Além das melhorias dos níveis anteriores, os processos de dados abertos são monitorados continuamente e refinados com base em métricas. O planejamento estratégico e a coordenação entre departamentos estão consolidados.',
        people:
          'As equipes contribuem ativamente em ciclos de feedback e utilizam dashboards para monitorar o desempenho dos dados abertos.',
        policies:
          'As políticas são atualizadas regularmente com base em desempenho, feedback e evolução dos padrões, incorporando proativamente as alterações nas normas regulatórias e normativas aplicáveis à organização.',
        capabilities:
          'A infraestrutura automatizada dá suporte à publicação de dados abertos em tempo real, controle de versões avançado e relatórios detalhados de uso, impacto e engajamento.',
        improvement:
          'Expandir análises preditivas para antecipar demandas por dados, quando necessário. Aprimorar mecanismos de colaboração para priorização estratégica de conjuntos de dados. Reforçar o alinhamento da governança por meio de atualizações de políticas orientadas por feedback.',
      },
      {
        title: 'Nível 5: Otimizado – Inovação e Melhoria Contínua',
        content:
          'Além das melhorias dos níveis anteriores, os dados abertos são usados como ativo estratégico para impulsionar inovação, engajamento público e transparência sistêmica.',
        people:
          'As equipes promovem uma cultura de abertura e inovação baseada em dados tanto internamente quanto em redes externas.',
        policies:
          'As políticas são dinâmicas, com princípio de abertura por padrão ("open-by-default"), quando possível. Elas são continuamente comparadas e adaptadas aos padrões globais aplicáveis e às expectativas dos clientes dos dados, garantindo a conformidade autônoma e preditiva com a legislação e as normas exigidas para a organização, e impulsionando a ética no uso de dados.',
        capabilities:
          'A infraestrutura sustenta estratégias adaptativas de publicação, integração em tempo real de dados e APIs abertas com garantias claras de licenciamento e suporte à rastreabilidade completa e auditabilidade das informações sobre o uso e impacto dos dados abertos. As ferramentas de dados abertos são otimizadas para auto-serviço e auto-organização da comunidade.',
        improvement:
          'Fomentar parcerias para inovar com dados abertos. Investir em ferramentas adequadas para automação, análise de impacto e engajamento com o público. Evoluir continuamente a governança com base no feedback da sociedade e da organização.',
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
            <li><Link to="/infrastructure">Infraestrutura para Dados</Link></li>
            <li>
              <NavLink to="/open" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Dados Abertos
              </NavLink>
            </li>
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
