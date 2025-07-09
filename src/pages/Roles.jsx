import React from 'react';
import './Main.css';

const Roles = () => {
  return (
    <div className="main-page">
      <header className="main-header">
        <h1>Principais Papéis no DG2M</h1>
        <p>Compreendendo Responsabilidades no Modelo de Maturidade</p>
      </header>

      <section className="main-section">
        <h2>Visão Geral</h2>
        <p>
          Uma governança de dados eficaz requer papéis e responsabilidades definidos.
          Cada papel contribui de forma única para o sucesso das iniciativas de governança,
          garantindo que os dados sejam gerenciados como um ativo importante na organização.
        </p>
      </section>

     <section className="main-section">
      <h2>Área de Atuação: Estratégia e Liderança</h2>
        <p>
          <strong>Patrocinadores(as) Executivos(as) / Alta Administração</strong> definem a visão e a estratégia geral da organização para os dados. Fornecem o patrocínio, endosso e garantem a alocação de recursos (financeiros, humanos, tecnológicos) necessários para as iniciativas de governança de dados, reforçando a importância da cultura de dados e da responsabilidade em toda a organização.
        </p>
        <p>
          No nível estratégico, o <strong>Chief Data Officer (CDO) / Diretor(a) de Governança de Dados</strong> lidera a estratégia de dados da organização, alinhando as iniciativas de dados aos objetivos de negócio. É o principal responsável pela implementação e supervisão do programa de governança de dados. Atua como elo entre a alta administração, as áreas de negócio e a tecnologia, e frequentemente interage com órgãos reguladores.
        </p>
        <p>
          Os <strong>Comitês de Governança de Dados (ou Comitês Diretivos de Dados)</strong> definem políticas de alto nível, padrões, processos e diretrizes de governança de dados. Revisam e aprovam iniciativas estratégicas de dados, resolvem conflitos de prioridade e responsabilidade e monitoram o progresso do programa de governança, representando diversas áreas da organização.
        </p>
        <p>
          O <strong>Escritório de Governança de Dados (EGD / DGO)</strong> apoia o CDO e o Comitê de Governança, sendo responsável pela operacionalização do programa de governança, incluindo a documentação de políticas, orquestração de atividades, comunicação, monitoramento de métricas de governança e mediação de conflitos. Atua como ponto central para o programa de governança de dados.
        </p>
      </section>

      <section className="main-section">
        <h2>Área de Atuação: Gestão e Curadoria de Dados</h2>
        <p>
          <strong>Curadores(as) de Dados (Data Stewards)</strong> gerenciam a qualidade, as definições (metadados de negócio) e o ciclo de vida dos dados dentro de um domínio de negócio específico. Traduzem requisitos de negócio em regras de dados, monitoram a conformidade com essas regras e trabalham para resolver problemas de qualidade de dados. São responsáveis por gerenciar o catálogo de dados, glossário de negócios e outras documentações relacionadas aos metadados, assegurando que as definições de dados sejam claras, consistentes e acessíveis. Atuam como guardiões(ãs) dos dados e ponte entre as áreas de negócio e a tecnologia, facilitando a descoberta e o entendimento dos ativos de dados pela organização.
        </p>
        <p>
          <strong>Gerentes de Equipes de Dados / Gestores(as) de Dados</strong> coordenam equipes e projetos de dados, gerenciando recursos, cronogramas e entregas. Asseguram que as práticas de governança de dados sejam integradas aos processos de desenvolvimento e operação de dados.
        </p>
      </section>

      <section className="main-section">
        <h2>Área de Atuação: Operações de Dados</h2>
        <p>
          <strong>Usuários(as)/Operadores(as) de Dados (Data Creators/Operators)</strong> são responsáveis pela criação, inserção, atualização e manutenção diária de dados em sistemas operacionais e ferramentas de negócio. Devem seguir estritamente as políticas e diretrizes de qualidade de dados, contribuindo fundamentalmente para a integridade dos dados na origem. Inclui colaboradores(as) que geram ou inserem dados no seu dia a dia.
        </p>
      </section>

      <section className="main-section">
        <h2>Área de Atuação: Engenharia e Infraestrutura de Dados</h2>
        <p>
          O <strong>Engenheiro(a) de Dados (Data Engineer)</strong> projeta, constrói, otimiza e mantém a infraestrutura de dados (como, data lakes, data warehouses, bancos de dados, etc.) e os pipelines de dados (ETL/ELT). Garante a ingestão, transformação, armazenamento e disponibilidade dos dados em escala, colaborando com cientistas e analistas para atender às suas necessidades de acesso e processamento de dados.
        </p>
        <p>
          <strong>Especialistas em TI e Bancos de Dados (DBAs e Administradores(as) de Sistemas)</strong> garantem o desempenho, a disponibilidade, a segurança física e lógica da infraestrutura de dados e dos sistemas de banco de dados. Realizam backups, otimizam consultas e gerenciam acessos. Oferecem suporte essencial aos(às) Engenheiros(as) e Curadores(as) de Dados.
        </p>
        <p>
          <strong>Especialistas em Cybersecurity (Segurança Cibernética)</strong> focam na proteção dos ativos de dados contra acessos não autorizados, perdas ou ataques cibernéticos. Desenvolvem e implementam políticas de segurança da informação, realizam auditorias de segurança e respondem a incidentes, garantindo a confidencialidade, integridade e disponibilidade dos dados.
        </p>
      </section>

      <section className="main-section">
        <h2>Área de Atuação: Análise e Consumo de Dados</h2>
        <p>
          <strong>Consumidores(as) de Dados</strong> utilizam os produtos de dados (como, relatórios, dashboards, modelos e aplicações) para análise, tomada de decisão e operações de negócio. Fornecem feedback valioso sobre a usabilidade, relevância e qualidade dos dados, orientando as prioridades da governança e melhorias nos sistemas.
        </p>
        <p>
          <strong>Analistas de Dados e Cientistas de Dados</strong> analisam, interpretam, modelam e visualizam dados para gerar análises, relatórios e documentos que informam e fortalecem as estratégias de negócio. Criam e validam modelos preditivos e descritivos. São consumidores(as) avançados(as) de dados e frequentemente criam novos produtos de dados para outros(as) consumidores(as).
        </p>
      </section>

      <section className="main-section">
        <h2>Área de Atuação: Conformidade e Governança Legal</h2>
        <p>
          O <strong>Encarregado(a) de Proteção de Dados (DPO)</strong> foca no estrito cumprimento da LGPD (e outras leis de proteção de dados relevantes). Atua como ponto de contato para autoridades reguladoras e titulares dos dados, monitora a conformidade interna e externa e aconselha a organização sobre as obrigações de proteção de dados.
        </p>
        <p>
          <strong>Especialistas em Compliance e Auditoria</strong> garantem que a organização esteja em conformidade com as leis, regulamentos e padrões internos e externos aplicáveis ao uso e gestão de dados. Realizam auditorias regulares para identificar riscos e lacunas de conformidade, e ajudam a desenvolver planos de ação corretivos.
        </p>
      </section>

      <section className="main-section">
        <h2>Área de Atuação: Habilitação e Transformação Cultural</h2>
        <p>
          <strong>Data Product Managers / Product Owners</strong> lideram o ciclo de vida de produtos de dados (como, dashboards, pipelines de dados específicos, modelos de IA), desde a concepção até a entrega e manutenção. Atuam como ponte entre as necessidades do negócio e as equipes técnicas, garantindo que os produtos de dados agreguem valor e atendam aos padrões de governança. Reconhece a tendência de "produtos de dados".
        </p>
        <p>
          <strong>Agentes de Cultura de Dados / Change Leaders</strong> focados em disseminar a cultura de dados na empresa, promovendo a conscientização sobre a importância dos dados, boas práticas de governança, ética no uso de dados e a responsabilidade compartilhada. Desenvolvem programas de treinamento e comunicação para fomentar uma mentalidade orientada a dados em todos os níveis da organização.
        </p>
      </section>

      <section className="main-section">
        <h2>Integração de Papéis ao Longo dos Níveis de Maturidade</h2>
        <p>
          À medida que a organização evolui, esses papéis tornam-se cada vez mais definidos, integrados e fortalecidos, contribuindo para uma cultura de dados mais ágil, ética e orientada por valor.
        </p>
      </section>
    </div>

  );
};

export default Roles;