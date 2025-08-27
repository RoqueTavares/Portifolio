// src/App.jsx
import React from 'react';
import ProjectCard from './components/ProjectCard';
import Header from './components/Header'; 

function App() {

  const projectsData = [
    {
      id: 1,
      title: "Meu Primeiro Projeto",
      description: "Uma aplicação simples para gerenciar tarefas.",
      link: "https://github.com/RoqueTavares/workshorp-springboot3-jpa"
    },
    {
      id: 2,
      title: "Blog Pessoal",
      description: "Um blog feito com React para praticar.",
      link: "https://github.com/RoqueTavares/API_ITP.git"
    }
  ];

  return (
    <>
      <Header />
      <main>
        <h1>Bem-vindo ao Meu Portfólio</h1>
        <section id="projects">
          <h2>Meus Projetos</h2>
          {projectsData.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;