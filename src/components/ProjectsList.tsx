import { projects } from "../common/constants/projects";

const ProjectsList: React.FC = (): JSX.Element => {
  return (
    <ul className="projects">
      {projects.map((project, index) => (
        <li
          className="project"
          key={index}
        >
          <a
            className="project__link"
            href={`/project:${index}`}
          >
            <img
              className="project__img"
              src={project.images && project.images[0]}
              alt={`${project.name} image`}
            />
            <h3 className="project__title">{project.name}</h3>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;
