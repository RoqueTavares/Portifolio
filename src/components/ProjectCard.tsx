import React from "react";

function ProjectCard(props: any) {
    return(
        <div className="project-card">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">Ver Projetos</a>
        </div>
    );
}

export default ProjectCard;