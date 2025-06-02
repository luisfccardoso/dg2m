import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div className="main-page">
      <header className="main-header">
        <h1>Participe da Pesquisa sobre Governança de Dados</h1>
        <p>
          <strong>
            Desde já, agradeço muito pela sua colaboração!
          </strong>
        </p>
      </header>

      <section>
        <div class="button-wrapper">
          <a class="button-menu" href="https://forms.gle/4HKNDKwBBEJxAq7r6" target="_blank" rel="noopener noreferrer">
            Preencha o formulário clicando aqui
          </a>
          <a class="button-menu" href="https://calendar.app.google/92yQ3cSuJvuKqD626" target="_blank" rel="noopener noreferrer">
            Marque uma reunião individual comigo
          </a>
          <a class="button-menu" href="https://calendar.app.google/363N2dHfjYC1Y9YR8" target="_blank" rel="noopener noreferrer">
            Sessão online em grupo, do dia 04/06/25 às 19h
          </a>
          <a class="button-menu" href="mailto:luisfilipe.tec@gmail.com" target="_blank" rel="noopener noreferrer">
            Ou fale comigo em luisfilipe.tec@gmail.com
          </a>
        </div>
      </section>

      
      <section className="main-section" id="overview">
        <h2>Apresentação</h2>

        <p>
          Esta pesquisa é parte do <strong>Mestrado Profissional em Computação Aplicada da Universidade de Brasília (UnB)</strong>, 
          orientada pela professora <strong>Edna Canedo</strong>. 
          O objetivo é validar uma proposta de <strong>Modelo de Maturidade da Governança de Dados (DG2M)</strong>, 
          desenvolvida ao longo da minha trajetória acadêmica.
        </p>

        <p>
          O survey é direcionado a profissionais que atuam com dados, governança, tecnologia da informação e áreas correlatas, 
          e busca reunir percepções e feedbacks sobre o modelo proposto. Todas as respostas são sigilosas e utilizadas exclusivamente para fins acadêmicos.
        </p>
      </section>
    </div>

  );
};

export default Main;
