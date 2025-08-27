import React from 'react';
import ProjectCard from './components/ProjectCard';
import Header from './components/Header'; 
import ContactForm from './components/ContactForm';
import './App.css';

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

        {/* Seção Sobre Mim aprimorada */}
        <section
          id="about"
          style={{
            background: "#fff",
            borderRadius: "10px",
            padding: "2rem",
            margin: "2rem auto",
            maxWidth: 700,
            boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
            display: "flex",
            alignItems: "center",
            gap: "2rem"
          }}
        >
          <img
            src="https://ui-avatars.com/api/?name=Roque&background=0D8ABC&color=fff&size=128"
            alt="Avatar de Roque"
            style={{
              borderRadius: "50%",
              width: 120,
              height: 120,
              objectFit: "cover",
              border: "4px solid #0D8ABC"
            }}
          />
          <div>
            <h2 style={{ marginTop: 0 }}>Sobre Mim</h2>
            <p>
              Olá! Meu nome é <strong>Roque</strong>. Sou estudante e desenvolvedor apaixonado por tecnologia, especialmente por desenvolvimento web com <b>React</b> e <b>Java Spring</b>.<br />
              Gosto de aprender coisas novas, criar projetos práticos e compartilhar conhecimento.<br />
              Estou sempre buscando evoluir e contribuir em equipes de tecnologia!
            </p>
            <ul style={{ margin: "1rem 0 0 1rem" }}>
              <li>🎓 Estudante de Ciência da Computação</li>
              <li>💻 Foco em Frontend e Backend</li>
              <li>🌱 Aprendendo novas tecnologias sempre</li>
            </ul>
          </div>
        </section>

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

        <section id="contact">
          <h2>Contato</h2>
          <ContactForm /> 
        </section>
      </main>
    </>
  );
}

export default App;